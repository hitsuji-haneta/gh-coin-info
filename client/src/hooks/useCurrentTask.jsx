import { useState, useEffect } from 'react';

import togglConfig from '../toggl-config.json';

const apiToken = togglConfig.apiToken;
if (!apiToken) throw Error('Set your api token to toggle-config.json');
const uri = 'https://us-central1-toggl-nesthub-256523.cloudfunctions.net/togglProxy/api/v8/time_entries/current';

const useCurrentTask = currentState => {
  const [isRunning, setRunning] = useState(false);
  const [duration, setDuration] = useState(0);
  const [description, setDescription] = useState();
  const [entryId, setEntryId] = useState();

  useEffect(() => {
    console.log('fetch start');
    const encodedToken = btoa(`${apiToken}:api_token`);
    let timer;
    const fetchData = async () => {
      const res = await fetch(uri, {
        headers: {
          Authorization: `Basic ${encodedToken}`
        }
      });
      console.log(res);
      const resJson = await res.json();
      const data = resJson.data;
      console.log(data);
      if (data) {
        setRunning(true);
        setDescription(data.description);
        setEntryId(data.id);
        const startTime = new Date(data.start);
        const updateDuration = () => {
          const now = new Date();
          const durationDate = new Date(now.getTime() - startTime.getTime());
          setDuration(durationDate.getTime());
        };
        timer = setInterval(updateDuration, 1000);
      } else {
        setRunning(false);
        setDuration(0);
      }
    };
    fetchData();
    return () => {
      console.log('clear');
      clearInterval(timer);
    };
  }, [currentState]);
  return { isRunning, setRunning, duration, description, entryId };
};

export default useCurrentTask;
