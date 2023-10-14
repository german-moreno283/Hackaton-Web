import { Card, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

function Characters() {
  const [allCharacters, setAllCharacters] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        const pages = data.info.pages;
        const fetchPromises = [];

        for (let i = 1; i <= pages; i++) {
          fetchPromises.push(
            fetch(`https://rickandmortyapi.com/api/character?page=${i}`).then(
              (response) => response.json()
            )
          );
        }

        Promise.all(fetchPromises)
          .then((results) => {
            const characters = results.flatMap((result) => result.results);
            setAllCharacters(characters);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      });
  }, []);


  return (
    <div className="">
      <Container className="mt-5">
        <h3>Characters</h3>
        <ul>
          {allCharacters.map((character) => (
            <Card
              key={character.id}
              className="mt-3"
              style={{ width: "230px", borderColor: "green" }}
            >
              <Card.Title>{character.name}</Card.Title>
              <Card.Img variant="top" src={character.image} />
            </Card>
          ))}
        </ul>
      </Container>
    </div>
  );
}
export default Characters;
