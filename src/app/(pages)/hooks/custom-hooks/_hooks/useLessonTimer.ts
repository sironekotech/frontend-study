import { useState } from 'react';

export function useLessonTimer() {
  const [elapsedMinutes, setElapsedMinutes] = useState<number>(0);

  function handleAddMinute() {
    setElapsedMinutes((currentMinutes) => currentMinutes + 1);
  }

  function handleResetTimer() {
    setElapsedMinutes(0);
  }

  return {
    elapsedMinutes,
    handleAddMinute,
    handleResetTimer,
  };
}
