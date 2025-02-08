
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

  return (
    <div className="main-container">
      {/* Navbar */}
      <nav className="navbar">
        <button className="nav-button">Profile</button>
        <button className="nav-button">Discover</button>
        <button className="nav-button">Find Ingredients</button>
        <div className="profile-icon">👤</div>
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
        <button className="filter-button" onClick={() => setShowFilter(!showFilter)}>
          ☰
        </button>
        {showFilter && (
          <div className="filter-menu">
            <p>Filter Option 1</p>
            <p>Filter Option 2</p>
            <p>Filter Option 3</p>
          </div>
        )}
      </div>

      {/* Content Grid */}
      <div className="content-grid">
        {contentList.map((item) => (
          <div key={item.id} className="content-item">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverPage;

