import { ArrowPathIcon, CodeBracketIcon, CurrencyDollarIcon, LightBulbIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'

const experiences = [
  {
    name: 'Lynbrook ASB President',
    description:
      'Revitalized school spirit and campus events. Helped develop a mobile app for school events, clubs, and other resources. Made reformations to Legislative Council that improved productivity and efficiency.',
    href: '#',
    icon: UserIcon,
  },
  {
    name: 'Lynbrook Class President and Vice President',
    description:
      'Planned a wide range of class events, rallies, and fundraisers. Created multiple initiatives to support students especially during the pandemic.',
    href: '#',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Lynbrook App Developer',
    description:
      'Helped lead and create high school mobile app made with React Native and Django.',
    href: '#',
    icon: CodeBracketIcon,
  },
  {
    name: 'Boy Scouts (SPL and JASM)',
    description:
      'Advocating your ideas and actively adapting policy proposals throughout the year. Establish effective method to bring your input into reality.',
    href: '#',
    icon: LightBulbIcon,
  },
]

const Experience = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-48">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-500">Experienced and effective leader.</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          My Experience
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Having served in various leadership positions, I&apos;ve accrued leadership skills that will allow me to efficiently run and manage the Office of the General Representative.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {experiences.map((e) => (
            <div key={e.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                  <e.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {e.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-300">{e.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Experience;