import "./SearchBar.css"

export default function SearchBar({ filterText, isStockOnly, onFilterTextChange, onInStockOnlyChange}) {
    return (
        <form className="search-bar">
            <input 
                type="text" 
                placeholder="Search..."
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
            />
            <label>
                <input 
                    type="checkbox" 
                    checked={isStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}