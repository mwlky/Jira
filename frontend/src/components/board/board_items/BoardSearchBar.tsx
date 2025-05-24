import "./boardSearchBar.css";

const BoardSearchBar = () => {
  return (
    <div className="search-container">
      <img src="/images/search-icon.svg" className="search-icon" alt="" />
      <input type="text" placeholder="Search" className="search-bar" />
    </div>
  );
};

export default BoardSearchBar;
