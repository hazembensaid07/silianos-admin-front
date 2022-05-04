import React from "react";

const Room = ({ room, index }) => {
  return (
    <tr>
      <td> {index}</td>
      <td> {room.nombreAdulte}</td>
      <td> {room.nombreEnfants2ans}</td>
      <td className="text-end"> {room.nombreEnfants12ans}</td>
    </tr>
  );
};

export default Romm;
