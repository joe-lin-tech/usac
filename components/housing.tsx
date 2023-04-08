const features = [
  {
    name: 'Housing Map.',
    description: 'View available off-campus housing options around UCLA. See available pricing, utilities, and contact information.',
  },
  {
    name: 'Student Connections.',
    description: 'Find potential off-campus housing roommates.',
  },
]

const Housing = () => {
  return (
    <div className="mx-auto px-16 lg:px-20">
      <div className="relative isolate overflow-hidden py-20 px-6 sm:rounded-3xl sm:py-24 sm:px-10 lg:py-24 xl:px-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:items-center lg:gap-y-0">
          <div className="text-center">
            <h2 className="text-5xl font-bold tracking-tight text-white">
              Off-Campus Housing Platform
            </h2>
            <dl className="max-w-xl space-y-4 text-base leading-7 text-gray-300 lg:max-w-none lg:pt-5 lg:mt-5">
              {features.map((f) => (
                <div key={f.name} className="relative">
                  <dt className="inline-block font-semibold text-white">
                    {/* <f.icon className="absolute top-1 left-1 h-5 w-5 text-blue-500" aria-hidden="true" /> */}
                    {f.name}
                  </dt>{' '}
                  <dd className="inline">{f.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        {/* <svg
          className="pointer-events-none absolute top-1/2 left-12 -z-10 h-[42.375rem] -translate-y-1/2 transform-gpu blur-3xl lg:top-auto lg:bottom-[-12rem] lg:translate-y-0 lg:transform-gpu"
          viewBox="0 0 1155 678"
          fill="none"
        >
          <path
            fill="url(#c0458c57-1330-459f-9d5c-f0d75c210466)"
            fillOpacity=".25"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="c0458c57-1330-459f-9d5c-f0d75c210466"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg> */}
      </div>
    </div>
  )
}

export default Housing;