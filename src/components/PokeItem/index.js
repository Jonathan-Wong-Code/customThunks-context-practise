import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { usePokeDispatchContext } from "../../context/pokemon";
const PokeCell = styled.li`
  height: 300px;
  background: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgWrapper = styled.div`
  height: 200px;
  width: 200px;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
`;

const H3 = styled.h3`
  font-size: 24px;
  font-weight: bolder;
  text-transform: uppercase;
`;

export default function PokeItem({ name, sprites, type, id }) {
  const { addPokemon, removePokemon } = usePokeDispatchContext();
  const history = useHistory();
  const handleClick = () => {
    type === "ADD" ? addPokemon({ name, sprites }) : removePokemon(id);
    history.push("/saved");
  };

  return (
    <PokeCell>
      <H3>{name}</H3>
      <ImgWrapper>
        <Img src={sprites.front_default} alt={name} />
      </ImgWrapper>
      {type === "ADD" ? (
        <button onClick={handleClick}>Add to My List!</button>
      ) : (
        <button onClick={handleClick}>Remove from My List!</button>
      )}
    </PokeCell>
  );
}
