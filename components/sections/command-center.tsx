'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import Carousel, { CarouselItem } from '@/components/ui/carousel'
import { BorderGlow } from '@/components/ui/border-glow'

export function CommandCenter() {
  const metrics = [
    { label: 'Total Responses', value: 10000, change: '+12%', format: 'number' as const },
    { label: 'Qualified', value: 7200, change: '+8%', format: 'number' as const },
    { label: 'Retainers', value: 1555, change: '+15%', format: 'number' as const },
    { label: 'Cost/Retainer', value: 285, change: '-5%', format: 'currency' as const },
  ]

  const carouselItems: CarouselItem[] = metrics.map((metric, index) => ({
    id: index + 1,
    title: metric.label,
    description: `${metric.change} vs last period`,
    icon: (
      <span className="carousel-icon font-serif font-bold text-lg">
        {metric.value >= 1000 ? `${(metric.value / 1000).toFixed(1)}K` : `$${metric.value}`}
      </span>
    ),
  }))

  return (
    <section className="bg-[#F5F7FA] py-24 md:py-32 lg:py-40 relative overflow-hidden section-glow-gold" aria-labelledby="command-center-heading">
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C6A24A]/5 blur-3xl rounded-full pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 section-heading-glow"
          >
            <h2 id="command-center-heading" className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] mb-6 leading-[0.95] tracking-[-0.02em]">
              Acquisition <span className="text-[#C6A24A] italic">Command Center</span>
            </h2>
            <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-[1.7]">
              Real-time visibility into your acquisition pipeline. Track performance from response through retainer completion with transparent, actionable metrics.
            </p>
          </motion.div>

          {/* Dashboard visualization */}
          <div className="space-y-8">
            {/* Top metrics — Carousel with 3D rotateY animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex justify-center"
            >
              <div style={{ height: '420px', position: 'relative' }}>
                <Carousel
                  items={carouselItems}
                  baseWidth={520}
                  autoplay={true}
                  autoplayDelay={3500}
                  pauseOnHover={true}
                  loop={true}
                  round={false}
                />
              </div>
            </motion.div>

            {/* Metric values grid — compact summary below carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="content-card p-4 md:p-5 text-center"
                >
                  <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-2">
                    {metric.label}
                  </p>
                  <p className="font-serif text-2xl md:text-3xl font-bold text-[#202124] mb-1">
                    <AnimatedCounter value={metric.value} format={metric.format} />
                  </p>
                  <p className={`text-sm font-medium ${metric.change.startsWith('+') ? 'text-[#C6A24A]' : 'text-[#9B7830]'}`}>
                    {metric.change}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Pipeline visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <BorderGlow
                backgroundColor="#FFFFFF"
                borderRadius={20}
                glowColor="42 50 55"
                glowRadius={50}
                glowIntensity={1.2}
                edgeSensitivity={25}
                coneSpread={25}
                animated={true}
                colors={['#C6A24A', '#9B7830', '#D8BC72']}
                className="p-8 md:p-10"
              >
                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#202124] mb-8 gold-accent-line">
                  Pipeline Flow
                </h3>
                <div className="space-y-5">
                  {[
                    { stage: 'Responses', count: 10000, width: '100%', color: '#D8BC72' },
                    { stage: 'Contacted', count: 8500, width: '85%', color: '#C6A24A' },
                    { stage: 'Qualified', count: 7200, width: '72%', color: '#B89542' },
                    { stage: 'Documents', count: 4320, width: '43%', color: '#9B7830' },
                    { stage: 'Retainers', count: 1555, width: '16%', color: '#8B6B2A' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + index * 0.05 }}
                      className="flex items-center gap-6"
                    >
                      <div className="w-28 md:w-36 flex-shrink-0">
                        <p className="text-sm md:text-base text-[#4B5563]">{item.stage}</p>
                      </div>
                      <div className="flex-1 bg-[#F1F3F5] rounded-[12px] h-8 md:h-10 relative overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.width }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.25 + index * 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-[12px] shimmer-sweep"
                          style={{ backgroundColor: item.color }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm md:text-base font-semibold text-[#202124] drop-shadow-sm">
                            {item.count.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="w-16 md:w-20 flex-shrink-0 text-right">
                        <p className="text-sm md:text-base text-[#4B5563]">{item.width}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </BorderGlow>
            </motion.div>

            {/* Source performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <BorderGlow
                backgroundColor="#FFFFFF"
                borderRadius={20}
                glowColor="42 50 55"
                glowRadius={50}
                glowIntensity={1.2}
                edgeSensitivity={25}
                coneSpread={25}
                animated={true}
                colors={['#C6A24A', '#9B7830', '#D8BC72']}
                className="p-8 md:p-10"
              >
                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#202124] mb-8 gold-accent-line">
                  Source Performance
                </h3>
                <div className="space-y-4">
                  {[
                    { source: 'Paid Search', responses: 4500, qualified: 3240, rate: '72%' },
                    { source: 'Social Media', responses: 3200, qualified: 2240, rate: '70%' },
                    { source: 'Display', responses: 1800, qualified: 1080, rate: '60%' },
                    { source: 'Direct', responses: 500, qualified: 640, rate: '80%' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + index * 0.05 }}
                      className="flex items-center justify-between py-4 border-b border-[#E4E1D8] last:border-0"
                    >
                      <div className="flex-1">
                        <p className="text-sm md:text-base font-medium text-[#202124]">{item.source}</p>
                      </div>
                      <div className="flex items-center gap-10">
                        <div className="text-right">
                          <p className="text-xs text-[#6B7280]">Responses</p>
                          <p className="text-sm md:text-base text-[#202124]">{item.responses.toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-[#6B7280]">Qualified</p>
                          <p className="text-sm md:text-base text-[#202124]">{item.qualified.toLocaleString()}</p>
                        </div>
                        <div className="w-20 text-right">
                          <p className="text-sm md:text-base font-semibold text-[#C6A24A]">{item.rate}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </BorderGlow>
            </motion.div>
          </div>

          {/* Disclosure */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-xs text-[#6B7280] italic">
              Illustrative sample data — not actual company performance
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
