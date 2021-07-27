import React from "react";
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// Components
import HeroImage from "./HeroImage/HeroImage";
import Grid from "./Grid/Grid";
import Card from "./Card_img/Card";
import { Spinner } from "./Spinner/Spinner.styles";
import SearchBar from "./SearchBar/SearchBar";
import Button from "./Button/Button";
// Hook
import { useHomeFetch } from "./hooks/useHomeFetch";
// Image
import NoImage from "../images/noImage.jpg";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setLoadingMore } =
    useHomeFetch();

  //console.log(state);

  if (error) return <div>Algo Salio mal...</div>;

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Resultado" : "Popular Movie"}>
        {state.results.map((movie) => (
          <Card
            key={movie.id}
            clickCard
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Cargar Más" callBack={() => setLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
