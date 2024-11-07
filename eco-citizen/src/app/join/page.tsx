// src/app/join/page.tsx

export default function JoinPage() {
    return (
      <main className="bg-white text-gray-900">
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Join the Program</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ready to take the next step in your leadership journey? Apply now and start making a difference.
            </p>
          </div>
        </section>
  
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Application Form</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg" />
              <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg" />
              <textarea placeholder="Why do you want to join?" className="w-full p-3 border rounded-lg" rows={4}></textarea>
              <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg">Submit Application</button>
            </form>
          </div>
        </section>
      </main>
    );
  }
  