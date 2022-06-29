module.exports = ({ env }) => ({
  "content-export-import": {
    enabled: true,
    resolve: "./src/plugins/content-export-import", // path to plugin folder
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: env("DO_SPACE_ACCESS_KEY"),
        secret: env("DO_SPACE_SECRET_KEY"),
        endpoint: env("DO_SPACE_ENDPOINT"),
        space: env("DO_SPACE_BUCKET"),
        directory: env("DO_SPACE_DIRECTORY"),
      },
    },
  },
});
