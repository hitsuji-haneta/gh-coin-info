import React from 'react';

import togglConfig from '../toggl-config.json';
const apiToken = togglConfig.apiToken;
if (!apiToken) throw Error('Set your api token to toggle-config.json');

const stopTimer = async entryId => {
  const encodedToken = btoa(`${apiToken}:api_token`);
  const uri = `https://www.toggl.com/api/v8/time_entries/${entryId}/stop`;
  const res = await fetch(uri, {
    method: 'PUT',
    headers: {
      Authorization: `Basic ${encodedToken}`,
      'Content-Type': 'application/json'
    }
  });
  const resJson = await res.json();
  const data = resJson.data;
  console.log(data);
};

const StartStop = ({ isRunning, entryId }) => {
  if (isRunning)
    return <button onClick={() => stopTimer(entryId)}>stop</button>;
  return <></>;
};

export default StartStop;
