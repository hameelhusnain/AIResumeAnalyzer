import { resumes } from "../../constants";
import {Link} from "react-router";
const ResumeCard = () => {
  return (
    <Link to={`/resume/${resumes.id}`}>ResumeCard</Link>
  )
}

export default ResumeCard