import { Card } from '@/components/ui/card'

export function GrowthIntelligence() {
  const areas = [
    {
      title: 'Docket Intelligence',
      description: 'Track emerging litigation, filing trends, and opportunity identification across mass tort and personal injury categories.',
    },
    {
      title: 'Acquisition Economics',
      description: 'Analyze cost structures, conversion metrics, and ROI across different campaign types and market segments.',
    },
    {
      title: 'Intake Operations',
      description: 'Benchmark intake performance, qualification rates, and operational efficiency against industry standards.',
    },
    {
      title: 'Compliance & Data',
      description: 'Stay informed on TCPA regulations, consent management, and data privacy requirements for acquisition operations.',
    },
    {
      title: 'Campaign Playbooks',
      description: 'Access operational frameworks, qualification criteria, and best practices for specific case types and markets.',
    },
  ]

  return (
    <section className="bg-[#F5F7FA] py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#202124] mb-4">
              Plaintiff Growth Intelligence
            </h2>
            <p className="text-base md:text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
              Beyond acquisition services, we provide operational insights to help firms make informed decisions about growth opportunities.
            </p>
          </div>

          {/* Intelligence areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {areas.map((area, index) => (
              <Card key={index} className="bg-[#F8F8F6] border-[rgba(32, 33, 36,0.28)] p-6 hover:border-[#C6A24A]/50 transition-colors">
                <div className="space-y-3">
                  <h3 className="font-serif text-lg font-semibold text-[#202124]">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Key insight */}
          <Card className="max-w-3xl mx-auto bg-[#C6A24A]/8 border-[#C6A24A]/25 p-8 md:p-12">
            <p className="font-serif text-xl md:text-2xl text-[#202124] leading-relaxed text-center">
              We provide operational insights to help firms build acquisition systems that scale.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
