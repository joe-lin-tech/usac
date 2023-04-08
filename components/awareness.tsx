const Awareness = () => {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-y-16 gap-x-8 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/awareness.png"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                <h1 className="mt-2 text-5xl font-bold tracking-tight text-gray-900">
                  USAC Awareness
                </h1>
                <div className="max-w-xl">
                  <p className="mt-6">
                    Many students are still unaware of the work that USAC does and where our money goes. My goal is to more effectively publicize USAC&apos;s progress and spendings to the student body.
                  </p>
                  <p className="mt-8">
                    I hope to not only publish monthly reports on USAC&apos;s progress but also proactively communicate USAC&apos;s work to student groups (e.g. at aforementioned town halls/discussions), which will also help facilitate direct feedback from students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Awareness