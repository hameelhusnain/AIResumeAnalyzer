import { Link } from "react-router";

const ResumeCard = ({ resume }: { resume: Resume }) => {
  return (
    <Link to={`/resume/${resume.id}`} className="resume-card">
      {/* Add more content here if needed */}
      <div>{resume.companyName}</div>
      <div>{resume.jobTitle}</div>
    </Link>
  );
};

export default ResumeCard;