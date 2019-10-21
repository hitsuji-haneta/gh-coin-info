'use strict';

const { dialogflow, HtmlResponse } = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({ debug: true });

app.intent('welcome', conv => {
  conv.ask('トグルを開きます');
  conv.ask(
    new HtmlResponse({
      url: 'https://toggl-nesthub.web.app/'
    })
  );
});

exports.toggleNestHub = functions.https.onRequest(app);
