import React from "react";
import "./SingleContent.css";
import { img_300, unavailable } from "../../config/config";
import { Badge } from "@mui/material";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  poster_path,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average ? vote_average : "-"}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster_path ? `${img_300}/${poster_path}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subtitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span>{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
