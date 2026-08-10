import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { StatusBadge } from '@/components/shared/status-badge'

export function CampaignIntelligence() {
  const campaigns = [
    {
      name: 'Product Liability - Medical Device',
      category: 'Mass Tort',
      status: 'active' as const,
      lastReviewed: '2026-07-15',
      summary: 'Nationwide campaign targeting affected patients with documented medical device complications.',
    },
    {
      name: 'Pharmaceutical - Antidepressant',
      category: 'Mass Tort',
      status: 'limited' as const,
      lastReviewed: '2026-07-10',
      summary: 'Firm-specific campaign for qualified plaintiffs with documented adverse effects.',
    },
    {
      name: 'Personal Injury - Auto Accident',
      category: 'Personal Injury',
      status: 'active' as const,
      lastReviewed: '2026-07-18',
      summary: 'Regional campaign for auto accident victims with significant injuries.',
    },
  ]

  return (
    <section className="bg-[#F5F7FA] py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#202124] mb-4">
              Campaign Intelligence
            </h2>
            <p className="text-base md:text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
              Real-time visibility into campaign performance, qualification metrics, and acquisition economics. Track what matters across your entire portfolio.
            </p>
          </div>

          {/* Campaign cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {campaigns.map((campaign, index) => (
              <Card key={index} className="bg-[#F1F3F5] border-[#C6A24A]/20 p-6 hover:border-[#C6A24A]/60 transition-colors">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-semibold text-[#202124] mb-1">
                        {campaign.name}
                      </h3>
                      <p className="text-xs text-[#6B7280]">
                        {campaign.category}
                      </p>
                    </div>
                    <StatusBadge status={campaign.status} />
                  </div>
                  
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {campaign.summary}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(32, 33, 36,0.28)]">
                    <p className="text-xs text-[#6B7280]">
                      Last reviewed: {campaign.lastReviewed}
                    </p>
                    <Button variant="gold-outline" size="sm" className="text-xs">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Disclosure */}
          <div className="text-center mb-8">
            <p className="text-xs text-[#6B7280] italic">
              Sample campaigns for demonstration — not actual active campaigns
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="red" size="lg">
              Explore Campaign Intelligence
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
