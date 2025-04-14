import './Square.css'

export default function Square({ value, onSquareClick}) {
    return (
        <button className='square' onClick={onSquareClick} style={{color: value === "X" ? "red" : "blue"}}>{value}</button>
    )
}