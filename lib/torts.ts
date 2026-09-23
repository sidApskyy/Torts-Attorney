import {
  Baby,
  Droplets,
  Flame,
  FlaskConical,
  HeartPulse,
  Leaf,
  Pill,
  Sparkles,
  Syringe,
  type LucideIcon,
} from 'lucide-react'

export interface Tort {
  slug: string
  name: string
  shortLabel: string
  icon: LucideIcon
  tagline: string
  heroSummary: string
  overview: string[]
  allegations: string[]
  eligibility: string[]
  injuries: string[]
  status: string
  faqs: { q: string; a: string }[]
}

export const torts: Tort[] = [
  {
    slug: 'depo-provera',
    name: 'Depo-Provera',
    shortLabel: 'Depo Provera',
    icon: Syringe,
    tagline: 'Injectable contraceptive linked to meningioma brain tumors',
    heroSummary:
      'Lawsuits allege that long-term use of the Depo-Provera birth control shot is associated with an increased risk of meningioma — a tumor that forms in the tissue surrounding the brain and spinal cord.',
    overview: [
      'Depo-Provera (medroxyprogesterone acetate) is a hormone-based injectable contraceptive administered roughly every three months. It has been on the market for decades and is used by millions of women in the United States.',
      'In 2024, a large study published in the British Medical Journal reported that prolonged use of medroxyprogesterone acetate was associated with a substantially increased risk of intracranial meningioma. Following the study, women across the country began filing lawsuits alleging that the manufacturer knew or should have known about the risk and failed to adequately warn patients and physicians.',
      'The litigation has been consolidated into a federal multidistrict litigation (MDL) in the Northern District of Florida, where cases are coordinated for pretrial proceedings.',
    ],
    allegations: [
      'The manufacturer failed to adequately warn users about the risk of meningioma associated with prolonged use',
      'Safer alternative contraceptive options were available and should have been recommended for long-term use',
      'The drug label was not updated to reflect emerging scientific evidence about tumor risk',
      'The manufacturer knew or should have known of the association between progestin-based injectables and meningioma',
    ],
    eligibility: [
      'Received Depo-Provera injections — typically for one year or longer',
      'Diagnosed with a meningioma (brain or spinal tumor) after using the product',
      'Diagnosis confirmed by imaging (MRI/CT) or pathology',
      'Able to provide approximate dates of use and diagnosis',
    ],
    injuries: [
      'Meningioma (brain tumor)',
      'Spinal meningioma',
      'Seizures and neurological symptoms',
      'Vision or hearing changes',
      'Surgical removal (craniotomy) and related complications',
      'Radiation therapy following tumor diagnosis',
    ],
    status:
      'Cases are actively being filed and consolidated in a federal MDL. The litigation is in early stages — no global settlement has been announced, and qualifying criteria continue to evolve.',
    faqs: [
      {
        q: 'How long did I need to use Depo-Provera to potentially qualify?',
        a: 'Current review criteria generally focus on women who received injections for roughly one year or longer before a meningioma diagnosis. Criteria can change as the litigation develops.',
      },
      {
        q: 'What if I used the generic version?',
        a: 'Some claims involve generic medroxyprogesterone acetate. Whether a generic-manufacturer claim is viable depends on the specifics — your information is reviewed against current criteria.',
      },
      {
        q: 'Do I need medical records right now?',
        a: 'No. The initial review starts with the information you provide. Records may be requested later if your information appears to fit.',
      },
    ],
  },
  {
    slug: 'ozempic-glp1',
    name: 'Ozempic & GLP-1 Drugs',
    shortLabel: 'Ozempic & GLP-1',
    icon: Pill,
    tagline: 'Stomach paralysis and vision loss claims involving GLP-1 medications',
    heroSummary:
      'Lawsuits allege that GLP-1 medications such as Ozempic, Wegovy, and similar drugs can cause severe gastrointestinal injuries — including stomach paralysis — and vision loss, without adequate warning.',
    overview: [
      'GLP-1 receptor agonists — including Ozempic, Wegovy, Rybelsus, Mounjaro, and Trulicity — are prescribed for type 2 diabetes and weight management. Their use has grown dramatically in recent years.',
      'Patients have reported severe gastrointestinal problems, including gastroparesis (stomach paralysis), persistent vomiting, and bowel obstruction. A body of litigation has formed alleging that manufacturers failed to adequately warn about the severity and persistence of these side effects.',
      'More recently, lawsuits have also alleged a link between semaglutide drugs and NAION — a form of sudden vision loss. Federal cases have been consolidated for coordinated pretrial proceedings in the Eastern District of Pennsylvania.',
    ],
    allegations: [
      'Manufacturers failed to adequately warn that gastrointestinal side effects could be severe, persistent, or permanent',
      'Warnings did not reflect the risk of gastroparesis or intestinal blockage requiring hospitalization',
      'Marketing emphasized benefits while downplaying serious adverse events',
      'Post-market safety signals were not communicated to prescribers or patients in a timely manner',
    ],
    eligibility: [
      'Used a GLP-1 medication such as Ozempic, Wegovy, Rybelsus, Mounjaro, or Trulicity',
      'Diagnosed with gastroparesis, ileus, bowel obstruction, or NAION vision loss',
      'Symptoms or diagnosis occurred during or after use of the medication',
      'Hospitalization, gastric emptying study, or specialist treatment may strengthen a review',
    ],
    injuries: [
      'Gastroparesis (stomach paralysis)',
      'Persistent vomiting or nausea requiring hospitalization',
      'Bowel obstruction / ileus',
      'NAION — sudden vision loss',
      'Gallbladder disease or removal',
      'Pancreatitis',
    ],
    status:
      'Federal lawsuits have been consolidated into an MDL in the Eastern District of Pennsylvania. The litigation is active and expanding — no settlement has been announced.',
    faqs: [
      {
        q: 'Which medications are included?',
        a: 'Reviews currently focus on GLP-1 drugs including Ozempic, Wegovy, Rybelsus, Mounjaro, Trulicity, and similar medications. Compounded versions may raise different issues.',
      },
      {
        q: 'I stopped taking the medication — can I still be reviewed?',
        a: 'Yes. What matters is whether you were diagnosed with a qualifying injury during or after use. Stopping the medication does not prevent a review.',
      },
      {
        q: 'What if my doctor never mentioned gastroparesis?',
        a: 'Many patients were treated for symptoms before receiving a formal diagnosis. Describe what you experienced — a specialist determines whether records support a diagnosis.',
      },
    ],
  },
  {
    slug: 'camp-lejeune',
    name: 'Camp Lejeune',
    shortLabel: 'Camp Lejeune',
    icon: Droplets,
    tagline: 'Toxic water exposure at the Marine Corps base, 1953–1987',
    heroSummary:
      'For more than three decades, people who lived or worked at Camp Lejeune were exposed to contaminated drinking water. A 2022 federal law finally opened a path for victims to pursue compensation.',
    overview: [
      'Between August 1953 and December 1987, the drinking water at Marine Corps Base Camp Lejeune in North Carolina was contaminated with industrial solvents, including trichloroethylene (TCE), perchloroethylene (PCE), benzene, and vinyl chloride — chemicals associated with cancers, neurological disorders, and other serious illnesses.',
      'For years, legal doctrines prevented victims from suing. The Camp Lejeune Justice Act of 2022, signed into law as part of the PACT Act, created a federal cause of action allowing exposed individuals — including veterans, family members, and civilian workers — to file claims after completing a required administrative process with the Navy.',
      'The litigation is one of the largest in U.S. history, with well over a hundred thousand administrative claims filed. Claims are being processed in the Eastern District of North Carolina.',
    ],
    allegations: [
      'The government knew or should have known the base water supply was contaminated with dangerous chemicals',
      'Exposed residents were not warned about the contamination for years',
      'Exposure to the contaminated water caused cancers, birth defects, neurological conditions, and other illnesses',
      'The harm could have been prevented or mitigated with timely action and disclosure',
    ],
    eligibility: [
      'Lived, worked, or were otherwise present at Camp Lejeune for at least 30 cumulative days between August 1953 and December 1987',
      'Includes Marines, family members on base, and civilian employees',
      'Diagnosed with a qualifying condition — many cancers, Parkinson\'s disease, and other illnesses are covered',
      'In-utero exposure may also qualify in certain circumstances',
    ],
    injuries: [
      'Leukemia and other blood cancers',
      'Bladder, kidney, and liver cancers',
      'Non-Hodgkin lymphoma',
      'Parkinson\'s disease',
      'Multiple myeloma',
      'Birth defects and miscarriage (in-utero exposure)',
    ],
    status:
      'Claims are actively being filed and litigated in the Eastern District of North Carolina under the Camp Lejeune Justice Act. Settlement frameworks and elective resolution options exist for certain diagnoses, though most claims are still being processed.',
    faqs: [
      {
        q: 'I was only at Camp Lejeune for a few months — does that count?',
        a: 'The law requires at least 30 days of exposure during the covered period, and the days do not need to be consecutive.',
      },
      {
        q: 'My family member was exposed and has passed away. Can a claim still be filed?',
        a: 'In many cases, yes — claims may be brought on behalf of a deceased person\'s estate. The specifics depend on the circumstances.',
      },
      {
        q: 'I already receive VA benefits — does that matter?',
        a: 'VA benefits and Camp Lejeune litigation are separate. Receiving VA benefits does not prevent you from pursuing a claim, though recovery rules can apply.',
      },
    ],
  },
  {
    slug: 'afff',
    name: 'AFFF Firefighting Foam',
    shortLabel: 'AFFF',
    icon: Flame,
    tagline: 'Firefighting foam PFAS exposure linked to cancer',
    heroSummary:
      'Lawsuits allege that aqueous film-forming foam (AFFF) — used for decades by firefighters, military personnel, and airport crews — contains PFAS "forever chemicals" linked to serious cancers.',
    overview: [
      'AFFF is a firefighting foam used to extinguish fuel fires. It contains per- and polyfluoroalkyl substances (PFAS) — synthetic chemicals that persist in the body and the environment and have been associated with kidney cancer, testicular cancer, and other diseases.',
      'Firefighters, military service members, and airport workers were routinely exposed during training exercises and emergency responses, often without protective guidance about the chemical risks.',
      'Thousands of lawsuits have been consolidated into a federal MDL in the District of South Carolina. Some water-contamination claims within the MDL have already reached significant settlements, while personal-injury claims continue to move forward.',
    ],
    allegations: [
      'Manufacturers knew for decades that PFAS in AFFF could accumulate in the body and cause serious illness',
      'Users were not warned about the health risks of repeated foam exposure',
      'Safer product alternatives were available or could have been developed',
      'Manufacturers concealed or downplayed internal research showing harm',
    ],
    eligibility: [
      'Regular occupational exposure to AFFF — typically firefighters (military, airport, municipal), or workers who handled the foam',
      'Diagnosed with a qualifying condition, most commonly kidney cancer or testicular cancer',
      'Exposure generally occurred over an extended period of service',
    ],
    injuries: [
      'Kidney cancer',
      'Testicular cancer',
      'Prostate cancer',
      'Bladder cancer',
      'Thyroid disease',
      'Ulcerative colitis',
    ],
    status:
      'The AFFF MDL in South Carolina remains active. Water-provider settlements have been announced, and personal-injury claims are proceeding through coordinated litigation.',
    faqs: [
      {
        q: 'I was a volunteer firefighter — does that count?',
        a: 'Volunteer and career firefighters alike may qualify. What matters is documented exposure to AFFF and a qualifying diagnosis.',
      },
      {
        q: 'Does exposure through contaminated drinking water count?',
        a: 'PFAS drinking-water claims exist as well, though they follow different criteria than occupational AFFF exposure. Submit your information and it will be reviewed against current criteria.',
      },
      {
        q: 'How do I prove I was exposed?',
        a: 'Service records, department records, and employment history are typically used. You do not need to gather documents before requesting a review.',
      },
    ],
  },
  {
    slug: 'roundup',
    name: 'Roundup',
    shortLabel: 'Roundup',
    icon: Leaf,
    tagline: 'Glyphosate herbicide linked to non-Hodgkin lymphoma',
    heroSummary:
      'Lawsuits allege that Roundup weed killer — used by farmers, landscapers, and homeowners for decades — causes non-Hodgkin lymphoma, and that its manufacturer failed to warn users.',
    overview: [
      'Roundup is a glyphosate-based herbicide that became one of the most widely used weed killers in the world. In 2015, the World Health Organization\'s International Agency for Research on Cancer classified glyphosate as "probably carcinogenic to humans," citing evidence linking it to non-Hodgkin lymphoma.',
      'Tens of thousands of lawsuits have been filed alleging that exposure to Roundup caused non-Hodgkin lymphoma and related blood cancers. Several early trials produced substantial verdicts for plaintiffs, and the manufacturer has paid billions in settlements while continuing to face new claims.',
      'The litigation remains active — cases continue to be filed and resolved in state and federal courts.',
    ],
    allegations: [
      'Glyphosate and Roundup\'s formulation can cause non-Hodgkin lymphoma',
      'The manufacturer knew or should have known of the cancer risk and failed to warn users',
      'Internal documents allegedly show efforts to influence scientific research and regulators',
      'A warning label could have allowed users to take protective measures',
    ],
    eligibility: [
      'Significant exposure to Roundup — occupational use (farmers, landscapers, groundskeepers, agricultural workers) or substantial residential use over years',
      'Diagnosed with non-Hodgkin lymphoma or a related subtype (such as chronic lymphocytic leukemia or B-cell/T-cell lymphomas)',
      'Diagnosis generally occurred after the exposure period',
    ],
    injuries: [
      'Non-Hodgkin lymphoma',
      'Chronic lymphocytic leukemia (CLL)',
      'B-cell and T-cell lymphomas',
      'Hairy cell leukemia',
      'Multiple myeloma (in some reviews)',
    ],
    status:
      'Active litigation continues nationwide. The manufacturer has resolved many cases through settlements, but thousands of claims remain pending and new cases continue to be filed.',
    faqs: [
      {
        q: 'I used Roundup at home, not at work — can I still be reviewed?',
        a: 'Residential users may qualify depending on the duration and intensity of use. Describe how often and how long you used the product.',
      },
      {
        q: 'How much exposure is needed?',
        a: 'There is no single threshold — reviews consider how frequently you used Roundup, over what period, and whether protective equipment was used.',
      },
      {
        q: 'Is it too late to file a claim?',
        a: 'Deadlines vary by state and typically run from diagnosis rather than exposure. If you were diagnosed recently, a review may still be possible.',
      },
    ],
  },
  {
    slug: 'talcum-powder',
    name: 'Talcum Powder',
    shortLabel: 'Talcum Powder',
    icon: Sparkles,
    tagline: 'Talc products linked to ovarian cancer and mesothelioma',
    heroSummary:
      'Lawsuits allege that long-term use of talcum powder products — including baby powder — caused ovarian cancer and mesothelioma, and that manufacturers knew of the risks for decades.',
    overview: [
      'Talcum powder products have been used for generations for personal hygiene. Lawsuits allege that talc contained asbestos contamination and that regular use — particularly in the genital area — increased the risk of ovarian cancer and mesothelioma.',
      'Tens of thousands of claims have been filed against Johnson & Johnson and other manufacturers. Multiple jury verdicts have found for plaintiffs, including significant awards for ovarian cancer and mesothelioma victims.',
      'The litigation has involved complex proceedings, including bankruptcy court maneuvers by manufacturers. Individual claims continue to move forward in courts around the country.',
    ],
    allegations: [
      'Talc products were contaminated with asbestos, a known carcinogen',
      'Manufacturers knew of the contamination and cancer risk for decades but did not warn consumers',
      'Internal testing allegedly detected asbestos in talc supplies while public statements denied it',
      'Marketing targeted long-term intimate use despite known health concerns',
    ],
    eligibility: [
      'Regular use of talcum powder products — typically for years — often including use in the genital area',
      'Diagnosed with ovarian cancer or mesothelioma',
      'Exposure history that can be documented or credibly described',
    ],
    injuries: [
      'Ovarian cancer',
      'Fallopian tube cancer',
      'Primary peritoneal cancer',
      'Mesothelioma',
    ],
    status:
      'Talc litigation continues across federal and state courts. Resolution efforts have included proposed settlements and bankruptcy proceedings; individual claims are still being evaluated and filed.',
    faqs: [
      {
        q: 'Which products are included?',
        a: 'Reviews most often involve Johnson\'s Baby Powder and Shower to Shower, but other talc-based products may also be relevant.',
      },
      {
        q: 'How long did I need to use the product?',
        a: 'Reviews generally look for regular use over multiple years — often a decade or more — before diagnosis.',
      },
      {
        q: 'What if the product is no longer sold?',
        a: 'That does not affect a review. The question is your historical use and your diagnosis.',
      },
    ],
  },
  {
    slug: 'nec-formula',
    name: 'NEC Baby Formula',
    shortLabel: 'NEC',
    icon: Baby,
    tagline: 'Cow\'s-milk formula linked to necrotizing enterocolitis in premature infants',
    heroSummary:
      'Lawsuits allege that cow\'s-milk-based formulas such as Similac and Enfamil — fed to premature infants in hospitals — dramatically increased the risk of necrotizing enterocolitis (NEC), a devastating intestinal disease.',
    overview: [
      'Necrotizing enterocolitis (NEC) is a serious intestinal condition that primarily affects premature infants, causing tissue death in the bowel and, in severe cases, requiring surgery or leading to death.',
      'Medical research has associated cow\'s-milk-based formulas and fortifiers with a significantly higher risk of NEC in premature babies compared to human milk. Lawsuits allege that manufacturers of Similac and Enfamil products knew of this risk but continued marketing the products for premature infants without adequate warnings.',
      'Federal cases have been consolidated into an MDL in the Northern District of Illinois, and parallel cases are proceeding in state courts. Several early state-court trials produced substantial verdicts for families.',
    ],
    allegations: [
      'Manufacturers knew cow\'s-milk formula increased NEC risk in premature infants and failed to warn',
      'Products were marketed to hospitals and NICUs as safe for premature babies despite the risk',
      'Human-milk-based alternatives existed and were safer for vulnerable infants',
      'Parents were not told they had a choice or that risks differed by product type',
    ],
    eligibility: [
      'Your child was born prematurely (generally before 37 weeks)',
      'The infant was fed cow\'s-milk-based formula or fortifier (Similac or Enfamil products) — often in the NICU',
      'The infant was diagnosed with necrotizing enterocolitis (NEC)',
      'Cases involving surgery or death are evaluated alongside surviving-child claims',
    ],
    injuries: [
      'Necrotizing enterocolitis (NEC) diagnosis',
      'Surgical removal of intestinal tissue',
      'Short bowel syndrome',
      'Long-term feeding and digestive complications',
      'Wrongful death of the infant',
    ],
    status:
      'The NEC formula MDL is active in the Northern District of Illinois, with additional cases in state courts. Early trials have produced plaintiff verdicts, and the litigation continues to grow.',
    faqs: [
      {
        q: 'The hospital chose the formula — do I still have a claim?',
        a: 'Possibly. The claims focus on the manufacturer\'s alleged failure to warn, not the parents\' choice. NICU feeding decisions made by hospitals do not prevent a review.',
      },
      {
        q: 'My child was born years ago — is it too late?',
        a: 'Deadlines vary by state and often run from when the injury was discovered or linked to the product. Submit your information for a current-criteria review.',
      },
      {
        q: 'What records will be needed?',
        a: 'NICU and hospital records typically document formula feedings and the NEC diagnosis. You do not need to collect them before requesting a review.',
      },
    ],
  },
  {
    slug: 'pfas',
    name: 'PFAS Exposure',
    shortLabel: 'PFAS',
    icon: FlaskConical,
    tagline: '"Forever chemical" exposure through water, foam, and products',
    heroSummary:
      'Lawsuits allege that PFAS "forever chemicals" — used for decades in firefighting foam, nonstick coatings, and industrial processes — contaminated water supplies and caused cancer and other diseases.',
    overview: [
      'PFAS (per- and polyfluoroalkyl substances) are synthetic chemicals prized for their resistance to heat, water, and grease. The same properties make them persist in the environment and accumulate in the human body — earning them the name "forever chemicals."',
      'For decades, PFAS were used in firefighting foam, nonstick cookware, food packaging, and industrial manufacturing. Communities near military bases, airports, and chemical plants have discovered contaminated drinking water, and exposed individuals have developed cancers, thyroid disease, and other serious conditions.',
      'Massive litigation is underway, including the AFFF MDL in South Carolina and water-contamination claims nationwide. Major manufacturers have already agreed to multi-billion-dollar settlements with public water systems, while personal-injury claims continue.',
    ],
    allegations: [
      'Manufacturers knew for decades that PFAS were toxic and persistent but concealed the evidence',
      'Communities were exposed to contaminated water without warning or consent',
      'Internal research allegedly documented health risks while public statements denied them',
      'Proper disclosure could have prevented years of ongoing exposure',
    ],
    eligibility: [
      'Lived or worked in an area with documented PFAS water contamination — often near military bases, airports, or industrial sites',
      'Occupational exposure to PFAS-containing products (firefighting foam, chemical manufacturing)',
      'Diagnosed with a qualifying condition such as kidney or testicular cancer, thyroid disease, or ulcerative colitis',
      'Exposure generally occurred over an extended period',
    ],
    injuries: [
      'Kidney cancer',
      'Testicular cancer',
      'Thyroid disease or thyroid cancer',
      'Ulcerative colitis',
      'Liver damage',
      'Pregnancy-induced hypertension',
    ],
    status:
      'PFAS litigation is among the largest environmental litigations in U.S. history. Public water system settlements exceeding $10 billion have been announced; personal-injury and individual claims continue to be filed and evaluated.',
    faqs: [
      {
        q: 'How do I know if my water was contaminated?',
        a: 'Many municipalities have published PFAS test results. Describe where you lived and worked — the review team can assess whether your area has documented contamination.',
      },
      {
        q: 'Is this the same as the AFFF lawsuit?',
        a: 'AFFF firefighting foam is one major PFAS exposure source, but PFAS claims also cover contaminated drinking water and industrial exposure. Your specific situation determines the review path.',
      },
      {
        q: 'What if I moved away from the area?',
        a: 'Moving does not affect eligibility. What matters is where and when the exposure occurred.',
      },
    ],
  },
  {
    slug: 'hernia-mesh',
    name: 'Hernia Mesh',
    shortLabel: 'Hernia Mesh',
    icon: HeartPulse,
    tagline: 'Surgical mesh implants linked to chronic pain and revision surgery',
    heroSummary:
      'Lawsuits allege that certain hernia mesh implants were defectively designed, causing chronic pain, infections, mesh migration, and the need for additional surgery.',
    overview: [
      'Surgical mesh is implanted to reinforce tissue during hernia repair — one of the most common surgeries in the United States. Lawsuits allege that certain polypropylene mesh products were defectively designed or manufactured, leading to complications far more serious than the condition they were meant to fix.',
      'Patients have reported chronic pain, mesh erosion into organs, infections, adhesions, bowel obstruction, and the need for revision surgery to remove or replace the implant. Multiple MDLs have been established against manufacturers including Bard, Atrium, and Ethicon.',
      'Hernia mesh litigation has produced numerous verdicts and settlements over more than a decade, and claims continue to be evaluated for specific products.',
    ],
    allegations: [
      'Certain mesh products were defectively designed — prone to shrinking, migrating, or eroding into tissue',
      'Manufacturers failed to adequately test the products or warn surgeons about complication rates',
      'Complications were underreported or attributed to surgical error rather than the device',
      'Safer designs or alternative repair methods were available',
    ],
    eligibility: [
      'Had hernia repair surgery with a mesh implant — commonly products by Bard, Atrium, Ethicon, or Covidien',
      'Experienced complications: chronic pain, infection, mesh migration, adhesion, or bowel obstruction',
      'Required or recommended for revision surgery — though documented complications without revision may also be reviewed',
      'Original implant generally within the last two decades',
    ],
    injuries: [
      'Chronic pain after implant',
      'Mesh migration or erosion into organs',
      'Infection requiring treatment or removal',
      'Bowel obstruction or perforation',
      'Revision (removal) surgery',
      'Adhesions and scar-tissue complications',
    ],
    status:
      'Hernia mesh MDLs remain active against several manufacturers, with settlements and verdicts already reached in some product lines. New claims continue to be evaluated based on the specific device and complications.',
    faqs: [
      {
        q: 'I don\'t know which mesh product was used — is that a problem?',
        a: 'No. Operative reports identify the implant. You do not need the product name before requesting a review.',
      },
      {
        q: 'I haven\'t had revision surgery — can I still be reviewed?',
        a: 'Possibly. Documented complications — chronic pain, infection, obstruction — may qualify even without revision, though revision often strengthens a claim.',
      },
      {
        q: 'How long ago can the surgery have been?',
        a: 'Reviews commonly cover implants from the last two decades. Deadlines vary by state and typically relate to when complications were discovered.',
      },
    ],
  },
]

export const tortBySlug = (slug: string) => torts.find((t) => t.slug === slug)
