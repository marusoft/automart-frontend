import { Form, Button } from "react-bootstrap";
import styles from "../styles/PostCar.module.css";

const PostCar = () => {
  return (
    <div>
      <h3 className={styles.advert}>Post Your Automobiles For Advertistment</h3>
      <Form className={styles.fields}>
        <input
          type="text"
          placeholder="Vehicle Condition e.g new or used"
          required
          className={styles.inputs}
        />
        <input
          type="text"
          placeholder="Amount"
          required
          className={styles.inputs}
        />
        <input
          type="text"
          placeholder="Vehicle Manufaturer"
          required
          className={styles.inputs}
        />
        <input
          type="text"
          placeholder="Vehicle Model"
          required
          className={styles.inputs}
        />
        <input
          type="text"
          placeholder="Vehicle Body Types e.g Var, car, jeep"
          required
          className={styles.inputs}
        />
        <Button className={styles.createbtn}>Create Car</Button>
      </Form>
    </div>
  );
};

export default PostCar;
