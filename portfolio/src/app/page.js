import Link from "next/link";
import Image from "next/image";
export default function Home() {
  const projects = [
    {name: 'NaPrzystanek - Projekt Zespołowy', description: 'aplikacja webowa typu MERN/Next.js (stworzona w ramach przedmiotu Projekt Zespołowy przeze mnie i 3 znajomych ze studiów) do planowania podróży komunikacją miejską w Gdańsku. Projekt integruje API ZTM w celu wyświetlania tras, najbliższych przejazdów i harmonogramów linii.',technologies: ['Java', 'JavaScript', 'MongoDB', 'Docker'], image: 'naprzystanek.png', link: 'https://github.com/msiemienski/Projekt-Zespolowy-NaPrzystanek'},
    {name: 'ProgTalk', description: 'Aplikacja webowa będąca platformą dyskusyjną dla programistów. System wyróżnia się hierarchiczną (drzewiastą) strukturą tematów oraz zaawansowanym systemem moderacji, w którym twórcy wątków stają się ich moderatorami. Projekt integruje WebSockety do komunikacji w czasie rzeczywistym oraz bibliotekę highlight.js do profesjonalnego wyświetlania fragmentów kodu we wpisach.',technologies: ['Node.js', 'Vue.js', 'MongoDB', 'Socket.io', 'Passport.js', 'Docker'], image: 'progtalk.png', link: 'https://github.com/nsmolinski/Progtalk-projekt-technologie-sieci-web'}
  ]
  return (
    <div>
      <header className="flex justify-around items-center font-semibold p-5 bg-blue-800 text-white shadow-lg shadow-blue-800/60 sticky top-0 z-50">
        <Link href="/" className="transform-gpu transition ease-in-out duration-300 hover:text-blue-100 hover:scale-105">Projekty</Link>
        <Link href="/kontakt" className="transform-gpu transition ease-in-out duration-300 hover:text-blue-50 hover:scale-105">Kontakt</Link>
      </header>
      <main>
        <div className="bg-blue-800 mx-40 rounded-[1.5rem] px-10">
          <div className="grid grid-cols-2 p-10 my-10 gap-20">
            {projects.map((project, index)=>(
              <div 
                key ={index}
                className="transform-gpu transition ease-in duration-300 bg-white text-indigo-500 p-10 rounded-lg shadow-lg hover:scale-105 hover:bg-sky-500 hover:shadow-2xl hover:shadow-blue-200/50 hover:text-white flex flex-col justify-between"
              >
                <h1 className="font-heading font-bold text-lg">{project.name}</h1>
                <p className="text-justify my-5">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.image && (
                  <div className="my-4">
                    <Image
                      src={`/${project.image}`}
                      alt={project.name}
                      width={800}
                      height={200}
                      className="rounded-lg object-cover"
                      loading="eager"
                    />
                  </div>
                )}
                <Link href={project.link}>
                  <div className="inline-flex gap-2 items-center">
                    Link do Github
                    <Image
                      src={'/github.svg'}
                      alt={project.name}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>
                </Link>
              </div>
            )
            
              
            )
            
            }
          </div>
        </div>
      </main>
    </div>
  );
}
