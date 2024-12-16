import React, { useState, useEffect } from 'react';
import MyChart from "./chart_table";
export default function CardExample() {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 lg:gap-10 p-4 sm:p-6 lg:p-20">

      <div class="card sm:max-w-m flex-1">
        <div class="card-header">
          <h5 class="card-title">백패스</h5>
        </div>
        <div class="card-body"></div>
        <MyChart name={"passes_backward"} />
        <div></div>
        <div class="card-footer text-center">
          <p class="text-base-content/50">All the game round 38 information.</p>
        </div>
      </div>

      <div class="card sm:max-w-m flex-1">
        <div class="card-header">
          <h5 class="card-title">결정적 패스</h5>
        </div>
        <div class="card-body">
          <MyChart name={"passes_critical"} />
        </div>
        <div class="card-footer text-center">
          <p class="text-base-content/50">All the game round 38 information.</p>
        </div>
      </div>

      <div class="card sm:max-w-m flex-1">
        <div class="card-header">
          <h5 class="card-title">크로스</h5>
        </div>
        <div class="card-body">
          <MyChart name={"passes_crosses"} />
        </div>
        <div class="card-footer text-center">
          <p class="text-base-content/50">All the game round 38 information.</p>
        </div>
      </div>

      <div class="card sm:max-w-m flex-1">
        <div class="card-header">
          <h5 class="card-title">전진 패스</h5>
        </div>
        <div class="card-body">
          <MyChart name={"passes_forward"} />
        </div>
        <div class="card-footer text-center">
          <p class="text-base-content/50">All the game round 38 information.</p>
        </div>
      </div>

      <div class="card sm:max-w-m flex-1">
        <div class="card-header">
          <h5 class="card-title">수평 패스</h5>
        </div>
        <div class="card-body">
          <MyChart name={"passes_horizontal"} />
        </div>
        <div class="card-footer text-center">
          <p class="text-base-content/50">All the game round 38 information.</p>
        </div>
      </div>

      <div class="card sm:max-w-m flex-1">
        <div class="card-header">
          <h5 class="card-title">공격지역 패스</h5>
        </div>
        <div class="card-body">
          <MyChart name={"passes_in_attack_area"} />
        </div>
        <div class="card-footer text-center">
          <p class="text-base-content/50">All the game round 38 information.</p>
        </div>
      </div>

      <div class="card sm:max-w-m flex-1">
        <div class="card-header">
          <h5 class="card-title">수비지역 패스</h5>
        </div>
        <div class="card-body">
          <MyChart name={"passes_in_defense_area"} />
        </div>
        <div class="card-footer text-center">
          <p class="text-base-content/50">All the game round 38 information.</p>
        </div>
      </div>

      <div class="card sm:max-w-m flex-1">
        <div class="card-header">
          <h5 class="card-title">미들지역 패스</h5>
        </div>
        <div class="card-body">
          <MyChart name={"passes_in_middle_area"} />
        </div>
        <div class="card-footer text-center">
          <p class="text-base-content/50">All the game round 38 information.</p>
        </div>
      </div>

      <div class="card sm:max-w-m flex-1">
        <div class="card-header">
          <h5 class="card-title">장거리 패스</h5>
        </div>
        <div class="card-body">
          <MyChart name={"passes_long_range"} />
        </div>
        <div class="card-footer text-center">
          <p class="text-base-content/50">All the game round 38 information.</p>
        </div>
      </div>

      <div class="card sm:max-w-m flex-1">
        <div class="card-header">
          <h5 class="card-title">중거리 패스</h5>
        </div>
        <div class="card-body">
          <MyChart name={"passes_middle_range"} />
        </div>
        <div class="card-footer text-center">
          <p class="text-base-content/50">All the game round 38 information.</p>
        </div>
      </div>

      <div class="card sm:max-w-m flex-1">
        <div class="card-header">
          <h5 class="card-title">단거리 패스</h5>
        </div>
        <div class="card-body">
          <MyChart name={"passes_short_range"} />
        </div>
        <div class="card-footer text-center">
          <p class="text-base-content/50">All the game round 38 information.</p>
        </div>
      </div>




    </div>



  );
}
