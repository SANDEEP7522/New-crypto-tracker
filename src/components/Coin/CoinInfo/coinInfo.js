import React, { useState } from "react";
import "./coinInfo.css";

function CoinInfo({ heading, desc }) {
  const shortDec =
    desc.slice(0, 200) + "<span style='color:#6c6cbf ' >  Read More...<span/>";
  const longDesc =
    desc + "<span style='color:#6c6cbf' >  Read Less...<span/>";

  const [flag, setFlag] = useState(false);

  return (
    <div className="gray-wrapper">
      <h2 className="coin-info-heading">{heading}</h2>
      {desc.length > 200 ? (
        <p
          onClick={() => setFlag(!flag)}
          className="coin-info-desc"
          dangerouslySetInnerHTML={{ __html: !flag ? shortDec : longDesc }}
        />
      ) : (
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      )}
    </div>
  );
}

export default CoinInfo;
