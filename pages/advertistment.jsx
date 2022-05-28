import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Link from "next/link";
import millify from "millify";
import { Card, Button } from "react-bootstrap";
import styles from "../styles/Advert.module.css";

const Advertistment = () => {
  const [loading, setLoading] = useState(false);
  const [vehicles, setVehicles] = useState([]);

  const getVehicle = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://automart-backend-v2.herokuapp.com/api/car"
      );
      setVehicles(data.allCars);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  useEffect(() => {
    getVehicle();
  }, []);

  const removeCar = async (_id) => {
    try {
      const { res } = await axios.delete(
        `https://automart-backend-v2.herokuapp.com/api/car/${_id}`
      );
      toast.success("Car post successfully deleted");
      getVehicle();
    } catch (error) {
      console.error(error.message);
    }
  };

  if (loading) {
    return <div>Loading Car Advertistment...</div>;
  }

  return (
    <div className={styles.container}>
      {vehicles.map((car) => {
        return (
          <Card style={{ width: "25rem" }} key={car._id}>
            <Card.Img variant="top" src={car.imgurl} width={250} height={250} />
            <Card.Body>
              <Card.Title>{car.manufacturer}</Card.Title>
              <Card.Text>{millify(car.amount)}</Card.Text>
              <Card.Title>{car.bodyType}</Card.Title>
            </Card.Body>
            <Card.Body>
              <Button variant="info" className={styles.view}>
                <Link href={`advertistment/${car._id}`} passHref>
                  View Car
                </Link>
              </Button>
              <Button onClick={() => removeCar(car._id)} variant="danger">
                Delete Car
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Advertistment;

// export async function getStaticProps() {
//   const { data } = await axios.get(
//     "https://automart-backend-v2.herokuapp.com/api/car/"
//   );
//   // console.log(data);
//   return {
//     props: {
//       cars: data.allCars,
//     },
//   };
// }
