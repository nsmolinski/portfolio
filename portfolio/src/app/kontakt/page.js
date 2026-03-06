import Image from "next/image"
import Link from "next/link"
export default function Contact(){
    return(
        <section className="px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-800 mx-auto max-w-4xl my-6 sm:my-10 rounded-[1.5rem] p-4 sm:p-6 md:p-10">
                <div className="flex flex-col items-center p-6 sm:p-8 md:p-10 bg-white rounded-lg text-indigo-500 gap-4 w-full">
                    <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-center">Kontakt</h1>
                    <div className="flex flex-col gap-4 sm:gap-6 text-left my-4 sm:my-6 w-full max-w-md mx-auto text-sm sm:text-base break-words">
                        <p className="flex items-center gap-3"> 
                            <Image src='/phone.svg' alt='phone-img' width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 shrink-0"></Image>
                            <span><b>Numer telefonu:</b> +48 696 285 299</span>
                        </p>
                        <p className="flex items-center gap-3">
                            <Image src='/email.svg' alt='email-img' width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 shrink-0"></Image>
                            <span><b>Email: </b> nikodem.smolinski@gmail.com </span>
                        </p>
                        <p className="flex items-center gap-3">
                            <Image src='/github-blue.svg' alt='github-img' width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 shrink-0"></Image>
                            <span><b>Github: </b> <Link href='https://github.com/nsmolinski' className="underline hover:text-indigo-700 transition">nsmolinski</Link> </span>
                        </p>
                        <p className="flex items-center gap-3">
                            <Image src='/linkedin.svg' alt='linkedin-img' width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 shrink-0"></Image>
                            <span><b>LinkedIn: </b> <Link href='https://linkedin.com/in/nikodem-smolinski' target="_blank" className="underline hover:text-indigo-700 transition">nikodem-smolinski</Link> </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}