import {
  AdvantagesContent,
  Button,
  Footer,
  GoToTopButton,
  Header,
  PriceCard,
  OfferSection,
  ScrollAnimationContainer,
} from "../../components";
import styles from "./Home.module.scss";
import frame28 from "../../assets/images/Frame 28.svg";
import frame30 from "../../assets/images/Frame 30.svg";
import frame31 from "../../assets/images/Frame 31.svg";
import appleIcon from "../../assets/images/Frame 43.svg";
import androidIcon from "../../assets/images/Frame 44.svg";
import htmlIcon from "../../assets/images/Frame 45.svg";
import cssIcon from "../../assets/images/Frame 46.svg";
import jsIcon from "../../assets/images/Frame 47.svg";
import reactIcon from "../../assets/images/Frame 48.svg";
import firebaseIcon from "../../assets/images/Frame 49.svg";
import flutterIcon from "../../assets/images/Frame 50.svg";
import frame79 from "../../assets/images/Frame 79.svg";
import frame81 from "../../assets/images/Frame 81.svg";
import frame83 from "../../assets/images/Frame 83.svg";
import frame85 from "../../assets/images/Frame 85.svg";
import asteriks from "../../assets/images/Asterisk 2 (2).png";
import sumSad2 from "../../assets/images/Summertime Sadness (2).png";
import party2 from "../../assets/images/Party (1).png";
import sumSad from "../../assets/images/Summertime Sadness.png";
import party from "../../assets/images/Party.png";
import process from "../../assets/images/Group 101.png";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import { useEffect, useRef } from "react";
import { useIntersection, useScrollToTop } from "../../hooks";

