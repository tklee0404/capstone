import React from "react";


export default function CardExample({ image }, { art }) {
  return (
    <div className="card sm:max-w-lg md:max-w-xl lg:max-w-2xl">

      <div class="card sm:card-side max-w-sm sm:max-w-full">
        <figure><img src={image} alt={art} className=" object-cover" /></figure>
        <div class="card-body">
          <h5 class="card-title mb-2.5"> Team name</h5>
          <p class="mb-3">Describe Describe Describe Describe</p>
          <div class="card-actions">
            <button class="btn btn-primary">Get more</button>
            <button class="btn btn-secondary btn-soft">Add to cart</button>
          </div>
        </div>
      </div>
    </div>



  );
}
