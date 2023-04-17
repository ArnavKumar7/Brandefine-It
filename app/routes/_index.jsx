import { Link } from "@remix-run/react";
import { Image } from "remix-image";

export default function () {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-16 w-3/4 pt-0 xs:w-full">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex xs:flex xs:absolute xs:bottom-4">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none xs:relative xs:w-[60px] xs:left-[40px] xs:bottom-8">
            <Image
              src="/pata_nai.png"
              alt="DSGNR Logo"
              width={100}
              height={100}
              priority
            />
          </div>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none xs:w-auto xs:relative">
            <Link
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              to="https://www.pes.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/PES_white.png"
                alt="PES University"
                className="pointer-events-none"
                width={100}
                height={100}
                priority
              />
            </Link>
          </div>
        </div>

        <div className="relative pl-2 flex place-items-center before:absolute before:h-[480px] before:w-[360px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial">
          <Image
            className=""
            src="/LogoPink.png"
            alt="Brandefine-It Logo"
            width={600}
            height={480}
            priority
          />
        </div>

        <button className="relative z-10 px-3 py-2 text-3xl font-semibold text-[#00b182] transition ease-in-out delay-150 bg-[#020202] hover:-translate-y-1 hover:scale-110  hover:bg-[#ffffff] duration-300 rounded-xl shadow-lg border-solid border-4 border-[#ffffff] active:bg-white focus:outline-none focus:ring focus:ring-white xs:text-base xs:px-1 xs:py-1 xs:ml-0 xs:border-2">
          <Link to="./register">REGISTER NOW</Link>
        </button>
      </main>
    </>
  );
}
