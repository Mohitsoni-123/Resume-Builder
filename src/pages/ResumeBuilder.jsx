import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dummyResumeData } from "../assets/assets";
import { FaArrowLeft, FaCircleUser } from "react-icons/fa6";
import { AiOutlineFileText } from "react-icons/ai";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaProjectDiagram, FaRegFolderOpen } from "react-icons/fa";
import { IoSparklesOutline, IoBriefcaseOutline } from "react-icons/io5";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PersonalInfoForm from "../components/PersonalInfoForm";
import ResumePreview from "../components/ResumePreview";

const ResumeBuilder = () => {
  const { resumeId } = useParams();
  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personalInfo: {},
    summary: "",
    education: [],
    experience: [],
    projects: [],
    skills: [],
    languages: [],
    certifications: [],
    public: false,
    resumeTemplate: "classic",
  });

  const loadExistingResume = () => {
    const resume = dummyResumeData.find((resume) => resume._id === resumeId);
    if (resume) {
      setResumeData(resume);
      document.title = resume.personalInfo.fullName + " Resume";
    }
  };

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const section = [
    { id: "personal", name: "personal Info", icon: FaCircleUser },
    { id: "summary", name: "Summary", icon: AiOutlineFileText },
    { id: "experience", name: "Experience", icon: IoBriefcaseOutline },
    { id: "education", name: "Education", icon: RiGraduationCapLine },
    { id: "projects", name: "Projects", icon: FaRegFolderOpen },
    { id: "skills", name: "Skills", icon: IoSparklesOutline },

  ];

  const activeSection = section[activeSectionIndex];
console.log(resumeData);
console.log(resumeId);
console.log(dummyResumeData);
console.log("URL resumeId =", resumeId);
const resume = dummyResumeData.find(
    (resume) => resume.id === resumeId
);

console.log(resume);
  useEffect(() => {
    loadExistingResume();
  }, [resumeId]);
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link
          to={"/app"}
          className="inline-flex gap-2 items-center text-slate-500"
        >
          <FaArrowLeft /> Back to Dashboard
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Panel - Form */}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <hr className="absolute top-0 left-0 right-0 border-2 border-gray-300" />

              <hr
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-600 border-none transition-all duration-2000"
                style={{
                  width: `${(activeSectionIndex * 100) / (section.length - 1)}%`,
                }}
              />
              {/* Section Navigation */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
                <div></div>
                <div className="flex items-center">
                  {activeSectionIndex != 0 && (
                    <button
                      onClick={() =>
                        setActiveSectionIndex((prevIndex) =>
                          Math.max(prevIndex - 1, 0),
                        )
                      }
                      className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all"
                      disabled={activeSectionIndex === 0}
                    >
                      <FiChevronLeft className="size-4" /> Previous
                    </button>
                  )}

                  <button
                    onClick={() =>
                      setActiveSectionIndex((prevIndex) =>
                        Math.min(prevIndex + 1, section.length - 1),
                      )
                    }
                    className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all ${activeSectionIndex===section.length -1  && 'opacity-50'}`}
                    disabled={activeSectionIndex === section.length - 1}
                  >
                    Next
                    <FiChevronRight className="size-4" />
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="space-y-6">
                
                {
                  activeSection.id==='personal' && (
                    <PersonalInfoForm data={resumeData.personalInfo} onChange={(data)=>setResumeData(prev=>({...prev, personalInfo:data}))} />
                  )
                }
              </div>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="lg:col-span-7 max-lg:mt-6">
              <div>
                {/* buttons */}
              </div>

              {/* Resume preview */}
              <ResumePreview data={resumeData}
              template="classic"/>
              {/* <ResumePreview data={resumeData}
              template={resumeData.resumeTemplate}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
