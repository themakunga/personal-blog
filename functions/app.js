require('dotenv').config();
const twit = require('twit');

const {
  CONSUMER_KEY: consumer_key,
  CONSUMER_SECRET: consumer_secret,
  ACCESS_TOKEN: access_token,
  ACCESS_SECRET: access_token_secret,
  TRAVIS_COMMIT_MESSAGE: msg,
} = process.env;

const commit = (msg !== null) ? msg : null;
const config = {
  consumer_key,
  consumer_secret,
  access_token,
  access_token_secret
};
const date = new Date().toUTCString(-4);
const tw = new twit(config);

const message = {
  status: 'Actualizacion en el blog: '+msg+', puedes verlo en https://nicolasblog.web.app #nicolasblog #blogging #blog'+date,
};

tw.post('statuses/update', message, (err, data, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log('It\'s works!!');
  }
});
