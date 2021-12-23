import dotenv from "dotenv";

dotenv.config();

module.exports = {
  baseUrl: "https://api.kucoin.com",
  apiAuth: {
    key: process.env.KEY,
    secret: process.env.SECRET,
    passphrase: process.env.PASSPHRASE,
  },
  authVersion: 2,
};
