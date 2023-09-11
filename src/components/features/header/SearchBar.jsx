import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  // use formik

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="relative w-full pl-1">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
        className="placehold w-full rounded-lg  bg-[#262626] py-[0.4rem] pl-10 pr-4 font-sans text-white placeholder-[#A8A8A8] outline-none"
      />
      <div className="absolute left-2 top-2 ml-2">
        <FaMagnifyingGlass className="h-4 w-4 text-[#A8A8A8]" />
      </div>
    </div>
  );
};

export default SearchBar;
