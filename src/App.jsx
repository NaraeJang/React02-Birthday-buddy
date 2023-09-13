import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name, age, image } = person;

        return (
          <div key={id}>
            <h1>{name}</h1>
            <p>{age}</p>
            <img src={image} />
          </div>
        );
      })}

      <button type="button" onClick={handleClick} className="btn">
        clear All
      </button>
    </div>
  );
};
export default App;
