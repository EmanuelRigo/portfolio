import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-[repeat(2,1fr)] grid-rows-[repeat(3,1fr)] gap-6 justify-items-stretch  px-6  text-black">
      <div className=" bg-neutral-800 rounded-lg h-44">1</div>
      <div className=" bg-neutral-800 rounded-lg h-44">2</div>
      <div className=" bg-neutral-800 rounded-lg h-44">3</div>{" "}
      <div className=" bg-neutral-800 rounded-lg h-44">4</div>
      <div className=" bg-neutral-800 rounded-lg h-44">5</div>
      <div className=" bg-neutral-800 rounded-lg h-44">6</div>{" "}
      <div className=" bg-neutral-800 rounded-lg h-44">7</div>
      <div className=" bg-neutral-800 rounded-lg h-44">8</div>
      <div className=" bg-neutral-800 rounded-lg h-44">9</div>
    </div>
  );
};

export default page;
