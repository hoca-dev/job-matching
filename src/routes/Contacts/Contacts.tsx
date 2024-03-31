import React, { useEffect, useState } from 'react';
import { Footer, Header } from "../../components";
import styles from "./Contacts.module.scss";

export const ContactsRoute = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [iframeOpacity, setIframeOpacity] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 20;
      });
    }, 600);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  

  // iframe 로드 완료 후 opacity를 0에서 1로 0.5초 동안 변경
  const opacityTimer = setInterval(() => {
    setIframeOpacity((prevOpacity) => {
      if (prevOpacity >= 1) {
        clearInterval(opacityTimer);
        return 1;
      }
      return prevOpacity + 0.1;
    });
  }, 50);
};

return (
  <>
    <div className={styles["header-hero"]}>
      <Header />
    </div>

    <section className={styles.join}>
      <div style={{ display: "block", justifyContent: "center", alignItems: "center", height: "100vh", marginTop: "100px" }}>
        {!iframeLoaded && (
          <div style={{ color: "white", fontSize: "2rem", textAlign: "center", marginBottom: "200px" }}>
            <div>팀빌딩 요청서가 로드 중입니다. 잠시만 기다려주세요.</div>
            <div style={{  width: "300px", height: "20px", backgroundColor: "#f0f0f0", margin: "20px auto" }}>
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  backgroundColor: "#4CAF50",
                  transition: "width 1s ease-in-out",
                }}
              ></div>
            </div>
          </div>
        )}
        <div style={{ width: "100%", height: "calc(100vh + 100px)", overflow: "hidden" }}>
          <iframe
            id="form-vah4d7"
            src="https://app.retable.io/form/ngIXpBKSEfevApbd"
            style={{
              border: "none",
              width: "80%",
              maxWidth: "900px",
              height: "1500px",
              display: iframeLoaded ? "block" : "none",
              opacity: iframeOpacity,
              transition: "opacity 0.5s ease-in-out",
              marginTop: "-200px",
              marginLeft: "auto",
              marginRight: "auto",
              
            }}
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
      </div>
    </section>
    <Footer />
  </>
);
};