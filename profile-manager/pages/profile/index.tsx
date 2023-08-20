import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function profileScreen() {
  return (
    <main className="min-h-screen min-w-max flex items-center justify-center">
      Here is my profile.
    </main>
  )
}
