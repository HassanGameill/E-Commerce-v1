

import {isAxiosError} from "axios";

const axiosErrorHandler = (error: unknown) => {
   if (isAxiosError()) {
      return error.response?.data.message || error.message;
    } else {
     return "An unexpected error";
    }
}

export default axiosErrorHandler;