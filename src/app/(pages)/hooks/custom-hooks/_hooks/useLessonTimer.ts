export function useLessonTimer() {
  // TODO 1: ReactからuseStateをimportする
  // TODO 2: 固定値ではなく useState<number>(0) で学習時間を持つ
  const elapsedMinutes = 0;

  // TODO 3: elapsedMinutesを1増やす処理に置き換える
  function handleAddMinute() {
    return elapsedMinutes;
  }

  // TODO 4: elapsedMinutesを0へ戻す処理に置き換える
  function handleResetTimer() {
    return elapsedMinutes;
  }

  return {
    elapsedMinutes,
    handleAddMinute,
    handleResetTimer,
  };
}
