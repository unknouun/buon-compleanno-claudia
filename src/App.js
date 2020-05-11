import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listVideos } from "./graphql/queries";
import { useQuery } from "react-query";
import ReactPageScroller from "react-page-scroller";
import { VideoPlayer, Message } from "./components";
import { FirstPage, SecondPage } from "./pages";
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

const getVideos = async () => {
  const { data } = await API.graphql(graphqlOperation(listVideos));
  let { items } = data.listVideos;
  items.sort((a, b) => a.id - b.id || a.name.localeCompare(b.name));
  return items;
};

const getVideoJsOptions = video => {
  return {
    autoplay: false,
    controls: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: 940,
    height: 720,
    sources: [
      {
        src: video.url,
        type: "video/mp4"
      }
    ]
  };
};

function App() {
  const { status, data, error, isFetching } = useQuery("posts", getVideos);

  const [currentPage, setCurrentPage] = useState(null);

  const getVideoSlides = videos => {
    let slides = [];
    videos.map(video =>
      slides.push(
        <VideoWrapper>
          <VideoPlayer {...getVideoJsOptions(video)} />
        </VideoWrapper>
      )
    );
    return slides;
  };

  const handlePageChange = number => setCurrentPage(number);
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
            getVideoSlides
          }}
        />
      </ReactPageScroller>
      {!!currentPage && (
        <UpAngleIcon
          value={currentPage}
          onClick={e => handlePageChange(e.currentTarget.value--)}
        >
          <Icon icon={faAngleUp} size="6x" />
        </UpAngleIcon>
      )}
      {currentPage < 1 && (
        <DownAngleIcon
          value={currentPage}
          onClick={e => handlePageChange(e.currentTarget.value++)}
        >
          <Icon icon={faAngleDown} size="6x" />
        </DownAngleIcon>
      )}
    </AppContainer>
  );
}

export default App;
