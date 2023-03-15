import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleCharacter } from "../../store/reducers/singleCharacterSlice";
import Infromations from "./components/Informations/Infromations";
import Loader from "../../components/Loader/Loader";
import "./CharacterPage.scss";

const CharacterPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [canRender, setCanRender] = useState(undefined);

  const loading = useSelector((state) => state.singleCharacteReducer.loader);
  const singleCharacterData = useSelector((state) => state.singleCharacteReducer.singleCharacterData);
  const characterOrigin = useSelector((state) => state.singleCharacteReducer.characterOrigin);
  console.log(singleCharacterData);
  console.log(characterOrigin);

  useEffect(() => {
    setCanRender(() => false);
    dispatch(fetchSingleCharacter(id));
  }, []);

  useEffect(() => {
    if (!loading && canRender === false) {
			setCanRender(() => true);
		}
  }, [loading]);

  return (
    <>
      {!canRender ? <Loader /> : <>
        <div className="character-info">
          <div className="img-container">
            <img
              className="character-img"
              src={singleCharacterData.image}
              alt="character image"
            />
          </div>
          <h2 className="character-info__name">{singleCharacterData.name}</h2>
          <span className="character-info__subtitle">Informations</span>
          <Infromations
            gender={singleCharacterData.gender}
            status={singleCharacterData.status}
            species={singleCharacterData.species}
            origin={characterOrigin.name}
            type={singleCharacterData.type}
          />
        </div>
      </>}
    </>
  );
};

export default CharacterPage;
