import React from "react";
import { useState } from "react";
import Button from "./Form/Button";
import InputComponent from "./Form/Input";
import { v4 as uuid } from "uuid";
import ExitButton from "./Form/ExitButton";

export default function GamersSelect() {
  const [players, setPlayers] = useState([
    {
      name: "",
      id: uuid(),
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("handle submit");
  };

  const onClick = () => {
    setPlayers([
      ...players,
      {
        name: '',
        id: uuid(),
      }
    ])
  }

  const handleChange = (e) => {
    setPlayers(players.map(player => player.id === e.target.name ? {
      ...player,
      name: e.target.value
    } : player))
  }

  const handleClickDeleteGamer = (playerClick) => {
    console.log(playerClick)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-center text-3xl font-semibold mb-10">
          Bienvenido a Carioca
        </h1>
        <form className="w-full" onSubmit={handleSubmit}>
          {players.map((player, index) => (
            <div key={player.id} className="flex items-center space-x-2">
              <InputComponent
                type="text"
                name={player.id}
                id={player.id}
                labelText={`Jugador ${index + 1}`}
                onChange={handleChange}
              />
              <ExitButton height={"40"} onClick={() => handleClickDeleteGamer(player)} />
            </div>
          ))}

          <div className="flex columns-2 space-x-2">
            <Button type="button" text="Agregar Jugador" onClick={onClick} primary />
            <Button type="submit" text="Siguiente Paso" icon />
          </div>
        </form>
      </div>
    </>
  );
}
