import React from "react";

function Food({ fav }) {
  return <h1>I Like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food fav="Kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
