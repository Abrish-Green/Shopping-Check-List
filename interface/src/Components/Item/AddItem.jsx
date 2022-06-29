import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../Service/Features/Shop/ShopSlice";
import { useForm } from "react-hook-form";
const AddItem = (props) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(true);
  const onSubmit = (data) => {
    dispatch(addItem(watch()));
    props.setAddItem(false);
  };

  return (
    <>
      {open && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="m-4 w-4/5 h-auto bg-slate-300 border-l-4 text-black border-l-green-700 flex-col rounded-md">
            <div className="text-xl p-3">
              <input
                className="w-2/3 p-2 m-2 border rounded-md"
                placeholder="Name"
                required
                name="item_name"
                {...register("item_name", { required: true })}
              />
              {errors.item_name && <span>This field is required</span>}
            </div>
            <div className="text-md p-3 px-5 border-t border-red-400">
              <textarea
                className="p-2 w-2/3 h-20 border rounded-lg"
                placeholder="Descritiption"
                name="item_descripition"
                {...register("item_descripition", { required: true })}
              ></textarea>
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div className="text-md p-3 px-5 grid lg:inline-flex gap-2">
              <div className="italic text-gray-400">
                <input
                  type="datetime-local"
                  className="w-3/4 p-2 m-1 border rounded-md"
                  placeholder="Time to Buy"
                  required
                  name="time_to_buy"
                  {...register("time_to_buy", { required: true })}
                />
                {errors.time_to_buy && <span>This field is required</span>}
              </div>
              <div className="text-md font-extralight text-red-800">
                <input
                  type="number"
                  className="w-2/4 p-2 m-2 border rounded-md"
                  placeholder="Cost"
                  required
                  name="item_cost"
                  {...register("item_cost", { required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </div>
            </div>
            <div className="text-md p-3 px-10 grid md:inline-flex gap-5">
              <div className="italic text-white">
                <button
                  onSubmit={() => {}}
                  className="rounded-md text-md bg-green-400 px-6 py-2 hover:text-black"
                >
                  Save
                </button>
              </div>
              <div className="italic text-white">
                <button
                  onClick={() => props.setAddItem(false)}
                  className="rounded-md text-md bg-red-400 px-6 py-2 hover:text-black"
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default AddItem;
