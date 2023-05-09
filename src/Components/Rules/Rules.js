import React, { useState } from "react";

import "./rules.css";
import rulesImage from "../../assets/images/image-rules.svg";
import close from "../../assets/images/icon-close.svg";

export const Rules = () => {
  const [openRules, setOpenRules] = useState(true);

  return (
    <>
      <div className="btn-rule-box">
        <button className="btn-rules" onClick={() => setOpenRules(true)}>
          Rules
        </button>
      </div>
      <div
        className="rules-box"
        style={openRules ? { display: "flex" } : { display: "none" }}
      >
        <div className="rules-text-box">
          <p>Rules</p>
          <div onClick={() => setOpenRules(false)}>
            <img src={close} />
          </div>
        </div>
        <div className="rule-img-box">
          <img src={rulesImage} />
        </div>
        <div
          className="close-rule-responsive"
          onClick={() => setOpenRules(false)}
        >
          <img src={close} />
        </div>
      </div>
    </>
  );
};
