import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/1.png",
      projectName: "E-HOME",
      projectLink: "https://e-home.vercel.app/",
      projectDescription: "",
      projectTech: ["Next", "Zustand", "Tailwind", "MongoDD", "Typescript"],
      projectExternalLinks: {
        github: "https://github.com/adi-igit/e-home",
        externalLink: "https://e-home.vercel.app/",
      },
    },
    {
      image: "/2.png",
      projectName: "Sana",
      projectLink: "https://shop-sana.vercel.app/",
      projectDescription: "",
      projectTech: ["React", "Next", "Node.js", "Express", "Sanity"],
      projectExternalLinks: {
        github: "https://github.com/adi-igit/ecommerce-app-1",
        externalLink: "https://shop-sana.vercel.app/",
      },
    },
    {
      image: "/3.png",
      projectName: "GetKino",
      projectLink: "https://get-kino.vercel.app/",
      projectDescription: "",
      projectTech: ["React", "Node.js", "MongoDB", "Express", "Redux Toolkit"],
      projectExternalLinks: {
        github: "https://github.com/adi-igit/GetKino-client",
        externalLink: "https://get-kino.vercel.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                        target="_black"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                        target="_black"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
