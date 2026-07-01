// import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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
      {/* ================= HEADER ================= */}

      <header className="text-center mb-2">
        {/* Name */}

        <h1 className="text-3xl font-bold text-black uppercase tracking-wide">
          {data.personalInfo?.fullName || "YOUR NAME"}
        </h1>

        {/* Job Title */}

        {data.personalInfo?.jobTitle && (
          <p className="text-sm" style={{ color: accentColor }}>
            {data.personalInfo.jobTitle}
          </p>
        )}

        {/* Contact */}

        <div className="mt-1 text-[13px] text-gray-600 flex flex-wrap justify-center items-center gap-2">
          {data.personalInfo?.phone && (
            <>
              <span>{data.personalInfo.phone}</span>
              <span>•</span>
            </>
          )}

          {data.personalInfo?.email && (
            <>
              <span>{data.personalInfo.email}</span>
              <span>•</span>
            </>
          )}

          {data.personalInfo?.github && (
            <>
              <span>
                {data.personalInfo.github
                  .replace("https://", "")
                  .replace("http://", "")
                  .replace("www.", "")}
              </span>
              <span>•</span>
            </>
          )}

          {data.personalInfo?.linkedin && (
            <>
              <span>
                {data.personalInfo.linkedin
                  .replace("https://", "")
                  .replace("http://", "")
                  .replace("www.", "")}
              </span>
              <span>•</span>
            </>
          )}

          {data.personalInfo?.location && (
            <span>{data.personalInfo.location}</span>
          )}
        </div>
      </header>

      {/* ================= SUMMARY ================= */}

      {data.summary && (
        <section className="mb-2">
          <div className="mb-1">
            <h2 className="text-xl text-start font-bold text-gray-800">
              Summary
            </h2>

            <hr className="border-gray-500 mt-1" />
          </div>

          <p className="text-gray-700 text-[14px] leading-5 text-justify">
            {data.summary}
          </p>
        </section>
      )}

      {/* ================= EDUCATION ================= */}

      {data.education && data.education.length > 0 && (
        <section className="mb-2">
          <div className="">
            <h2 className="text-xl text-start font-bold text-gray-800">
              Education
            </h2>

            <hr className="border-gray-500 mt-1" />
          </div>

          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3
                    className="text-1xl font-semibold"
                    style={{ color: accentColor }}
                  >
                    {edu.institution}
                  </h3>

                  <p className="text-gray-800 text-xs">
                    {edu.degree}

                    {edu.field && ` in ${edu.field}`}
                  </p>

                  {edu.cgpa && (
                    <p className="text-xs text-gray-600 mt-1">
                      GPA : {edu.cgpa}
                    </p>
                  )}
                </div>

                <span className="text-sm text-gray-600 whitespace-nowrap">
                  {formatDate(edu.startDate)}
                  {" - "}
                  {formatDate(edu.endDate)}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= EXPERIENCE ================= */}

      {data.experience && data.experience.length > 0 && (
        <section className="mb-2">
          <div className="mb-1">
            <h2 className="text-xl text-start font-bold text-gray-800">
              Experience
            </h2>

            <hr className="border-gray-500 mt-1" />
          </div>

          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3
                      className="text-1xl font-semibold"
                      style={{ color: accentColor }}
                    >
                      {exp.company}
                    </h3>

                    <p className="font-semibold text-gray-800 text-sm">
                      {exp.position}
                    </p>
                  </div>

                  <span className="text-sm text-gray-600 whitespace-nowrap">
                    {formatDate(exp.startDate)}
                    {" - "}
                    {exp.endDate ? formatDate(exp.endDate) : "Present"}
                  </span>
                </div>

                {exp.description && (
                  <ul className="list-disc ml-6 text-[13px] leading-4 text-gray-700">
                    {exp.description
                      .split("\n")
                      .filter((line) => line.trim() !== "")
                      .map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= PROJECTS ================= */}

      {data.projects && data.projects.length > 0 && (
        <section className="mb-2">
          <div className="mb-1">
            <h2 className="text-xl text-start font-bold text-gray-800">
              Projects
            </h2>

            <hr className="border-gray-500 mt-1" />
          </div>

          <div className="space-y-2">
            {data.projects.map((proj, index) => (
              <div key={index}>
                {/* Project Name + Date */}

                <div className="flex justify-between items-center">
                  <div>
                    <h3
                      className="text-1xl font-semibold"
                      style={{ color: accentColor }}
                    >
                      {proj.title}
                    </h3>

                    {proj.type && <p className="text-gray-700">{proj.type}</p>}
                  </div>

                  {(proj.startDate || proj.endDate) && (
                    <span className="text-sm text-gray-600 whitespace-nowrap">
                      {formatDate(proj.startDate)}
                      {" - "}
                      {proj.endDate ? formatDate(proj.endDate) : "Present"}
                    </span>
                  )}
                </div>

                {/* Description */}

                {proj.description && (
                  <ul className="list-disc ml-6 text-[14px] leading-4 text-gray-700">
                    {proj.description
                      .split("\n")
                      .filter((line) => line.trim() !== "")
                      .map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                  </ul>
                )}

                {/* Technologies */}

                {proj.technologies?.length > 0 && (
                  <p className="mt-1 text-[13px] ml-2 text-gray-600">
                    <span className="font-semibold">Technologies :</span>{" "}
                    {proj.technologies.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= SKILLS ================= */}

      {data.skills && data.skills.length > 0 && (
        <section className="mb-2">
          <div className="mb-1">
            <h2 className="text-xl text-start font-bold text-gray-800">
              Skills
            </h2>

            <hr className="border-gray-500 mt-1" />
          </div>

          <div className="text-[14px] text-gray-700 leading-6">
            <span className="font-semibold">Technical Skills :</span>{" "}
            {data.skills.map((skill, index) => (
              <span key={index}>
                {skill.name}

                {index !== data.skills.length - 1 && ", "}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* ================= CERTIFICATIONS ================= */}

      {data.certifications && data.certifications.length > 0 && (
        <section className="mb-2">
          <div className="mb-1">
            <h2 className="text-xl text-start font-bold tracking-wide text-gray-800">
              Certifications
            </h2>

            <hr className="border-gray-400 my-1" />
          </div>

          <div className="space-y-2 text-[14px] text-gray-700 leading-3">
            {data.certifications.map((cert, index) => (
              <div key={index}>
                <p className="text-[13px] font-semibold text-gray-700">
                  • {cert.name}
                </p>

                {cert.issuer && (
                  <p className="text-sm text-gray-600 ml-5">{cert.issuer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= ACHIEVEMENTS ================= */}

      {data.achievements && data.achievements.length > 0 && (
        <section className="mb-2">
          <div className="mb-1">
            <h2 className="text-xl text-start font-bold tracking-wide text-gray-800">
              Achievements
            </h2>

            <hr className="border-gray-400 my-1" />
          </div>

          <div className="text-[14px] text-gray-700 leading-5">
            {data.achievements.map((achievement, index) => (
              <div key={index}>
                <p className="text-[13px] text-gray-700 leading-5">
                  • {achievement.title || achievement.name || achievement}
                </p>

                {achievement.description && (
                  <p className="text-sm text-gray-600 ml-5 mt-1">
                    {achievement.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= LANGUAGES ================= */}

      {data.languages && data.languages.length > 0 && (
        <section className="mb-2">
          <div className="mb-1">
            <h2 className="text-xl text-start font-bold tracking-wide text-gray-800">
              Languages
            </h2>

            <hr className="border-gray-400 my-1" />
          </div>

          <div className="flex flex-wrap gap-3">
            {data.languages.map((lang, index) => (
              <span
                key={index}
                className="border rounded-full px-4 py-1 text-sm"
                style={{
                  borderColor: accentColor,
                  color: accentColor,
                }}
              >
                {lang.name}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* <header
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
      </header> */}

      {/* Professional Summary */}
      {/* {data.summary && (
        <section className="mb-3">
          <h2
            className="text-xl font-semibold mb-1"
            style={{ color: accentColor }}
          >
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm">{data.summary}</p>
        </section>
      )} */}

      {/* Experience */}
      {/* {data.experience && data.experience.length > 0 && (
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
      )} */}

      {/* Projects */}
      {/* {data.projects && data.projects.length > 0 && (
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
              
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">{proj.title}</h3>

                  {(proj.startDate || proj.endDate) && (
                    <span className="text-sm text-gray-500">
                      {formatDate(proj.startDate)} -{" "}
                      {proj.endDate ? formatDate(proj.endDate) : "Present"}
                    </span>
                  )}
                </div>

                
                <p className="text-gray-600 ">{proj.description}</p>

                {proj.technologies?.length > 0 && (
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-semibold">Technologies:</span>{" "}
                    {proj.technologies.join(", ")}
                  </p>
                )}

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
      )} */}

      {/* Education */}
      {/* {data.education && data.education.length > 0 && (
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
                  <p>
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )} */}

      {/* Skills */}
      {/* {data.skills && data.skills.length > 0 && (
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
      )} */}

      {/* Certifications */}
      {/* {data.certifications && data.certifications.length > 0 && (
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
      )} */}

      {/* Languages */}
      {/* {data.languages && data.languages.length > 0 && (
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
      )} */}
    </div>
  );
};

export default ClassicTemplate;
