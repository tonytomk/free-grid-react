import { useState } from 'react';
import { Column } from '../types';

export function useColumnVisibility<T>(columns: Column<T>[], selectable?: boolean) {
  const [visibleColumnKeys, setVisibleColumnKeys] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    if (selectable) initial.add('__selection');
    columns.forEach((col) => {
      if (!col.defaultHidden) initial.add(col.key as string);
    });
    return initial;
  });

  return { visibleColumnKeys, setVisibleColumnKeys };
}
