import React, { useState, useMemo } from "react";

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

  const sortedData = useMemo(() => {
    if (!data || sortKey.key === null) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortKey.key!];
      const bValue = b[sortKey.key!];

      // Check if the values are numbers
      const aValueIsNumber = !isNaN(Number(aValue));
      const bValueIsNumber = !isNaN(Number(bValue));

      if (aValueIsNumber && bValueIsNumber) {
        // If both values are numbers, compare them as numbers
        return sortKey.isAsc
          ? Number(aValue) - Number(bValue)
          : Number(bValue) - Number(aValue);
      } else {
        // If one or both values are not numbers, compare them as strings
        if (aValue < bValue) return sortKey.isAsc ? -1 : 1;
        if (aValue > bValue) return sortKey.isAsc ? 1 : -1;
        return 0;
      }
    });
  }, [data, sortKey]);

  return { sortedData, sortDataFunc, sortKey };
};
