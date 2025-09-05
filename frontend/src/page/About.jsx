
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function About() {
  const testimonials = [
    { name: "Ali Mohamed", text: "Muscab waa developer xirfad leh, shaqadiisa waa mid cajiib ah." },
    { name: "Amina Yusuf", text: "Waan ku faraxsanahay shaqada Muscab, mar walba wuu ka jawaabaa si degdeg ah." },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrev = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const services = [
    { title: "Web Development", description: "React, Tailwind, Express, MongoDB", color: "bg-gradient-to-r from-indigo-500 to-purple-500" },
    { title: "Mobile Apps", description: "React Native, Flutter", color: "bg-gradient-to-r from-green-400 to-blue-500" },
    { title: "UI/UX Design", description: "Design clean and responsive UI", color: "bg-gradient-to-r from-yellow-400 to-red-400" },
  ];

  const clients = [
    { name: "Client1", img: "https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template-red/images/clients/client_1.png" },
    { name: "Client2", img: "https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template-red/images/clients/client_3.png" },
    { name: "Client3", img: "https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template-red/images/clients/client_4.png" },
    { name: "Client4", img: "https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template-red/images/clients/client_6.png" },
  ];

  const funFacts = [
    { label: "Projects Completed", value: 50, color: "bg-blue-200" },
    { label: "Happy Clients", value: 35, color: "bg-green-200" },
    { label: "Awards Won", value: 5, color: "bg-red-200" },
    { label: "Cups of Coffee", value: 200, color: "bg-yellow-200" },
  ];

  return (
    <div className="space-y-20 p-10">
      {/* Section 1: About + Testimonials */}
      <div className="md:flex gap-10 items-center">
        {/* Left: About */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-indigo-600">About Me</h2>
          <p className="text-gray-700">
            "I am Muscab Hassan, a professional web & mobile developer. I work on developing web applications, mobile applications, and UI/UX design. I enjoy creating clean and functional solutions."
          </p>
        </div>

        {/* Right: Testimonials */}
        <div className="md:w-1/2 mt-10 relative bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-lg">
          <p className="mb-4 italic text-gray-800 text-lg">
            "{testimonials[currentTestimonial].text}"
          </p>
          <h3 className="font-semibold mt-10 text-gray-900 mb-4 text-right">{testimonials[currentTestimonial].name}</h3>

          <div className="absolute  top-[94px] transform -translate-y-1/2 left-4 cursor-pointer text-indigo-600 hover:text-indigo-800 transition" onClick={handlePrev}>
            <FaArrowLeft size={24} />
          </div>
          <div className="absolute   top-[95px] transform -translate-y-1/2 right-2 cursor-pointer text-indigo-600 hover:text-indigo-800 transition" onClick={handleNext}>
            <FaArrowRight size={24} />
          </div>
        </div>
      </div>

      {/* Section 2: Services */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-green-600">Services I Provide</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className={`p-6 rounded-xl shadow-lg hover:shadow-2xl text-white transition ${service.color}`}>
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Clients */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-purple-600">Clients</h2>
        <div className="flex flex-wrap gap-6 items-center justify-center">
          {clients.map((client, idx) => (
            <div key={idx} className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition flex items-center justify-center">
              <img src={client.img} alt={client.name} className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Fun Facts */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-yellow-600">Fun Facts</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {funFacts.map((fact, idx) => (
            <div key={idx} className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition ${fact.color}`}>
              <h3 className="text-2xl font-bold">{fact.value}+</h3>
              <p className="text-gray-700 font-medium">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
