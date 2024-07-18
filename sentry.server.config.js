// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ef7f9414d4b13b6aee8fc0e5cfeb6b11@o4507618980134912.ingest.us.sentry.io/4507624312733696",

// Adjust this value in production, or use tracesSampler for greater control
tracesSampleRate: 1,

// Setting this option to true will print useful information to the console while you're setting up Sentry.
debug: false,

// Uncomment the line below to enable Spotlight (https://spotlightjs.com)
// spotlight: process.env.NODE_ENV === 'development',

});
