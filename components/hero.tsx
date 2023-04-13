import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const Hero = () => {
  return (
    // <div className="relative isolate overflow-hidden bg-[#FFBD59]">
    <div className="relative isolate overflow-hidden bg-[#ffd859]"> 
      <div className="absolute w-1/2 h-full right-0">
        <Image 
          src="/photo.png"
          alt="A cropped photo of Joe's upper body."
          fill
          className="object-contain pt-16 max-sm:hidden"
        />
      </div>
      <div className="absolute w-full h-full">
        <Image
          src="/mobile_photo.png"
          alt="A cropped photo of Joe's upper body facing towards the camera with his hands pointing to the text above."
          width={1000}
          height={500}
          className="object-contain sm:hidden absolute bottom-0 z-50"
        />
      </div>
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-[#FFBD59]/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </svg>
      <svg
        viewBox="0 0 1108 632"
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <path
          fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)"
          fillOpacity=".2"
          d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"
        />
        <defs>
          <linearGradient
            id="175c433f-44f6-4d59-93f0-c5c51ad5566d"
            x1="1220.59"
            x2="-85.053"
            y1="432.766"
            y2="638.714"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2774AE" />
            <stop offset={1} stopColor="#80CAFF" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl flex-shrink-0 mb-20 sm:mb-0 lg:mx-0 lg:max-w-xl flex flex-col items-center sm:items-start">
          <img
            className="h-11"
            src="/ucla.png"
            alt="UCLA School Logo"
          />
          <div className="mt-6 sm:mt-16">
            <div className="inline-flex space-x-6">
              <span className="rounded-full bg-blue-500/5 px-3 py-1 text-sm font-semibold leading-6 text-blue-400 ring-1 ring-inset ring-blue-500/20">
                Voting starts 5/5!
              </span>
              <a href="https://forms.gle/p2Fj8cWxQ2kgc9Fb7" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-black z-50">
                <span>Contact Me</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
              </a>
            </div>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-black sm:text-6xl text-center sm:text-left">
            Joe Lin for<br></br>UCLA General Representative
          </h1>
          <p className="mt-6 text-lg leading-8 text-black text-center sm:text-left">
            Running to serve and represent each and every Bruin! Vote Joe Lin for a kind, dedicated, and experienced leader.
          </p>
          <div className="mt-10 flex items-center gap-x-6 justify-center sm:justify-start">
            <a
              href="#plans"
              className="rounded-md bg-blue-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 z-50"
            >
              My Platform
            </a>
            <a href="https://forms.gle/Expj3GaRBez9aSWr9" target="_blank" rel="noreferrer" className="text-base font-semibold leading-7 text-black z-50">
              Get Updates <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;