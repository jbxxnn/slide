import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for getting started with Instagram automation",
      features: [
        "Up to 100 automated responses/month",
        "Basic engagement analytics",
        "1 Instagram account",
        "Email support",
        "Basic templates",
      ],
      limitations: ["Advanced AI responses", "Custom branding", "Priority support", "Advanced analytics"],
      buttonText: "Get Started Free",
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Ideal for growing businesses and influencers",
      features: [
        "Up to 2,500 automated responses/month",
        "Advanced engagement analytics",
        "Up to 3 Instagram accounts",
        "Priority email support",
        "Custom response templates",
        "AI-powered responses",
        "Engagement insights",
        "Custom branding",
      ],
      limitations: ["White-label solution", "API access"],
      buttonText: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For agencies and large businesses",
      features: [
        "Unlimited automated responses",
        "Advanced analytics & reporting",
        "Unlimited Instagram accounts",
        "24/7 phone & email support",
        "Custom response templates",
        "AI-powered responses",
        "Advanced engagement insights",
        "White-label solution",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
      ],
      limitations: [],
      buttonText: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-white">
            <span className="text-sm font-bold text-blue-900">||</span>
          </div>
          <span className="text-xl font-semibold text-white">Slide</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-white hover:text-blue-200 transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-blue-200 font-medium">
            Pricing
          </Link>
          <Link href="#about" className="text-white hover:text-blue-200 transition-colors">
            About
          </Link>
        </nav>

        <Button variant="outline" className="bg-white text-blue-900 hover:bg-blue-50">
          Login
        </Button>
      </header>

      {/* Pricing Hero Section */}
      <div className="px-6 py-16 text-center lg:py-24">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Simple, Transparent Pricing</h1>
        <p className="mb-12 max-w-2xl mx-auto text-lg text-blue-100 md:text-xl">
          Choose the perfect plan to transform your Instagram engagement. Start free and scale as you grow.
        </p>

        {/* Pricing Cards */}
        <div className="grid gap-8 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-white/95 backdrop-blur-sm ${
                plan.popular ? "ring-2 ring-blue-400 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
                <CardDescription className="mt-2 text-gray-600">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-center space-x-3 opacity-50">
                      <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Frequently Asked Questions</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-3">Can I change plans anytime?</h3>
              <p className="text-blue-100">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we&apos;ll
                prorate any billing differences.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial?</h3>
              <p className="text-blue-100">
                All paid plans come with a 14-day free trial. No credit card required to start. You can cancel anytime
                during the trial period.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-blue-100">
                We accept all major credit cards, PayPal, and bank transfers for Enterprise plans. All payments are
                processed securely.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer refunds?</h3>
              <p className="text-blue-100">
                We offer a 30-day money-back guarantee for all paid plans. If you&apos;re not satisfied, we&apos;ll refund your
                payment in full.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Instagram?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using Slide to automate their Instagram engagement and grow their
            audience.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Button size="lg" className="bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent px-8 py-3 text-white hover:bg-white hover:text-blue-900"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
