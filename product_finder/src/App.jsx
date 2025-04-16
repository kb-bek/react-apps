import './App.css'
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable'
import { PRODUCTS } from './data/data'

function App() {
  return <FilterableProductTable products={PRODUCTS}/>
}

export default App
