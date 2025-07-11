import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700">
    {/* Header */}
    <header className="flex items-center justify-between px-6 py-4 lg:px-12">
      <div className="flex items-center space-x-2">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-white">
          <span className="text-sm font-bold text-blue-900">||</span>
        </div>
        <span className="text-xl font-semibold text-white">Slide</span>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <Link href="#features" className="text-white hover:text-blue-200 transition-colors">
          Features
        </Link>
        <Link href="/price" className="text-white hover:text-blue-200 transition-colors">
          Pricing
        </Link>
        <Link href="#about" className="text-white hover:text-blue-200 transition-colors">
          About
        </Link>
      </nav>

      <Button variant="outline" className="bg-white text-blue-900 hover:bg-blue-50">
       <Link href="/dashboard">Login</Link>
      </Button>
    </header>

    {/* Hero Section */}
    <main className="flex flex-col items-center justify-center px-6 py-16 text-center lg:py-24">
      <h1 className="mb-8 max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
        Transform Your Instagram Engagement with Slide
      </h1>

      <p className="mb-12 max-w-3xl text-lg text-blue-100 md:text-xl lg:text-2xl">
        Slide revolutionizes how you connect with your audience on Instagram. Automate responses and boost engagement
        effortlessly, turning interactions into valuable business opportunities.
      </p>

      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Button size="lg" className="bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
          Get Started
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white bg-transparent px-8 py-3 text-white hover:bg-white hover:text-blue-900"
        >
          Learn More
        </Button>
      </div>
    </main>

    {/* Profile Images Section */}
    <div className="flex justify-center space-x-4 px-6 pb-16 md:space-x-8">
      <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-300 md:h-32 md:w-32">
        <Image
          src="/placeholder.svg?height=128&width=128"
          alt="User profile 1"
          width={128}
          height={128}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-300 md:h-32 md:w-32">
        <Image
          src="/placeholder.svg?height=128&width=128"
          alt="User profile 2"
          width={128}
          height={128}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-300 md:h-32 md:w-32">
        <Image
          src="/placeholder.svg?height=128&width=128"
          alt="User profile 3"
          width={128}
          height={128}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-300 md:h-32 md:w-32">
        <Image
          src="/placeholder.svg?height=128&width=128"
          alt="User profile 4"
          width={128}
          height={128}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
  );
}
