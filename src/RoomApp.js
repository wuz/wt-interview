import React, { useState, useEffect } from "react";
import RoomCard from "./RoomCard";
import { get, ROOMS_URL } from "./api";

import "./RoomApp.scss";

function RoomApp() {
  const [rooms, setRooms] = useState([]);
  const fetchData = async () => {
    const { rooms } = await get(ROOMS_URL);
    setRooms(rooms);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="RoomApp flow typescale:2 weight:300">
      <h1 className="typescale:4">Rooms</h1>
      <p className="typescale:3 txt:gray less">
        Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
        ultricies donec risus sodales. Tempus quis et.
      </p>
      <div className="grid">
        {rooms.map((room) => (
          <RoomCard room={room} key={room.name}/>
        ))}
      </div>
    </div>
  );
}

export default RoomApp;
