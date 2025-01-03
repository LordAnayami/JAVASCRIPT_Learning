/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "lordanayami",
        mongodb_password: "password",
        mongodb_clustername: "cluster0",
        mongodb_database: "meetup-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "lordanayami",
      mongodb_password: "password",
      mongodb_clustername: "cluster0",
      mongodb_database: "meetup",
    },
  };
};
