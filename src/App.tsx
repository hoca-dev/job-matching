import "./App.scss";
import logo from "./assets/images/logo.svg";
import heroImg from "./assets/images/Group 79.png";
import map from "./assets/images/Group 29.png";
import rectangle from "./assets/images/Rectangle 33 (1).png";
import card1 from "./assets/images/image_1.png";
import card2 from "./assets/images/Image_2.png";
import card3 from "./assets/images/Image_3.png";
import sumSad from "./assets/images/Summertime Sadness.png";
import party from "./assets/images/Party.png";
import sumSad2 from "./assets/images/Summertime Sadness (2).png";
import asteriks from "./assets/images/Asterisk 2 (2).png";
import party2 from "./assets/images/Party (1).png";
import { Button, PriceCard } from "./components";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="header-content container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav className="nav">
            <ul>
              <li>서비스 소개</li>
              <li>가격정책</li>
            </ul>
            <ul>
              <li>고객 후기</li>
              <li>문의하기</li>
              <li>HOCA 팀</li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="hero">
        <img src={heroImg} alt="hero img" className="hero-img" />
        <div className="hero-content">
          <h1>세계적인 개발자 팀을 구독하고 회사의 성장을 가속화하세요!</h1>
          <p>
            전세계 엘리트 개발자들로 구성된 호카와 함께, 저렴한 비용으로 최고의
            팀을 구독해보세요!
          </p>
          <Button>문의하기</Button>
        </div>
      </section>
      <section className="info">
        <div className="back-img">
          <img src={map} alt="world map" />
          <img src={rectangle} alt="map cover" />
        </div>
        <div className="info-content">
          <h1>
            호카는 전세계 <span>엘리트 개발자</span> 를 한국 회사에 연결합니다.
          </h1>
          <div className="desc">
            <p>
              우즈베키스탄에 두 개의 지점과 베트남에 한 개의 지점을
              운영하고있으며,
            </p>
            <p>
              <span>이들의 뛰어난 영어실력과 풍부한 경력을 활용하여</span>{" "}
              한국의 회사에게 필요한 서비스를 제공합니다.
            </p>
          </div>
          <div className="cards container">
            <img src={card1} alt="card-1" />
            <img src={card2} alt="card-2" />
            <img src={card3} alt="card-3" />
          </div>
        </div>
      </section>
      <section className="prices">
        <div className="front-img">
          <img src={sumSad} alt="summertime sadness" />
          <img src={party} alt="sun" />
        </div>
        <div className="prices-content">
          <div className="desc">
            <h1>
              동급 경력의 한국 개발자 대비 <span>절반 이하의 비용</span> 과 월
              단위로 팀을 구독할 수 있습니다.
            </h1>
            <p>
              프로젝트의 변화에 따라 필요하신 스택에 맞게 경력별로 인원을 교체할
              수 있습니다. 다양한 비용 옵션을 선택하고 활용해보세요!
            </p>
            <Button>자세히보기</Button>
          </div>
          <div className="prices-list">
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
            <div className="list-desc">
              <p>
                팀으로서 3명 이상일 경우 PM 서비스와 통역 서비스를 추가하실 수
                있습니다.
              </p>
              <p>
                PM 서비스는 월 39만원, 통역 서비스는 월 29만 원이 추가됩니다.
              </p>
              <p>통역서비스는 하루에 30분 까지의 통역시간이 부여됩니다.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
