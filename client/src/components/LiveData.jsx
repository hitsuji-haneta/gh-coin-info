import React from 'react';
import useCurrentTask from '../hooks/useCurrentTask';
import StartStop from './StartStop';

const zeroPadding = num => {
  return ('00' + num).slice(-2);
};

const Timer = ({ isRunning, duration, description }) => {
  if (!isRunning) return <></>;
  const date = new Date(duration);
  const timeString = `
    ${zeroPadding(date.getHours() - 9)}:
    ${zeroPadding(date.getMinutes())}:
    ${zeroPadding(date.getSeconds())}
  `;
  return (
    <>
      <p>{description}</p>
      <p>{timeString}</p>
    </>
  );
};

const LiveData = () => {
  const currentTask = useCurrentTask();
  return (
    <>
      <Timer
        isRunning={currentTask.isRunning}
        duration={currentTask.duration}
        description={currentTask.description}
      />
      <StartStop
        entryId={currentTask.entryId}
        isRunning={currentTask.isRunning}
        setRunning={currentTask.setRunning}
      />
    </>
  );
};

export default LiveData;
