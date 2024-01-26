import "./App.scss";
import logo from "./assets/images/logo.svg";
import heroImg from "./assets/images/Group 79.png";
import { Button } from "./components";

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
    </>
  );
};

export default App;
