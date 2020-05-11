import React, { useState } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.div``;

const ArrowLeftIcon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const ArrowRightIcon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default ({ data }) => {
  const [value, setValue] = useState(0);

  const onChange = value => setValue(value);


  return (
    <Container>
      {data ? (
        <div>
          <Carousel
            slides={data}
            arrowLeft={
              <ArrowLeftIcon>
                <Icon icon={faAngleLeft} size="3x" />
              </ArrowLeftIcon>
            }
            arrowRight={
              <ArrowRightIcon>
                <Icon icon={faAngleRight} size="3x" />
              </ArrowRightIcon>
            }
            onChange={onChange}
            value={value}
            addArrowClickHandler
            centered
            infinite
          />
          <Dots value={value} onChange={onChange} number={data.length} />
        </div>
      ) : null}
    </Container>
  );
};
