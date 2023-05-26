import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../Services/MoviesService";
import { MoviesContainer } from "../styles/MoviesContainer";

export const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);
  const fetchMovie = async () => {
    const { data } = await MoviesService.getMoviesDetailsById(id);
    setMovie(data);
    console.log(data)
  }

  useEffect(() => {
    fetchMovie();
  }, [])

  return (
    <MoviesContainer>
      <h1>{movie.title}</h1>
      <h3>{movie.overview}</h3>
    </MoviesContainer>
  )
};