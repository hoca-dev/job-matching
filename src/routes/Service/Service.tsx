import heroImg from "../../assets/images/Group 79.png";
import map from "../../assets/images/Group 29.png";
import rectangle from "../../assets/images/Rectangle 33 (2).png";
import card1 from "../../assets/images/image_1.png";
import card2 from "../../assets/images/Image_2.png";
import card3 from "../../assets/images/Image_3.png";
import sumSad from "../../assets/images/Summertime Sadness.png";
import party from "../../assets/images/Party.png";
import sumSad2 from "../../assets/images/Summertime Sadness (2).png";
import asteriks from "../../assets/images/Asterisk 2 (2).png";
import party2 from "../../assets/images/Party (1).png";
import arrowRight from "../../assets/images/Vector (1).svg";
import addFrame1 from "../../assets/images/Frame.png";
import addFrame2 from "../../assets/images/Group 52.png";
import asteriks2 from "../../assets/images/Asterisk 2.png";
import frame99 from "../../assets/images/Frame 99.png";
import frame100 from "../../assets/images/Frame 100.png";
import frame101 from "../../assets/images/Frame 101.png";
import frame102 from "../../assets/images/Frame 102.png";
import {
  AdvantagesContent,
  Button,
  Footer,
  GoToTopButton,
  Header,
  PriceCard,
} from "../../components";
import styles from "./Service.module.scss";
import classNames from "classnames";
import { OfferSection } from "../../components/OfferSection";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useIntersection, useScrollToTop } from "../../hooks";

