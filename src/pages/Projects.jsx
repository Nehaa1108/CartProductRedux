import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Projects
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Portfolio Website"
            description="Personal portfolio built using React and Tailwind CSS."
          />
          <ProjectCard
            title="Dashboard App"
            description="Admin dashboard with charts and tables."
          />
          <ProjectCard
            title="Todo App"
            description="Task management app using React hooks."
          />
        </div>

      </div>
    </section>
  );
};

export default Projects;
