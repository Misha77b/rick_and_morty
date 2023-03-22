import React, { useState } from "react";
import Card from "../../Card/Card";

const Pagination = ({ characters }) => {
  return (
    <>
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
    </>
  );
};

export default Pagination;
