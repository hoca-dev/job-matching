// import React, { useEffect } from 'react';
import {
  Footer,
  Header,
} from "../../components";
import styles from "./Contacts.module.scss";

export const ContactsRoute = () => {
  // useEffect(() => {
  //   // 스크립트를 동적으로 생성하고 설정
  //   const script = document.createElement('script');
  //   script.src = "https://opnform.com/widgets/iframeResize.min.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   // iframeResize 설정
  //   script.onload = () => {
  //     window.iFrameResize({log: false, checkOrigin: false, heightCalculationMethod: 'taggedElement'}, "#form-vah4d7");
  //   };

  //   // 컴포넌트가 언마운트될 때 스크립트 제거
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <>
      <div className={styles["header-hero"]}>
        <Header />
      </div>
      
      <section className={styles.join}>
        <iframe id="form-vah4d7" src="https://opnform.com/forms/vah4d7" style={{border: "none", marginTop: '200px',width: "60%", height: "1300px"}}></iframe>
      </section>
      <Footer />
    </>
  );
};