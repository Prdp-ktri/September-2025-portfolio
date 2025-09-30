import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { href } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Finesse Furnishing E-COMMERCE",
    description: "",
    demoUrl: "",
    tags: ["React", "TailwindCSS"],
    githubUrl: "https://github.com/Prdp-ktri/bed-n-sofa-E-commerce-project",
    image: "",
  },
  {
    id: 2,
    title: "Booking dot com",
    description:
      "Developed a responsive clone of Booking.com featuring accommodation search, filtering, and intuitive navigation. Designed with a clean UI and seamless user experience across devices, showcasing skills in front-end development, state management, and modern web design.",
    demoUrl: "https://booking-frontend-i01p.onrender.com/",
    tags: ["React", "TailwindCSS"],
    githubUrl: "https://github.com/Prdp-ktri/bookingdotcom",
    image: "../../projects/bookingdotcom.jpg",
  },
  {
    id: 3,
    title: "ADANI Real Estate",
    description:
      "A beautiful landing page of the ADANI Real Estate app using React and Tailwind.",
    demoUrl: "https://adani-real-estate.onrender.com",
    tags: ["React", "TailwindCSS", "Supabase"],
    githubUrl: "https://github.com/Prdp-ktri/LandingPageWithTailwind",
    image: "../../projects/Adani.jpg",
  },
  {
    id: 5,
    title: "Edusity USA",
    description:
      "A beautiful landing page of the Edusity USA app using React and Tailwind.",
    demoUrl: "https://edusityusa.onrender.com",
    tags: ["React", "TailwindCSS", "Supabase"],
    githubUrl: "https://github.com/Prdp-ktri/EdusityUSA",
    image: "../../projects/Edusity.jpg",
  },
  {
    id: 4,
    title: "Movie Review App",
    description:
      "A beautiful CRUD app using HTML5, CSS3, and JavaScript to add movie reviews and further one can edit or delete the reviews.",
    demoUrl: "https://movie-review-app-xsyj.onrender.com",
    tags: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/Prdp-ktri/Movie-Review-App",
    image: "../../projects/MovieReview.jpg",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project has been carefully
          crafted with attention to details, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      key={index}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {" "}
                    <ExternalLink size={20} />
                  </a>
                  <a
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    target="_blank"
                    href={project.githubUrl}
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/Prdp-ktri"
            target="_blank"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
