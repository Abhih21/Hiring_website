import { useState } from "react";
import "../../../index.css";

const categories = [
  { name: "Software Engineer" },
  { name: "DevOps" },
  { name: "Developer" },
  { name: "Designer" },
  { name: "Full Stack Dev" },
  { name: "Android " },
  // Add more categories and their corresponding components here
];

const CategorySelector = ({ categorie }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div>
      <div className="flex overflow-x-scroll scrollbar-hide p-4 space-x-4 border-b gap-8 border-slate-200">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 whitespace-nowrap relative text-xl font-semibold  ${
              selectedCategory.name === category.name
                ? "text-blue-500"
                : "text-black"
            }`}
          >
            {category.name}
            {selectedCategory.name === category.name && (
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"></span>
            )}
          </button>
        ))}
      </div>
      <div className="mt-4">{selectedCategory.component}</div>
    </div>
  );
};

// Sample category components
const SoftwareEngineerTable = () => (
  <div>
    <h2>Software Engineer Applicants</h2>
    {/* Your table component here */}
  </div>
);

const DevOpsTable = () => (
  <div>
    <h2>DevOps Applicants</h2>
    {/* Your table component here */}
  </div>
);

const DeveloperTable = () => (
  <div>
    <h2>Developer Applicants</h2>
    {/* Your table component here */}
  </div>
);

export default CategorySelector;
