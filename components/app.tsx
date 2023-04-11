const features = [
  {
    name: 'Campus Navigation.',
    description: 'Ever been lost in Boelter Hall? With this new feature, you\'ll be able to find your way through every UCLA building with ease.',
  },
  {
    name: 'Laundry Status.',
    description: 'See laundry machine availabilites in real time no matter where you live on campus.',
  },
  {
    name: 'Reorganization.',
    description: 'Moving features, links, and resources to locations that are more easily accessible. Refining interfaces to external UCLA pages.',
  },
]

const App = () => {
  return (
    <div id="app" className="mx-auto px-16 lg:px-20">
      <div className="relative overflow-hidden pt-20 px-6 sm:rounded-3xl sm:px-10 lg:pt-24 xl:px-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:items-center lg:gap-y-0">
          <div className="text-center">
            <h2 className="text-5xl font-bold tracking-tight text-black">
              UCLA App Modernization
            </h2>
            <dl className="max-w-xl space-y-4 text-base leading-7 text-gray-300 lg:max-w-none lg:pt-5 lg:mt-5">
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

export default App;