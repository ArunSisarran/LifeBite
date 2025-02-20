
import React, { useState } from "react";
import "./discoverPage.css";

const DiscoverPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  // Example content list
  const contentList = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
  }));

  const handleItemClick = (itemId: number) => {
    alert(`You clicked on item with ID: ${itemId}`);
    // You can also add logic here to navigate or open a detailed view
  };

  return (
    <div className="main-container">
      {/* Navbar */}
      <nav className="navbar">
        <button className="nav-button">Profile</button>
        <button className="nav-button">Discover</button>
        <button className="nav-button">Find Ingredients</button>
      </nav>

      {/* Divider */}
      <div className="divider"></div>

      {/* Search Bar and Filter */}
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Content Grid */}
      <div className="content-grid">
        {contentList.map((item) => (
          <div
            key={item.id}
            className="content-item"
            onClick={() => handleItemClick(item.id)}
            style={{ cursor: "pointer" }} // Add pointer cursor to indicate clickability
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverPage;
