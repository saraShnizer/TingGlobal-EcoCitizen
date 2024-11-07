// src/app/faq/page.tsx

export default function FAQPage() {
    return (
      <main className="bg-white text-gray-900">
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Have questions? We’ve got answers!</p>
          </div>
        </section>
  
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Who is this program for?</h3>
              <p>This program is ideal for aspiring leaders, professionals, and individuals eager to develop sustainable leadership skills.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">How does the personalized learning path work?</h3>
              <p>Our AI tailors the curriculum to your unique needs and development goals, adapting as you progress.</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
  