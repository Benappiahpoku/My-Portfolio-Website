import React from "react";

export default function Title({
  ptext = "Title Component",
  h2text = "SubTitle Component",
  classes,
}) {
  return (
    <div className={`title ${classes}`}>
      <p>{ptext}</p>
      <h2>{h2text}</h2>
    </div>
  );
}
