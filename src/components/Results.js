const Results = () => {

  let query = new URLSearchParams(window.location.search)
  let search = query.get('search')

  return (
    <>
      <p>Your input search: {search}</p>
    </>
  )
}

export default Results