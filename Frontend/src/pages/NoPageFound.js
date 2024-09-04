import React from "react";

function NoPageFound() {
  return (
    <div class="grid h-screen px-4 bg-white place-content-center">
      <div class="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 768"
          class="w-auto h-56 mx-auto text-black sm:h-64"
        >
          <g fill="none" fill-rule="evenodd">
            <g fill="#FF5678">
            
            </g>
            <g fill="currentColor">
             
            </g>
          </g>
        </svg>

        <h1 class="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh! 404 Error
        </h1>

        <p class="mt-4 text-gray-500">We can't find that page.</p>
      </div>
    </div>
  );
}

export default NoPageFound;
