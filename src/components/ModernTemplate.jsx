import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaLinkedin, FaGithub  } from "react-icons/fa";

const ModernTemplate = ({ data, accentColor }) => {
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
    <div className="max-w-4xl mx-auto bg-white text-gray-800">
      {/* Header */}
      <header
        className="p-8 text-white"
        style={{ backgroundColor: accentColor }}
      >
        <h1 className="text-4xl font-light mb-3 font-serif">
          {data.personalInfo?.fullName || "Your Name"}
        </h1>






        {data.personalInfo?.jobTitle && (
          <p className="text-lg opacity-90 mt-1">
            {data.personalInfo.jobTitle}
          </p>
        )}







        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm ">
          {data.personalInfo?.email && (
            <div className="flex items-center gap-2">
              <Mail className="size-4" />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo?.phone && (
            <div className="flex items-center gap-2">
              <Phone className="size-4" />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo?.location && (
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
          {data.personalInfo?.linkedin && (
            <a
              target="_blank"
              href={data.personalInfo?.linkedin}
			  rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaLinkedin className="size-4" />
              <span className="break-all text-xs">
                {data.personalInfo.linkedin
				.replace("https://", "")
				.replace("http://", "")
				.replace("www.", "")}
              </span>
            </a>
          )}


          {data.personalInfo?.github && (
			<a
				href={data.personalInfo.github}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-2"
			>
				<FaGithub className="size-4" />
				<span className="break-all text-xs">
				{data.personalInfo.github
					.replace("https://", "")
					.replace("http://", "")
					.replace("www.", "")}
				</span>
			</a>
			)}
        </div>
      </header>

      <div className="p-8">
        {/* Professional Summary */}
        {data.summary && (
          <section className="mb-4">
            <h2 className="text-2xl mb-2 pb-1 border-b border-gray-200">
              Professional Summary
            </h2>
            <p className="text-gray-700 ">{data.summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-4">
            <h2 className="text-2xl mb-4 pb-1 border-b border-gray-200">
              Experience
            </h2>

            <div className="space-y-5">
              {data.experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative pl-6 border-l border-gray-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="font-medium" style={{ color: accentColor }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
                      {formatDate(exp.startDate)} -{" "}
					  {exp.endDate ? formatDate(exp.endDate) : "Present"}
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
          <section className="mb-4">
            <h2 className="text-2xl mb-4 pb-1 border-b border-gray-200">
              Projects
            </h2>

            <div className="space-y-5">
              {data.projects.map((p, index) => (
                <div
                  key={p.id}
                  className="relative pl-6 border-l border-gray-200"
                  style={{ borderLeftColor: accentColor }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {p.title}
                      </h3>
                      
                    </div>
                    <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
                      {formatDate(p.startDate)} -{" "}
					          {p.endDate ? formatDate(p.endDate) : "Present"}
                    </div>
                  </div>
                  {p.description && (
                    <div className="text-gray-700 leading-relaxed text-sm">
                      {p.description}
                    </div>
                  )}

				  {p.technologies?.length > 0 && (
					<div className="flex flex-wrap gap-2 mt-2">
						{p.technologies.map((tech) => (
						<span
							key={tech}
							className="px-2 py-1 rounded text-xs text-white"
							style={{ backgroundColor: accentColor }}
						>
							{tech}
						</span>
						))}
					</div>
				  )}

          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-1 text-sm font-medium underline"
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
        <div className="grid sm:grid-cols-2 gap-8">
          {data.education && data.education.length > 0 && (
            <section>
              <h2 className="text-2xl mb-2 pb-1 border-b border-gray-200">
                Education
              </h2>

              <div className="space-y-4">
                {data.education.map((edu, index) => (
                  <div key={edu.id}>
                    <h3 className="font-semibold text-gray-900">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <p style={{ color: accentColor }}>{edu.institution}</p>
                    <div className="flex gap-4 items-center text-sm text-gray-600">
                      <span>{edu.startDate} - {edu.endDate}</span>
                      {edu.cgpa && <span>CGPA: {edu.cgpa}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2 className="text-2xl mb-2 pb-1 border-b border-gray-200">
                Skills
              </h2>

              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-3 py-1 text-sm text-white rounded-full"
                    style={{ backgroundColor: accentColor }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
