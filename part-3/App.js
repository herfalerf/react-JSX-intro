const App = () => (
  <div>
    <Person name="John" age={33} hobbies={["keyboards", "cars", "computers"]} />
    <Person name="Alba" age={27} hobbies={["plants", "coupons", "animals"]} />
    <Person name="Colin" age={39} hobbies={["cars", "food", "not bananas"]} />
    <Person name="Thiago" age={6} hobbies={["cars", "being loud", "soccer"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
