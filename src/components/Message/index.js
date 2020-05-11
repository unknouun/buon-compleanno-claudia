import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 65px;
  margin-left: 30px;
  margin-bottom: 120px;
  cursor: pointer;
  background: -webkit-linear-gradient(#FF1053, #FFD166);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeIn ease 4s;
  -webkit-animation: fadeIn ease 4s;
  -moz-animation: fadeIn ease 4s;
  -o-animation: fadeIn ease 4s;
  -ms-animation: fadeIn ease 4s;
  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-moz-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-webkit-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-o-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-ms-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
  }
`;

const Message = styled.p`
  font-size: 24px;
  margin: 60px;
  animation: fadeIn ease 8s;
  -webkit-animation: fadeIn ease 8s;
  -moz-animation: fadeIn ease 8s;
  -o-animation: fadeIn ease 8s;
  -ms-animation: fadeIn ease 8s;
  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
  }
`;

export default () => {
  const [language, setLanguage] = useState("Eng");

  const handleLangChange = () => {
    if (language === "Eng") {
      setLanguage("Itl");
    } else {
      setLanguage("Eng");
    }
  };

  const getAge = () => {
    let dob = "05/11/1990";
    let now = new Date();
    let birthdate = dob.split("/");
    let born = new Date(birthdate[2], birthdate[0] - 1, birthdate[1]);
    let age = () => {
      let birthday = new Date(
        now.getFullYear(),
        born.getMonth(),
        born.getDate()
      );
      if (now >= birthday) return now.getFullYear() - born.getFullYear();
      else return now.getFullYear() - born.getFullYear() - 1;
    };
    return age();
  };

  return (
    <div>
      <Title onClick={handleLangChange}>
        {`${language === "Eng" ? "Happy Birthday" : "Buon Compleanno"} Claudia `}
        <span role="img" aria-label="heart">❤️</span>
      </Title>
      <Message>
        {`With much love I want to tell you that today is a very special one because it is the day
        you were brought into this world and by fate or chance, you came into my life and spread
        absolute joy.`}
      </Message>
      <Message>
        {`In your ${getAge()} years on this earth you've touched the lives of many. If one were to
        count your age by the smiles, the laughs, and hope you've helped create you'd be pretty damn
        old `}
        <span role="img" aria-label="kiss">😘</span>
      </Message>
      <Message>
        {`Bad jokes aside, I love you.`}
      </Message>
      <Message>
        {`Below you'll find a few people who'd agree that today is a wonderful day and wants to wish
        you a happy birthday and best wishes.`}
      </Message>
    </div>
  );
};
