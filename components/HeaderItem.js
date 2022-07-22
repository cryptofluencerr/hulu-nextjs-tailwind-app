import React from "react";

function HeaderItem({ title, Icon }) {
  return (
    <div className="group flex flex-col w-12 sm:w-20 cursor-pointer hover:text-white items-center">
      <Icon className="group-hover:animate-bounce mb-1 h-8" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {" "}
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
