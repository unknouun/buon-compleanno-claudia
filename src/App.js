import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listVideos } from "./graphql/queries";
import { useQuery } from "react-query";
import ReactPageScroller from "react-page-scroller";
import { VideoPlayer, Message } from "./components";
import { FirstPage, SecondPage, ThirdPage } from "./pages";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "./App.css";

const AppContainer = styled.div``;

const DownAngleIcon = styled.button`
  position: fixed;
  bottom: 0;
  right: 50%;
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const UpAngleIcon = styled.button`
  position: fixed;
  top: 0;
  right: 50%;
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const VideoWrapper = styled.div`
  padding-bottom: 45px;
`;

const Copyright = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center !important;
`;

const getVideos = async () => {
  const { data } = await API.graphql(graphqlOperation(listVideos));
  let { items } = data.listVideos;
  items.sort((a, b) => a.id - b.id || a.name.localeCompare(b.name));
  return items;
};

const getVideoJsOptions = (video) => {
  return {
    autoplay: false,
    controls: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: 940,
    height: 720,
    sources: [
      {
        src: video.url,
        type: "video/mp4",
      },
    ],
  };
};

function App() {
  const { status, data, error, isFetching } = useQuery("posts", getVideos);

  const [currentPage, setCurrentPage] = useState(null);

  const getVideoSlides = (videos) => {
    let slides = [];
    videos.map((video) =>
      slides.push(
        <VideoWrapper>
          <VideoPlayer {...getVideoJsOptions(video)} />
        </VideoWrapper>
      )
    );
    return slides;
  };

  const handlePageChange = (number) => setCurrentPage(number);

  const renderIcons = (page) => {
    switch (page) {
      case 0:
        return (
          <DownAngleIcon
            value={currentPage}
            onClick={(e) => handlePageChange(e.currentTarget.value++)}
          >
            <Icon icon={faAngleDown} size="4x" />
          </DownAngleIcon>
        );
      case 1:
        return (
          <>
            <UpAngleIcon
              value={currentPage}
              onClick={(e) => handlePageChange(e.currentTarget.value--)}
            >
              <Icon icon={faAngleUp} size="4x" />
            </UpAngleIcon>
            <DownAngleIcon
              value={currentPage}
              onClick={(e) => handlePageChange(e.currentTarget.value++)}
            >
              <Icon icon={faAngleDown} size="4x" />
            </DownAngleIcon>
          </>
        );
      case 2:
        return (
          <>
            <UpAngleIcon
              value={currentPage}
              onClick={(e) => handlePageChange(e.currentTarget.value--)}
            >
              <Icon icon={faAngleUp} size="4x" />
            </UpAngleIcon>
            <Copyright>
              &copy; by <a href="https://twitter.com/benprofit">Ruben Profit</a>
            </Copyright>
          </>
        );
      default:
        return (
          <DownAngleIcon
            value={currentPage}
            onClick={(e) => handlePageChange(e.currentTarget.value++)}
          >
            <Icon icon={faAngleDown} size="4x" />
          </DownAngleIcon>
        );
    }
  };

  return (
    <AppContainer>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
      >
        <FirstPage>
          <Message />
        </FirstPage>
        <SecondPage
          {...{
            status,
            data,
            error,
            isFetching,
            getVideoSlides,
          }}
        />
        <ThirdPage />
      </ReactPageScroller>
      {renderIcons(currentPage)}
    </AppContainer>
  );
}

export default App;
