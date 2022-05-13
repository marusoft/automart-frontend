import React from "react";
import styles from "../styles/Car.module.css";
import { Button } from "react-bootstrap";

const CarInfo = () => {
  return (
    <div className={styles.info}>
      <div className={styles.details}>
        <h2 className={styles.title}>
          Welcome To Automobile Dealer marketplace
        </h2>
        <div className={styles.description}>
          <p>
            Auto Mart is an online marketplace for automobiles, with Auto Mart
            users posting their cars for sale.
          </p>
        </div>
      </div>
      <div className={styles.getstarted}>
        <a href="/postcar">
          {" "}
          <Button
            variant="outline-secondary"
            size="lg"
            className={styles.button}
          >
            Get Started
          </Button>
        </a>
      </div>
    </div>
  );
};

export default CarInfo;
