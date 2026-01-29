"use client";

export default function Stats() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top text */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500">
            Trusted by 1000+ intelligent homebuyers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Hear from your fellow homeowners.
          </h2>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-4xl font-bold">2750+</div>
            <div className="text-gray-500 mt-2">Hours of Advice</div>
          </div>

          <div>
            <div className="text-4xl font-bold">520M+</div>
            <div className="text-gray-500 mt-2">Sq. Feet Analyzed</div>
          </div>

          <div>
            <div className="text-4xl font-bold">210+</div>
            <div className="text-gray-500 mt-2">Partner Builders</div>
          </div>

          <div>
            <div className="text-4xl font-bold">500+</div>
            <div className="text-gray-500 mt-2">Projects Across Bangalore</div>
          </div>
        </div>

        {/* Bottom copy */}
        <div className="text-center mt-16 max-w-2xl mx-auto text-gray-600">
          1000+ intelligent homebuyers trusted us with their biggest life
          decision because we helped them know if it was the right one.
        </div>
      </div>
    </section>
  );
}
