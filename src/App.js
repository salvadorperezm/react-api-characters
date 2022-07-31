import "./App.css";
import { useState, useEffect } from "react";
import { SimpleGrid, Button } from "@chakra-ui/react";
import Card from "./Card";
const axios = require("axios");

function App() {
  const defaultUser = {
    id: "19f09h1ft",
    name: "John Doe",
    profession: "Not Available",
    email: "johndoe@email.com",
    location: "New York, NY",
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://random-data-api.com/api/users/random_user?size=10")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        setUsers(defaultUser);
      });
  }, []);

  return (
    <main className="main-container">
      <div className="main-container__text">
        <h1 className="main-container__title">React API Characters</h1>
        <Button
          colorScheme="blue"
          onClick={() => {
            axios
              .get("https://random-data-api.com/api/users/random_user?size=10")
              .then((res) => {
                setUsers(res.data);
              })
              .catch((error) => {
                setUsers(defaultUser);
              });
          }}
        >
          New Characters
        </Button>
      </div>
      <SimpleGrid
        minChildWidth="200px"
        className="main-container__grid"
        gap="20px"
      >
        {users.map((user) => {
          return <Card props={user} key={user.id} />;
        })}
      </SimpleGrid>
    </main>
  );
}

export default App;
