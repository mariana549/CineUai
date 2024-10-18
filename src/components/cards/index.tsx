import React from 'react';
import favorited from "../../../public/icons/favorited.png";
import notfavorited from "../../../public/icons/notFavorited.png";
import { CardsProps } from '../../utils/interfaces';

const imgFavorite = {
  notFavorited: notfavorited,
  favorited: favorited,
};
 
export const Cards: React.FC<CardsProps> = ({ dados, onFavoriteToggle, favorites }) => {
  return (
    <>
      {dados?.map((e, i) => (
        <li key={i} style={{ border: "1px solid", margin: "10px", width: "300px" }}>
          <img src={e.Poster} alt={e.Title} />
          <h3>{e.Title}</h3>
          <span>{e.Year}</span>
          <span> {e.Type}</span>
          <img
            src={favorites[e.Title] ? imgFavorite.favorited : imgFavorite.notFavorited}
            alt="favorite"
            onClick={() => onFavoriteToggle(e.Title)}
            style={{ width: "32px", cursor: "pointer" }}
          />
        </li>
      ))}
    </>
  );
};
