import "./App.css";
import { Box, SimpleGrid, Button } from "@chakra-ui/react";

import { useState, useEffect } from "react";
const axios = require("axios");

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://random-data-api.com/api/users/random_user?size=10")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="inner-container">
      <h1 className="title">
        <code>React API Characters</code>
      </h1>
      <Button
        colorScheme="blue"
        className="button"
        onClick={() => {
          axios
            .get("https://random-data-api.com/api/users/random_user?size=10")
            .then((res) => {
              setUsers(res.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        New Characters
      </Button>
      <SimpleGrid minChildWidth="250px" spacing="20px">
        {users.map((user) => {
          return (
            <Box key={user.id} className="card flip-card">
              <Box>
                <img src={`${user.avatar}`} alt="avatar" className="avatar" />
              </Box>
              <Box className="card__info">
                <h1>{`${user.first_name} ${user.last_name}`}</h1>
                <p>{user.employment.title}</p>
                <p>{user.email}</p>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </div>
  );
}

export default App;
