function Fruits(props) {
  return (
    <button onClick={(event) => handleClick3(props.id, event)}>
      {props.value}
    </button>
  );
}

function handleClick3(name, event, id) {
  console.log(event);
  alert(`This is ${props.id}`);
}
export default Fruits;
