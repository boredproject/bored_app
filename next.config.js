const { default: next } = require('next')
const { parsed: localEnv } = require('dotenv').config();

/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['bored-bucket.s3.eu-west-3.amazonaws.com'],
    },
    env: {
        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: localEnv.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      },
};

module.exports = nextConfig;
