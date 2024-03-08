import { useRef } from "react";
import styles from "./OfferSection.module.scss";
import { useIntersection } from "../../hooks";
import classNames from "classnames";

export const OfferSection = () => {
  const offerSectionRef = useRef();
  const isOfferSectionInView = useIntersection(offerSectionRef);

  return (
    <section className={styles.offer} ref={offerSectionRef}>
      <div
        className={classNames(styles.animation, {
          [styles.animate]: isOfferSectionInView,
        })}
      >
        <h1>
          최적의 개발자 찾기 어려우셨나요?
          <br />
          이젠 호카 서비스로 쉽게 진행해보세요!
        </h1>
        <button>개발자 채용 의뢰하기 </button>
      </div>
    </section>
  );
};
