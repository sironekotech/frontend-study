import { useState } from 'react';

export type LearningChecklistItem = {
  id: string;
  label: string;
  isDone: boolean;
};

const starterItems: LearningChecklistItem[] = [
  {
    id: 'name',
    label: 'custom hookはuseで始める',
    isDone: false,
  },
  {
    id: 'logic',
    label: 'custom hookは処理をまとめる',
    isDone: false,
  },
  {
    id: 'view',
    label: 'コンポーネントは画面を担当する',
    isDone: false,
  },
];

export function useLearningChecklist() {
  const [items, setItems] = useState<LearningChecklistItem[]>(starterItems);

  function handleToggleItem(itemId: string) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              isDone: !item.isDone,
            }
          : item,
      ),
    );
  }

  const completedCount = items.filter((item) => item.isDone).length;

  return {
    items,
    completedCount,
    handleToggleItem,
  };
}
