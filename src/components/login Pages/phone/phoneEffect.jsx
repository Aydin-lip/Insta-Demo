import { useEffect } from "react";

const PhoneEffect = () => {
  useEffect(() => {
    const imgs = document.querySelectorAll(".divMain img");
    let index = 0;
    setInterval(() => {
      if (index > 0) {
        imgs[index - 1].classList.remove("active");
      }
      if (index === 4) {
        index = 0;
      }
      imgs[index].classList.add("active");
      index++;
    }, 5000);
  }, []);

  return (
    <>
      <div className="divMain">
        <div className="position-relative">
          <img
            className="position-absolute end-0"
            src="/imgs/phoneEffect/a4fd825e3d49.png"
            alt="screenshot chat"
          />
          <img
            className="position-absolute end-0"
            src="/imgs/phoneEffect/4d62acb667fb.png"
            alt="screenshot page"
          />
          <img
            className="position-absolute end-0"
            src="/imgs/phoneEffect/94edb770accf.png"
            alt="screenshot story"
          />
          <img
            className="position-absolute end-0"
            src="/imgs/phoneEffect/fdfe239b7c9f.png"
            alt="screenshot homePage"
          />
        </div>
      </div>
    </>
  );
};

export default PhoneEffect;
