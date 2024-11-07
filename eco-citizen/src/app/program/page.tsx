
export default function ProgramPage() {
    return (
      <main className="bg-white text-gray-900">
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Program Overview</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Eco Citizen Academy, we redefine leadership training with AI-driven, immersive simulations and personalized learning paths.
            </p>
          </div>
        </section>
  
        <section className="py-16">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Personalized Learning Paths</h3>
              <p>Our AI platform creates a customized learning journey, focusing on your strengths and development areas.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Immersive Simulations</h3>
              <p>Engage in real-world scenarios and practice leadership skills with risk-free, AI-enhanced simulations.</p>
            </div>
          </div>
        </section>
      </main>
    );
  }