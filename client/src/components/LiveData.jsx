import React from 'react';
import useCurrentTask from '../hooks/useCurrentTask';
import StartStop from './StartStop';

const zeroPadding = num => {
  return ('00' + num).slice(-2);
};

const LiveData = () => {
  const currentTask = useCurrentTask();
  if (!currentTask.isRunning) return <></>;
  const date = new Date(currentTask.duration);
  const timeString = `
    ${zeroPadding(date.getHours() - 9)}:
    ${zeroPadding(date.getMinutes())}:
    ${zeroPadding(date.getSeconds())}
  `;
  return (
    <>
      <p>{currentTask.description}</p>
      <p>{timeString}</p>
      <StartStop
        entryId={currentTask.entryId}
        isRunning={currentTask.isRunning}
        setRunning={currentTask.setRunning}
      />
    </>
  );
};

export default LiveData;
