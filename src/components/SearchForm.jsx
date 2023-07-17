import { useEffect, useState } from "react";

const SearchForm = ({ setSearchTerm }) => {
  const [search, setsearch] = useState("");
  useEffect(() => {
    setSearchTerm(search);
  }, [search]);
  return (
    <section className="section search">
      <form action="" className="search-form">
        <div className="form-control">
          <label htmlFor="">Search your favorite cocktail</label>
          <input
            type="text"
            value={search}
            onChange={(e) => setsearch(e.currentTarget.value)}
          />
        </div>
      </form>
    </section>
  );
};
export default SearchForm;
