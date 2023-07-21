function Request({datas}) {

  return (
    <div className='cards'>
        {datas.map((data) => {
            return (
                <div className="card" key={data.imdbID}>
                    <img src={data.Images[0]} alt={data.Director} width={400} height={300}/>
                    <h3>{data.Title}</h3>
                    <p>Tili: {data.Language}</p>
                    <p>Actors: {data.Actors}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Request