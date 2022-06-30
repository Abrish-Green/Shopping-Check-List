import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// initial state
export const initialState = {
  loading: false,
  error: false,
  items: [],
};

// our slice
const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setItems: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.items = payload;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

export const { setLoading, setItems, setError } = itemSlice.actions;

export const itemsSelector = (state) => state.shop;

export default itemSlice.reducer;

const api = axios.create({
  baseURL: "https://shopping-checklist-server.herokuapp.com/",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

// AddItem
export function addItem(data) {
  return async (dispatch) => {
    api
      .post("/item/add", { ...data })
      .then((response) => {
        dispatch(setItems(response.data));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
}
// Edit all items
export function updateItem(data) {
  return async (dispatch) => {
    api
      .post("/item/edit", { ...data })
      .then((response) => {
        dispatch(setItems(response.data));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
}

// Edit all items
export function deleteItem(id) {
  return async (dispatch) => {
    api
      .post("/item/delete", { id })
      .then((response) => {
        dispatch(setItems(response.data));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
}

// Fetch all items
export function fetchAllItem() {
  return async (dispatch) => {
    api
      .get("/items")
      .then((response) => {
        dispatch(setItems(response.data));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
}
