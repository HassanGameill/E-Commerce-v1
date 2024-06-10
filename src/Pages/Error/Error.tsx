import React from 'react'
import {NavLink, Link, useRouteError, isRouteErrorResponse} from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  
  let errorStatus: number;
  let errorStatusText: string;
  
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page not found";
  }
  
  
  return (
    <div className="container px-5 mx-auto text-center pt-40">
      <h1 className="text-8xl">{error.status}</h1>
      <p className="text-3xl">{error.statusText}</p>
      <Link to='/' replace={true} className="text-sm text-blue-600">
        Go to Home page
      </Link>
    </div>
  )
}

export default Error