import React from "react";


export default function CardExample({ image },{art}) {
  return (
    <div className="card sm:max-w-sm">
      <div className="card-body">
        <h5 className="card-title mb-2.5">Team name</h5>
        <p>Describe the team</p>
      </div>
      <figure><img src={image} alt={art} className="w-40 h-40 object-cover" /></figure>
    </div>
  );
}
