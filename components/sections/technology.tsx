import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function Technology() {
  const flowStages = [
    'Source',
    'Response',
    'Intake',
    'Qualification',
    'Documentation',
    'Retainer',
    'Delivery',
    'Reporting',
  ]

  const capabilities = [
    { name: 'Source and Campaign Attribution', description: 'Track every response to its original source and campaign' },
    { name: 'Campaign-Specific Forms', description: 'Forms built around the campaign\'s actual criteria' },
    { name: 'Qualification Rules', description: 'Campaign-specific qualification logic and screening' },
    { name: 'Consent and Disclosure Capture', description: 'Documented consent records and disclosure management' },
    { name: 'Call and Status Logging', description: 'Real-time status updates across the entire pipeline' },
    { name: 'Document Tracking', description: 'Monitor document collection and completion status' },
    { name: 'E-Signature Tracking', description: 'Track retainer signature status and completion' },
    { name: 'Duplicate and Conflict Checks', description: 'Automated duplicate detection and conflict screening' },
    { name: 'Secure Delivery', description: 'Encrypted data delivery with audit trails' },
    { name: 'API and Webhook Workflows', description: 'Real-time data synchronization and event-driven triggers' },
    { name: 'SFTP and Structured File Delivery', description: 'Secure file transfer for batch data delivery' },
    { name: 'CRM Field Mapping', description: 'Custom field mapping to your existing systems' },
    { name: 'Audit-Ready Status History', description: 'Complete audit trail for compliance and review' },
  ]

  return (
    <section className="bg-[#F5F7FA] py-20 md:py-28 relative overflow-hidden">
      {/* Floating background orbs */}
      <div className="absolute top-1/3 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#C6A24A]/4 blur-3xl rounded-full pointer-events-none float-orb" />
      <div className="absolute bottom-1/4 right-0 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] bg-[#F1F3F5] blur-3xl rounded-full pointer-events-none float-orb" style={{ animationDelay: '8s' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#C6A24A] mb-4">
              Technology Should Answer Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#202124] mb-4">
              Your firm should be able to <span className="text-[#C6A24A]">follow the record.</span>
            </h2>
            <p className="text-base md:text-lg text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
              Law firms should be able to understand where a prospect came from, what happened during intake, what remains incomplete and why a record advanced or fell out.
            </p>
          </div>

          {/* Data flow visualization */}
          <Card className="bg-[#F1F3F5] border-[rgba(32, 33, 36,0.28)] p-6 md:p-8 mb-12">
            <h3 className="font-serif text-lg font-semibold text-[#202124] mb-6">
              The Record Flow
            </h3>
            <div className="flex items-center justify-between gap-2 md:gap-4 overflow-x-auto pb-4">
              {flowStages.map((stage, index) => (
                <div key={index} className="flex items-center flex-shrink-0">
                  <div className={cn(
                    'px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm font-medium text-center',
                    index === 0 ? 'bg-[#C6A24A] text-[#F1F3F5]' : 'bg-[#ECEFF2] text-[#202124]'
                  )}>
                    {stage}
                  </div>
                  {index < flowStages.length - 1 && (
                    <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-[#C6A24A] to-[#9B7830] mx-2" />
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Capabilities grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-[#F1F3F5] border-[rgba(32, 33, 36,0.28)] p-5 hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <h4 className="font-serif text-base font-semibold text-[#202124]">
                    {capability.name}
                  </h4>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Note */}
          <div className="mt-8 text-center">
            <p className="text-xs text-[#6B7280]">
              Integration capabilities are available for verified systems. Subject to technical validation and access.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
