import { SortState } from "../hooks/useSortData";

export const renderSortIcon = (key: string, sortKey: SortState) => {
  if (sortKey.key === key) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="16"
        height="16"
        style={{ transform: sortKey.isAsc ? "" : "rotate(180deg)" }}
      >
        <path d="M2 5L8 11L14 5" />
      </svg>
    );
  }
  return null;
};
