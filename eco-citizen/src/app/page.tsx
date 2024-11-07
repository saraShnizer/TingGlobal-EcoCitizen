// src/app/home/page.tsx

import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to Ting Global’s Eco Citizen Academy</h1>
          <p className="text-lg mb-8">
            Nurturing the Next Generation of Leaders with AI-Enhanced Training.
            Discover how our personalised, immersive leadership program prepares you for the future.
          </p>
          <a href="#program" className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold">
            Discover Your Leadership Potential
          </a>
        </div>
      </section>

      {/* Program Overview */}
      <section id="program" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Program Overview</h2>
          <p className="text-center text-gray-700 mb-12">
            At Eco Citizen Academy, we're redefining leadership training. Our unique program combines advanced AI technology with immersive simulations, tailored learning paths, and a commitment to evolved stewardship, sustainability, and thrivability.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Personalized Learning Paths with AI</h3>
              <p>
                Our AI-driven platform creates a customized learning journey for each participant, focusing on their strengths, areas for development, and leadership aspirations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Immersive Simulations</h3>
              <p>
                Step into virtual scenarios that challenge your decision-making, strategy, and ethical reasoning. From crisis management to organizational change, our simulations provide real-world practice without the risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            Ting Global Academy was founded with a vision to transform traditional leadership training.
            We believe that effective leadership in the 21st century benefits from an evolved approach—one that is personalized, enhanced by technology, and rooted in ethical, equitable, and sustainable decision-making.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="bg-green-500 text-white py-12 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Leadership Journey?</h2>
          <p className="mb-8">Explore the Program and Discover Your Leadership Potential Today!</p>
          <a href="/program" className="bg-white text-green-500 px-6 py-3 rounded-full text-lg font-semibold">
            Explore the Program
          </a>
        </div>
      </section>
    </main>
  );
}