export const ServiceRoute = () => {
  const { scrollToTop } = useScrollToTop();

  const pricesSectionRef = useRef(null);
  const swiperRef = useRef(null);
  const isPricesSectionInView = useIntersection(swiperRef, 1);

  useEffect(() => {
    document.title = "Service";
    scrollToTop();
  }, []);

  useEffect(() => {
    if (isPricesSectionInView) {
      swiperRef.current.swiper.autoplay.start();
    } else {
      swiperRef.current.swiper.autoplay.stop();
    }
  }, [isPricesSectionInView]);

  return (
    <>
      <Header />
      <section className={styles.hero}>
        <img src={heroImg} alt="hero img" className={styles["hero-img"]} />
        <div className={styles["hero-content"]}>
          <h1>세계적인 개발자 팀을 구독하고 회사의 성장을 가속화하세요!</h1>
          <p>
            전세계 엘리트 개발자들로 구성된 호카와 함께, 저렴한 비용으로 최고의
            팀을 구독해보세요!
          </p>
          <Button>문의하기</Button>
        </div>
      </section>
      <section className={styles.info}>
        <div className={styles["back-img"]}>
          <img src={map} alt="world map" />
          <img src={rectangle} alt="map cover" />
        </div>
        <div className={styles["info-content"]}>
          <h1>
            호카는 전세계 <span>엘리트 개발자</span> 를 한국 회사에 연결합니다.
          </h1>
          <div className={styles.desc}>
            <p>
              우즈베키스탄에 두 개의 지점과 베트남에 한 개의 지점을
              운영하고있으며,
              <br />
              <span>이들의 뛰어난 영어실력과 풍부한 경력을 활용하여</span>{" "}
              <br />
              한국의 회사에게 필요한 서비스를 제공합니다.
            </p>
          </div>
          <div className={classNames(styles.cards, "container")}>
            <img src={card1} alt="card-1" />
            <img src={card2} alt="card-2" />
            <img src={card3} alt="card-3" />
          </div>
        </div>
      </section>
      <section className={styles.prices} ref={pricesSectionRef}>
        <div className={styles["front-img"]}>
          <img src={sumSad} alt="summertime sadness" />
          <img src={party} alt="sun" />
        </div>
        <div className={classNames(styles["front-img"], styles.second)}>
          <img src={sumSad} alt="summertime sadness" />
          <img src={party} alt="sun" />
        </div>
        <div className={styles["prices-content"]}>
          <div className={styles.desc}>
            <h1>
              동급 경력의 한국 개발자 대비 <br />
              <span>절반 이하의 비용 과 월 단위로</span> 팀을 구독할 수
              있습니다.
            </h1>
            <p>
              프로젝트의 변화에 따라 필요하신 스택에 맞게 경력별로 인원을 교체할
              수 있습니다. 다양한 비용 옵션을 선택하고 활용해보세요!
            </p>
            <Link to="#" className={styles.link}>
              <Button>자세히보기</Button>
            </Link>
          </div>
          <div className={styles["prices-list"]}>
            <ul>
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
            <div className={styles.swiperContainer}>
              <Swiper
                ref={swiperRef}
                className={styles.swiper}
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 2000 }}
                speed={1000}
                slidesPerView={2}
              >
                <SwiperSlide>
                  <PriceCard heading="개발자 신입" level="Junior" price={90} />
                </SwiperSlide>
                <SwiperSlide>
                  <PriceCard
                    heading="경력 2~3년"
                    level="Junior"
                    price={150}
                    src={sumSad2}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PriceCard
                    heading="경력 4~7년"
                    level="Senior"
                    price={230}
                    src={asteriks}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <PriceCard
                    heading="경력 8년 이상"
                    level="Senior"
                    price={290}
                    src={party2}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={styles["list-desc"]}>
              <div className={styles.desktop}>
                <p>
                  팀으로서 3명 이상일 경우 PM 서비스와 통역 서비스를 추가하실 수
                  있습니다. PM 서비스는 월 39만원, 통역 서비스는 월 29만 원이
                  추가됩니다.
                </p>
                <p>통역서비스는 하루에 30분 까지의 통역시간이 부여됩니다.</p>
              </div>
              <div className={styles.mobile}>
                <p>
                  프로젝트의 변화에 따라 경력별로 인원을 교체할 수 있습니다.
                </p>
                <p>다양한 비용 옵션을 선택하고 활용해보세요!</p>
              </div>
            </div>
            <div className={styles["link-mobile"]}>
              <Link to="#">
                <Button>자세히보기</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.advantages}>
        <div className={styles["advantages-heading"]}>
          <div className={styles.gate}>
            <div></div>
            <div></div>
          </div>
          <h1>
            호카 서비스, <span>무엇이 다를까요?</span>
          </h1>
          <div className={styles.gate}>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles["advantages-desc"]}>
          <p>저렴한 비용, 법률 업무 해결 및 리스크 걱정 하지마세요!</p>
          <p>알선 회사들과는 차별화 된 솔루션을 제시합니다.</p>
        </div>
        <AdvantagesContent />
      </section>
      <section className={styles.foreign}>
        <p className={styles.desc}>
          <span>여러분의 회사는 소중하니까!</span>
        </p>
        <h1>
          해외 개발자 선별, <span>보다 엄격하게 진행</span>합니다!
        </h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.heading}>
              <span>1</span>
              <p>모집공고/헤드헌팅</p>
            </div>
            <div className={styles.body}>
              <img src={frame99} alt="frame99" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.heading}>
              <span>2</span>
              <p>서류심사</p>
            </div>
            <div className={styles.body}>
              <img src={frame100} alt="frame100" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.heading}>
              <span>3</span>
              <p>과제 테스트</p>
            </div>
            <div className={styles.body}>
              <img src={frame101} alt="frame101" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.heading}>
              <span>4</span>
              <p>최종 면접 진행</p>
            </div>
            <div className={styles.body}>
              <img src={frame102} alt="frame102" />
            </div>
          </div>
        </div>
        <div className={styles.link}>
          <Link to="#">
            <span>더 자세한 정보를 원하시면 클릭해주세요</span>
            <img src={arrowRight} alt="arrow right icon" />
          </Link>
        </div>
      </section>
      <section className={classNames(styles.advertising, "container")}>
        <h1>
          업무 파악 후 <span>즉시 투입,</span> 합리적인 선택
        </h1>
        <div className={styles["advertising-desc"]}>
          <p>투입 즉시 전력이 되는 경력 개발자, 이젠 기다릴 필요 없어요!</p>
          <p>꼼꼼한 업무 파악 과정을 거친 후 바로 투입해요.</p>
        </div>
        <div className={styles["advertising-card"]}>
          <img src={asteriks2} alt="asteriks2" className={styles.star} />
          <div className={styles.frame}>
            <img src={addFrame2} alt="add frame" />
            <img src={addFrame1} alt="add frame" />
          </div>
          <ul className={styles.content}>
            <li>
              <div className={styles.pin}>1</div>
              <h2>
                <span>법적인 위험 걱정</span>은 이제 그만!{" "}
                <span>서비스 개발에만 집중</span>하세요!
              </h2>
              <p>
                민사전문변호사 개발자의 공동 창업! 법적인 문제는 No Problem!
              </p>
            </li>
            <li>
              <div className={styles.pin}>2</div>
              <h2>
                <span>보다 합리적인 비용으로, 연차 책정에 따른 비용</span>지불!
              </h2>
              <p>
                개발자의 과다한 급여 책정 NO! 보다 합리적으로, 보다 효율적으로!
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.join}>
        <h1>
          <p>이젠 호카 팀과 함께</p>
          <p>보다 합리적으로, 효율적으로 고용하세요!</p>
        </h1>
        <div className={styles["join-text"]}>
          <p>JOIN WITH HOCA TEAM</p>
        </div>
      </section>
      <OfferSection />
      <Footer />
      <GoToTopButton />
    </>
  );
};
