
function List() {
    const arr = ["A", "B", "C", "D", "yes","23"];
    const listItems = arr.map((val, index) => <li key={index}>{val}</li>);
    return <ul>{listItems}</ul>
}
export default List;