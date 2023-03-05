import { ArrowPathIcon, CodeBracketIcon, CurrencyDollarIcon, LightBulbIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const plans = [
  {
    name: 'UCLA App',
    description:
      'Centralized mobile app for all UCLA student essentials, like dining, housing (laundry), events, fitness, and more.',
    href: '#',
    icon: CodeBracketIcon,
  },
  {
    name: 'Strengthen USAC Transparency',
    description:
      'Keep the student body consistently informed through weekly updates and ensure USAC\'s website is up to date.',
    href: '#',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Represent Your Interests',
    description:
      'Advocating your ideas and actively adapting policy proposals throughout the year. Establish effective method to bring your input into reality.',
    href: '#',
    icon: LightBulbIcon,
  },
]

const Plans = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-48">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-500">Check out my plans.</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          My Plan and Vision
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Below are my plans and vision if elected as General Representative. My vision is to strive towards elevating the UCLA experience by pushing for quality of life changes,
          advocating for each and every bruin, and (TODO: UPDATE VISION)
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-white">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                  <p.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {p.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">{p.description}</p>
                <p className="mt-6">
                  <a href={p.href} className="text-sm font-semibold leading-6 text-blue-400">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Plans;
