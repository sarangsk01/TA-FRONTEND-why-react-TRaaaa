function Class() {
  function handleClick3(name, event) {
    console.log(event);
    alert(`Hello${name}`);
  }
  <button onClick={(event) => handleClick3(props.name, event)}>Arya</button>;
  <button onClick={(event) => handleClick3(props.name, event)}>John</button>;
  <button onClick={(event) => handleClick3(props.name, event)}>Bran</button>;
}

export default Class;
