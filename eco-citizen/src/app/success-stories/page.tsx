// src/app/success-stories/page.tsx

export default function SuccessStoriesPage() {
    return (
      <main className="bg-white text-gray-900">
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover how Ting Global Academy has transformed the lives of our participants.
            </p>
          </div>
        </section>
  
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Alumni Success Story 1</h3>
              <p>A powerful story of transformation and impact, illustrating the potential of AI-enhanced leadership.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Alumni Success Story 2</h3>
              <p>How one participant's journey through Ting Global Academy empowered them to lead sustainable change.</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
  