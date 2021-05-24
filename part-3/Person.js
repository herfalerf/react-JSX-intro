const Person = (props) => {
  return (
    <div>
      <p>Learn some information about this person</p>
      <ul>
        <li>Name: {props.name}</li>
        <li>Age: {props.age}</li>
      </ul>
      <h3>{props.age >= 18 ? "please go vote!" : "you must be 18"} </h3>
      <ul>
        <h3>Hobbies:</h3>
        {props.hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
};
