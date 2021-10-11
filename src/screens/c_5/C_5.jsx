import { useState } from 'react';
import './c_5.scss';

const faqs = [
  {
    id: 1,
    question: 'How many team member do you have?',
    answer: 'Around 10 person.now are working with web, mobile and AI',
  },
  {
    id: 2,
    question: 'How much money you need?',
    answer: 'It depends on need,but now i need $5000',
  },
  {
    id: 3,
    question: 'How can i contact with you?',
    answer: 'You can contact with me via facebook,email,whatsapp',
  },
];

const C_5 = () => {
  const value = [false, false, false];
  const [active, setActive] = useState(value);

  const handleClick = (index) => {
    console.log('index ', index);
    console.log(active);
    const updated = active.map((dt, ind) => (ind === index ? !dt : dt));
    setActive(updated);
  };

  console.log('state ', active);
  //   console.log(value);

  return (
    <div className="c_5">
      <img className="bg-desktop" src="/c_5/bg-pattern-desktop.svg" alt="" />
      <img className="bg-mobile" src="/c_5/bg-pattern-mobile.svg" alt="" />
      <img className="img-1" src="/c_5/illustration-box-desktop.svg" alt="" />
      <div className="container">
        <div className="image-part">
          <img
            className="img-desk"
            src="/c_5/illustration-woman-online-desktop.svg"
            alt=""
          />
          <img
            className="img-mobile"
            src="/c_5/illustration-woman-online-mobile.svg"
            alt=""
          />
        </div>
        <div className="text-part">
          <h1>FAQ</h1>
          <div className="faq-container">
            {faqs.map((data, index) => (
              <div
                key={data.id}
                className={active[index] ? 'faq active' : 'faq'}
              >
                <div
                  onClick={() => handleClick(index)}
                  className="question-container"
                >
                  <div className="question">{data.question}</div>
                  <div className="arrow">
                    <img src="/c_5/icon-arrow-down.svg" alt="" />
                  </div>
                </div>
                <div className="answer">{data.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default C_5;
