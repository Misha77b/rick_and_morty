import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleCharacter } from '../../store/reducers/singleCharacterSlice';
import "./CharacterPage.scss";
import Infromations from './components/Informations/Infromations';

const CharacterPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const singleCharacterData = useSelector((state) => state.singleCharacteReducer.singleCharacterData);
  const characterOrigin = useSelector((state) => state.singleCharacteReducer.characterOrigin);
  console.log(singleCharacterData);
  console.log(characterOrigin);

  useEffect(() => {
    dispatch(fetchSingleCharacter(id));
  }, [])

  return (
    <div className='character-info'>
      <div className='img-container'>
        <img className='character-img' src={singleCharacterData.image} alt="character image" />
      </div>
      <h2 className='character-info__name'>{singleCharacterData.name}</h2>
      <span className='character-info__subtitle'>Informations</span>
      <Infromations 
        gender={singleCharacterData.gender} 
        status={singleCharacterData.status} 
        specie={singleCharacterData.specie} 
        origin={characterOrigin.name} 
        type={singleCharacterData.type} 
      />
    </div>
  )
}

export default CharacterPage