import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // basePath: '/klochkov-next',
  // assetPrefix: '/klochkov-next/',
  // output: 'export', // для статического экспорта
};

export default nextConfig;


//то, что ниже предложено claude

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   },
//   // Если будете деплоить на GitHub Pages
//   // basePath: '/klochkov',
//   // assetPrefix: '/klochkov/',
//   // output: 'export', // для статического экспорта
// }
