import React from "react";

const ProgressBar = ({ Name, Percent }) => {
  return (
    <>
      <div className="relative pt-1 rounded-md">
        <h2 className="p-2 bg-yellow-600 text-white text-xl rounded-t-lg">
          {Name}
        </h2>
        <div className="overflow-hidden mb-4 text-xs flex rounded bg-amber-200 h-6">
          <div
            style={{ width: "10%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
          >
            {Percent}
          </div>
        </div>
      </div>
    </>
  );
};
const Index = ({ Bought, Total }) => {
  return (
    <>
      <ProgressBar Name={"Bought Cost"} Percent={Bought} />
      <ProgressBar Name={"Total Cost"} Percent={Total} />
    </>
  );
};
export default Index;
