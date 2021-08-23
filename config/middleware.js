module.exports = {
  load: {
    before: ["timer", "responseTime", "logger", "cors", "responses", "gzip"],
    after: ["parser", "router"],
  },
  settings: {
    cors: {
      enabled: true,
      origin: ["http://localhost:3000", "http://localhost:1337"],
      headers: "*",
    },
  },
};
