import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


const List = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token === null){
      navigate('/')
    }
  })


  return (
    <h2>List component</h2>
  );
}

export default List;