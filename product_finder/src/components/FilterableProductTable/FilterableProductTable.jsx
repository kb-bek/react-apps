import SearchBar from "../SearchBar/SearchBar"
import ProductTable from "../ProductTable/ProductTable"
import { useState } from "react"
import "./FilterableProductTable.css"

export default function FilterableProductTable({ products }) {

    const [filterText, setFilterText] = useState('');
    const [isStockOnly, setIsStockOnly] = useState(false);

    return (
        <div className="filterable-product-table">
            <SearchBar 
                filterText={filterText}
                isStockOnly={isStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setIsStockOnly}
            />
            <ProductTable 
                products={products}
                filterText={filterText}
                isStockOnly={isStockOnly}
            />
        </div>
    )
}