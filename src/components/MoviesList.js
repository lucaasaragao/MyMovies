import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
  <section>
    <ul>
      <li>
        {movies.map(m => <MovieItem key={m.id} title={m.title}/>)}        
      </li>
    </ul>
  </section>
);