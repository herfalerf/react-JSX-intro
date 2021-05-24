const App = () => (
  <div>
    <Tweet
      username="Dingus"
      name="Din Gus"
      date="12/12/2020"
      message="I am a dingus and I cannot lie"
    />
    <Tweet
      username="Plumbus"
      name="Plum Bus"
      date="12/12/2020"
      message="I am the universal appliance"
    />
    <Tweet
      username="Ctan"
      name="Colin Tan"
      date="12/12/2020"
      message="I do not like bananas"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
