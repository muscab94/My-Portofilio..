function Resume() {
  const education = [
    { year: 2010, title: "Specialization Course", school: "University of Studies", description: "Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor." },
    { year: 2009, title: "Specialization Course", school: "University of Studies", description: "Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor." },
    { year: 2008, title: "Specialization Course", school: "University of Studies", description: "Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor." },
  ];

  const experience = [
    { date: "Dec 2024 - Current", title: "Full-Stuck Developer", company: "Web Agency", description: "Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor." },
    { date: "Dec 2022 - Nov 2024", title: "Web Designer", company: "Apple Inc.", description: "Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor." },
    { date: "Jun 2023 - Dec 2024", title: "Graphic Designer", company: "Web Agency", description: "Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor." },
  ];

  const designSkills = [
    { skill: "Web Developer", level: 92 },
    { skill: "Graphic Design", level: 80 },
    { skill: "mobile App", level: 60 },
  ];

  const codingSkills = [
    { skill: "React", level: 95 },
    { skill: "Node.js", level: 90 },
    { skill: "Tailwind", level: 70 },
    { skill: "Express", level: 60 },
    { skill: "MongoDb", level: 80 },
  ];

  return (
    <div className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8  text-indigo-600">Resume</h2>
      <p className="text-center text-gray-600 mb-10">3 Years of Experience</p>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Education */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-green-600">Education</h3>
          {education.map((edu, idx) => (
            <div key={idx} className="mb-6">
              <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">{edu.year}</span>
              <h4 className="font-semibold mt-2">{edu.title}</h4>
              <p className="italic text-gray-600">{edu.school}</p>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-blue-600">Experience</h3>
          {experience.map((exp, idx) => (
            <div key={idx} className="mb-6">
              <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">{exp.date}</span>
              <h4 className="font-semibold mt-2">{exp.title}</h4>
              <p className="italic text-gray-600">{exp.company}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-pink-600">Design Skills</h3>
          {designSkills.map((skill, idx) => (
            <div key={idx} className="mb-4">
              <p className="text-gray-700">{skill.skill}</p>
              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div className="h-2 rounded-full bg-pink-400" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}

          <h3 className="text-xl font-bold mb-4 mt-6 text-purple-600">Coding Skills</h3>
          {codingSkills.map((skill, idx) => (
            <div key={idx} className="mb-4">
              <p className="text-gray-700">{skill.skill}</p>
              <div className="w-full bg-gray-300 h-2 rounded-full">
                <div className="h-2 rounded-full bg-purple-400" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
