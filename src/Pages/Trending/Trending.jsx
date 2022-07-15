import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import "./Trending.css";
import { Box } from "@mui/material";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  // useEffect(() => {
  //   console.log(content);
  // }, [content]);
  const fetchTrending = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
    // console.log(response);
    // const { data } = response;
    // console.log(data);
    // console.log(data.results);
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <Box></Box>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((singleMovie) => (
            <SingleContent
              key={singleMovie.id}
              id={singleMovie.id}
              title={singleMovie.title || singleMovie.name}
              poster_path={singleMovie.poster_path}
              date={singleMovie.first_air_date || singleMovie.release_date}
              media_type={singleMovie.media_type}
              vote_average={singleMovie.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
