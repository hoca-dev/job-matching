import styles from "./OfferSection.module.scss";

export const OfferSection = () => (
  <section className={styles.offer}>
    <h1>
      최적의 개발자 찾기 어려우셨나요?
      <br />
      이젠 호카 서비스로 쉽게 진행해보세요!
    </h1>
    <button>개발자 채용 의뢰하기 </button>
  </section>
);
