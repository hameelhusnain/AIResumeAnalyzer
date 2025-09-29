import { useParams } from "react-router"

const resume = () => {

    const {id} = useParams();



  return (
    <div>Resume {id}</div>
  )
}

export default resume