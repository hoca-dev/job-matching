import classNames from "classnames";
import styles from "./AdvantagesContent.module.scss";
import group1 from "../../assets/images/Group 46.png";
import group2 from "../../assets/images/Group 47.png";
import arrowBottom from "../../assets/images/Polygon 1.svg";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import arrowRight from "../../assets/images/Vector (1).svg";

export const AdvantagesContent = () => (
  <div className={classNames(styles["advantages-content"], "container")}>
    <div className={styles.comparison}>
      <div className={classNames(styles.others, styles["comparison-card"])}>
        <div className={styles.heading}>
          <h2>기존 해외개발자 알선 회사</h2>
          <img src={group1} alt="other company team" />
        </div>
        <div className={styles.points}>
          <ul>
            <li>서비스 비용</li>
            <li>법적 책임</li>
            <li>업무 형태</li>
            <li>급여 책정</li>
          </ul>
          <ul>
            <li>매달 고정 비용 추가, 추가 서비스 없음</li>
            <li>채용 후 법적 업무를 이용 회사에 전가</li>
            <li>채용알선업, 채용 후 노동자에 대한 법적 책임 없음</li>
            <li>
              채용 인력의 급여에 비례한 보수, 저연차 개발자에 대해 과다한 급여
              책정
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["arrow-bottom"]}>
        <img src={arrowBottom} alt="arrow bottom" />
      </div>
      <div className={classNames(styles.hoca, styles["comparison-card"])}>
        <div className={styles.heading}>
          <h2>호카 Team 서비스</h2>
          <img src={group2} alt="hoca team" />
        </div>
        <div className={styles.points}>
          <ul>
            <li>서비스 비용</li>
            <li>법적 책임</li>
            <li>업무 형태</li>
            <li>급여 책정</li>
          </ul>
          <ul>
            <li>
              프로젝트 가이드, 인력 관리, 프로젝트 매니징, 통역 등 지속적인
              서비스 제공
            </li>
            <li>
              민사전문변호사와 개발자가 창업, 해외 로펌과 협력하여 법률 업무를
              해결
            </li>
            <li>
              채용알선업과 파견업 등록, 파견업으로 서비스 운용하여 법률 리스크
              감소
            </li>
            <li>연차에 따른 고정비용, 근무에 맞지 않는 개발자 교체 가능</li>
          </ul>
        </div>
      </div>
      <Link to="#" className={classNames(styles.link, styles["link-desktop"])}>
        <span>더 자세한 정보를 원하시면 클릭해주세요</span>
        <img src={arrowRight} alt="arrow right icon" />
      </Link>
      <Link to="#" className={classNames(styles.link, styles["link-mobile"])}>
        <Button>자세히 보기</Button>
      </Link>
    </div>
  </div>
);
