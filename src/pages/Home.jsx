import React from "react";
import PosterBanner from "../components/PosterBanner";
import MediaRow from "../components/MediaRow";
import mediaListRow from "../services/movieServices";

const Home = () => {
  return (
    <>
      <PosterBanner />
      {mediaListRow.map(({ rowId, rowName, rowLink }) => {
        return (
          <MediaRow
            key={rowId}
            rowId={rowId}
            rowTitle={rowName}
            rowUrl={rowLink}
          />
        );
      })}
    </>
  );
};

export default Home;
