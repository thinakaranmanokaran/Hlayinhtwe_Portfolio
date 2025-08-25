import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: "export", // Important: enables static export
  basePath: "/Hlayinhtwe_Portfolio", // repo name
  images: {
    unoptimized: true, // disables next/image optimization for static export
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
