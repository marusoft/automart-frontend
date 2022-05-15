import axios from "axios";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import styles from "../styles/Advert.module.css";

const Advertistment = ({ allCars }) => {
  return (
    <div className={styles.container}>
      {allCars.allCars.map((car) => {
        return (
        <Card style={{ width: "25rem" }} key={car.id}>
          <Card.Img variant="top" src={car.imgUrl} />
          <Card.Body>
            <Card.Title>{car.manufacturer}</Card.Title>
            <Card.Text>{car.amount}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Condition: {car.condition}</ListGroupItem>
            <ListGroupItem> Status: {car.status}</ListGroupItem>
            <ListGroupItem> Model: {car.model}</ListGroupItem>
            <ListGroupItem>Body Type: {car.bodyType}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button variant="info" className={styles.view}>
              View Car
            </Button>
            <Button variant="danger">Delete Car</Button>
          </Card.Body>
        </Card>
        );
      })}
    </div>
  );
};

export default Advertistment;

export async function getStaticProps() {
  const { data } = await axios.get(
    "https://automart-backend.herokuapp.com/api/car"
  );
  console.log(data);
  return {
    props: {
      allCars: data,
    },
  };
}
