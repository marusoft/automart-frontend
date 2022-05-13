import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import styles from "../styles/Advert.module.css";

const Advertistment = () => {
  return (
    <div className={styles.container}>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src="/car.jpeg" />
        <Card.Body>
          <Card.Title>Toyota</Card.Title>
          <Card.Text>N10,000,000</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>New</ListGroupItem>
          <ListGroupItem>Available</ListGroupItem>
          <ListGroupItem>B-class</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="info" className={styles.view}>View Car</Button>
          <Button variant="danger">Delete Car</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src="/car.jpeg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button>Card Link</Button>
          <Button>Another Link</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src="/car.jpeg" />
        <Card.Body>
          <Card.Title>Card Tit</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src="/car.jpeg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src="/car.jpeg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src="/car.jpeg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Advertistment;
