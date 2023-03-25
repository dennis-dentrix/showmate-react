import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';

import {Card} from '../components/Card'

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  // to change the title of the current page
  useTitle(title)
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

