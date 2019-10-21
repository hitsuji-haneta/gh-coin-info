import React from 'react';
import useCurrentTask from '../hooks/useCurrentTask';
import togglConfig from '../toggl-config.json';
const apiToken = togglConfig.apiToken;
if (!apiToken) throw Error('Set your api token to toggle-config.json');

const encodedToken = btoa(`${apiToken}:api_token`);
const headers = {
  Authorization: `Basic ${encodedToken}`,
  'Content-Type': 'application/json'
};

const stopTimer = async (entryId, setCurrentState) => {
  const uri = `https://us-central1-toggl-nesthub-256523.cloudfunctions.net/togglProxy/api/v8/time_entries/${entryId}/stop`;
  const res = await fetch(uri, {
    method: 'PUT',
    headers
  });
  const resJson = await res.json();
  const data = resJson.data;
  console.log(data);
  setCurrentState('stop');
};

const startTimer = async (setCurrentState) => {
  const uri = `https://us-central1-toggl-nesthub-256523.cloudfunctions.net/togglProxy/api/v8/time_entries/start`;
  const data = {
    time_entry: {
      description: 'toggl managerの開発',
      created_with: 'NestHub',
      pid: ''
    }
  };
  const res = await fetch(uri, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  });
  const resJson = await res.json();
  const resData = resJson.data;
  console.log(resData);
  setCurrentState('running');
};

const StartStop = ({ isRunning, setCurrentState, entryId }) => {
  if (isRunning)
    return (
      <button onClick={() => stopTimer(entryId, setCurrentState)}>stop</button>
    );
  return <button onClick={() => startTimer(setCurrentState)}>start</button>;
};

export default StartStop;
