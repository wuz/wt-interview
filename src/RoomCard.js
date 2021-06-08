import React, { useState } from "react";
import Button from "./components/Button";
import ActionPane from "./components/ActionPane";
import { post, BOOK_URL } from "./api";

import "./RoomCard.scss";

const RoomCard = ({ room }) => {
  const [roomState, setRoomState] = useState({ ...room, booked: false });
  const bookRoom = async () => {
    const { success } = await post(BOOK_URL, {
      // some data here
      id: room.name,
    });
    setRoomState({
      ...room,
      spots: room.spots - 1,
      booked: success,
    });
  };
  return (
    <div className="room-card flow">
      <div className="thumbnail">
        <img src={roomState.thumbnail} alt={`Room ${roomState.name}`} />
      </div>
      <ActionPane>
        <ActionPane.Description>
          <h1 className="weight:700">{roomState.name}</h1>
          <h2 className="txt:brand">{roomState.spots} spots remaining</h2>
        </ActionPane.Description>
        <Button onClick={bookRoom} disabled={roomState.booked}>
          {!roomState.booked ? "Book!" : "Booked!"}
        </Button>
      </ActionPane>
    </div>
  );
};

export default RoomCard;
