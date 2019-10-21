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

app.intent('start', (conv, { title }) => {
  conv.ask('タイマーを開始します');
  conv.ask(
    new HtmlResponse({
      url: 'https://toggl-nesthub.web.app/',
      data: {
        type: 'start',
        title
      }
    })
  );
});

app.intent('stop', conv => {
  conv.ask('タイマーを停止します');
  conv.ask(
    new HtmlResponse({
      url: 'https://toggl-nesthub.web.app/',
      data: {
        type: 'stop'
      }
    })
  );
});

exports.toggleNestHub = functions.https.onRequest(app);
