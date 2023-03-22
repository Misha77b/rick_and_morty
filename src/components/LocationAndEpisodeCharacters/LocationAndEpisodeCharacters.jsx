import React from "react";
import "./LocationAndEpisodeCharacters.scss";
import Card from "../Card/Card";

const LocationAndEpisodeCharacters = ({ characters }) => {
  return (
    <>
      <div className="locationCards-container">
        {characters.length < 1 && <span>No characters</span>}
        {Array.isArray(characters) ? (
          characters.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                species={item.species}
              />
            );
          })
        ) : (
          <Card
            key={characters.id}
            id={characters.id}
            image={characters.image}
            name={characters.name}
            species={characters.species}
          />
        )}
      </div>
    </>
  );
};

export default LocationAndEpisodeCharacters;
