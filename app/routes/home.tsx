import ResumeCard from "~/components/ResumeCard";
import type { Route } from "./+types/home";
import NavBar from "~/components/NavBar";
import { callbackify } from "util";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('assets/public/images/bg-main.svg')] bg-cover">

    <NavBar />
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Application and Resume Ratings!</h1>
        <h2>Review your submissions and AI-Powered feedback.</h2>
      </div>
    </section>
    {/* {resumes.map((Resume) => (
              <ResumeCard key={resume.id} resume={resume} />
          ))} */}

  </main>
}
