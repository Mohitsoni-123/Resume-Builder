import { Mail, Phone, MapPin  } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MinimalImageTemplate = ({ data, accentColor = "#C8A46A" }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    if (dateStr.includes("-")) {
      const [year, month] = dateStr.split("-");
      return new Date(year, parseInt(month, 10) - 1).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "short",
        },
      );
    }
    return dateStr;
  };

  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800">
      {/* -------------------Header-------------------------- */}
      <div
        className="text-center py-10"
        style={{
          backgroundColor: "#2F4054",
          color: "white",
        }}
      >
        <h1
          className="text-5xl font-light tracking-[2px] uppercase"
          style={{ color: "#E4D0A4" }}
        >
          {data.personalInfo?.fullName || "YOUR NAME"}
        </h1>

        <p
          className="uppercase tracking-[2px] mt-3 text-sm"
          style={{ color: "#E4D0A4" }}
        >
          {data.personalInfo?.jobTitle || "WEB DEVELOPER"}
        </p>

        <div
          className="w-20 h-[2px] mx-auto mt-2"
          style={{ backgroundColor: "#E4D0A4" }}
        ></div>
      </div>
      <div className="grid grid-cols-12">
        {/* LEFT SIDEBAR */}

        <aside className="col-span-4 border-r border-[#D6C19A] p-8">
          {/* CONTACT */}

          <section className="mb-4">
            <h2
              className="uppercase text-lg tracking-[1px] font-semibold mb-2"
              style={{ color: "#2F4054" }}
            >
              Contact
            </h2>

            <div className="space-y-1 text-sm">
              {data.personalInfo?.phone && (
                <div className="flex gap-3 items-start">
                  <Phone size={14} color="#C8A46A" className="mt-1" />

                  <span>{data.personalInfo.phone}</span>
                </div>
              )}

              {data.personalInfo?.email && (
                <div className="flex gap-3 items-start">
                  <Mail size={14} color="#C8A46A" className="mt-1" />

                  <span className="break-all text-xs">{data.personalInfo.email}</span>
                </div>
              )}
              {/* LinkedIn */}

              {data.personalInfo?.linkedin && (
                <div className="flex gap-3 items-start">
                  <FaLinkedin  size={14} color="#C8A46A" className="mt-1" />

                  <a
                    href={data.personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all hover:underline text-xs"
                  >
                    {data.personalInfo.linkedin}
                  </a>
                </div>
              )}

              {/* GitHub */}

              {data.personalInfo?.github && (
                <div className="flex gap-3 items-start">
                  <FaGithub  size={14} color="#C8A46A" className="mt-1" />

                  <a
                    href={data.personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all hover:underline text-xs"
                  >
                    {data.personalInfo.github}
                  </a>
                </div>
              )}

              {data.personalInfo?.location && (
                <div className="flex gap-3 items-start">
                  <MapPin size={14} color="#C8A46A" className="mt-1" />

                  <span>{data.personalInfo.location}</span>
                </div>
              )}
            </div>
          </section>

          {/* EDUCATION */}

          {data.education?.length > 0 && (
            <section className="mb-4">
              <h2
                className="uppercase text-lg tracking-[1px] font-semibold mb-2"
                style={{ color: "#2F4054" }}
              >
                Education
              </h2>

              <div className="space-y-6">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-[15px]">{edu.degree}</h3>

                    <p className="text-sm text-gray-700">{edu.institution}</p>

                    {edu.cgpa && (
                      <p className="text-xs text-gray-500 mt-1">
                        CGPA : {edu.cgpa}
                      </p>
                    )}

                    <p className="text-xs text-gray-500 mt-1">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SKILLS */}

          {data.skills?.length > 0 && (
            <section>
              <h2
                className="uppercase text-lg tracking-[1px] font-semibold mb-2"
                style={{ color: "#2F4054" }}
              >
                SKILLS
              </h2>

              <ul className="space-y-1 list-disc text-gray-700">
                {data.skills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#C8A46A" }}
                    ></span>

                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>

        {/* RIGHT CONTENT */}

        <main className="col-span-8 p-7">
          {/* ================= CAREER OBJECTIVE ================= */}

          {data.summary && (
            <section className="mb-4">
              <h2
                className="uppercase tracking-[1px] text-lg font-semibold mb-2"
                style={{ color: "#2F4054" }}
              >
                Career Objective
              </h2>

              <div
                className="w-15 h-[3px] mb-2"
                style={{ backgroundColor: "#C8A46A" }}
              ></div>

              <p className="text-gray-700 leading-6 text-[15px] text-justify">
                {data.summary}
              </p>
            </section>
          )}

          {/* ================= EXPERIENCE ================= */}

          {data.experience?.length > 0 && (
            <section>
              <h2
                className="uppercase tracking-[1px] text-lg font-semibold mb-1"
                style={{ color: "#2F4054" }}
              >
                Experience
              </h2>

              <div
                className="w-15 h-[2px] mb-1"
                style={{ backgroundColor: "#C8A46A" }}
              ></div>

              <div className="space-y-5">
                {data.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{exp.position}</h3>

                      <span className="text-sm text-gray-500">
                        {formatDate(exp.startDate)}
                        {" - "}
                        {exp.is_current ? "Present" : formatDate(exp.endDate)}
                      </span>
                    </div>

                    <p
                      className="font-medium mt-1 mb-1"
                      style={{ color: "#C8A46A" }}
                    >
                      {exp.company}
                    </p>

                    {exp.description && (
                      <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm leading-5">
                        {exp.description.split("\n").map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ================= PROJECTS ================= */}

          {data.projects?.length > 0 && (
            <section className="mt-4">
              <h2
                className="uppercase tracking-[1px] text-lg font-semibold mb-1"
                style={{ color: "#2F4054" }}
              >
                Projects
              </h2>

              <div
                className="w-15 h-[3px] mb-2"
                style={{ backgroundColor: "#C8A46A" }}
              ></div>

              <div className="space-y-2">
                {data.projects.map((project, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold">{project.title}</h3>

                    {project.type && (
                      <p
                        className="text-sm mt-1 mb-2"
                        style={{ color: "#C8A46A" }}
                      >
                        {project.type}
                      </p>
                    )}

                    {project.description && (
                      <ul className="list-disc ml-5 space-y-2 text-sm text-gray-700 leading-5">
                        {project.description.split("\n").map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ================= CERTIFICATES ================= */}

          {data.certifications?.length > 0 && (
            <section className="mt-4">
              <h2
                className="uppercase tracking-[1px] text-lg font-semibold mb-1"
                style={{ color: "#2F4054" }}
              >
                Certificates
              </h2>

              <div
                className="w-15 h-[3px] mb-1"
                style={{ backgroundColor: "#C8A46A" }}
              ></div>

              <ul className="space-y-1 list-disc ml-5 text-gray-700">
                {data.certifications.map((item, index) => (
                  <li key={index}>{item.title || item.name}</li>
                ))}
              </ul>
            </section>
          )}

          {/* ================= ACHIEVEMENTS ================= */}

          {data.achievements?.length > 0 && (
            <section className="mt-4">
              <h2
                className="uppercase tracking-[1px] text-lg font-semibold mb-1"
                style={{ color: "#2F4054" }}
              >
                Achievements
              </h2>

              <div
                className="w-15 h-[3px] mb-2"
                style={{ backgroundColor: "#C8A46A" }}
              ></div>

              <ul className="space-y-2 list-disc ml-5 text-sm text-gray-700 leading-4">
                {data.achievements.map((item, index) => (
                  <li key={index}>{item.title || item}</li>
                ))}
              </ul>
            </section>
          )}
        </main>
      </div>
    </div>






































    // <div className="grid grid-cols-3">
    // <div className="col-span-1  py-10">
    //     {data.personalInfo?.image && typeof data.personalInfo.image === 'string' ? (
    //         <div className="mb-6">
    //             <img src={data.personalInfo.image} alt="Profile" className="w-32 h-32 object-cover rounded-full mx-auto" style={{ background: accentColor+'70' }} />
    //         </div>
    //     ) : (
    //         data.personalInfo?.image && typeof data.personalInfo.image === 'object' ? (
    //             <div className="mb-6">
    //                 <img src={URL.createObjectURL(data.personalInfo.image)} alt="Profile" className="w-32 h-32 object-cover rounded-full mx-auto" />
    //             </div>
    //         ) : null
    //     )}
    // </div>

    //{/* Name + Title */}

    // {/* <div className="col-span-2 flex flex-col justify-center py-10 px-8">
    //     <h1 className="text-4xl font-bold text-zinc-700 tracking-widest">
    //         {data.personalInfo?.fullName || "Your Name"}
    //     </h1>
    //     <p className="uppercase text-zinc-600 font-medium text-sm tracking-widest">
    //         {data.personalInfo?.jobTitle  || "Profession"}
    //     </p>
    // </div> */}

    // {/* Left Sidebar */}

    // <aside className="col-span-1 border-r border-zinc-400 p-6 pt-0">

    // {/* Contact */}

    // {/* <section className="mb-8">
    //     <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
    //         CONTACT
    //     </h2>
    //     <div className="space-y-2 text-sm">
    //         {data.personalInfo?.phone && (
    //             <div className="flex items-center gap-2">
    //                 <Phone size={14} style={{ color: accentColor }} />
    //                 <span>{data.personalInfo.phone}</span>
    //             </div>
    //         )}
    //         {data.personalInfo?.email && (
    //             <div className="flex items-center gap-2">
    //                 <Mail size={14} style={{ color: accentColor }} />
    //                 <span>{data.personalInfo.email}</span>
    //             </div>
    //         )}
    //         {data.personalInfo?.location && (
    //             <div className="flex items-center gap-2">
    //                 <MapPin size={14} style={{ color: accentColor }} />
    //                 <span>{data.personalInfo.location}</span>
    //             </div>
    //         )}
    //     </div>
    // </section> */}

    // {/* Education */}

    // {/* {data.education && data.education.length > 0 && (
    //     <section className="mb-8">
    //         <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
    //             EDUCATION
    //         </h2>
    //         <div className="space-y-4 text-sm">
    //             {data.education.map((edu, index) => (
    //                 <div key={index}>
    //                     <p className="font-semibold uppercase">{edu.degree}</p>
    //                     <p className="text-zinc-600">{edu.institution}</p>
    //                     {
    //                         edu.cgpa && (
    //                             <p className="text-zinc-500 text-xs">GPA: {edu.cgpa}</p>
    //                         )
    //                     }
    //                     <p className="text-xs text-zinc-500">
    //                         {formatDate(edu.endDate)}
    //                     </p>
    //                 </div>
    //             ))}
    //         </div>
    //     </section>
    // )} */}

    // {/* Skills */}

    // {/* {data.skills && data.skills.length > 0 && (
    //     <section>
    //         <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
    //             SKILLS
    //         </h2>
    //         <ul className="space-y-1 text-sm">
    //             {data.skills.map((skill, index) => (
    //                 <li key={index}>{skill.name}</li>
    //             ))}
    //         </ul>
    //     </section>
    // )} */}
    // </aside>

    // {/* Right Content */}
    // <main className="col-span-2 p-8 pt-0">

    // {/* Summary */}

    // {/* {data.summary && (
    //     <section className="mb-8">
    //         <h2 className="text-sm font-semibold tracking-widest mb-3" style={{ color: accentColor }} >
    //             SUMMARY
    //         </h2>
    //         <p className="text-zinc-700 leading-relaxed">
    //             {data.summary}
    //         </p>
    //     </section>
    // )} */}

    // {/* Experience */}

    // {/* {data.experience && data.experience.length > 0 && (
    //     <section>
    //         <h2 className="text-sm font-semibold tracking-widest mb-4" style={{ color: accentColor }} >
    //             EXPERIENCE
    //         </h2>
    //         <div className="space-y-6 mb-8">
    //             {data.experience.map((exp, index) => (
    //                 <div key={index}>
    //                     <div className="flex justify-between items-center">
    //                         <h3 className="font-semibold text-zinc-900">
    //                             {exp.position}
    //                         </h3>
    //                         <span className="text-xs text-zinc-500">
    //                             {formatDate(exp.startDate)} -{" "}
    //                             {exp.is_current ? "Present" : formatDate(exp.endDate)}
    //                         </span>
    //                     </div>
    //                     <p className="text-sm mb-2" style={{ color: accentColor }} >
    //                         {exp.company}
    //                     </p>

    //                     {exp.description && (
    //                         <ul className="list-disc list-inside text-sm text-zinc-700 leading-relaxed space-y-1">
    //                             {(exp.description || "").split("\n").map((line, i) => (
    //                                 <li key={i}>{line}</li>
    //                             ))}
    //                         </ul>
    //                     )}

    //                 </div>
    //             ))}
    //         </div>
    //     </section>
    // )} */}

    // {/* Projects */}

    // {/* {data.projects && data.projects.length > 0 && (
    //     <section>
    //         <h2 className="text-sm uppercase tracking-widest font-semibold" style={{ color: accentColor }}>
    //             PROJECTS
    //         </h2>
    //         <div className="space-y-4">
    //             {data.projects.map((project, index) => (
    //                 <div key={index}>
    //                     <h3 className="text-md font-medium text-zinc-800 mt-3">{project.title}</h3>

    //                     {project.description && (
    //                         <ul className="list-disc list-inside text-sm text-zinc-700  space-y-1">
    //                             {(project.description || "").split("\n").map((line, i) => (
    //                                 <li key={i}>{line}</li>
    //                             ))}
    //                         </ul>
    //                     )}
    //                 </div>
    //             ))}
    //         </div>
    //     </section>
    // )} */}

    // </main>
    // </div>
    // </div>
  );
};

export default MinimalImageTemplate;
