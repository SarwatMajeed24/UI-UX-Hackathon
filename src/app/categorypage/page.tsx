import React from "react";
import { FilterSidebar } from "../components/Filters";
import CasualCard from "../components/casualcard";
import { CategoryTop } from "../components/categorytop";

const CategoryPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <CategoryTop />
      <div className="flex justify-between gap-6 mt-8">
        {/* Sidebar */}
        <FilterSidebar />
        
        {/* Main Content */}
        <div className="flex-grow">
          <CasualCard />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
