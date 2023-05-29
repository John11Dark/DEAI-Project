import { useMemo, useState } from "react";
import { debounce } from "lodash";
import IconButton from "../utils/iconButton";

type SearchProps = {
  data: {
    id: number;
    name: string;
    value: string;
    visible: boolean;
  }[];
  placeholder?: string;
  className?: string;
  filter?: boolean;
  searchQueryRef?: React.RefObject<HTMLInputElement>;
};

export default function Search({
  data,
  placeholder,
  className,
  filter,
  searchQueryRef,
}: SearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(data);

  const debouncedFilterItems = useMemo(() => {
    return debounce((query: string) => {
      setFilteredItems(
        data.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 300);
  }, [data]);
  /* <ul className="search-list" role="list">
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    debouncedFilterItems(query);
  };

  return (
    <div className={`search-container | flex | center | ${className}`}>
      <input
        className="search-input"
        ref={searchQueryRef}
        type="search"
        placeholder={placeholder ? placeholder : "Search"}
        value={searchQuery}
        onChange={handleSearchChange}
        aria-label="Search"
      />
      {filter && (
        <IconButton
          icon="Layers"
          title="search by"
          className="search-filter-button"
        />
      )}
    </div>
  );
}
