const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
    // Add your module export properties here
};

const SentryWebpackOptions = {
    silent: true, // Use a comma instead of a semicolon
};

module.exports = withSentryConfig(moduleExports, SentryWebpackOptions);