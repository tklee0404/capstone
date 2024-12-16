import React, { useState, useEffect } from 'react';
import MyChart from "../UI/chart_table";
export default function CardExample() {
 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 lg:gap-10 p-4 sm:p-6 lg:p-20">

    <div class="card sm:max-w-m flex-1">
      <div class="card-header">
        <h5 class="card-title">막힌 슈팅</h5>
      </div>
      <div class="card-body"></div>
      <MyChart name={"Shots Blocked"} />
      <div></div>
      <div class="card-footer text-center">
        <p class="text-base-content/50">All the game round 38 information.</p>
      </div>
    </div>

    <div class="card sm:max-w-m flex-1">
      <div class="card-header">
        <h5 class="card-title"> PA 내부 슈팅</h5>
      </div>
      <div class="card-body"></div>
      <MyChart name={"Shots in PA"} />
      <div></div>
      <div class="card-footer text-center">
        <p class="text-base-content/50">All the game round 38 information.</p>
      </div>
    </div>

    <div class="card sm:max-w-m flex-1">
      <div class="card-header">
        <h5 class="card-title">유효 슈팅</h5>
      </div>
      <div class="card-body"></div>
      <MyChart name={"Shots on Target"} />
      <div></div>
      <div class="card-footer text-center">
        <p class="text-base-content/50">All the game round 38 information.</p>
      </div>
    </div>

    <div class="card sm:max-w-m flex-1">
      <div class="card-header">
        <h5 class="card-title">PA 외부 슈팅</h5>
      </div>
      <div class="card-body"></div>
      <MyChart name={"Shots out of PA"} />
      <div></div>
      <div class="card-footer text-center">
        <p class="text-base-content/50">All the game round 38 information.</p>
      </div>
    </div>

    <div class="card sm:max-w-m flex-1">
      <div class="card-header">
        <h5 class="card-title">무효 슈팅</h5>
      </div>
      <div class="card-body"></div>
      <MyChart name={"Shots out of Bounds"} />
      <div></div>
      <div class="card-footer text-center">
        <p class="text-base-content/50">All the game round 38 information.</p>
      </div>
    </div>
  </div>



  );
}
