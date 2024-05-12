import React from "react"
import Image from "next/image"

const skills = [
 
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "NodeJs" },
  { skill: "React" },
  { skill: "Next.js" },
  {skill:"express js"},
  { skill: "Tailwind CSS" },
  { skill: "MongoDB" },
  { skill: "Prisma " },
  {skill:"Docker"},
  { skill: "Redis" },
  { skill: "GitHub" },
  { skill: "Kafka " },
]

const AboutSection = () => {
  return (
    <section id="about" className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <div className="my-16 pb-12 md:pt-16 md:pb-48 ">
        <h1 className="text-center font-bold text-4xl ">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Nitin and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Mern Stack & Next JS
              Web Developer .
            </p>
            <br />
          
            <br />
            <p>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with TypeScript, React, Redux, Node.js, Express, MongoDB,(MERN Stack),
           Next Js, and Git  , Redis , Kafka and Docker. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
            </p>
            <br />
        
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
