import { ClipboardDocumentListIcon, HeartIcon, HomeIcon, UserGroupIcon, UserIcon } from "@heroicons/react/24/solid";

const features = [
  {
    name: 'Student Input.',
    description: 'Gathering student opinions on campus throughout the year through frequent in-person conversations. Establish convenient methods for student input through forms on the USAC website and UCLA app.',
    icon: UserIcon,
  },
  {
    name: 'Event/Initiative Feedback.',
    description: 'Solidify routine feedback forms for USAC events and initiatives allowing USAC offices to integrate feedback into future plans.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'USAC Town Halls/Discussions.',
    description: 'Holding periodic open and informal town halls/discussions that effectively bridges the gap between USAC offices and the student body.',
    icon: UserGroupIcon,
  },
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
                If elected, I plan to establish effective methods for student body input throughout the year, whether that be about specific events, initiatives, or even general feedback for USAC&apos;s progress.
                My goal is to not only fulfill my campaign promises, but also adapt the General Representative&apos;s office priorities in accordance to student body opinions throughout the year.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-blue-500" aria-hidden="true" />
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