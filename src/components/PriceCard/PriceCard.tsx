import { FC } from "react";
import styles from "./PriceCard.module.scss";

interface Props {
  heading: string;
  level: string;
  price: number;
  src?: string;
}

export const PriceCard: FC<Props> = ({ heading, level, price, src }) => {
  return (
    <div className={styles.priceCard}>
      <div className={styles.header}>
        <span>{heading}</span>
        <span>{`(${level})`}</span>
      </div>
      <div className={styles.content}>
        <p>월 비용</p>
        <h1>{price}만원</h1>
        {src ? (
          <img src={src} alt={src} />
        ) : (
          <div className={styles.ellipse}></div>
        )}
      </div>
    </div>
  );
};
