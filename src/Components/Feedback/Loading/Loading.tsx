import React from 'react'
import {TLoading} from '../../../Types/Shared'

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
};

const Loading = ({ status, error, children }: LoadingProps) => {
  if (status === "pending") {
    return <div className="loading_data">loading please wait.. </div>;
  }
  if (status === "failed") {
    return <div>{error}</div>;
  }
  
  return <div>{children}</div>;
};



export default Loading