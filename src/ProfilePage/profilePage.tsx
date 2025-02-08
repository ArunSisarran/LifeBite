import React from 'react';
import './profilePage.css';

/**
 * Interface describing your user’s data from the backend.
 * You can adjust this as needed, depending on your actual data model.
 */
interface UserData {
  profilePicUrl?: string;  // If empty or undefined, display a blank circle
  name?: string;           // If empty, just display blank
  recipesCount?: string;   // If empty, just display blank
  bio?: string;            // If empty, just display blank
}

/**
 * Interface describing a recipe object that you’ll display as squares.
 */
interface Recipe {
  id: number;
  // Include other fields as needed, e.g. name, image, etc.
}

/**
 * Props for your main page component.
 * In a real app, you might get these from a parent component or via hooks that
 * fetch data from your backend.
 */
interface ProfilePageProps {
  user?: UserData;
  recipes?: Recipe[];
}

const recipes: Recipe[] = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    },
    {
        id: 5
    },
    {
        id: 6
    },
    {
        id: 7
    },
    {
        id: 8
    },
    {
        id: 9
    },
]

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  // Fallbacks if user data is undefined
  const profilePicUrl = user?.profilePicUrl;
  const userName = user?.name || "";
  const userRecipesCount = user?.recipesCount || "";
  const userBio = user?.bio || "";
  
  // If recipes is undefined, treat as empty array
  const recipeList = recipes ?? [];

  return (
    <div className="main-page">
      {/* Top Bar */}
      <header className="top-bar">
        <div className="navbar-left">
          <button className="nav-button">Profile</button>
          <button className="nav-button">Discover</button>
          <button className="nav-button">Find Ingredients</button>
        </div>
      </header>

      <div className="content-container">
        {/* Left side: Profile section (kept “sticky”/fixed as user scrolls) */}
        <aside className="profile-section">
          <div className="profile-pic">
            {profilePicUrl ? (
              <img src={profilePicUrl} alt="Profile" />
            ) : (
              <div className="default-pic" />
            )}
          </div>
          <div className="profile-info">
            <p className="profile-name">{userName}</p>
            <p className="profile-recipes">{userRecipesCount}</p>
            <p className="profile-bio">{userBio}</p>
          </div>
        </aside>

        {/* Main content: Recipes */}
        <main className="recipe-section">
          <h1 className="recipes-heading">Recipes</h1>
          <div className="recipes-grid">
            {recipeList.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                {/* You can put recipe info here if you like */}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
