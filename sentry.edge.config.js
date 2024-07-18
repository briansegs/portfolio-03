import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ef7f9414d4b13b6aee8fc0e5cfeb6b11@o4507618980134912.ingest.us.sentry.io/4507624312733696",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
