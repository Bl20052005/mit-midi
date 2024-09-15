module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://model-8w6yyp2q.api.baseten.co/production/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        // Matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // Allow all origins
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};
