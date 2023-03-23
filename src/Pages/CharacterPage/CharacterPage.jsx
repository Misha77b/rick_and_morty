import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleCharacter } from "../../store/reducers/singleCharacterSlice";
import Infromations from "./components/Informations/Infromations";
import Loader from "../../components/Loader/Loader";
import "./CharacterPage.scss";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import { characterBtnStyle } from "../../components/GoBackBtn/GoBackStyles/style";

const CharacterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [canRender, setCanRender] = useState(undefined);

  const loading = useSelector((state) => state.singleCharacteReducer.loader);
  const singleCharacterData = useSelector((state) => state.singleCharacteReducer.singleCharacterData);
  const characterOrigin = useSelector((state) => state.singleCharacteReducer.characterOrigin);

  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

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
      {!canRender ? (
        <Loader />
      ) : (
        <div className="character-page">
          <GoBackBtn btnStyle={characterBtnStyle} goBack={goBack} />
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
        </div>
      )}
    </>
  );
};

export default CharacterPage;
