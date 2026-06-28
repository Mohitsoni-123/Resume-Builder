// import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaLinkedin, FaGithub  } from "react-icons/fa";

const ClassicTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";

    const date = new Date(dateStr);

    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });
    }

    return dateStr;
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 leading-relaxed">
      {/* Header */}
      <header
        className="text-center mb-5 pb-4 border-b-2"
        style={{ borderColor: accentColor }}
      >
        <h1 className="text-3xl font-bold mb-1" style={{ color: accentColor }}>
          {data.personalInfo?.fullName || "Your Name"}
        </h1>

        {data.personalInfo?.jobTitle && (
          <p className="text-lg text-gray-600 mb-1">
            {data.personalInfo.jobTitle}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600" >
          {data.personalInfo?.email && (
            <div className="flex items-center gap-1">
              <Mail className="size-4" />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo?.phone && (
            <div className="flex items-center gap-1">
              <Phone className="size-4" />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo?.location && (
            <div className="flex items-center gap-1">
              <MapPin className="size-4" />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
          {data.personalInfo?.linkedin && (
            <a className="flex items-center gap-1">
              <FaLinkedin className="size-4" />
              <span className="break-all">{data.personalInfo.linkedin
                .replace("https://", "")
                .replace("http://", "")
                .replace("www.", "")}</span>
            </a>
          )}
          {data.personalInfo?.github && (
            <a
              href={data.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <FaGithub className="size-4" />
              <span className="break-all">
                {data.personalInfo.github
                  .replace("https://", "")
                  .replace("http://", "")
                  .replace("www.", "")}
              </span>
            </a>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {data.summary && (
        <section className="mb-3">
          <h2
            className="text-xl font-semibold mb-1"
            style={{ color: accentColor }}
          >
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-3">
          <h2
            className="text-xl font-semibold mb-2"
            style={{ color: accentColor }}
          >
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div
                key={exp.id}
                className="border-l-3 pl-4"
                style={{ borderColor: accentColor }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-gray-700 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <p>
                      {formatDate(exp.startDate)} - 
                      {/* {formatDate(exp.endDate)} */}
                      {exp.endDate ? formatDate(exp.endDate) : "Present"}
                    </p>
                  </div>
                </div>
                {exp.description && (
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
{data.projects && data.projects.length > 0 && (
  <section className="mb-3">
    <h2
      className="text-xl font-semibold mb-2"
      style={{ color: accentColor }}
    >
      PROJECTS
    </h2>

    <div className="space-y-4">
      {data.projects.map((proj) => (
        <div
          key={proj.id}
          className="border-l-3 border-gray-300 pl-4"
          style={{ borderColor: accentColor }}
        >
          {/* Project Title + Date */}
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">
              {proj.title}
            </h3>

            {(proj.startDate || proj.endDate) && (
              <span className="text-sm text-gray-500">
                {formatDate(proj.startDate)} -{" "}
                {proj.endDate ? formatDate(proj.endDate) : "Present"}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 ">
            {proj.description}
          </p>

          {/* Technologies */}
          {proj.technologies?.length > 0 && (
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-semibold">Technologies:</span>{" "}
              {proj.technologies.join(", ")}
            </p>
          )}

          {/* GitHub */}
          {proj.github && (
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm underline"
              style={{ color: accentColor }}
            >
              GitHub Repository
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
)}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-4">
          <h2
            className="text-xl font-semibold mb-2"
            style={{ color: accentColor }}
          >
            EDUCATION
          </h2>

          <div className="space-y-3 pl-4">
            {data.education.map((edu, index) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-gray-700">{edu.institution}</p>
                  {edu.cgpa && (
                    <p className="text-sm text-gray-600">GPA: {edu.cgpa}</p>
                  )}
                </div>
                <div className="text-sm text-gray-600">
                  <p>{edu.startDate} - {edu.endDate}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-4">
          <h2
            className="text-xl font-semibold mb-1"
            style={{ color: accentColor }}
          >
            CORE SKILLS
          </h2>

          <div className="flex gap-4 flex-wrap">
            {data.skills.map((skill, index) => (
              <div key={skill.id}>• {skill.name}</div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
{data.certifications && data.certifications.length > 0 && (
  <section className="mb-3">
    <h2
      className="text-xl font-semibold mb-1"
      style={{ color: accentColor }}
    >
      CERTIFICATIONS
    </h2>

    <div className="space-y-1">
      {data.certifications.map((cert) => (
        <div key={cert.id}>• {cert.name}</div>
      ))}
    </div>
  </section>
)}

{/* Languages */}
{data.languages && data.languages.length > 0 && (
  <section className="mb-4">
    <h2
      className="text-xl font-semibold mb-1"
      style={{ color: accentColor }}
    >
      LANGUAGES
    </h2>

    <div className="flex gap-4 flex-wrap">
      {data.languages.map((lang) => (
        <div key={lang.id}>• {lang.name}</div>
      ))}
    </div>
  </section>
)}
    </div>
  );
};

export default ClassicTemplate;
