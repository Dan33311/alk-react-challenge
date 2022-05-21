import swAlert from "@sweetalert/with-react"
import { useNavigate } from "react-router-dom"


const SearchBar = () => {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const keyword = event.currentTarget.keyword.value.trim() // trim -> clean white spaces at start and end
    console.log(keyword);  

    if (keyword.length === 0) {
      swAlert(<p>Please use characters in search</p>)
    } else if (keyword.length < 4) {
      swAlert(<p>More than four characters neccesary</p>);
    } else {
      event.currentTarget.keyword.value = ""
      navigate(`/results?search=${keyword}`)
    }
  }


  return (
    <form className="d-flex align-items-center" onSubmit={handleSubmit}>
      <label className="me-2">
        <input className="form-control form-control-sm" type="text" name="keyword"/>
      </label>
      <button className="btn btn-primary py-1">Search</button>
    </form>
  )
}

export default SearchBar