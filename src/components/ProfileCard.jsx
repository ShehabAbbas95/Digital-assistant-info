import React from "react";

function ProfileCard(props) {
  const { title, handle, image } = props;
  return (
    <div className="columns-1  rounded bg-zinc-50 p-2">
      <img src={image} alt="Logo" className="w-full" />
      <h1> {title}</h1>
      <p className="underline"> {handle} </p>
    </div>
  );
}

export default ProfileCard;
