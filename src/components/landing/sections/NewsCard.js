import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NewsCard = ({ title, description, date, content, image }) => {

    const navigate = useNavigate();

  const handleNewsClick = () => {
    console.log("News Clicked");

    // Redirect to news page
    const url = title.toLowerCase().split(" ").join("-");
    console.log(url);

    navigate(`/news/${url}`, { state: { title, description, date, content, image } });
  };

  return (
    <div
      onClick={handleNewsClick}
      className=" rounded-md hover:bg-[#30b3301f] overflow-hidden flex flex-col bg-[#f5faf4] cursor-pointer"
    >
      <div>
        <img src={image} />
      </div>
      <div className=" px-4 py-3">
        <h5 className=" text-[#29A744] text-xl">{title}</h5>
        <p className="font-thin text-[#8B999D]">
          <span className=" font-extrabold">{date}</span> -{description}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
