import React from "react";
import { Carousel } from "../../components";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default ({ data, status, error, isFetching, getVideoSlides  }) => {
  return (
    <>
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <Container>
            <Carousel data={getVideoSlides(data)} />
          </Container>
          <div>{isFetching ? "Loading..." : null}</div>
        </>
      )}
      }
    </>
  );
};
