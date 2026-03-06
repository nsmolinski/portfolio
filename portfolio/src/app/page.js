import Link from "next/link";
import Image from "next/image";
export default function Home() {
  const projects = [
    {name: 'NaPrzystanek - Projekt Zespołowy', description: 'aplikacja webowa typu MERN/Next.js (stworzona w ramach przedmiotu Projekt Zespołowy przeze mnie i 3 znajomych ze studiów) do planowania podróży komunikacją miejską w Gdańsku. Projekt integruje API ZTM w celu wyświetlania tras, najbliższych przejazdów i harmonogramów linii.',technologies: ['Java', 'JavaScript', 'MongoDB', 'Docker'], image: 'naprzystanek.png', link: 'https://github.com/msiemienski/Projekt-Zespolowy-NaPrzystanek'},
    {name: 'ProgTalk', description: 'Aplikacja webowa będąca platformą dyskusyjną dla programistów. System wyróżnia się hierarchiczną (drzewiastą) strukturą tematów oraz zaawansowanym systemem moderacji, w którym twórcy wątków stają się ich moderatorami. Projekt integruje WebSockety do komunikacji w czasie rzeczywistym oraz bibliotekę highlight.js do profesjonalnego wyświetlania fragmentów kodu we wpisach.',technologies: ['Node.js', 'Vue.js', 'MongoDB', 'Socket.io', 'Passport.js', 'Docker'], image: 'progtalk.png', link: 'https://github.com/nsmolinski/Progtalk-projekt-technologie-sieci-web'},
    {name: 'Petsitter', description: 'Serwis webowy do wystawiania i przeglądania ogłoszeń dotyczących opieki nad zwierzętami.', technologies: ['Angular', 'TypeScript', 'JSON Server'], image: 'petsitter.png', link: 'https://github.com/nsmolinski/Petsitter-projekt-frontend-development-ii'}
  ]
  return (
    <div>
      <main className="px-4 sm:px-6 md:px-8">
        <div className="bg-blue-800 mx-auto max-w-7xl rounded-[1.5rem] px-4 sm:px-6 md:px-10 my-6 sm:my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 py-8 sm:py-10 gap-6 sm:gap-8 md:gap-10">
            {projects.map((project, index)=>(
              <div 
                key ={index}
                className="group transform-gpu transition ease-in duration-300 bg-white text-indigo-500 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg hover:-translate-y-2 hover:bg-sky-500 hover:shadow-2xl hover:shadow-blue-200/50 hover:text-white flex flex-col justify-between"
              >
                <div>
                  <h1 className="font-heading font-bold text-xl sm:text-2xl">{project.name}</h1>
                  <p className="text-justify my-4 sm:my-5 text-sm sm:text-base leading-relaxed">{project.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs sm:text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  {project.image && (
                    <div className="my-5 w-full">
                      <Image
                        src={`/${project.image}`}
                        alt={project.name}
                        width={800}
                        height={400}
                        className="rounded-lg object-cover w-full h-auto shadow-sm"
                        loading="eager"
                      />
                    </div>
                  )}
                  <Link href={project.link}>
                    <div className="inline-flex gap-2 items-center hover:opacity-80 transition-opacity font-medium">
                      Link do Github
                      <Image
                        src={'/github.svg'}
                        alt={project.name}
                        width={20}
                        height={20}
                        className="w-5 h-5 group-hover:invert transition-all"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
