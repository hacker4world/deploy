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
        setData(response.data.data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <>
      {error ? (
        <h1>Error fetching data</h1>
      ) : (
        <div>
          {data.map((person) => (
            <div>
              <h1>{person.name}</h1>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
