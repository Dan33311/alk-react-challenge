const searchBar = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const keyword = event.currentTarget.keyword.value
    console.log(keyword);  
  }

  return (
    <form className="d-flex align-items-center" onSubmit={handleSubmit}>
      <label className="me-2">
        <input className="form-control" type="text" name="keyword"/>
      </label>
      <button className="btn btn-primary py-1">Search</button>
    </form>
  )
}

export default searchBar