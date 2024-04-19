import React, { useState } from "react";

export interface SortState {
  key: string | null;
  isAsc: boolean;
}

export const useSortData = <T extends Record<string, any>>(
  data: T[] | undefined
) => {
  const [sortKey, setSortKey] = useState<SortState>({ key: null, isAsc: true });

  const sortDataFunc = (key: string) => {
    if (sortKey.key === key) {
      setSortKey({ key, isAsc: !sortKey.isAsc });
    } else {
      setSortKey({ key, isAsc: true });
    }
  };

  const sortedData = React.useMemo(() => {
    if (!data || sortKey.key === null) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortKey.key!]; // Non-null assertion operator, because we check nullity above
      const bValue = b[sortKey.key!];

      if (aValue < bValue) return sortKey.isAsc ? -1 : 1;
      if (aValue > bValue) return sortKey.isAsc ? 1 : -1;
      return 0;
    });
  }, [data, sortKey]);

  return { sortedData, sortDataFunc, sortKey };
};
