/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      "links.papareact.com",
      "cdn.theculturetrip.com",
      "cdn.vox-cdn.com",
      "jsonkeeper.com",
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoibWlyemF6b2hhaWIiLCJhIjoiY2xlZ3VqYTBnMGlyMDN2bGQwYmZyMHdpeiJ9.tkPpuq274E-WfNeAxMyEIA",
  },
  reactStrictMode: true,
};
