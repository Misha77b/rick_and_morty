import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Characters.scss";

import Card from "../../components/Card/Card";
import { fetchCharacters } from "../../components/store/reducers/charactersSlice";

const Characters = () => {
  const dispatch = useDispatch();
  const charactersInfo = useSelector((state) => state.charactersReducer.charactersInfo);
  const charactersResults = useSelector((state) => state.charactersReducer.charactersResults);
  
  console.log(charactersInfo);
  console.log(charactersResults);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <div className="cards-container">
      {charactersResults.map((item) => {
        return (
          <Card 
            image={item.image} 
            name={item.name} 
            species={item.species} 
          />
        );
      })}
    </div>
  );
};

export default Characters;