export const HomeRoute = () => {
  const { scrollToTop } = useScrollToTop();
  const heroSectionRef = useRef();
  const isHeroSectionInView = useIntersection(heroSectionRef);

  const processSectionRef = useRef();
  const isProcessSectionInView = useIntersection(processSectionRef);

  const serviceSectionRef = useRef();
  const isServiceSectionInView = useIntersection(serviceSectionRef);

  const valueSectionRef = useRef();
  const isValueSectionInView = useIntersection(valueSectionRef);

  const pricesSectionRef = useRef();
  const isPricesSectionInView = useIntersection(pricesSectionRef, 0.2);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <div className={styles["header-hero"]}>
        <Header />
        <section className={styles.hero} ref={heroSectionRef}>
          <ScrollAnimationContainer
            $isParentSectionIntersecting={isHeroSectionInView}
          >
            <p>HOCA development</p>
            <h1 className={styles.heading}>
              호카는 웹/모바일 앱 솔루션과 함께,
              <br /> 스타트업 대표들의{" "}
              <span>경쟁력을 한 단계 높혀드립니다.</span>
            </h1>
            <div className={styles["hero-cards"]}>
              <img src={frame28} alt="frame28" />
              <img src={frame30} alt="frame30" />
              <img src={frame31} alt="frame31" />
            </div>
            <Link to={"/"} className={styles["hero-link"]}>
              <Button>프로젝트 문의</Button>
            </Link>
          </ScrollAnimationContainer>
        </section>
      </div>
      <section className={styles.technology}>
        <p className={styles.desc}>Industry Standard Technology</p>
        <h1 className={styles.heading}>
          호카는 엘리트 해외 개발자들과 함께
          <br />
          <span>다양한 외주계발 서비스를 제공</span>하고 있습니다.
        </h1>
        <Swiper
          className={classNames(styles["animation-technology"], "mySwiper")}
          modules={[Autoplay, Scrollbar]}
          scrollbar={{
            draggable: true,
          }}
          loop={true}
          spaceBetween={45}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            374: {
              slidesPerView: 4,
            },
            1439: {
              slidesPerView: 6,
            },
          }}
          speed={1000}
        >
          <SwiperSlide>
            <img src={appleIcon} alt={"appleIcon"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={androidIcon} alt={"androidIcon"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={htmlIcon} alt={"htmlIcon"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cssIcon} alt={"cssIcon"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={jsIcon} alt={"jsIcon"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={reactIcon} alt={"reactIcon"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={firebaseIcon} alt={"firebaseIcon"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={flutterIcon} alt={"flutterIcon"} />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className={styles.process} ref={processSectionRef}>
        <ScrollAnimationContainer
          $isParentSectionIntersecting={isProcessSectionInView}
        >
          <div className={styles.content}>
            <p className={styles.desc}>Process for service</p>
            <h1 className={styles.heading}>
              HOCA는 스타트업의 문제를 함께 고민하여
              <br />
              최적의 솔루션을 제시합니다.
            </h1>
          </div>
          <img src={process} alt="process back" />
        </ScrollAnimationContainer>
      </section>
      <section className={styles.service} ref={serviceSectionRef}>
        <ScrollAnimationContainer
          $isParentSectionIntersecting={isServiceSectionInView}
        >
          <p className={styles.desc}>Specialized Service</p>
          <h1 className={styles.heading}>
            개발자와 민사전문변호사가 함께
            <br /> 창업하여 전문가 직역에서
            <br />
            <span>새로운 수익창출 방식을 시도</span>하고 있습니다.
          </h1>
          <AdvantagesContent />
        </ScrollAnimationContainer>
      </section>
      <section className={styles.projects}>
        <p className={styles.desc}>Featured Works</p>
        <h1 className={styles.heading}>
          HOCA는 스타트업의 문제를 함께 고민하고
          <br />
          <span>
            최적의 결과물 도출
            <br /> 방안
          </span>
          을 제시합니다.
        </h1>
        <Swiper
          className={styles["animation-projects"]}
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 2000 }}
          speed={1000}
          spaceBetween={97}
          breakpoints={{
            374: {
              slidesPerView: 4,
            },
            1439: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide>
            <img src={frame79} alt="frame79" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={frame79} alt="frame79" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={frame81} alt="frame81" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={frame83} alt="frame83" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={frame85} alt="frame85" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={frame79} alt="frame79" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={frame85} alt="frame85" />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className={styles.value} ref={valueSectionRef}>
        <ScrollAnimationContainer
          $isParentSectionIntersecting={isValueSectionInView}
        >
          <p className={styles.desc}>Our value</p>
          <h1 className={styles.heading}>
            외주회사로서가 아닌,{" "}
            <span>
              같은 길을 걷는
              <br /> 스타트업
            </span>
            으로서
            <br />그 긴 여정을 여러분과 함께합니다.
          </h1>
          <div className={styles.frame}>
            <iframe
              src="https://www.youtube.com/embed/ZRfjFZU-u1A"
              allowFullScreen
            ></iframe>
          </div>
        </ScrollAnimationContainer>
      </section>
      <section className={styles.prices} ref={pricesSectionRef}>
        <ScrollAnimationContainer
          $isParentSectionIntersecting={isPricesSectionInView}
        >
          <div className={styles["front-img"]}>
            <img src={sumSad} alt="summertime sadness" />
            <img src={party} alt="sun" />
          </div>
          <div className={classNames(styles["front-img"], styles.second)}>
            <img src={sumSad} alt="summertime sadness" />
            <img src={party} alt="sun" />
          </div>
          <p className={styles.desc}>Our Service</p>
          <h1 className={styles.heading}>
            동급 경력의 한국 개발자 대비
            <br />
            <span>절반 이하의 비용과 월 단위로</span> 팀을
            <br /> 구독할 수 있어요!
          </h1>
          <ul className={styles["prices-list"]}>
            <PriceCard heading="개발자 신입" level="Junior" price={90} />
            <PriceCard
              heading="경력 2~3년"
              level="Junior"
              price={150}
              src={sumSad2}
            />
            <PriceCard
              heading="경력 4~7년"
              level="Senior"
              price={230}
              src={asteriks}
            />
            <PriceCard
              heading="경력 8년 이상"
              level="Senior"
              price={290}
              src={party2}
            />
          </ul>
          <p className={classNames(styles["prices-desc"])}>
            프로젝트의 변화에 따라 경력별로 인원을 교체할 수 있습니다.
            <br />
            <span>다양한 비용 옵션을 선택하고 활용해보세요!</span>
          </p>
          <Link to={"#"} className={classNames(styles["prices-link"])}>
            <Button>자세히 보기</Button>
          </Link>
        </ScrollAnimationContainer>
      </section>
      <OfferSection />
      <Footer />
      <GoToTopButton />
    </>
  );
};
