'use client';

import { createContext, useContext, type ReactNode } from 'react';

export type LearningSessionState = {
  focusMinutes: number;
  completedTasks: number;
  statusText: string;
};

type LearningSessionContextValue = {
  state: LearningSessionState;
  totalScore: number;
  handleAddMinute: () => void;
  handleCompleteTask: () => void;
  handleResetSession: () => void;
};

const fixedState: LearningSessionState = {
  focusMinutes: 0,
  completedTasks: 0,
  statusText: 'まだ開始していません',
};

const LearningSessionContext = createContext<LearningSessionContextValue | null>(null);

export function LearningSessionProvider({ children }: { children: ReactNode }) {
  // TODO 1: ReactからuseReducerをimportする
  // TODO 2: SessionAction型を定義する
  // TODO 3: learningSessionReducerを作る
  // TODO 4: fixedStateをuseReducerへ置き換える
  const state = fixedState;
  const totalScore = state.focusMinutes + state.completedTasks * 5;

  // TODO 5: dispatch({ type: 'add-minute' }) を呼ぶ
  function handleAddMinute() {
    return state.focusMinutes;
  }

  // TODO 6: dispatch({ type: 'complete-task' }) を呼ぶ
  function handleCompleteTask() {
    return state.completedTasks;
  }

  // TODO 7: dispatch({ type: 'reset' }) を呼ぶ
  function handleResetSession() {
    return state;
  }

  // Providerは、この内側のchildrenへvalueを配るための部品です。
  // childrenは<LearningSessionProvider>...</LearningSessionProvider>で囲まれた中身です。
  return (
    <LearningSessionContext.Provider
      value={{
        state,
        totalScore,
        handleAddMinute,
        handleCompleteTask,
        handleResetSession,
      }}
    >
      {children}
    </LearningSessionContext.Provider>
  );
}

export function useLearningSession() {
  const context = useContext(LearningSessionContext);

  if (!context) {
    throw new Error('useLearningSessionはLearningSessionProviderの内側で使います');
  }

  return context;
}
