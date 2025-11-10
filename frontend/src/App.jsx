import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/data")
      .then((response) => {
        setData(response.data.users);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const createNewUser = () => {
    axios.post("http://localhost:4000/create-test-user").then(() => {
      setData((old) => [
        ...old,
        {
          name: "test",
          age: 25,
        },
      ]);
    });
  };

  return (
    <>
      {error ? (
        <h1>Error fetching data</h1>
      ) : (
        <div>
          <button onClick={createNewUser}>create new user</button>
          {data.map((person) => (
            <div>
              <h1>{person.name}</h1>
              <h3>{person.age}</h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
