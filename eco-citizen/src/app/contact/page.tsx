// src/app/contact/page.tsx

export default function ContactPage() {
    return (
      <main className="bg-white text-gray-900">
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Have questions or want to learn more? Get in touch!
            </p>
          </div>
        </section>
  
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
              <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
              <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg" rows={4}></textarea>
              <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg">Send Message</button>
            </form>
          </div>
        </section>
      </main>
    );
  }
  