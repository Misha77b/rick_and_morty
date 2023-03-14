import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Characters.scss";
import Logo from "../../components/Logo/Logo";
import Search from "../../components/Search/Search";

import Card from "../../components/Card/Card";
import { fetchCharacters } from "../../store/reducers/charactersSlice";

const Characters = () => {
  const dispatch = useDispatch();
  const charactersInfo = useSelector(
    (state) => state.charactersReducer.charactersInfo
  );
  const charactersResults = useSelector(
    (state) => state.charactersReducer.charactersResults
  );

  console.log(charactersInfo);
  console.log(charactersResults);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <>
      <Logo />
      <Search />
      <div className="cards-container">
        {charactersResults.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              species={item.species}
            />
          );
        })}
      </div>
    </>
  );
};

export default Characters;
