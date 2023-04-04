import { CodeBracketIcon, CurrencyDollarIcon, LightBulbIcon, UserIcon, UserGroupIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/solid';

const experiences = [
  {
    name: 'Lynbrook ASB President',
    description:
      'Revitalized school spirit and campus events. Helped develop a mobile app that provided quality of life changes. Made reformations to Legislative Council that improved productivity and efficiency.',
    icon: UserIcon,
  },
  {
    name: 'Lynbrook Class President and Vice President',
    description:
      'Planned a wide range of class events, rallies, and fundraisers. Created multiple initiatives to support students especially during the pandemic (e.g. finding summer opportunities).',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Lynbrook App Developer',
    description:
      'Helped lead and create high school mobile app with two other developers using React Native and Django. App provides school event information/participation, club information, bell schedules, and more.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Boy Scouts (Eagle Scout, Senior Patrol Leader, and JASM)',
    description:
      'Developed strong leadership, communication, and problem-solving skills. Planned and executed large-scale conference for Eagle service project.',
    icon: LightBulbIcon,
  },
  {
    name: "FUHSD Intradistrict Council",
    description:
      'Collaborated with IDC Representatives and ASB Presidents across the district to form policies/initiatives and plan district-wide events.',
    icon: UserGroupIcon
  },
  {
    name: "Cupertino Toyokawa Sister Cities Volunteer",
    description:
      'Collaborated with committee members to plan for organization events, especially during the pandemic (e.g. handled logistics and production of virtual Cherry Blossom Festival).',
    icon: BuildingLibraryIcon
  },
]

const skills = [
  {
    name: 'Effective Listener',
    description: 'Prioritizes listening to other opinions before pitching in personal opinion, proposing a solution, or making a decision.',
  },
  { name: 'Servant Leadership', description: 'Always focuses on the needs and desires of others.' },
  {
    name: 'Strong Communication',
    description: 'In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.',
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
      <dl className="col-span-2 grid grid-cols-3 gap-x-8 gap-y-10 text-base leading-7 lg:gap-y-16 mt-40">
        {skills.map((s) => (
          <div key={s.name} className="relative pl-9">
            <dt className="font-semibold">
              <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
              {s.name}
            </dt>
            <dd className="mt-2 text-gray-300">{s.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default Experience;