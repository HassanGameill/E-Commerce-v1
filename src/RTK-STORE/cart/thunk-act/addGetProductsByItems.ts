
import {createAsyncThunk} from "@reduxjs/toolkit"; 
import {RootState} from "../../store"; 
import axios from "axios";
import {TProducts} from "../../../Types/products"


type TResponse = TProducts[];

const addGetProductsByItems = createAsyncThunk(
  "cart/addGetProductsByItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsId = Object.keys(cart.items);

    if (!itemsId.length) {
      return fulfillWithValue([]);
    }

    try {
      const concatenatedItemsId = itemsId.map((el) => `id=${el}`).join("&");
      const response = await axios.get<TResponse>(
        `/products?${concatenatedItemsId}`
      );
      console.log("R Cart Data",response.data)
      return response.data;
    } 
    catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);




export default addGetProductsByItems;


