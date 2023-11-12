const { default: next } = require('next')

/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['bored-bucket.s3.eu-west-3.amazonaws.com'],
    },
};

module.exports = nextConfig;
