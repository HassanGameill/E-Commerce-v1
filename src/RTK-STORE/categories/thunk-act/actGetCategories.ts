
import {createAsyncThunk} from "@reduxjs/toolkit"; 
import axios from "axios";
import {TCategory} from "../../../Types/category"

type TResponse = TCategory[];




const actGetCategories = createAsyncThunk(
  'categiries/actGetCategories',
    async (_, thunkAPI) => {
      const {rejecWithValue} = thunkAPI;
      
      try {
        const res = await axios.get<TResponse>(`/category`);
        console.log(res.data)
        return res.data;
        
      }
      catch (error) {
        if (axios.isAxiosError) {
          return rejecWithValue(error.res?.data.message || error.message)
        } else {
          return rejecWithValue("An Expected Error")
        }
        
      }
    }
)


export default actGetCategories;
