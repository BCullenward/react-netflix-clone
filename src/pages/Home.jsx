import React from "react";
import PosterBanner from "../components/PosterBanner";
import MediaRow from "../components/MediaRow";
import endpoints from "../services/movieServices";

const Home = () => {
  return (
    <>
      <PosterBanner />
      <MediaRow title="upcoming" url={endpoints.upcoming} />
      <MediaRow title="trending" url={endpoints.trending} />
      <MediaRow title="top rated" url={endpoints.topRated} />
      <MediaRow title="popular" url={endpoints.popular} />
      <MediaRow title="comedy" url={endpoints.comedy} />
    </>
  );
};

export default Home;
