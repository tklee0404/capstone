import React from "react";


const Card = ({ title, describe, url }) => {
    return (
        <div className="card w-full transition duration-300 ease-in-out">
            <div className="card-body">
                <h5 className="card-title mb-2.5">{title}</h5>

                <p class="mb-4 line-clamp-5">
                    {describe}
                </p>

                <a href={url} className="text-blue-500 hover:underline">
                    Get more
                </a>
            </div>
        </div>
    );
};

export default Card;
