module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd9febeb33a5cc18f770544adb54e96f8'),
  },
});
