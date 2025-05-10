import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Emanuel R.",
  description: "Página de contacto para que puedas comunicarte conmigo.",
};

const page = () => {
  return (
    <div className="grid md:grid-cols-[repeat(2,1fr)] grid-rows-[repeat(3,1fr)] gap-6 justify-items-stretch   md:px-6 text-black animate-fadeIn ">
      <ProjectCard
        title="MovieList App"
        description="A simple weather forecast app using OpenWeather API."
        image="/images/movielist1.png"
        techStack={[
          "NextJS",
          "Tailwind",
          "TypeScript",
          "ReactJS",
          "MongoDB",
          "JavaScript",
          "NodeJS",
        ]}
        liveLink="https://movie-list-jade-kappa.vercel.app/"
        repoLink="https://github.com/EmanuelRigo/MovieList"
      />
      <ProjectCard
        title="MovieList App"
        description="A simple weather forecast app using OpenWeather API."
        image="/images/movielist1.png"
        techStack={[
          "NextJS",
          "Tailwind",
          "TypeScript",
          "ReactJS",
          "MongoDB",
          "JavaScript",
          "NodeJS",
        ]}
        liveLink="https://movie-list-jade-kappa.vercel.app/"
        repoLink="https://github.com/EmanuelRigo/MovieList"
      />
      <ProjectCard
        title="MovieList App"
        description="A simple weather forecast app using OpenWeather API."
        image="/images/movielist1.png"
        techStack={[
          "NextJS",
          "Tailwind",
          "TypeScript",
          "ReactJS",
          "MongoDB",
          "JavaScript",
          "NodeJS",
        ]}
        liveLink="https://movie-list-jade-kappa.vercel.app/"
        repoLink="https://github.com/EmanuelRigo/MovieList"
      />
      <ProjectCard
        title="Weather App"
        description="A sdf fsdafasasdfasdfas fas sdfasfdasf asdfasdfaa asdfasf sfasdfasdfasf."
        image="/images/foto.jpg"
        techStack={["NextJS", "Tailwind", "TypeScript"]}
        liveLink="https://my-weather.vercel.app"
        repoLink="https://github.com/tuusuario/weather-app"
      />{" "}
      <ProjectCard
        title="Weather App"
        description="A asdfas asdfasdf asdfasdf afas Aasdfasdf afasdfa  asdfasdfPI."
        image="/images/foto.jpg"
        techStack={["Next.js", "Tailwind", "TypeScript"]}
        liveLink="https://my-weather.vercel.app"
        repoLink="https://github.com/tuusuario/weather-app"
      />
    </div>
  );
};

export default page;
