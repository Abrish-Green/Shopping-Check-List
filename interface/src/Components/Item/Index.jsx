import React from "react";

const Index = () => {
  return (
    <>
      <div className="m-4 w-4/5 h-auto bg-slate-100 border-l-4 border-l-red-700 flex-col rounded-md">
        <div className="text-xl p-3">Name</div>
        <div className="text-md p-3 px-5 border-t border-red-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ex
          enim veniam accusamus omnis, corrupti eum vero est praesentium,
          suscipit sint culpa voluptate dicta obcaecati repudiandae atque
          nesciunt. Quos, ducimus?
        </div>
        <div className="text-md p-3 px-5 inline-flex gap-8">
          <div className="italic text-gray-400">12:00 ago</div>
          <div className="text-md font-extralight text-red-800">
            <strong className="text-md text-green-700">Cost</strong> $12
          </div>
        </div>
        <div className="text-md p-3 px-5 inline-flex gap-8">
          <div className="italic text-black">
            <button className="rounded-md text-md bg-cyan-500 px-4 py-2 hover:text-white">
              Edit
            </button>
          </div>
          <div className="text-md text-black">
            <button className="rounded-md text-md bg-red-500 px-4 py-2 hover:text-white">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
