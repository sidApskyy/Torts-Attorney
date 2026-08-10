import { z } from 'zod'

// Contact Form Schema
export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required').max(20),
  firmName: z.string().min(1, 'Firm name is required').max(100),
  role: z.string().min(1, 'Role is required').max(50),
  practiceArea: z.string().optional(),
  campaignInterest: z.string().optional(),
  monthlyAcquisitionVolume: z.string().optional(),
  intakeModel: z.string().optional(),
  crmPlatform: z.string().optional(),
  message: z.string().max(1000).optional(),
  privacyAcknowledgment: z.boolean().refine((val) => val === true, {
    message: 'You must acknowledge the privacy policy',
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Campaign Filter Schema
export const campaignFilterSchema = z.object({
  category: z.string().optional(),
  status: z.string().optional(),
  courtType: z.string().optional(),
  search: z.string().optional(),
})

export type CampaignFilterData = z.infer<typeof campaignFilterSchema>

// Insight Filter Schema
export const insightFilterSchema = z.object({
  category: z.string().optional(),
  search: z.string().optional(),
})

export type InsightFilterData = z.infer<typeof insightFilterSchema>
