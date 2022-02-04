import React, { useContext, useState } from "react";
import { Context } from "../../Store";

import SearchOutlined from "@material-ui/icons/SearchOutlined";
import Link from "next/link";
import "./styles";
import { HeaderContainer, Search } from "./styles";
function Header({ search=true, tags }) {
  const [searchContent, setSearchContent] = useContext(Context);
  const [categories, setCategories] = useState(tags);

  function handleChangeSearch(event) {
    setSearchContent(event.target.innerText);
  }

  function handleSearch(event) {
    setSearchContent(event.target.value);
  }

  return (
    <HeaderContainer>
      <div className="title">
        <Link href="/" className="Link">
          <a>
            davirds.<strong>dev</strong>
          </a>
        </Link>
      </div>

      {search && (
        <Search>
          <input
            className={
              searchContent === "" ? "searchInput" : "searchInput searchFilled"
            }
            type="text"
            value={searchContent}
            id="searchInput"
            placeholder="Search"
            onChange={handleSearch}
          />
          <button className="searchButton" id="searchButton" href="#">
            <SearchOutlined style={{ fontSize: 25 }} />
          </button>
        </Search>
      )}

      <div className="categories">

        {categories && categories.map((item) => {
          return (
            <span key={item} onClick={handleChangeSearch}>
              {item}
            </span>
          );
        })}
      </div>
    </HeaderContainer>
  );
}

export default Header;
