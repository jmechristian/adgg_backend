module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2b86354db9797fc724e20b16e8ab142a'),
  },
});
