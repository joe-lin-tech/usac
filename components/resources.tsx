const Resources = () => {
  return (
    <div id="resources" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-y-16 gap-x-8 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4 h-full flex flex-col justify-around max-sm:hidden">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pt-64 shadow-2xl lg:max-w-lg xl:px-10">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/caps.png"
                alt="Image of CAPS center at UCLA with a student in the middle of walking into the building."
              />
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pt-64 shadow-2xl lg:max-w-lg xl:px-10">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/asucla.png"
                alt="Image of ASUCLA restaurants with veggie grill on the left, blaze pizza in the middle, and panda express on the right."
              />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="mt-2 text-5xl font-bold tracking-tight text-gray-900">
                Resource Quality and Accessibility
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  I&apos;m committed to improving the current resources offered at UCLA, with regards to academics, mental health, and other physical resources.
                  I promise to work my hardest in making sure that each and every bruin knows where/how to access all UCLA resources and to be able to do so conveniently.
                </p>
                <p className="mt-8">
                  I aim to work with the Academic Affairs Commission to further the accessibility of academic resources like course materials (lecture content) through increased digital access and
                  look into tools to efficiently transcribe lectures and discussions for CAE students.
                </p>
                <p className="mt-8">
                  I hope to also collaborate with the Student Wellness Commission to survey the student body on current mental health resources, especially CAPS, and devise a thorough plan to improve the quality of these resources.
                </p>
                <p className="mt-8">
                  In terms of physical resources, I plan to push for raising the value of ASUCLA tickets from its current $9 worth to accommodate for the inflating prices at on-campus restaurants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources