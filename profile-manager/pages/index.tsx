import Link from 'next/link'


export default function Home() {
  return (
    <main className="min-h-screen min-w-max flex items-center justify-center">
      <Link href="/profile">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded h-12 hover:h-14 w-80 hover:w-96">
          View my profile
        </button>
      </Link>
    </main>
  )
}