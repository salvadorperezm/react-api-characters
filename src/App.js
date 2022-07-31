import "./App.css";
import { SimpleGrid, Button } from "@chakra-ui/react";
import Card from "./Card";

function App() {
  const users = [
    {
      id: 1,
      name: "Salvador",
      profession: "Software Developer",
      email: "salvador@mail.com",
      location: "Managua, Nicaragua",
    },
    {
      id: 2,
      name: "Salvador",
      profession: "Software Developer",
      email: "salvador@mail.com",
      location: "Managua, Nicaragua",
    },
    {
      id: 3,
      name: "Salvador",
      profession: "Software Developer",
      email: "salvador@mail.com",
      location: "Managua, Nicaragua",
    },
    {
      id: 4,
      name: "Salvador",
      profession: "Software Developer",
      email: "salvador@mail.com",
      location: "Managua, Nicaragua",
    },
    {
      id: 5,
      name: "Salvador",
      profession: "Software Developer",
      email: "salvador@mail.com",
      location: "Managua, Nicaragua",
    },
    {
      id: 6,
      name: "Salvador",
      profession: "Software Developer",
      email: "salvador@mail.com",
      location: "Managua, Nicaragua",
    },
    {
      id: 7,
      name: "Salvador",
      profession: "Software Developer",
      email: "salvador@mail.com",
      location: "Managua, Nicaragua",
    },
    {
      id: 8,
      name: "Salvador",
      profession: "Software Developer",
      email: "salvador@mail.com",
      location: "Managua, Nicaragua",
    },
    {
      id: 9,
      name: "Salvador",
      profession: "Software Developer",
      email: "salvador@mail.com",
      location: "Managua, Nicaragua",
    },
    {
      id: 10,
      name: "Salvador",
      profession: "Software Developer",
      email: "salvador@mail.com",
      location: "Managua, Nicaragua",
    },
  ];
  return (
    <main className="main-container">
      <div className="main-container__text">
        <h1 className="main-container__title">React API Characters</h1>
        <Button colorScheme="blue">New Characters</Button>
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
