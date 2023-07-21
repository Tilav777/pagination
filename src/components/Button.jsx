function Button({totolePage, pageLocationFnc}) {

  return (
    <div className="btns">
        {Array.from({length: totolePage}, (_, index) => index + 1).map(index=> <button key={index} onClick={()=> pageLocationFnc(index)}>{index}</button>)}
    </div>
  )
}

export default Button