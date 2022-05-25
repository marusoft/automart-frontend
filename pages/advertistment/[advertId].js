import axios from "axios";
import millify from "millify";
import Link from "next/link";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import styles from "../../styles/Advert.module.css";

const Advert = ({ car }) => {
  return (
    <div className={styles.singlecar}>
      <Card style={{ width: "25rem" }} key={car._id}>
        <Card.Img variant="top" src={car.imgurl} />
        <Card.Body>
          <Card.Title>{car.manufacturer}</Card.Title>
          <Card.Text>{millify(car.amount)}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Condition: {car.condition}</ListGroupItem>
          <ListGroupItem> Status: {car.status}</ListGroupItem>
          <ListGroupItem> Model: {car.model}</ListGroupItem>
          <ListGroupItem>Body Type: {car.bodyType}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="info">
            <Link href="/">Read More</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Advert;

export async function getStaticPaths() {
  const { data } = await axios.get(
    "https://automart-backend-v2.herokuapp.com/api/car/"
  );
  console.log("ALLCARS", data)
  const paths = data.allCars.map((advert) => {
    return {
      params: {
        advertId: `${advert._id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { data } = await axios.get(
    `https://automart-backend-v2.herokuapp.com/api/car/${params.advertId}`
  );
  console.log("specific car", data);
  return {
    props: {
      car: data.getASpecificCar,
    },
  };
}
