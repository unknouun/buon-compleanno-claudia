import React from "react";
import styled from "styled-components";

const Birthday = styled.div`
  font-size: 36px !important;
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

const Message = styled.p``;

export default () => {
  const get_age = (born, now) => {
    let birthday = new Date(now.getFullYear(), born.getMonth(), born.getDate());
    if (now >= birthday) 
      return now.getFullYear() - born.getFullYear();
    else
      return now.getFullYear() - born.getFullYear() - 1;
  };

  const getAge = () => {
    let dob = "05/11/1990";
    let now = new Date();
    let birthdate = dob.split("/");
    let born = new Date(birthdate[2], birthdate[1] - 1, birthdate[0]);
    let age = get_age(born, now);
    return age;
  };

  console.log(getAge());
  return (
    <div>
      <Birthday>Happy Birthday Boo Boo</Birthday>
      <Message>{ getAge() }</Message>
    </div>
  );
};
