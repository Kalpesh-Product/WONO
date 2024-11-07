import React, { useEffect, useRef } from "react";
import { GridProvider, GridComponent } from "muuri-react"; // Import GridProvider
import "tailwindcss/tailwind.css";

const DragDropGrid = () => {
  const gridRef = useRef(null);

  // Example items
  const items = [
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
    { id: 4, content: "Item 4" },
    { id: 5, content: "Item 5" },
  ];

  // Set up grid and clean up on unmount
  useEffect(() => {
    const grid = gridRef.current.getGrid();
    return () => grid.destroy(); // Cleanup on unmount
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Drag and Drop Grid</h2>
      <GridProvider>
        <GridComponent
          ref={gridRef}
          dragEnabled={true} // Enable drag and drop
          className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-blue-500 text-white p-4 rounded-lg shadow-md cursor-move">
              {item.content}
            </div>
          ))}
        </GridComponent>
      </GridProvider>
    </div>
  );
};

export default DragDropGrid;
