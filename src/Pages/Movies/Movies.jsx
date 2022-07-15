import axios from "axios";
import React, { useEffect, useState } from "react";
import useGenres from "../../hooks/useGenres";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Genres from "../../components/Genres";
import SingleContent from "../../components/SingleContent/SingleContent";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenres(selectedGenres);

  const fetchDiscover = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumberOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchDiscover();
  }, [page, genreforURL]);

  return (
    <div>
      <div className="pageTitle">Movies</div>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelecedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((singleMovie) => (
            <SingleContent
              key={singleMovie.id}
              id={singleMovie.id}
              title={singleMovie.title || singleMovie.name}
              poster_path={singleMovie.poster_path}
              date={singleMovie.first_air_date || singleMovie.release_date}
              media_type="movie"
              vote_average={singleMovie.vote_average}
            />
          ))}
      </div>
      {numberOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </div>
  );
};

export default Movies;
