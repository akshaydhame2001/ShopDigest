"use client";

import Card from "../components/Card";
import { baseCategories } from "@/data/baseCategories";
import usePagination from "@/hooks/usePagination";
import Pagination from "../components/Pagination";
import { repeatCategories } from "@/utils/repeatCategories";

export default function Home() {
  const categories = repeatCategories(baseCategories, 5);
  const itemsPerPage = 12;

  const {
    currentItems,
    currentPage,
    totalPages,
    paginate,
    indexOfFirstItem,
    indexOfLastItem,
  } = usePagination(categories, itemsPerPage);

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold mt-8">Top Shopify Collections</h1>
        <div className="flex justify-between items-center">
          <p className="mt-2 text-gray-600">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
          <div className="text-blue-500">See all</div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
        {currentItems.map((category) => (
          <Card
            key={category.id}
            title={category.title}
            description={category.description}
            apps={category.apps}
            icons={category.icons}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
        indexOfFirstItem={indexOfFirstItem}
        indexOfLastItem={indexOfLastItem}
        totalItems={categories.length}
      />
    </div>
  );
}
