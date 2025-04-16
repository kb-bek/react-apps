import ProductRow from "../ProductRow/ProductRow";
import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import "./ProductTable.css"

export default function ProductTable({ products, filterText, isStockOnly }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }

        if (isStockOnly && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }
        rows.push (
        <ProductRow
            product={product}
            key={product.name}
        />
        ) 
        
        lastCategory = product.category;
    });

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}