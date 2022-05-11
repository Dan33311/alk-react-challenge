// import { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom'


const List = () => {
  const navigate = useNavigate()

  let token = localStorage.getItem('token')

  // useEffect(() => {
  //   const token = localStorage.getItem('token')

  //   if(token === null){
  //     navigate('/')
  //   }
  // })


  return (
    <>

      { !token 
        ? 
          <Navigate to="/" />
        : 
          <div className="row">
            <div className="col-3">
              <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="..." alt='...'/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button onClick={() => navigate('/details')} className="btn btn-primary">Details</button>
                  {/* <Link to="/" className="btn btn-primary">Go somewhere</Link> */}
                </div>
              </div>
            </div>
          </div>
      }
    </>
  );
}

export default List;