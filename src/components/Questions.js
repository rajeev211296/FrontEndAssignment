import { useState } from "react";
import React from "react";

const Questions = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="wrapper">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const data = [
  {
    question: "What do I have to do in the study?",
    answer:
      "Participate in various study activities,such as screening visit,eleigibility review",
  },
  {
    question: "How long is the Study?",
    answer:
      "The study will last about 14 weeks,including 6 weeks using the study ointment and 4 weeks of follow-up",
  },
  {
    question: "Can I continue to wear compression socks during the study?",
    answer:
      "Since compression stockings are often recommended foe those suffering from Stasis Deramitis",
  },
  {
    question: "What is an at-home clinical study?",
    answer:
      "An at-home (or remote) clinical study is one in which you can fully practice at your home",
  },
];

export default Questions;
