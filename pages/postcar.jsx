import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/PostCar.module.css";

const PostCar = () => {
  const [condition, setCondition] = useState("");
  const [amount, setAmount] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://automart-backend.herokuapp.com/api/car",
        {
          condition,
          amount,
          manufacturer,
          model,
          bodyType,
          imgUrl,
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
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Vehicle Body Types e.g Var, car, jeep"
          required
          className={styles.inputs}
          value={bodyType}
          onChange={(e) => setBodyType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Vehicle img url"
          required
          className={styles.inputs}
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <Button
          type="submit"
          disabled={
            !condition ||
            !amount ||
            !manufacturer ||
            !model ||
            !bodyType ||
            !imgUrl ||
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
