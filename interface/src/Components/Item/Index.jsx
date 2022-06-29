import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../Service/Features/Shop/ShopSlice";
import { EditComponent } from "./EditComponent.jsx";

const Index = ({ data }) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const [editData, setEditData] = React.useState({
    item_name: data.item_name,
    time_to_buy: data.time_to_buy,
    item_cost: data.item_cost,
    item_descripition: data.item_descripition,
    item_bought: data.item_bought,
  });
  const [edit, setEdit] = React.useState(false);
  const dispatch = useDispatch();

  if (edit) {
    return (
      <>
        <EditComponent data={editData} />
      </>
    );
  }
  if (!edit) {
    return (
      <>
        <div
          className={`m-4 w-4/5 h-auto bg-slate-100 border-l-4 ${
            data.item_bought ? "border-l-green-700" : "border-l-red-700"
          }  flex-col rounded-md`}
        >
          <div className="text-xl w-full p-3 inline-flex justify-between">
            <div>{data.item_name}</div>
            <div className="border ml-10 text-sm rounded-md bg-green-400 p-2 ">
              <label htmlFor="bought">Bought</label>
              <input
                id="bought"
                type={"checkbox"}
                className="ml-2 p-5 text-2xl accent-orange-600"
                placeholder="Bought"
              />
            </div>
          </div>
          <div className="text-md p-3 italic indet-2 px-6 border-t border-red-400">
            {data.item_descripition}
          </div>
          <div className="text-md w-full px-5 grid">
            <div className="text-md font-extralight text-red-800 flex-col">
              <div className="px-2 font-extrabold text-lg">
                Price ${data.item_cost}
              </div>
            </div>
            <div className="italic px-2 text-gray-600">
              {new Date(data.time_to_buy).toLocaleDateString(
                undefined,
                options
              )}
            </div>
          </div>
          <div className="text-md p-3 px-5 inline-flex gap-8">
            <div className="italic text-black">
              <button
                onClick={() => {
                  setEdit(true);
                }}
                className="rounded-md text-md bg-cyan-500 px-4 py-2 hover:text-white"
              >
                Edit
              </button>
            </div>
            <div className="text-md text-black">
              <button
                onClick={() => {
                  dispatch(deleteItem({ id: data._id }));
                }}
                className="rounded-md text-md bg-red-500 px-4 py-2 hover:text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Index;
