import { useMemo, useState } from "react";
import { debounce } from "lodash";

type SearchProps = {
  itemsList: {
    id: number;
    name: string;
    value: string;
  }[];
};

export default function Search({ itemsList }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(itemsList);

  const debouncedFilterItems = useMemo(() => {
    return debounce((query: string) => {
      setFilteredItems(
        itemsList.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 300);
  }, [itemsList]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    debouncedFilterItems(query);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="search"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        aria-label="Search"
      />
      <ul className="search-list" role="list">
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
