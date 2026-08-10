import { Card } from '@/components/ui/card'

export function Metrics() {
  const metrics = [
    { name: 'Cost per Response', description: 'Media spend divided by total responses' },
    { name: 'Speed to First Contact', description: 'Time from response to first contact attempt' },
    { name: 'Contact Rate', description: 'Percentage of responses successfully contacted' },
    { name: 'Qualification Rate', description: 'Percentage of contacts that qualify' },
    { name: 'Document Completion Rate', description: 'Percentage of qualified leads completing required documents' },
    { name: 'Retainer Completion Rate', description: 'Percentage of document completions resulting in signed retainers' },
    { name: 'Cost per Qualified Opportunity', description: 'Media spend divided by qualified leads' },
    { name: 'Cost per Completed Retainer', description: 'Media spend divided by signed retainers' },
    { name: 'Fallout by Reason', description: 'Breakdown of why leads don\'t convert' },
    { name: 'Source Performance', description: 'Performance by media channel and source' },
    { name: 'Time in Status', description: 'Average time leads spend in each stage' },
  ]

  return (
    <section className="bg-[#F5F7FA] py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#202124] mb-4">
              Metrics That Matter
            </h2>
            <p className="text-base md:text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
              Sophisticated acquisition teams track the entire pipeline—not just lead volume. These metrics reveal where campaigns lose value and where optimization opportunities exist.
            </p>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-[#F8F8F6] border-[rgba(32, 33, 36,0.28)] p-5 md:p-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-base md:text-lg font-semibold text-[#202124]">
                    {metric.name}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Key insight */}
          <div className="mt-12 text-center">
            <Card className="max-w-3xl mx-auto bg-[#C6A24A]/8 border-[#C6A24A]/25 p-8 md:p-12">
              <p className="font-serif text-xl md:text-2xl text-[#202124] leading-relaxed">
                Without visibility into these metrics, you're optimizing blind. We provide transparent reporting across the entire acquisition lifecycle.
              </p>
            </Card>
          </div>

          {/* Disclosure */}
          <div className="mt-8 text-center">
            <p className="text-xs text-[#6B7280] italic">
              Illustrative sample data — not actual company performance
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
