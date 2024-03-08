import { MutableRefObject, useEffect, useState } from "react";

const options = {
  root: null,
  rootMargin: "0px",
};

export const useIntersection = (
  el: MutableRefObject<Element | undefined>,
  threshold: number = 0.4
) => {
  const [isElInView, setIsElInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsElInView(true);
        }
        // else {
        //   setIsElInView(false);
        // }
      },
      { ...options, threshold }
    );

    if (el.current) {
      observer.observe(el.current);
    }

    return () => {
      if (el.current) {
        observer.unobserve(el.current);
      }
    };
  }, []);

  return isElInView;
};
