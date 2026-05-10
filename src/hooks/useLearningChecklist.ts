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
  // TODO 5: ReactからuseStateをimportする
  // TODO 6: 固定配列ではなく useState<LearningChecklistItem[]>(starterItems) に置き換える
  const items = starterItems;

  // TODO 7: idが一致した項目のisDoneを切り替える
  function handleToggleItem(itemId: string) {
    return itemId;
  }

  const completedCount = items.filter((item) => item.isDone).length;

  return {
    items,
    completedCount,
    handleToggleItem,
  };
}
