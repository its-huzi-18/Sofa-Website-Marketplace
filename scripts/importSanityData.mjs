import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import fetch from 'node-fetch'; // Required to fetch images for upload

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  // myApi:process.env.myApi,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
  requestTimeout: 60000,
});

async function uploadImage(imageUrl) {
  try {
    // Fetch the image as a buffer
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const imageBuffer = await response.arrayBuffer();

    // Upload the image to Sanity
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: imageUrl.split('/').pop(), // Use the image's original filename
    });

    return asset; // Return the uploaded asset details
  } catch (error) {
    console.error(`Error uploading image: ${error.message}`);
    return null; // Return null if the image upload fails
  }
}

async function importData() {
  try {
    // Fetch data from the API
    const { data } = await axios.get("https://template-0-beta.vercel.app/api/product")

    // Insert each product into Sanity
    for (const product of data) {
      // Upload the image to Sanity
      const uploadedImage = await uploadImage(product.imagePath);

      if (!uploadedImage) {
        console.warn(`Skipping product "${product.name}" due to image upload failure.`);
        continue;
      }

      // Create the product document in Sanity
      await client.create({
        _type: 'product',
        id: product.id,
        name: product.name,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: uploadedImage._id, // Reference the uploaded image
          },
        },
        price: parseFloat(product.price),
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      });

      console.log(`Product "${product.name}" inserted successfully.`);
    }

    console.log('All products inserted successfully!');
  } catch (error) {
    console.error('Failed to fetch or insert data:', error.message);
  }
}

// Run the importData function
importData();
