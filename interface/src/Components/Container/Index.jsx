import React from "react";

const Index = (props) => {
  return (
    <>
      <div className="shop-wrapper border-2 w-[80%] h-[80vh] m-20 mt-10 bg-slate-500 overflow-auto">
        <div className="inline-flex w-full justify-around border-b-4">
          <div className="text-4xl text-white font-extrabold p-5 place-content-center  w-full">
            Shopping Check List
          </div>
          <div className="p-10 text-xl w-1/3 text-white font-bold">
            <button
              onClick={() => props.setAddItem(true)}
              className="rounded-md text-md bg-cyan-500 px-4 py-2 hover:text-white"
            >
              Add Item
            </button>
          </div>
        </div>

        <div className="shop-body px-10 py-5">{props.children}</div>
      </div>
    </>
  );
};
export default Index;
