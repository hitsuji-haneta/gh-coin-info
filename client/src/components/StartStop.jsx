import React from 'react';
import styled from 'styled-components';
import useCurrentTask from '../hooks/useCurrentTask';
import togglConfig from '../toggl-config.json';

const apiToken = togglConfig.apiToken;
if (!apiToken) throw Error('Set your api token to toggle-config.json');

const encodedToken = btoa(`${apiToken}:api_token`);
const headers = {
  Authorization: `Basic ${encodedToken}`,
  'Content-Type': 'application/json'
};

const StartButton = styled.button`
  background-color: #009193;
  font-size: 1em;
  color: white;
  width: 30vh;
  margin-top: 100px;
  border-radius: 20px;
`;

const StopButton = styled.button`
  background-color: #FF3B80;
  font-size: 1em;
  color: white;
  width: 30vh;
  margin-top: 100px;
  border-radius: 20px;
`;

export const stopTimer = async (entryId, setCurrentState) => {
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

export const startTimer = async (setCurrentState, title) => {
  const uri = `https://us-central1-toggl-nesthub-256523.cloudfunctions.net/togglProxy/api/v8/time_entries/start`;
  const data = {
    time_entry: {
      description: title,
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

const StartStop = ({ isRunning, setCurrentState, entryId, title }) => {
  if (isRunning)
    return (
      <StopButton onClick={() => stopTimer(entryId, setCurrentState)}>stop</StopButton>
    );
  return <StartButton onClick={() => startTimer(setCurrentState, title)}>start</StartButton>;
};

export default StartStop;
