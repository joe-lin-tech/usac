import { ArrowPathIcon, CodeBracketIcon, CurrencyDollarIcon, HomeIcon, LightBulbIcon, LockClosedIcon, SpeakerWaveIcon, UserIcon } from '@heroicons/react/24/outline'

const plans = [
  {
    name: 'UCLA App Modernization',
    description:
      'Integrating campus building maps for convenient student navigation. Streamlining organization of app features and interfaces on external pages.',
    href: '#app',
    icon: CodeBracketIcon,
  },
  {
    name: 'Off-Campus Housing Platform',
    description:
      'A platform to find suitable off-campus housing options and connect you with current/previous student residents and respective landlords.',
    href: '#housing',
    icon: HomeIcon
  },
  {
    name: 'Resource Quality and Accessibility',
    description:
      'Enhancing academic, mental health, and other resources. Making resources more easily accessible and accommodating for every student.',
    href: '#resources',
    icon: CurrencyDollarIcon,
  },
  undefined,
  {
    name: 'Represent Your Interests',
    description:
      'Advocating for your ideas and actively adapting policy proposals throughout the year. Establishing effective methods to bring your input into reality.',
    href: '#represent',
    icon: LightBulbIcon,
  },
  {
    name: 'USAC Awareness',
    description:
      'Publicizing USAC\'s work and spending details in a more digestable manner, allowing the student body to be fully aware of USAC\'s progress.',
    href: '#awareness',
    icon: UserIcon
  }
]

const Plans = () => {
  return (
    <div id="plans" className="w-full px-36 pt-32 pb-24 bg-white">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-500">Check out my plans.</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
          My Plan and Vision
        </p>
        <p className="mt-6 text-lg leading-8 text-black">
          My vision is to strive towards elevating the UCLA experience by fostering a campus environment that provides effective and accessible resources for students and
          establishing a strong connection between USAC and the student body.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-3 gap-x-16 gap-y-16 lg:max-w-none lg:grid-cols-6">
          {plans.map((p, i) => p ? (
            <div key={i} className="flex flex-col col-span-2">
              <dt className="text-base font-semibold leading-7 text-black">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                  <p.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {p.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-black">
                <p className="flex-auto">{p.description}</p>
                <p className="mt-6">
                  <a href={p.href} className="text-sm font-semibold leading-6 text-blue-400">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
          ) : (<div key={i} className="col-span-1" />))}
        </dl>
      </div>
    </div>
  )
}

export default Plans;
