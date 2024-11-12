import Head from "next/head";

export default function OurProgram() {
  return (
    <div>
      <Head>
        <title>Our Program - Ting Global Academy</title>
        <meta
          name="description"
          content="Explore our AI-Enhanced Leadership Training Program at Ting Global Academy."
        />
      </Head>
      <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Our Program: AI-Enhanced Leadership Training</h1>
        <p className="mt-4 text-lg">
          Discover the future of leadership with AI-driven personalization, immersive simulations, and a commitment to ethics and sustainability.
        </p>
      </header>
      <main className="py-10 px-6">
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Program Features</h2>
          <ul className="space-y-8">
            <li>
              <h3 className="text-xl font-medium text-blue-600">Personalized Learning Paths</h3>
              <p className="text-gray-700">
                Our AI-driven platform creates a customized learning journey for each participant, focusing on their strengths, areas for development, and leadership aspirations.
              </p>
              <p className="text-gray-700 mt-2">
                At the heart of our program is the integration of AI avatars, offering dynamic interaction and tailored content to match your unique needs.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-medium text-blue-600">Immersive Simulations</h3>
              <p className="text-gray-700">
                Engage in virtual scenarios that challenge your decision-making, strategy, and ethical reasoning. From crisis management to steering organizational change, our VR simulations provide real-world leadership practice.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-medium text-blue-600">Collaborative Learning Networks</h3>
              <p className="text-gray-700">
                Connect with peers across the globe in our Leadership Labs. Collaborate on projects, share insights, and build a network of future leaders committed to making a difference.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-medium text-blue-600">Ethics and Sustainability in Leadership</h3>
              <p className="text-gray-700">
                Leadership is more than achieving targets. Our program emphasizes ethical decision-making and environmental stewardship, fostering leaders who balance profitability with positive global impact.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-medium text-blue-600">Continuous Learning and Community</h3>
              <p className="text-gray-700">
                Graduating from our program is just the beginning. Join our alumni network for ongoing learning opportunities, mentorship, and support as you continue your leadership journey.
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">AI Avatars: Personalized Guidance</h2>
          <p className="text-gray-700">
            Choose from a variety of avatars, including digital twins, characters from the TWIN SingularityNET project, and renowned thought leaders. Each avatar provides a unique perspective and adapts to your progress in real-time.
          </p>
          <p className="text-gray-700 mt-2">
            With options for customization and dynamic interaction, our avatars make learning engaging and tailored to your leadership goals.
          </p>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Join the Program</h2>
          <p className="mt-4 text-gray-600">
            Ready to transform your leadership potential? Start your journey today with Ting Global Academy's AI-Enhanced Leadership Training Program.
          </p>
          <a
            href="/join" 
            className="inline-block mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Apply Now
          </a>
        </section>
      </main>
 
    </div>
  );
}
