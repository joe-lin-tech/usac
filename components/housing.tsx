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
    <div id="housing" className="mx-auto px-4 sm:px-20">
      <div className="relative overflow-hidden py-20 px-6 sm:rounded-3xl sm:px-10 lg:py-24 xl:px-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:items-center lg:gap-y-0">
          <div className="text-center">
            <h2 className="text-5xl font-bold tracking-tight text-black">
              Off-Campus Housing Platform
            </h2>
            <dl className="max-w-xl space-y-4 text-base leading-7 text-gray-300 lg:max-w-none pt-5 mt-5">
              {features.map((f) => (
                <div key={f.name} className="relative">
                  <dt className="inline-block font-semibold text-black">
                    {/* <f.icon className="absolute top-1 left-1 h-5 w-5 text-blue-500" aria-hidden="true" /> */}
                    {f.name}
                  </dt>{' '}
                  <dd className="inline text-black">{f.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Housing;