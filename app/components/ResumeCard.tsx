import { resumes } from "../../constants";
import {Link} from "react-router";
const ResumeCard = ({resumes}: {resumes: Resume}) => {
  return (
    <Link to={`/resume/${resumes.id}`} className="resume-card"></Link>
  )
}

export default ResumeCard