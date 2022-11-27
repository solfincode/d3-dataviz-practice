import React from "react";

const Card = ({ title, body }: any) => {
  return (
    <div className="bg-slate-800 rounded-[10px] p-6 text-white">
      <h1 className="text-xl">{title}</h1>
      <p className="text-base">{body}</p>
    </div>
  );
};

export default Card;
