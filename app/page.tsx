import { Button } from "@/components/button"
import { Skeleton } from "@/components/skeleton"
import { Book, Calendar1Icon, FileText, Sparkles } from "lucide-react"
import Link from "next/link"
import { ChevronRight,Lock } from 'lucide-react';
import { Card, CardContent } from "@/components/card";

const features = [
  {
    icon: Book,
    title: "Rich Text Editor",
    description:
      "Express yourself with a powerful editor supporting markdown, formatting, and more.",
  },
  {
    icon: Sparkles,
    title: "Daily Inspiration",
    description:
      "Get inspired with daily prompts and mood-based imagery to spark your creativity.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "Your thoughts are safe with enterprise-grade security and privacy features no one can access your data except you.",
  },
];

export default async function LandingPage() {
  
  return (
    <div className="container mx-auto px-4 pt-16 pb-16">
      <div className="max-w-5xl mx-auto text-center space-y-10">

        {/* Heading */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl gradient-title">
          Consistency is what transforms average into excellence.
        </h1>

        {/* Subtitle */}
        <p className="rounded-lg border border-black text-lg md:text-xl text-gray-800 px-6 py-4 max-w-3xl mx-auto bg-gradient-to-b from-gray-200 via-white to-gray-100">
          Start your journaling journey today and unlock the power of daily reflection!
        </p>

        {/* Card with gradient frame */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-b from-gray-200 via-white to-gray-100 rounded-2xl p-[2px]">

            <div className="bg-gradient-to-b from-gray-200 via-white to-gray-100 border border-black rounded-2xl p-6">
              <div className="border-b border-gray-300 pb-2 mb-4 flex items-center gap-2">
                <Calendar1Icon className="h-5 w-5" />
                <span className="font-medium">Today’s Entry</span>
              </div>

              <div className="flex gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-gray-300" />
                <div className="h-3 w-3 rounded-full bg-gray-400" />
                <div className="h-3 w-3 rounded-full bg-gray-500" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4 bg-gray-200 rounded" />
                <Skeleton className="h-4 w-full bg-gray-200 rounded" />
                <Skeleton className="h-4 w-2/3 bg-gray-200 rounded" />
              </div>
            </div>

          </div>
          <div className="mt-7 flex justify-center gap-6">
            <Link href="/dashboard">
              <Button variant="outline" className="group bg-black text-white border border-black px-8 py-6 rounded-full flex items-center gap-2
             hover:bg-white hover:text-black transition-colors">
                Start Journaling <ChevronRight className="h-5 w-5 text-white group-hover:text-black transition-colors" />
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" className="bg-gradient-to-b from-gray-200 via-white to-gray-100 border border-black px-8 py-6 rounded-full flex items-center gap-2 border border-black">
                Learn More 
              </Button>
            </Link>
          </div>
        </div>

      </div>
      <section id="features" className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={feature.title} className="shadow-lg border border-black bg-gradient-to-b from-gray-200 via-white to-gray-100">
            <CardContent>
              <div className="h-12 w-12 bg-gradient-to-b from-gray-200 via-white to-gray-100 border border-black rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 mb-1 text-gray-700" />
              </div>
              <h3 className="text-gray-800">{feature.description}</h3>
            </CardContent>
          </Card>
        ))}
          
        
      </section>

      <div className="mt-24 space-y-24 bg-gradient-to-b from-gray-200 via-white to-gray-100 rounded-2xl p-8 border border-black">
       <div className="text-center space-y-8">
        {/* Final Message */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
          Build the habit. The clarity follows.
        </h2>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Journaling isn’t about writing perfectly. It’s about showing up every day,
          thinking clearly, and letting small actions compound into real growth.
        </p>

        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <div className="flex items-center gap-2 text-gray-700">
            <Lock className="h-5 w-5" />
            <span>End-to-end encrypted</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FileText className="h-5 w-5" />
            <span>Unlimited entries</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Calendar1Icon className="h-5 w-5" />
            <span>Daily streak tracking</span>
          </div>
        </div>

        {/* Final CTA */}
        <div className="pt-6">
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="bg-gradient-to-b from-gray-200 via-white to-gray-100 border border-black px-10 py-7 rounded-full flex items-center gap-2 mx-auto"
            >
              Start Your First Entry <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      </div>
    </div>
  )
}
