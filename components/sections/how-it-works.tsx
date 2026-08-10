import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Validate',
      description: 'We validate your firm\'s capacity, target markets, and acquisition goals to ensure campaign alignment.',
    },
    {
      number: '02',
      title: 'Build',
      description: 'We build campaign-specific operating plans, intake workflows, and qualification logic tailored to your requirements.',
    },
    {
      number: '03',
      title: 'Launch',
      description: 'We deploy media campaigns and activate intake operations with real-time monitoring and adjustment.',
    },
    {
      number: '04',
      title: 'Qualify',
      description: 'We manage qualification, documentation collection, and dispositioning according to campaign criteria.',
    },
    {
      number: '05',
      title: 'Complete & Deliver',
      description: 'We support retainer completion and deliver qualified cases with complete documentation and attribution.',
    },
    {
      number: '06',
      title: 'Optimize',
      description: 'We analyze performance, identify optimization opportunities, and refine campaign economics over time.',
    },
  ]

  return (
    <section className="bg-[#F5F7FA] py-20 md:py-28 relative overflow-hidden section-glow-gold">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16 section-heading-glow">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#202124] mb-4">
              How It Works
            </h2>
            <p className="text-base md:text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
              A structured approach to building and operating plaintiff acquisition systems—from validation through optimization.
            </p>
          </div>

          {/* Steps with visual narrative */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-[#C6A24A] to-[#9B7830] hidden md:block" />
                )}
                
                <Card className={cn(
                  'border p-6 md:p-8 transition-all duration-300 hover:shadow-lg',
                  index % 2 === 0 ? 'content-card' : 'content-card-accent'
                )}>
                  <div className="flex items-start gap-6">
                    {/* Step number */}
                    <div className={cn(
                      'flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center border',
                      index % 2 === 0 ? 'bg-[#C6A24A]/15 border-[#C6A24A]/25' : 'bg-[#C6A24A]/20 border-[#C6A24A]/30'
                    )}>
                      <span className="font-serif text-xl font-semibold text-[#C6A24A]">
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={cn(
                        'font-serif text-xl md:text-2xl font-semibold mb-2',
                        index % 2 === 0 ? 'text-[#202124]' : 'text-[#C6A24A]'
                      )}>
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-[#4B5563] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="font-serif text-lg text-[#202124] mb-6">
              Ready to build a smarter acquisition pipeline?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
