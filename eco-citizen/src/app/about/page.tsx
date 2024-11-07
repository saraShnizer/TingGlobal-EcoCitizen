// src/app/about/page.tsx

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Section: Our Mission */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Mission and Vision</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ting Global Academy was founded with a vision to transform traditional leadership training.
            We believe that effective leadership in the 21st century benefits from an evolved approach—one that is personalized, enhanced by technology, and rooted in ethical, equitable, and sustainable decision-making.
          </p>
        </div>
      </section>

      {/* Section: Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Ting Global Academy was established to redefine leadership for the digital era. By blending the capabilities of AI with insights from global thought leaders, we offer personalised learning journeys that develop the leaders the world needs.
          </p>
        </div>
      </section>

      {/* Section: Vision for Leadership */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Vision for Leadership</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Our vision is to nurture leaders skilled in navigating technological and global challenges, with a commitment to making positive, sustainable impacts in their communities and organizations.
          </p>
        </div>
      </section>

      {/* Section: Meet the Team */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Image src="/team-member1.jpg" alt="Ben Goertzel" width={150} height={150} className="rounded-full mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Ben Goertzel</h3>
              <p className="text-gray-600">Co-Founder</p>
            </div>
            <div className="text-center">
              <Image src="/team-member2.jpg" alt="David Hanson" width={150} height={150} className="rounded-full mx-auto" />
              <h3 className="text-xl font-semibold mt-4">David Hanson</h3>
              <p className="text-gray-600">Co-Founder</p>
            </div>
            <div className="text-center">
              <Image src="/team-member3.jpg" alt="Sophia Robot" width={150} height={150} className="rounded-full mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Sophia Robot</h3>
              <p className="text-gray-600">Renowned Thought Leader</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
