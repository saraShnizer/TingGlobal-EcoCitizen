import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-2xl font-bold">
          Ting Global Academy
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About Us</Link>
          <Link href="/program" className="hover:text-gray-300">Program</Link>
          <Link href="/faq" className="hover:text-gray-300">FAQ</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          <Link href="/join" className="hover:text-gray-300">Join</Link>
          <Link href="/success-stories" className="hover:text-gray-300">Success Stories</Link>
        </div>
      </div>
    </nav>
  );
}