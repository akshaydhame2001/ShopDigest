import { useState, useMemo } from "react";

export default function usePagination(items, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = useMemo(
    () => items.slice(indexOfFirstItem, indexOfLastItem),
    [items, indexOfFirstItem, indexOfLastItem]
  );

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return {
    currentItems,
    currentPage,
    totalPages,
    paginate,
    indexOfFirstItem,
    indexOfLastItem,
  };
}
