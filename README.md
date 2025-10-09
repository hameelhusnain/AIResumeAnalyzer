🎯 AI Resume Analyzer
A modern, intelligent resume analysis tool that leverages AI to provide comprehensive feedback and insights on resumes. Built with React and powered by Puter AI, this application helps job seekers optimize their resumes for better career opportunities.
Show Image
Show Image
Show Image
✨ Features
Core Functionality

📄 Resume Upload & Parsing - Support for PDF and DOCX resume formats
🤖 AI-Powered Analysis - Intelligent resume evaluation using Puter AI
💡 Smart Recommendations - Personalized suggestions for improvement
📊 Comprehensive Scoring - Detailed scoring across multiple dimensions
🎯 Keyword Optimization - ATS-friendly keyword suggestions
🔍 Skills Gap Analysis - Identify missing skills for target roles
📈 Career Insights - Industry-specific recommendations

Analysis Components

Content Quality Assessment - Evaluate clarity, impact, and relevance
Formatting Review - Check structure, layout, and readability
Keyword Matching - Analyze alignment with job requirements
Experience Evaluation - Assess work history presentation
Skills Assessment - Identify strengths and areas for improvement
Achievement Highlighting - Suggestions for quantifying accomplishments

🚀 Tech Stack
Frontend

React 18.x - Modern React with Hooks
React Router - Client-side routing and navigation
TypeScript - Type-safe development
TailwindCSS - Utility-first CSS framework
Vite - Fast build tool and dev server

AI & Processing

Puter AI - AI-powered resume analysis and feedback generation
PDF.js / pdf-parse - PDF document parsing
Mammoth.js - DOCX document parsing
Natural Language Processing - Text analysis and keyword extraction

Build & Development

Vite - Lightning-fast HMR and optimized builds
ESLint - Code quality and consistency
Prettier - Code formatting
Docker - Containerization support

📋 Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v18 or higher)
npm or pnpm
Git

🛠️ Installation

Clone the repository

bashgit clone https://github.com/hameelhusnain/AIResumeAnalyzer.git
cd AIResumeAnalyzer

Install dependencies

bashnpm install

Set up environment variables
Create a .env file in the root directory:

envVITE_PUTER_API_KEY=your_puter_api_key_here
VITE_APP_NAME=AI Resume Analyzer

Start the development server

bashnpm run dev
The application will be available at http://localhost:5173
🎮 Usage
Analyzing a Resume

Upload Your Resume

Click on the upload area or drag and drop your resume (PDF or DOCX)
Maximum file size: 5MB


Wait for Analysis

The AI will process your resume (typically 10-30 seconds)
Progress indicator shows analysis status


Review Results

Overall score and rating
Detailed feedback by section
Actionable recommendations
Keyword suggestions


Implement Improvements

Follow the suggestions provided
Re-upload to see improvements
Track your progress over time



📁 Project Structure
AIResumeAnalyzer/
├── app/
│   ├── components/          # React components
│   │   ├── ResumeUploader/ # File upload component
│   │   ├── AnalysisResults/ # Results display
│   │   ├── ScoreCard/      # Score visualization
│   │   └── Recommendations/ # Suggestions component
│   ├── routes/             # Route components
│   │   ├── _index.tsx      # Home page
│   │   └── analyze.tsx     # Analysis page
│   ├── services/           # Business logic
│   │   ├── puterService.ts # Puter AI integration
│   │   ├── parseService.ts # Resume parsing
│   │   └── analysisService.ts # Analysis logic
│   ├── types/              # TypeScript types
│   ├── utils/              # Utility functions
│   └── styles/             # Global styles
├── public/                 # Static assets
├── build/                  # Production build
├── package.json
├── vite.config.ts
└── tailwind.config.ts
🔧 Configuration
Tailwind CSS
The project uses TailwindCSS for styling. Configuration can be found in tailwind.config.ts.
Vite Configuration
Build and development settings are in vite.config.ts.
TypeScript
TypeScript configuration is in tsconfig.json for type safety.
🚢 Deployment
Build for Production
bashnpm run build
Docker Deployment
bash# Build the Docker image
docker build -t ai-resume-analyzer .

# Run the container
docker run -p 3000:3000 ai-resume-analyzer
Platform Deployment
The application can be deployed to:

Vercel - Recommended for React apps
Netlify - Simple static hosting
AWS ECS - Containerized deployment
Google Cloud Run - Serverless containers
Azure Container Apps - Azure cloud deployment
Railway - Easy full-stack deployment

🧪 Testing
bash# Run tests
npm test

# Run tests with coverage
npm run test:coverage
🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
👨‍💻 Author
Hameel Husnain

GitHub: @hameelhusnain

🙏 Acknowledgments

Puter - AI analysis engine
React Router - Routing solution
TailwindCSS - Styling framework
Vite - Build tool

📞 Support
If you encounter any issues or have questions:

Open an issue on GitHub Issues
Check the documentation

🗺️ Roadmap

 Multi-language support
 Resume templates library
 Job description matching
 LinkedIn profile integration
 Cover letter analysis
 Interview preparation tips
 Resume version history
 Export analysis reports


Made with ❤️ by Hameel Husnain | Powered by Puter AI
