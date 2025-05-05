import { href } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "ADANI Real Estate",
    description:
      "A beautiful landing page of the ADANI Real Estate app using React and Tailwind.",
    demoUrl: "https://adani-real-estate.onrender.com",
    tags: ["React", "TailwindCSS", "Supabase"],
    githubUrl: "https://github.com/Prdp-ktri/LandingPageWithTailwind",
    image: "../../public/projects/Adani.jpg",
  },
  {
    id: 2,
    title: "Movie Review App",
    description:
      "A beautiful CRUD app using HTML5, CSS3, and JavaScript to add movie reviews and further one can edit or delete the reviews.",
    demoUrl: "https://movie-review-app-xsyj.onrender.com",
    tags: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/Prdp-ktri/Movie-Review-App",
    image: "../../public/projects/MovieReview.jpg",
  },
  {
    id: 3,
    title: "Edusity USA",
    description:
      "A beautiful landing page of the Edusity USA app using React and Tailwind.",
    demoUrl: "https://edusityusa.onrender.com",
    tags: ["React", "TailwindCSS", "Supabase"],
    githubUrl: "https://github.com/Prdp-ktri/EdusityUSA",
    image: "../../public/projects/Edusity.jpg",
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

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => {
                    <span>{tag}</span>;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
