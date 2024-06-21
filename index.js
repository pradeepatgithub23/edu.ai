import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-indigo-200">
      <div className="pt-8 ml-8 font-bold text-3xl text-indigo-800 inline-block">
        Edu.ai
      </div>
      <div className="justify-end mr-12 flex mb-4">
        <Link href="/signup" legacyBehavior>
          <a className="mr-8 text-indigo-600 hover:text-indigo-800 transition duration-300 font-medium bg-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-100 font-poopins">
            SignUp
          </a>
        </Link>
        <Link href="/login" legacyBehavior>
          <a className="text-indigo-600 hover:text-indigo-800 transition duration-300 font-medium bg-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-100">
            Login
          </a>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center text-center h-full">
        <p className="text-5xl font-extrabold text-indigo-900 pt-40">
          Personalized Learning Platform Powered by AI
        </p>
        <p className="pt-12">
          <Link href="/signup" legacyBehavior>
            <a className="text-xl font-medium text-white bg-indigo-600 px-6 py-3 rounded-full shadow-md hover:bg-indigo-800 transition duration-300">
              Try Now
            </a>
          </Link>
        </p>
      </div>
    </main>
  );
}
