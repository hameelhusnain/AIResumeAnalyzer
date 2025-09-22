import { useState, type FormEvent } from "react"
import NavBar from "~/components/NavBar"
import FileUploader from "~/components/FileUploader"
import { usePuterStore } from "~/lib/puter"
import { useNavigate } from "react-router"
import { convertPdfToImage } from "~/lib/pdf2image"
import { generateUUID } from "~/lib/utils"
import { prepareInstructions } from "constants"
const upload = () => {
  const { auth, isLoading, fs, ai, kv } = usePuterStore()
  const navigate = useNavigate();
  const [isProcessing, setProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [ file, setFile] = useState<File | null>(null); 
  
  const handleFileSelect = (file: File | null) => {
    setFile(file);
  } 

  const handleAnalyze = async ({companyName, jobTitle, jobDescription}: {companyName: string, jobTitle: string, jobDescription: string, file: File}) => {
    setProcessing(true);
    setStatusText("Uploading and analyzing your resume...");
    const uploadFile = await fs.upload([file!]);
    if(!uploadFile) return setStatusText("Failed to upload file. Please try again.");

    setStatusText("Generating Image...");
  
    const image = await convertPdfToImage(file!);
    if(!image.file) return setStatusText("Failed to convert PDF to image. Please try again.");
    
    setStatusText("Uploading Image...");
    const uploadImage = await fs.upload([image.file]);
    if(!uploadImage) return setStatusText("Failed to upload image. Please try again.");

    setStatusText("Getting ATS Score...");
    const uuid = generateUUID();
    const data = {
      companyName,
      jobTitle,
      jobDescription,
      id: uuid,
      resumePath: uploadFile.path,
      imagePath: uploadImage.path,
      feedback: "",
      
    }
    await kv.set(`resume:${uuid}`, JSON.stringify(data));
    setStatusText("Analyzing Resume...");
    const feedback = await ai.feedback(
      uploadFile.path,
      prepareInstructions({ jobTitle, jobDescription}
    )
    if (!feedback) return setStatusText("Error: Failed to analyze resume. Please try again...");
    
    const = typeof feedback.message.content === 'string' ? feedback.message.content : feedback.message.content[0].text ;

  }


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.closest("form");
    if (!form) return;
    const formData = new FormData(form); 
    
    const companyName = formData.get("company-name") as string;
    const jobTitle = formData.get("job-title") as string;
    const jobDescription = formData.get("job-description") as string;

    if(!file) return;

    handleAnalyze({companyName, jobTitle, jobDescription, file});

  }
  return (
 <main className="bg-[url('assets/public/images/bg-main.svg')] bg-cover">
      <NavBar />


      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Smart Feedback for your dream job</h1>
          {isProcessing ? (
            <>
            <h2>{statusText}</h2>
            <img src="./assets/public/images/resume-scan.gif" alt="Loading..." className="w-full"/>
            </>
          ) : (
            <h2>Drop your resume for an ATS score and imporvements tips</h2>
          )}
          {!isProcessing && (
            <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
             <div className="form-div">
              <label htmlFor="company-name">Company Name</label>
              <input type="text" name="company-name" placeholder="Company Name" id="company-name" />
             </div>
             <div className="form-div">
              <label htmlFor="job-title">Job Title</label>
              <input type="text" name="job-title" placeholder="Job Title" id="job-title" />
             </div>
             <div className="form-div">
              <label htmlFor="job-description">Job Description</label>
              <textarea rows={5} name="job-description" placeholder="Job Description" id="job-description" />
             </div>
             <div className="form-div">
              <label htmlFor="uploader">Uplaod Resume</label>
              <FileUploader onFileSelect={handleFileSelect} />
             </div>
             <button className="primary-button" type="submit">
              Analyze Resume
             </button>
            </form>
          )}
        </div>
      </section>
      </main>
  )
}

export default upload