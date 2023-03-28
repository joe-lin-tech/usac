import { HeartIcon, HomeIcon, UserGroupIcon } from "@heroicons/react/24/solid";

const features = [
  {
    name: 'Dining and Housing Info.',
    description: 'View dining menus and accurate dining hall capacities in real time. View laundry machine availabilities and bathroom cleaning times.',
    icon: HomeIcon,
  },
  {
    name: 'Health and Fitness (Opt-In).',
    description: 'Track daily caloric intake, calories burned, and create/maintain your own workout plan.',
    icon: HeartIcon,
  },
  {
    name: 'Clubs and Activities.',
    description: 'Get info about the latest club/campus-wide events and conveniently view club info.',
    icon: UserGroupIcon,
  },
  {
    name: 'Other Resources.',
    description: 'Quick access to safe-ride options, study spaces (meeting room reservations), and more.',
    icon: UserGroupIcon,
  }
]

const Represent = () => {
  return (
    <div className="overflow-hidden bg-white pt-12 pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-5xl font-bold tracking-tight text-gray-900">Representing You</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                If elected, I plan to go above and beyond in curating opinions of each and every undergraduate bruin and work towards 
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-start lg:order-end">
            <img
              src="https://wp.dailybruin.com/images/2021/04/ALK-2.jpg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Represent