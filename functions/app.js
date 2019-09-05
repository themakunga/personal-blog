require('dotenv').config();
const twit = require('twit');

const {
  CONSUMER_KEY: consumer_key,
  CONSUMER_SECRET: consumer_secret,
  ACCESS_TOKEN: access_token,
  ACCESS_SECRET: access_token_secret,
} = process.env;

const config = {
  consumer_key,
  consumer_secret,
  access_token,
  access_token_secret
};

const tw = new twit(config);

const message = {
  status: 'Hay una nueva actualizacion en mi blog, puedes verlo en https://nicolasblog.web.app ',
};

tw.post('statuses/update', message, (err, data, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log('It\'s works!!');
  }
});
