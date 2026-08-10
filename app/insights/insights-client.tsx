'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { INSIGHT_CATEGORIES } from '@/lib/constants'

const articles = [
  {
    id: 1,
    title: 'Understanding Acquisition Economics in Mass Tort',
    category: 'Acquisition Economics',
    date: 'TODO: EDITORIAL DATE',
    excerpt: 'Acquisition economics determine the viability of mass tort campaigns. Understanding cost per qualified case is essential for strategic planning.',
  },
  {
    id: 2,
    title: 'Intake Operations: The Hidden Bottleneck in Plaintiff Acquisition',
    category: 'Intake Operations',
    date: 'TODO: EDITORIAL DATE',
    excerpt: 'Response delays and unstructured intake operations destroy lead value. Systematic intake processes are critical to maximizing conversion.',
  },
  {
    id: 3,
    title: 'Lead Quality vs. Lead Volume: The Strategic Trade-off',
    category: 'Acquisition Strategy',
    date: 'TODO: EDITORIAL DATE',
    excerpt: 'Focusing on lead volume without quality metrics leads to wasted spend. Strategic acquisition balances both for optimal ROI.',
  },
  {
    id: 4,
    title: 'TCPA Compliance in Plaintiff Marketing: Essential Considerations',
    category: 'Compliance & Data',
    date: 'TODO: EDITORIAL DATE',
    excerpt: 'TCPA compliance is critical in plaintiff marketing. Understanding consent management and compliance requirements protects your firm.',
  },
  {
    id: 5,
    title: 'Qualification Workflows: Converting Leads into Qualified Cases',
    category: 'Qualification',
    date: 'TODO: EDITORIAL DATE',
    excerpt: 'Systematic qualification workflows improve conversion rates and reduce acquisition costs. Design criteria aligned with campaign objectives.',
  },
  {
    id: 6,
    title: 'Retainer Optimization: Maximizing Qualified Case Conversion',
    category: 'Conversion',
    date: 'TODO: EDITORIAL DATE',
    excerpt: 'Retainer drop-off destroys acquisition ROI. Systematic workflows and conversion optimization are critical to maximizing qualified cases.',
  },
]

export function InsightsClient() {
  return (
    <main>
        {/* Hero */}
        <section className="relative bg-[#F8F8F6] py-24 md:py-32 overflow-hidden" aria-labelledby="insights-heading">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `
              linear-gradient(to right, #6B7280 1px, transparent 1px),
              linear-gradient(to bottom, #6B7280 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }} />
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm md:text-base font-medium tracking-widest uppercase text-[#C6A24A] mb-4"
              >
                Insights
              </motion.p>
              
              <motion.h1
                id="insights-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-[#202124] leading-tight mb-6"
              >
                Plaintiff Growth Intelligence
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl leading-relaxed mb-8"
              >
                Strategic insights on plaintiff acquisition, intake operations, qualification, conversion, and campaign intelligence.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button variant="red" size="lg" className="text-base shadow-[0_4px_20px_rgba(198, 162, 74,0.16)] hover:shadow-[0_8px_30px_rgba(198, 162, 74,0.22)]">
                  Start a Conversation
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-[#F1F3F5] py-12" aria-label="Article categories">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" className="bg-[#C6A24A] border-[#C6A24A] text-[#F8F8F6]">
                All
              </Button>
              {Object.values(INSIGHT_CATEGORIES).map((category) => (
                <Button key={category} variant="outline" size="sm" className="bg-[#F5F7FA] border-[rgba(32, 33, 36,0.28)] text-[#4B5563] hover:border-[#C6A24A] hover:text-[#C6A24A]">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="bg-[#F1F3F5] py-24 md:py-32 section-glow-gold" aria-labelledby="articles-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 id="articles-heading" className="font-serif text-3xl md:text-4xl font-semibold text-[#202124] mb-12 gold-accent-line">Latest Articles</h2>
              <div className="space-y-12">
                {articles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="content-card-accent p-8"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs px-2 py-1 bg-[#C6A24A]/20 text-[#C6A24A] rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-[#6B7280]">{article.date}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#202124] mb-4">
                      {article.title}
                    </h3>
                    <p className="text-base md:text-lg text-[#4B5563] leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    <a href="#" className="text-base text-[#C6A24A] hover:text-[#202124] transition-colors">
                      Read more →
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Note */}
        <section className="bg-[#F1F3F5] py-16" aria-labelledby="editorial-note">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#F5F7FA] border-l-4 border-[#C6A24A] p-8 md:p-10 shadow-premium rounded-r-xl">
                <p id="editorial-note" className="text-base text-[#4B5563] text-center leading-relaxed">
                  <strong>Editorial Note:</strong> Content on this page is for demonstration purposes. Articles require editorial review and factual verification before publication. Dates, authors, and specific claims are placeholders pending client input.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F8F8F6] py-24 md:py-32" aria-labelledby="insights-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                id="insights-cta"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl md:text-5xl font-semibold text-[#202124] mb-8"
              >
                Stay Informed
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto mb-10"
              >
                Subscribe to receive insights on plaintiff acquisition, intake operations, and campaign intelligence.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Button variant="outline" size="lg" className="bg-transparent border-[#C6A24A]/50 text-[#C6A24A] hover:bg-[#C6A24A]/10 hover:border-[#C6A24A] text-base shadow-sm hover:shadow-[0_8px_24px_rgba(198, 162, 74,0.12)] transition-all duration-300">
                  Start a Conversation
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
    </main>
  )
}
