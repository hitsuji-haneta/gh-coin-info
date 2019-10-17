import { useState, useEffect } from 'react';

import togglConfig from '../toggl-config.json';

const apiToken = togglConfig.apiToken;
if (!apiToken) throw Error('Set your api token to toggle-config.json');
const uri = 'https://www.toggl.com/api/v8/time_entries/current';

const useCurrentTask = () => {
  const [isRunning, setRunning] = useState(false);
  const [duration, setDuration] = useState(0);
  const [description, setDescription] = useState();
  const [entryId, setEntryId] = useState();

  useEffect(() => {
    console.log('fetch start');
    const encodedToken = btoa(`${apiToken}:api_token`);
    const fetchData = async () => {
      const res = await fetch(uri, {
        headers: {
          Authorization: `Basic ${encodedToken}`
        }
      });
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
        setInterval(updateDuration, 1000);
      } else {
        setRunning(false);
      }
    };
    fetchData();
  }, []);
  return { isRunning, setRunning, duration, description, entryId };
};

export default useCurrentTask;
