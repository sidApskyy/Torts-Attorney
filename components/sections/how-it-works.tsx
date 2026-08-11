import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Validate',
      description: 'We review the campaign, claimant profile, criteria, exclusions, documentation requirements, geography, budget, intake capacity and receiving-firm requirements.',
    },
    {
      number: '02',
      title: 'Build',
      description: 'We define the offer, creative direction, landing experience, form logic, qualification workflow, contact cadence and delivery rules.',
    },
    {
      number: '03',
      title: 'Launch',
      description: 'Campaigns go live with source tracking, approved creative, controlled forms and campaign-level reporting.',
    },
    {
      number: '04',
      title: 'Qualify',
      description: 'Prospects move through campaign-specific screening rather than a one-size-fits-all script.',
    },
    {
      number: '05',
      title: 'Complete & Deliver',
      description: 'Required information, documentation and agreed workflow milestones are tracked before the opportunity is delivered according to the engagement.',
    },
    {
      number: '06',
      title: 'Optimize',
      description: 'Media, creative, qualification, follow-up and budget decisions are refined using verified downstream outcomes where available.',
    },
  ]

  return (
    <section className="bg-[#F5F7FA] py-20 md:py-28 relative overflow-hidden section-glow-gold">
      {/* Floating background orbs */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-[#C6A24A]/4 blur-3xl rounded-full pointer-events-none float-orb" />
      <div className="absolute bottom-1/4 left-0 w-[250px] h-[250px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '7s' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16 section-heading-glow">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#C6A24A] mb-4">
              Know the Next Move
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#202124] mb-4">
              Six steps from campaign decision to <span className="text-[#C6A24A]">usable outcome.</span>
            </h2>
            <p className="text-base md:text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
              Know the next move at every stage of the acquisition pipeline.
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
              Walk Through the Process
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
