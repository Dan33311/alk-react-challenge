import { Navigate } from "react-router-dom"

const Details = () => {
  const token = sessionStorage.getItem('token')


  return (
    <>
      { !token 
        ? 
          <Navigate to="/" />
        : 
          <h2>Movie details</h2>
      }
    </>
  )
}

export default Details