import { Card, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

function MainPage() {
  const [allLocations, setAllLocations] = useState([]);
  //Get all the locations from the rick and morty API and save them into a single array
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((response) => response.json())
      .then((data) => {
        const pages = data.info.pages;
        const fetchPromises = [];

        for (let i = 1; i <= pages; i++) {
          fetchPromises.push(
            fetch(`https://rickandmortyapi.com/api/location?page=${i}`).then(
              (response) => response.json()
            )
          );
        }

        Promise.all(fetchPromises)
          .then((results) => {
            const locations = results.flatMap((result) => result.results);
            setAllLocations(locations);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      });
  }, []);

  //Get the image of the first resident of the location
  const getImg = (id) => {
    fetch(`https://rickandmortyapi.com/api/location/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const resident = data.residents[0];
        console.log(resident);
        fetch(resident)
          .then((response) => response.json())
          .then((data) => {
            const img = data.image;
            return img;
          });
      });
  };

  return (
    <div className="">
      <Container className="mt-5">
        <h1>Woba loba dub dub!</h1>
        <h3>Locations</h3>
        <ul>
          {allLocations.map((location) => (
            <Card
              key={location.id}
              className="mt-3"
              style={{ width: "230px", borderColor: "green" }}
            >
              <Card.Title>{location.name}</Card.Title>
              <Card.Img variant="top"  />
            </Card>
          ))}
        </ul>
      </Container>
    </div>
  );
}
export default MainPage;
