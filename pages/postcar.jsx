import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/PostCar.module.css";

const PostCar = () => {
  const [condition, setCondition] = useState("");
  const [amount, setAmount] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [carmodel, setCarModel] = useState("");
  const [bodytype, setBodyType] = useState("");
  // const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://automart-backend-v2.herokuapp.com/api/car",
        {
          condition,
          amount,
          manufacturer,
          carmodel,
          bodytype,
        }
      );
      toast.success("Car created successfully");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data);
    }
  };

  return (
    <div>
      <h3 className={styles.advert}>Post Your Automobiles For Advertistment</h3>
      <Form className={styles.fields} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Vehicle Condition e.g new or used"
          required
          className={styles.inputs}
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount"
          required
          className={styles.inputs}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Vehicle Manufaturer"
          required
          className={styles.inputs}
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
        />
        <input
          type="text"
          placeholder="Vehicle Model"
          required
          className={styles.inputs}
          value={carmodel}
          onChange={(e) => setCarModel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Vehicle Body Types e.g Var, car, jeep"
          required
          className={styles.inputs}
          value={bodytype}
          onChange={(e) => setBodyType(e.target.value)}
        />
        <input
          type="file"
          name="image"
          placeholder="Vehicle img url"
          // required
          className={styles.inputs}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <Button
          type="submit"
          disabled={
            !condition ||
            !amount ||
            !manufacturer ||
            !carmodel ||
            !bodytype ||
            loading
          }
          className={styles.createbtn}
        >
          {" "}
          {loading ? "Loading..." : "Create car"}
        </Button>
      </Form>
    </div>
  );
};

export default PostCar;
