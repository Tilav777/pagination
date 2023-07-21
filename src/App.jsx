import './App.css'
import Button from './components/Button'
import Request from './components/Request'
import { useState, useEffect } from 'react'

function App() {

  const [datas, setDatas] = useState([])
    const [pageLocation, setPageLocation] = useState(1)
    const totol = 4
    const totolePage = datas.length / totol

    const end = totol * pageLocation
    const start = end - totol 

    const pageLength = datas.slice(start, end)

    function pageLocationFnc(index) {
        setPageLocation(index)
    }


    useEffect(()=> {
        async function requestFunc() {
            const res = await fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON')
            const datas = await res.json()
            return datas
        }
        requestFunc()
            .then(datas => {
                setDatas(datas)
            })

    }, [])


  return (
    <>
      <Request datas={pageLength}/>
      <Button pageLocationFnc={pageLocationFnc} totolePage={totolePage}/>
    </>
  )
}

export default App