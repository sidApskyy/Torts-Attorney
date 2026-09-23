import {
  Activity,
  Baby,
  Bone,
  Building,
  Building2,
  Car,
  CarFront,
  Dices,
  Droplets,
  Ear,
  Factory,
  Flame,
  FlaskConical,
  Gamepad2,
  HardHat,
  HeartPulse,
  Leaf,
  Microscope,
  MonitorSmartphone,
  Pill,
  Scissors,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  Syringe,
  Wind,
  Wrench,
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
  allegationsHeading?: string
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
  {
    slug: 'wtc',
    name: 'World Trade Center (9/11) Claims',
    shortLabel: 'WTC / 9/11',
    icon: Building2,
    tagline: 'Compensation for 9/11 responders and survivors through the federal VCF',
    heroSummary:
      'More than two decades after the attacks, responders and survivors continue to be diagnosed with cancers and respiratory illnesses linked to toxic dust exposure. The September 11th Victim Compensation Fund is permanently funded and accepting claims through 2090.',
    overview: [
      'When the World Trade Center towers collapsed on September 11, 2001, they released a massive plume of pulverized concrete, asbestos, glass fibers, heavy metals, and burning jet fuel across Lower Manhattan. Responders, cleanup and construction crews, volunteers, residents, office workers, and students were exposed to the debris cloud and contaminated sites for weeks and months afterward.',
      'The James Zadroga 9/11 Health and Compensation Act established two federal programs: the World Trade Center Health Program, which monitors and certifies covered 9/11-related conditions, and the September 11th Victim Compensation Fund (VCF), which compensates eligible claimants for certified illnesses, injuries, and deaths. In 2019, the Never Forget the Heroes Act permanently funded the VCF, extending claim filing through 2090.',
      'Unlike a typical mass tort lawsuit, VCF claims are administrative — evaluated on documented presence in the exposure zone during the covered period and a WTC-related certified condition. Registration deadlines apply and depend on when each condition is certified, which is why early review is recommended.',
    ],
    allegations: [
      'Documented presence in the 9/11 exposure zone — the WTC site, debris removal routes, barges, morgues, or the Lower Manhattan exposure area — during the covered period',
      'A condition certified by the WTC Health Program, or a verifiable 9/11-related illness or injury',
      'Latency is built into the analysis — many covered cancers take years to develop, and new diagnoses continue to rise among exposed populations',
      'Individual registration deadlines tied to when a condition is certified — missing a deadline can forfeit compensation',
    ],
    allegationsHeading: 'What these claims are based on',
    eligibility: [
      'Responded, worked, or volunteered at the WTC site, Pentagon, or Shanksville — or lived, worked, or attended school in the Lower Manhattan exposure zone',
      'Present in the exposure zone during the covered period (generally September 11, 2001 through July 31, 2002 for VCF purposes)',
      'Diagnosed with a condition certified or potentially certifiable by the WTC Health Program — cancers, respiratory and aerodigestive illnesses, or related injuries',
      'Able to document presence through employment records, leases, school records, or witness attestation',
    ],
    injuries: [
      'Cancers — lung, thyroid, skin, prostate, blood cancers, and dozens of other covered types',
      'Asthma and reactive airway disease',
      'COPD and interstitial lung disease',
      'Chronic sinusitis and rhinosinusitis',
      'GERD and other aerodigestive disorders',
      'Musculoskeletal injuries from rescue and recovery work',
    ],
    status:
      'The VCF is permanently funded and accepting claims through 2090. More than 100,000 responders and survivors are enrolled in the WTC Health Program, and the list of covered conditions — including newly associated cancers — continues to expand. Filing deadlines are individual to each claimant and depend on certification dates.',
    faqs: [
      {
        q: 'I was a responder but never enrolled in the WTC Health Program — can I still be reviewed?',
        a: 'Possibly. Certification through the Health Program is required for most VCF claims, but the review can start with your presence history and diagnosis — enrollment steps come later if your information appears to fit.',
      },
      {
        q: 'How do I prove I was in the exposure zone?',
        a: 'Employment records, pay stubs, leases, school records, photographs, and third-party attestations can all establish presence. Gaps in documentation are common and do not automatically disqualify a claim.',
      },
      {
        q: 'Is there a deadline to file?',
        a: 'Yes — and it is individualized. VCF registration deadlines depend on when a condition is certified or when a claim becomes eligible, not a single universal date. Reviewing early protects your window.',
      },
      {
        q: 'Is this a lawsuit?',
        a: 'No — the VCF is a federal administrative compensation fund. It exists separately from litigation and follows its own eligibility, certification, and award process.',
      },
    ],
  },
  {
    slug: 'rideshare',
    name: 'Rideshare Accident & Assault Claims',
    shortLabel: 'Rideshare',
    icon: Car,
    tagline: 'Injury and assault claims involving Uber, Lyft, and other rideshare trips',
    heroSummary:
      'Rideshare crashes involve layered commercial insurance that changes with the driver\'s app status — and a growing body of litigation alleges platforms failed to protect passengers from driver-perpetrated assault.',
    overview: [
      'Uber, Lyft, and other transportation network companies now account for billions of trips each year. When a crash occurs — whether you were a passenger, rideshare driver, pedestrian, or occupant of another vehicle — determining coverage is more complicated than a typical car accident because rideshare companies carry layered commercial policies that shift with the driver\'s app status.',
      'Rideshare companies generally provide up to $1 million in third-party liability coverage while a driver is en route to a pickup or transporting a passenger, with significantly lower limits when the app is on but no ride is active. Claims often require untangling which coverage tier applied at the moment of the crash — and insurers frequently dispute it.',
      'Separately, thousands of claims allege Uber and Lyft failed to implement adequate safety measures to protect passengers from driver-perpetrated sexual assault and harassment. Those claims have been consolidated in a federal multidistrict litigation in the Northern District of California and in state coordinated proceedings.',
    ],
    allegations: [
      'Driver negligence — distraction, speeding, fatigue, or unsafe pickup and dropoff locations',
      'Layered insurance disputes over which coverage tier applied at the moment of the crash',
      'For assault claims — allegations that platforms screened drivers inadequately, ignored prior complaints, or designed the service in ways that enabled foreseeable harm',
      'Classification of drivers as independent contractors used to deflect responsibility for rider safety',
    ],
    allegationsHeading: 'What these claims are based on',
    eligibility: [
      'Injured in a crash involving an Uber, Lyft, or other rideshare vehicle — as a passenger, rideshare driver, pedestrian, cyclist, or occupant of another vehicle',
      'Or experienced assault or harassment during a rideshare trip',
      'Sought medical treatment or documented the resulting harm',
      'Can identify approximate trip details — app records help but are not required to start a review',
    ],
    injuries: [
      'Whiplash and neck/back injuries',
      'Traumatic brain injury and concussion',
      'Broken bones and orthopedic injuries',
      'Spinal injuries and paralysis',
      'Psychological trauma, PTSD, and emotional distress',
      'Wrongful death',
    ],
    status:
      'Accident claims proceed individually against layered commercial insurance policies. Separately, thousands of passenger-assault claims against Uber and Lyft are consolidated in a federal MDL in the Northern District of California and in California state coordinated proceedings, with early bellwether activity underway.',
    faqs: [
      {
        q: 'The rideshare driver wasn\'t at fault — do I still have a claim?',
        a: 'Possibly. Coverage can come from the rideshare policy, the at-fault driver\'s policy, or uninsured/underinsured motorist coverage depending on app status and state law.',
      },
      {
        q: 'How much insurance coverage is available?',
        a: 'While a driver is en route or transporting a passenger, Uber and Lyft generally carry up to $1 million in third-party liability coverage. Lower tiers apply when the app is on without an active ride.',
      },
      {
        q: 'I was assaulted during a trip — is that handled the same way?',
        a: 'No. Assault claims are evaluated separately from accident claims and connect to coordinated litigation alleging platform safety failures. Your information is routed to the appropriate review.',
      },
      {
        q: 'How long do I have to file?',
        a: 'Deadlines vary by state — typically one to four years for injury claims, with different rules that can apply to assault and minor-related claims. Early review protects your options.',
      },
    ],
  },
  {
    slug: 'motor-vehicle',
    name: 'Motor Vehicle Accident Claims',
    shortLabel: 'Motor Vehicle Accident',
    icon: CarFront,
    tagline: 'Crashes involving cars, trucks, motorcycles, and commercial vehicles',
    heroSummary:
      'When a collision is caused by another party\'s negligence, injured victims may be entitled to compensation for medical bills, lost income, and pain and suffering — and commercial vehicle crashes often carry far higher policy limits.',
    overview: [
      'Car, truck, motorcycle, and commercial vehicle crashes remain the most common source of serious injury claims in the United States. Not every crash produces a viable claim — the strength of a case typically depends on liability evidence, injury severity and treatment documentation, and the insurance coverage available.',
      'Commercial vehicle and trucking crashes involve additional complexity: federal safety regulations on driver hours, maintenance, and loading — plus significantly higher insurance limits. Multi-vehicle pileups, rideshare involvement, and uninsured drivers add further layers.',
      'Claims are typically pursued against the at-fault driver\'s insurer, but can also involve commercial carriers, vehicle manufacturers (defective airbags, brakes, tires), or government entities responsible for dangerous road conditions.',
    ],
    allegations: [
      'Another party\'s negligence — speeding, distraction, impairment, or failure to yield',
      'Commercial and trucking crashes may involve federal safety violations, driver fatigue, or improper loading',
      'Defective vehicle components can shift liability to manufacturers',
      'Dangerous road design or maintenance failures can create claims against government entities',
    ],
    allegationsHeading: 'What these claims are based on',
    eligibility: [
      'Injured in a crash caused — at least in part — by another party',
      'Sought or received medical treatment for your injuries',
      'Within your state\'s filing deadline — often one to three years',
      'Have basic incident details — approximate date, location, and a police report if one exists',
    ],
    injuries: [
      'Whiplash, neck and back injuries',
      'Traumatic brain injury and concussion',
      'Broken bones and orthopedic injuries',
      'Spinal cord injuries and paralysis',
      'Internal injuries and organ damage',
      'Psychological trauma and PTSD',
      'Wrongful death',
    ],
    status:
      'Motor vehicle claims are evaluated individually rather than through a consolidated fund or MDL. Settlement value depends on liability clarity, injury severity, treatment documentation, and available coverage — commercial and trucking crashes often carry substantially higher limits.',
    faqs: [
      {
        q: 'I was partly at fault — can I still recover?',
        a: 'In most states, yes. Comparative negligence rules reduce recovery by your share of fault rather than barring it entirely — though a few states apply stricter rules.',
      },
      {
        q: 'The other driver was uninsured — now what?',
        a: 'Your own uninsured/underinsured motorist coverage may apply. A review considers all available coverage sources, not just the at-fault driver\'s policy.',
      },
      {
        q: 'How long do I have to file?',
        a: 'Statutes of limitation vary by state — commonly two to three years, sometimes as short as one. Acting early preserves evidence and options.',
      },
    ],
  },
  {
    slug: 'roblox',
    name: 'Roblox Child Safety Claims',
    shortLabel: 'Roblox',
    icon: Gamepad2,
    tagline: 'Exploitation and harm claims involving children on the Roblox platform',
    heroSummary:
      'Lawsuits allege Roblox\'s design allowed predators to contact, groom, and exploit minors — and that safety representations made to parents did not match how the platform actually operated.',
    overview: [
      'Roblox is one of the largest gaming platforms in the world, with tens of millions of daily users — a substantial share of them children under 13. A rapidly growing body of litigation alleges the platform\'s design enabled predators to contact and groom minors, and that the safety image marketed to parents did not reflect actual moderation and age-verification practices.',
      'Filed complaints allege predators used the platform to pose as children, build trust, move conversations to other apps, exchange explicit images, and in some cases arrange real-world meetings. Suits also allege engagement-driven design kept children online while safety tools lagged behind the platform\'s growth.',
      'Claims are being filed by families on behalf of children who experienced exploitation, exposure to explicit content, or psychological harm allegedly connected to platform use. Plaintiffs have sought coordinated treatment of cases, and filings expanded significantly through 2024 and 2025.',
    ],
    allegations: [
      'The platform\'s design enabled predators to contact and groom minors despite marketing the platform as safe for children',
      'Safety representations to parents allegedly did not match actual moderation and age-verification practices',
      'The company allegedly knew of widespread exploitation risks and failed to implement adequate protections',
      'Engagement-driven design allegedly prioritized growth and time-on-platform over child safety',
    ],
    eligibility: [
      'A child under 18 who used the Roblox platform',
      'Experienced grooming, exploitation, explicit-content exposure, or related harm connected to platform use',
      'Within the applicable filing window — deadlines vary by state and the child\'s age',
      'A parent or legal guardian typically requests the review on the child\'s behalf',
    ],
    injuries: [
      'Sexual exploitation and grooming',
      'Exposure to explicit or harmful content',
      'Psychological trauma, anxiety, and depression',
      'Self-harm or suicidal ideation allegedly linked to platform experiences',
      'Financial exploitation through in-platform currency',
    ],
    status:
      'Filings accelerated through 2024 and 2025, with plaintiffs seeking coordinated proceedings and platforms rolling out new safety measures as cases proceed. The litigation is in early stages and qualifying criteria continue to evolve.',
    faqs: [
      {
        q: 'My child wasn\'t physically harmed — does that matter?',
        a: 'Claims are being evaluated across a range of harms — exploitation, explicit-content exposure, and documented psychological harm can all potentially qualify.',
      },
      {
        q: 'Do we need proof of what happened on the platform?',
        a: 'Account records, chat logs, and device data can help, but a review can begin from the family\'s account of what occurred.',
      },
      {
        q: 'Who files the claim — the child or the parent?',
        a: 'A parent or legal guardian typically brings the claim on the minor\'s behalf.',
      },
      {
        q: 'Is there a deadline?',
        a: 'Yes — deadlines vary by state, and minors often have extended filing windows. Early review is still recommended because criteria and procedures continue to evolve.',
      },
    ],
  },
  {
    slug: 'sports-betting',
    name: 'Sports Betting Addiction Claims',
    shortLabel: 'Sports Betting Addiction',
    icon: Dices,
    tagline: 'Predatory design and VIP-targeting claims against major sportsbook operators',
    heroSummary:
      'Lawsuits allege major sportsbooks engineered their apps to keep vulnerable users gambling — targeting known problem bettors with VIP perks and bonuses while self-exclusion tools failed or were ignored.',
    overview: [
      'Since the 2018 Supreme Court decision striking down the federal sports-betting ban, mobile sportsbooks like DraftKings, FanDuel, BetMGM, and Caesars have expanded into dozens of states. Lawsuits allege the apps were built around the same variable-reward mechanics as casino games — push-notification promos, "risk-free" bet offers, and live in-game betting designed to maximize betting frequency.',
      'A central focus of the litigation is VIP and host programs. Suits allege sportsbooks used their own data to identify heavy and problem gamblers, then assigned personal hosts who offered bonuses, credits, and gifts engineered to keep them betting — in some cases while users were on self-exclusion lists or had disclosed gambling problems.',
      'Plaintiffs also allege self-exclusion and deposit-limit tools were ineffective, easily bypassed, or ignored — with excluded users continuing to receive promotional outreach. Claims are being brought under consumer-protection, unjust-enrichment, and negligence theories in multiple jurisdictions.',
    ],
    allegations: [
      'Apps allegedly engineered around variable-reward mechanics — live betting, push-notification promos, and "risk-free" offers designed to maximize betting frequency',
      'VIP host programs allegedly identified problem gamblers and used bonuses and personal outreach to keep them betting',
      'Self-exclusion lists and deposit limits allegedly failed or were ignored — excluded users continued receiving promotions',
      'Advertising allegedly misrepresented risk — "free" and "risk-free" bets that carried rollover and wagering requirements',
    ],
    eligibility: [
      'Used a mobile sportsbook — DraftKings, FanDuel, BetMGM, Caesars, or similar operators',
      'Experienced significant gambling losses while using the platform',
      'Were enrolled in a VIP/host program, received targeted promotions while on a self-exclusion list, or found self-exclusion tools ineffective',
      'Can document approximate losses — account history, bank records, or platform statements',
    ],
    injuries: [
      'Severe financial losses and accumulated debt',
      'Bankruptcy, foreclosure, or drained savings and retirement accounts',
      'Anxiety, depression, and other documented mental-health harm',
      'Relationship breakdown and family harm',
      'Suicidal ideation linked to gambling losses',
      'Lost wages and employment consequences',
    ],
    status:
      'Litigation is early-stage and expanding — individual and class claims are being filed in multiple jurisdictions, and courts are weighing arbitration clauses and consumer-protection theories. Consolidation efforts and new filings continue to develop, and qualifying criteria are evolving.',
    faqs: [
      {
        q: 'I lost money — is that enough to qualify?',
        a: 'Claims generally focus on users who suffered substantial losses combined with predatory-conduct indicators — VIP targeting, self-exclusion failures, or misleading promotions. A review looks at the full picture.',
      },
      {
        q: 'Does it matter which sportsbook I used?',
        a: 'Claims are being evaluated against multiple operators. The specific platform and your account history shape which legal theories apply.',
      },
      {
        q: 'What if I agreed to an arbitration clause?',
        a: 'Most sportsbook terms include arbitration provisions. Whether they bar a claim — or are enforceable at all — depends on the platform, timing, and jurisdiction. It does not automatically end a case.',
      },
      {
        q: 'Is there a deadline?',
        a: 'Yes — statutes of limitation vary by state and legal theory. Because losses may span years, early review is recommended.',
      },
    ],
  },
  {
    slug: 'suboxone',
    name: 'Suboxone Tooth Decay Claims',
    shortLabel: 'Suboxone',
    icon: Pill,
    tagline: 'Sublingual film linked to severe dental decay, erosion, and tooth loss',
    heroSummary:
      'Lawsuits allege the Suboxone sublingual film — designed to dissolve under the tongue — caused severe tooth decay, erosion, and tooth loss, and that patients were never warned of the dental risk before a 2022 FDA-mandated label change.',
    overview: [
      'Suboxone (buprenorphine/naloxone) sublingual film is prescribed to treat opioid dependence. The film is acidic and is held under the tongue or inside the cheek until fully dissolved — a delivery method lawsuits allege repeatedly bathed teeth in acid, causing decay, erosion, fractures, and tooth loss even in patients with previously healthy teeth.',
      'In June 2022, the FDA required a warning about dental problems — including tooth decay, cavities, oral infections, and tooth loss — to be added to the drug\'s prescribing information and medication guide. Lawsuits allege the manufacturer knew or should have known of the risk years earlier, and that patients and prescribers were left without the warning needed to protect their dental health.',
      'Federal claims have been consolidated into a multidistrict litigation in the Northern District of Ohio (MDL 3092), where thousands of cases are pending. The litigation is moving through coordinated pretrial proceedings, with early case-management and bellwether selection underway.',
    ],
    allegations: [
      'The manufacturer failed to adequately warn patients and prescribers about the dental risks of the acidic sublingual film',
      'The film\'s design — requiring prolonged contact with teeth while it dissolves — allegedly made dental harm foreseeable',
      'Adequate warnings and mitigation guidance (dental monitoring, rinsing protocols) were allegedly omitted for years',
      'Dental-risk information was only added to labeling after the FDA\'s 2022 mandate',
    ],
    eligibility: [
      'Prescribed Suboxone sublingual film (buprenorphine/naloxone film dissolved under the tongue or in the cheek)',
      'Used the film regularly — current review criteria commonly focus on use of roughly six months or longer',
      'Developed dental problems after starting the film — decay, erosion, fractures, extractions, or tooth loss',
      'Dental records or treatment history available — approximate dates of use and dental work help',
    ],
    injuries: [
      'Severe tooth decay and cavities',
      'Tooth erosion and enamel loss',
      'Cracked, broken, or fractured teeth',
      'Tooth extractions and tooth loss',
      'Root canals, crowns, dentures, and implants',
      'Oral infections and gum disease',
    ],
    status:
      'Federal claims are consolidated in MDL 3092 in the Northern District of Ohio, where thousands of cases are pending. The litigation is in coordinated pretrial proceedings — no global settlement has been announced, and new claims continue to be filed.',
    faqs: [
      {
        q: 'Does it matter that Suboxone helped my recovery?',
        a: 'No — claims aren\'t about whether the medication worked. They concern whether patients were warned about a dental risk they could have monitored or mitigated.',
      },
      {
        q: 'I used the film for years before the 2022 warning — does timing matter?',
        a: 'Use before the warning was added is central to many claims. Review criteria weigh when you used the film, how long, and when dental problems developed.',
      },
      {
        q: 'What if I used the tablets instead of the film?',
        a: 'Most current claims focus on the sublingual film. If you used a different formulation, a review can still assess whether your situation fits current criteria.',
      },
      {
        q: 'Is there a deadline to file?',
        a: 'Yes — statutes of limitation vary by state and often relate to when you connected your dental problems to the medication. Early review is recommended.',
      },
    ],
  },
  {
    slug: 'bard-powerport',
    name: 'Bard PowerPort Claims',
    shortLabel: 'Bard PowerPort',
    icon: Stethoscope,
    tagline: 'Implanted port catheter claims for device fracture, migration, and infection',
    heroSummary:
      'Lawsuits allege the Bard PowerPort\'s catheter tubing was defectively designed — prone to fracture, migration, and material degradation inside the body, leading to infections, blood clots, and emergency removal surgeries.',
    overview: [
      'The Bard PowerPort is an implantable port catheter used to deliver chemotherapy, medications, and fluids directly into the bloodstream — most often in cancer patients. Lawsuits allege the polyurethane catheter material (ChronoFlex) degrades and fractures inside the body.',
      'Plaintiffs allege fractured or degraded catheter segments can migrate through the vascular system, cause bloodstream infections and sepsis, produce blood clots and cardiac injuries, and require emergency removal surgery. Claims allege the manufacturer knew of high failure rates from internal testing and adverse-event reports but did not adequately warn physicians or patients.',
      'Federal claims are consolidated in a multidistrict litigation in the District of Arizona (MDL 3081), where thousands of cases are pending and bellwether trial selection is underway.',
    ],
    allegations: [
      'The catheter material allegedly degrades and fractures under normal use inside the body',
      'The manufacturer allegedly knew of elevated failure rates from testing and adverse-event data',
      'Patients and physicians allegedly were not adequately warned of fracture, migration, and infection risks',
      'A safer alternative catheter design was allegedly available and feasible',
    ],
    eligibility: [
      'Received an implanted Bard PowerPort (or related Bard port catheter)',
      'Experienced a device complication — fracture, migration, infection, clot, or removal',
      'Complication documented in medical records — imaging, operative reports, or hospitalization',
      'Able to provide approximate implant date and treating facility',
    ],
    injuries: [
      'Catheter fracture and fragment migration',
      'Bloodstream infection and sepsis',
      'Blood clots and thrombosis',
      'Cardiac or vascular injury',
      'Emergency surgical removal',
      'Interruption of cancer or infusion treatment',
    ],
    status:
      'MDL 3081 in the District of Arizona is active with thousands of pending cases. Bellwether trial selection is underway — an early-stage signal phase, with no global settlement announced.',
    faqs: [
      {
        q: 'I don\'t know which port brand was implanted — is that a problem?',
        a: 'No. Operative and implant records identify the device. You do not need the model name before requesting a review.',
      },
      {
        q: 'My port was removed — can I still file?',
        a: 'Yes. Removal because of fracture, infection, or clot is exactly the kind of complication these claims are built on.',
      },
      {
        q: 'Is there a deadline?',
        a: 'Yes — statutes of limitation vary by state and typically relate to when the complication was discovered. Early review is recommended.',
      },
    ],
  },
  {
    slug: 'hair-relaxer',
    name: 'Hair Relaxer Claims',
    shortLabel: 'Hair Relaxer',
    icon: Scissors,
    tagline: 'Chemical straightener claims linked to uterine and other cancers',
    heroSummary:
      'Lawsuits allege long-term use of chemical hair relaxers and straighteners is linked to uterine cancer, endometrial cancer, and ovarian cancer — and that manufacturers failed to warn women who used these products for years.',
    overview: [
      'Chemical hair relaxers and straighteners contain endocrine-disrupting chemicals — including phthalates, parabens, and formaldehyde-releasing agents — that can be absorbed through the scalp, particularly where application causes scalp burns or lesions.',
      'In 2022, a large NIH-funded study (the Sister Study) reported that women who frequently used hair straightening products had more than double the risk of uterine cancer compared with non-users. Following publication, thousands of women filed lawsuits against manufacturers including L\'Oréal, Revlon, and Strength of Nature.',
      'Federal claims are consolidated in a multidistrict litigation in the Northern District of Illinois (MDL 3060), which has grown into one of the larger pending MDLs, with bellwether case selection underway.',
    ],
    allegations: [
      'Manufacturers allegedly failed to warn users about cancer risks associated with chemical relaxers',
      'Products allegedly contained endocrine-disrupting and carcinogenic chemicals absorbed through the scalp',
      'Marketing allegedly targeted regular, long-term use — often beginning in childhood',
      'Safer alternative formulations were allegedly feasible',
    ],
    eligibility: [
      'Used chemical hair relaxers or straighteners regularly — typically for several years',
      'Diagnosed with uterine cancer, endometrial cancer, or ovarian cancer — or underwent related surgery such as hysterectomy for cancer',
      'Diagnosis made after the period of regular product use',
      'Able to identify the brands or salons used — approximate history is acceptable',
    ],
    injuries: [
      'Uterine cancer',
      'Endometrial cancer',
      'Ovarian cancer',
      'Hysterectomy and related surgical complications',
      'Uterine fibroids requiring surgical treatment',
      'Fertility loss related to treatment',
    ],
    status:
      'MDL 3060 in the Northern District of Illinois is among the largest active MDLs, with thousands of pending cases. Bellwether case selection and expert challenges are underway — no global settlement has been announced.',
    faqs: [
      {
        q: 'I used relaxers years ago — can I still qualify?',
        a: 'Yes — these claims focus on cumulative historical use followed by a later diagnosis. The gap between use and diagnosis is expected in these cases.',
      },
      {
        q: 'What if I got relaxers at a salon instead of using them at home?',
        a: 'Salon-applied relaxers can still qualify. What matters is repeated exposure to the chemical products, regardless of who applied them.',
      },
      {
        q: 'Do I need receipts for the products?',
        a: 'No — brand recollection and usage history are typically enough to begin a review. Records can be developed later.',
      },
    ],
  },
  {
    slug: 'oxbryta',
    name: 'Oxbryta Claims',
    shortLabel: 'Oxbryta',
    icon: Pill,
    tagline: 'Sickle cell drug withdrawn worldwide over safety concerns',
    heroSummary:
      'Oxbryta (voxelotor) was withdrawn from the market worldwide in September 2024 after post-market data showed increased vaso-occlusive crises and deaths — patients who relied on the drug allege they were harmed or left without warning.',
    overview: [
      'Oxbryta (voxelotor) was approved in 2019 under the FDA\'s accelerated approval pathway to treat sickle cell disease. It was marketed as a breakthrough therapy that reduced red blood cell sickling and anemia.',
      'In September 2024, Pfizer voluntarily withdrew Oxbryta from all markets after post-approval clinical data showed an imbalance in vaso-occlusive crises and deaths compared to placebo. The FDA and European regulators confirmed the withdrawal, and patients were told to stop taking the drug and consult their physicians.',
      'Claims allege patients experienced increased pain crises, organ complications, and other harm while taking the drug — and that serious safety signals were not adequately communicated before the withdrawal. Litigation is in early stages.',
    ],
    allegations: [
      'Post-market trial data allegedly showed increased vaso-occlusive crises and deaths among users',
      'Patients and physicians allegedly were not adequately warned of emerging safety signals before the withdrawal',
      'The accelerated-approval pathway allegedly allowed the drug to reach market without confirmatory evidence of long-term safety',
      'Withdrawal left patients abruptly without their prescribed therapy',
    ],
    eligibility: [
      'Prescribed and took Oxbryta (voxelotor) for sickle cell disease',
      'Experienced increased vaso-occlusive crises, hospitalization, organ complications, or other serious health events while taking it',
      'Or suffered harm connected to the drug\'s abrupt market withdrawal',
      'Medical records documenting use and complications are helpful but not required to start',
    ],
    injuries: [
      'Increased vaso-occlusive (pain) crises',
      'Hospitalization for sickle cell complications',
      'Organ damage or stroke',
      'Harm from abrupt discontinuation',
      'Worsening of underlying sickle cell condition',
      'Death of a family member who used the drug',
    ],
    status:
      'Oxbryta was withdrawn globally in September 2024. Litigation is in early stages — claims are being evaluated and filed as the scope of injuries connected to the drug becomes clearer.',
    faqs: [
      {
        q: 'The drug was recalled — does that automatically mean I have a claim?',
        a: 'Not automatically — claims focus on documented harm: increased crises, hospitalizations, or complications while taking the drug, or injury connected to its withdrawal.',
      },
      {
        q: 'I stopped taking it before the withdrawal — can I still be reviewed?',
        a: 'Yes — if you experienced serious complications while taking Oxbryta, timing of when you stopped does not necessarily bar a review.',
      },
      {
        q: 'Is there a deadline?',
        a: 'Yes — deadlines vary by state and may relate to when you connected your complications to the drug. Early review is recommended.',
      },
    ],
  },
  {
    slug: 'zantac',
    name: 'Zantac (Ranitidine) Claims',
    shortLabel: 'Zantac',
    icon: Pill,
    tagline: 'Heartburn medication claims for cancer caused by NDMA contamination',
    heroSummary:
      'Zantac (ranitidine) was pulled from the market in 2020 after testing showed it could degrade into NDMA — a probable human carcinogen. Litigation continues in state courts alleging long-term users developed cancer.',
    overview: [
      'Zantac (ranitidine) was one of the best-selling heartburn medications in history. In 2019, independent laboratory testing found that ranitidine could degrade into NDMA — a probable human carcinogen — during storage and possibly inside the body. The FDA requested a complete market withdrawal in April 2020.',
      'Thousands of lawsuits allege long-term Zantac users developed cancers — bladder, stomach, liver, pancreatic, colorectal, and others — and that manufacturers knew or should have known about the NDMA formation risk for decades.',
      'The federal MDL was dismissed in 2022 after the court excluded plaintiffs\' expert testimony, but litigation continues in state courts — including coordinated proceedings in Delaware and California — where claims proceed under state-court evidentiary standards.',
    ],
    allegations: [
      'Ranitidine could degrade into NDMA — a probable carcinogen — during storage and digestion',
      'Manufacturers allegedly knew or should have known of the NDMA risk for decades',
      'Warnings allegedly failed to disclose any cancer risk to patients or prescribers',
      'Safer alternative heartburn medications were widely available',
    ],
    eligibility: [
      'Used Zantac or generic ranitidine regularly — typically for a year or longer',
      'Diagnosed with cancer after the period of use — bladder, stomach, liver, pancreatic, colorectal, or others under review',
      'Diagnosis generally within a timeframe consistent with exposure latency',
      'Able to approximate duration and timing of use',
    ],
    injuries: [
      'Bladder cancer',
      'Stomach and colorectal cancer',
      'Liver cancer',
      'Pancreatic cancer',
      'Esophageal cancer',
      'Other cancers under review',
    ],
    status:
      'The federal MDL was dismissed on evidentiary grounds, but state-court litigation remains active — particularly in Delaware and California — and manufacturers have reached settlements in some cases. Claims continue to be evaluated under state-court standards.',
    faqs: [
      {
        q: 'I heard the Zantac cases were thrown out — is it over?',
        a: 'No. The federal MDL dismissal was based on that court\'s expert-evidence ruling. State-court cases proceed under different standards, and claims continue to be filed and resolved.',
      },
      {
        q: 'I used generic ranitidine — does that matter?',
        a: 'It can. Brand versus generic use affects which defendants and theories apply — your usage history determines how the review proceeds.',
      },
      {
        q: 'How long ago could I have used it?',
        a: 'Reviews commonly cover long-term use before the April 2020 recall. Deadlines vary by state and typically relate to your diagnosis date.',
      },
    ],
  },
  {
    slug: 'dacthal',
    name: 'Dacthal (DCPA) Claims',
    shortLabel: 'Dacthal',
    icon: Leaf,
    tagline: 'Herbicide exposure claims linked to thyroid damage and fetal harm',
    heroSummary:
      'In August 2024 the EPA issued its first emergency suspension of a pesticide in decades — pulling Dacthal (DCPA) over evidence that exposure can damage fetal thyroid development in pregnant women.',
    overview: [
      'Dacthal (dimethyl tetrachloroterephthalate, or DCPA) is an herbicide used for decades on crops — including broccoli, onions, and cabbage — and on turf and golf courses. Agricultural workers, landscapers, and people living near treated fields faced the greatest exposure.',
      'In August 2024, the EPA issued an emergency suspension of DCPA — the first emergency stop of a pesticide in roughly 40 years — after data showed exposure during pregnancy could alter fetal thyroid hormone levels, potentially causing low birth weight, impaired brain development, and developmental harm.',
      'Claims allege the manufacturer failed to adequately warn of developmental and thyroid risks and submitted incomplete safety data for years. Litigation is in early stages.',
    ],
    allegations: [
      'Exposure during pregnancy allegedly altered fetal thyroid hormone levels, risking developmental harm',
      'The manufacturer allegedly failed to adequately warn applicators, farmworkers, and nearby residents',
      'Required safety data was allegedly delayed or incomplete for years',
      'Exposure pathways — handling, drift, and contaminated soil — allegedly put workers and families at risk',
    ],
    eligibility: [
      'Worked with or near Dacthal-treated crops or turf — farmworkers, applicators, landscapers, golf course staff',
      'Or lived near fields or facilities where Dacthal was applied',
      'Pregnant during exposure with a child born with thyroid, developmental, or growth issues — or personally diagnosed with thyroid damage',
      'Able to describe approximate exposure period and location',
    ],
    injuries: [
      'Fetal thyroid disruption and low birth weight',
      'Developmental delays and impaired brain development',
      'Thyroid disorders in exposed adults',
      'Pregnancy complications linked to exposure',
      'Other conditions under review',
    ],
    status:
      'The EPA\'s August 2024 emergency suspension removed DCPA from the market. Litigation is in early stages — claims are being evaluated for workers, applicators, and families with exposure during pregnancy.',
    faqs: [
      {
        q: 'I was exposed while pregnant — what does the claim focus on?',
        a: 'Reviews focus on documented exposure during pregnancy and the child\'s subsequent thyroid, developmental, or growth diagnoses.',
      },
      {
        q: 'I worked on a farm but don\'t know which chemicals were used — can I still ask?',
        a: 'Yes. Crop type, employer, location, and season can establish likely exposure. You do not need to identify the chemical yourself.',
      },
      {
        q: 'Is there a deadline?',
        a: 'Yes — deadlines vary by state and typically relate to when harm was discovered or diagnosed. Early review is recommended.',
      },
    ],
  },
  {
    slug: 'risperdal',
    name: 'Risperdal Claims',
    shortLabel: 'Risperdal',
    icon: Pill,
    tagline: 'Antipsychotic claims for gynecomastia in boys and young men',
    heroSummary:
      'Lawsuits allege Risperdal (risperidone) caused gynecomastia — abnormal breast tissue growth — in boys and young men, and that the manufacturer failed to adequately warn of the hormonal side effect.',
    overview: [
      'Risperdal (risperidone) is an antipsychotic prescribed for schizophrenia, bipolar disorder, and irritability associated with autism — frequently to children and adolescents. The drug can elevate prolactin, a hormone linked to breast tissue growth.',
      'Lawsuits allege the manufacturer knew of elevated gynecomastia risk in young males — particularly at pediatric doses — and failed to adequately warn patients and prescribers. Internal documents and past jury findings have supported claims that risk information was minimized.',
      'Thousands of claims have been filed over the past decade — many resolved through settlements — and new claims continue to be evaluated, particularly for individuals who took the drug as children or teens and later developed gynecomastia.',
    ],
    allegations: [
      'The manufacturer allegedly failed to adequately warn of gynecomastia risk in boys and young men',
      'Prolactin-elevation data allegedly showed elevated risk at pediatric doses',
      'Marketing allegedly promoted pediatric use while risk information was minimized',
      'Adequate monitoring and warning guidance was allegedly omitted',
    ],
    eligibility: [
      'Took Risperdal (risperidone) — particularly as a child, teen, or young adult male',
      'Developed gynecomastia — abnormal breast tissue growth — during or after use',
      'Underwent or were recommended for surgical correction (mastectomy/liposuction) — or have documented diagnosis',
      'Able to provide approximate dates of use',
    ],
    injuries: [
      'Gynecomastia (abnormal breast tissue growth in males)',
      'Surgical breast tissue removal',
      'Psychological harm, embarrassment, and emotional distress',
      'Social withdrawal and bullying-related harm',
      'Hormonal side effects and elevated prolactin',
    ],
    status:
      'Risperdal litigation has produced substantial settlements and verdicts over the past decade, and thousands of claims have resolved. New claims continue to be evaluated — particularly for those who took the drug as minors.',
    faqs: [
      {
        q: 'I took Risperdal as a child years ago — is it too late?',
        a: 'Not necessarily. Filing windows often relate to when the condition was diagnosed or connected to the drug — and minor claimants frequently have extended deadlines.',
      },
      {
        q: 'I didn\'t have surgery — can I still be reviewed?',
        a: 'Yes. A documented diagnosis of gynecomastia can support a review even without surgery, though surgery can affect claim value.',
      },
      {
        q: 'Does it matter that a parent chose the medication for me?',
        a: 'No — claims are brought on behalf of the person harmed, regardless of who consented to treatment at the time.',
      },
    ],
  },
  {
    slug: 'olympus-scope',
    name: 'Olympus Scope Claims',
    shortLabel: 'Olympus Scope',
    icon: Microscope,
    tagline: 'Endoscope and duodenoscope infection claims — including superbug outbreaks',
    heroSummary:
      'Lawsuits allege Olympus endoscopes and duodenoscopes had design defects that trapped bacteria — transmitting serious infections, including antibiotic-resistant CRE superbugs, between patients.',
    overview: [
      'Olympus manufactures the majority of the endoscopes and duodenoscopes used in U.S. procedures. Duodenoscopes — used in ERCP procedures — contain an elevator mechanism that proved extremely difficult to clean and disinfect between patients.',
      'Outbreak investigations linked contaminated scopes to transmission of carbapenem-resistant Enterobacteriaceae (CRE) and other multi-drug-resistant infections at hospitals across the country. Regulators required design changes, and Olympus has issued multiple recalls — including a 2025 recall of the MAJ-891 suction valve component.',
      'Claims allege patients contracted serious infections after procedures with contaminated scopes — and that design defects, inadequate cleaning protocols, and delayed corrective action put patients at risk. Olympus previously paid substantial settlements and a federal deferred-prosecution agreement over outbreak-related conduct.',
    ],
    allegations: [
      'Scope design allegedly made effective cleaning and disinfection impossible in normal use',
      'Bacteria allegedly survived reprocessing and were transmitted between patients',
      'The manufacturer allegedly delayed design fixes and adequate warnings despite known outbreak data',
      'Recalls and retrofits came only after repeated outbreaks and regulatory pressure',
    ],
    eligibility: [
      'Underwent an ERCP or endoscopic procedure with an Olympus duodenoscope or endoscope',
      'Diagnosed with a serious infection after the procedure — including CRE, E. coli, or other resistant organisms',
      'Infection documented in medical records following the procedure',
      'Able to identify the approximate procedure date and facility',
    ],
    injuries: [
      'CRE and other antibiotic-resistant infections',
      'Sepsis and bloodstream infection',
      'Extended hospitalization and IV antibiotic treatment',
      'Organ damage from severe infection',
      'Additional surgeries and procedures',
      'Death of a family member from a post-procedure infection',
    ],
    status:
      'Infection claims against scope manufacturers continue following multiple outbreaks, design changes, and recalls — including the 2025 suction-valve recall. Cases are evaluated individually based on the procedure, device, and documented infection.',
    faqs: [
      {
        q: 'How would I know if my infection came from a scope?',
        a: 'Hospital records, outbreak notifications, and infection timing after the procedure are the starting point. You do not need to prove the link yourself before requesting a review.',
      },
      {
        q: 'My procedure was years ago — can I still file?',
        a: 'Possibly. Deadlines vary by state and often relate to when the infection was diagnosed or connected to the procedure.',
      },
      {
        q: 'I wasn\'t part of a known outbreak — does that matter?',
        a: 'Not necessarily. Individual post-procedure infections can qualify even outside a publicly reported outbreak.',
      },
    ],
  },
  {
    slug: 'social-media-addiction',
    name: 'Social Media Addiction Claims',
    shortLabel: 'Social Media Addiction',
    icon: MonitorSmartphone,
    tagline: 'MDL 3047 — claims against Meta, TikTok, Snap, and YouTube for adolescent harm',
    heroSummary:
      'Thousands of families and school districts allege social media platforms were deliberately engineered to addict minors — contributing to anxiety, depression, eating disorders, and self-harm. Federal claims are consolidated in MDL 3047.',
    overview: [
      'Lawsuits against Meta (Instagram, Facebook), TikTok, Snap, YouTube, and other platforms allege that engagement-maximizing design — infinite scroll, algorithmic feeds, autoplay, and social-validation metrics — was deliberately engineered to extend use among minors whose developing brains are most vulnerable.',
      'Plaintiffs include families whose children developed eating disorders, depression, anxiety, self-harm, and suicidal behavior allegedly driven by platform use — plus school districts claiming the youth mental-health crisis imposed massive costs on education systems.',
      'Federal claims are consolidated in a multidistrict litigation in the Northern District of California (MDL 3047), with bellwether trials approaching. The litigation has survived major legal challenges, and internal platform documents disclosed in discovery have drawn national attention.',
    ],
    allegations: [
      'Platforms allegedly engineered addictive features — infinite scroll, algorithmic amplification, and engagement loops — aimed at minors',
      'Internal research allegedly showed harm to adolescent mental health while growth was prioritized',
      'Age-verification and parental-control tools were allegedly inadequate or easily bypassed',
      'Platforms allegedly failed to warn parents and users of known risks',
    ],
    eligibility: [
      'A minor (or former minor) who used social media platforms heavily — typically several hours daily',
      'Developed or was diagnosed with depression, anxiety, eating disorders, self-harm, or suicidal behavior connected to use',
      'Received treatment — therapy, hospitalization, or school intervention documentation helps',
      'A parent or guardian typically initiates the review on the child\'s behalf',
    ],
    injuries: [
      'Depression and anxiety disorders',
      'Eating disorders and body dysmorphia',
      'Self-harm and suicidal ideation or attempts',
      'Hospitalization for mental-health crises',
      'Sexual exploitation connected to platform contact',
      'Educational disruption',
    ],
    status:
      'MDL 3047 in the Northern District of California is in advanced pretrial proceedings with bellwether trials approaching. State-court coordinated proceedings and school-district claims run in parallel, and new filings continue.',
    faqs: [
      {
        q: 'Does my child need a formal diagnosis?',
        a: 'A documented diagnosis or treatment history strengthens a review, but the initial step starts with your family\'s account — records can be developed afterward.',
      },
      {
        q: 'Which platforms are involved?',
        a: 'Claims are being evaluated against Meta, TikTok, Snap, YouTube, and other major platforms. Usage history determines which apply.',
      },
      {
        q: 'My child is now an adult — can we still file?',
        a: 'Possibly — claims center on harm that began during minor use, and minors often have extended filing windows. Early review is recommended.',
      },
    ],
  },
  {
    slug: 'video-game-addiction',
    name: 'Video Game Addiction Claims',
    shortLabel: 'Video Game Addiction',
    icon: Gamepad2,
    tagline: 'Claims alleging addictive game design harmed minors — loot boxes, variable rewards, microtransactions',
    heroSummary:
      'Lawsuits allege major game publishers engineered addictive mechanics — loot boxes, variable-reward loops, and engagement-driven design — that harmed minors\' mental health and drained family finances through in-game purchases.',
    overview: [
      'A growing body of litigation targets the design of major games and platforms — alleging publishers deliberately engineered addictive mechanics modeled on gambling psychology: variable-ratio rewards, loot boxes, battle passes, limited-time events, and social-pressure systems that keep minors playing and spending.',
      'Claims allege children developed compulsive-use patterns, sleep disruption, academic decline, and mental-health harm — while publishers profited from engagement features and in-game purchases, including unauthorized charges made by minors.',
      'Filings have targeted titles and platforms including Fortnite, Roblox, and other major games. Plaintiffs have sought coordinated treatment in California courts, and the litigation is in early stages as courts weigh design-defect and consumer-protection theories.',
    ],
    allegations: [
      'Games allegedly used gambling-derived mechanics — loot boxes and variable-reward schedules — designed to compel continued play and spending',
      'Publishers allegedly employed psychologists and behavioral design to maximize minor engagement',
      'Parental controls and spending safeguards were allegedly inadequate or deliberately weak',
      'Platforms allegedly profited from unauthorized purchases made by minors',
    ],
    eligibility: [
      'A minor who played video games compulsively — typically many hours daily over an extended period',
      'Experienced documented harm — mental-health decline, academic or social impairment, or significant unauthorized spending',
      'Harm connected to games with loot-box, microtransaction, or engagement-driven design',
      'A parent or guardian typically initiates the review',
    ],
    injuries: [
      'Compulsive gaming and behavioral addiction',
      'Anxiety, depression, and social withdrawal',
      'Sleep disruption and physical-health decline',
      'Academic failure and school refusal',
      'Unauthorized in-game purchases and financial loss',
      'Aggression and behavioral escalation when play is limited',
    ],
    status:
      'Video game addiction litigation is early-stage and expanding — plaintiffs have sought coordinated proceedings in California, and filings continue against multiple publishers. Courts are actively weighing design-defect and consumer-protection theories.',
    faqs: [
      {
        q: 'Isn\'t gaming just a hobby — how is it a legal claim?',
        a: 'Claims don\'t challenge gaming itself — they allege specific design mechanics (loot boxes, variable rewards, engagement engineering) caused foreseeable harm to minors, similar to predatory-product theories.',
      },
      {
        q: 'My child made unauthorized purchases — is that part of it?',
        a: 'Yes. Unauthorized in-game spending by minors is a documented harm these claims address, alongside addiction-related injuries.',
      },
      {
        q: 'Which games qualify?',
        a: 'Reviews look at titles with loot-box, microtransaction, or engagement-driven design — Fortnite, Roblox, and other major platforms are named in current filings. The play history determines fit.',
      },
    ],
  },
  {
    slug: 'benzene-exposure',
    name: 'Benzene Exposure Claims',
    shortLabel: 'Benzene Exposure',
    icon: FlaskConical,
    tagline: 'Occupational and consumer-product benzene claims for blood cancers',
    heroSummary:
      'Benzene is a known human carcinogen linked to leukemia and other blood cancers. Claims cover decades of occupational exposure — refineries, chemical plants, mechanics — and recalled consumer products contaminated with benzene.',
    overview: [
      'Benzene is an industrial solvent and gasoline component classified as a known human carcinogen. Workers in refineries, chemical plants, printing operations, auto repair, and painting faced the heaviest exposure — through inhalation and skin contact over months or years.',
      'Medical literature has long linked benzene exposure to acute myeloid leukemia (AML), myelodysplastic syndrome (MDS), chronic lymphocytic and myeloid leukemias, and non-Hodgkin lymphoma. Claims allege employers and manufacturers failed to protect or warn exposed workers.',
      'Separately, independent testing found benzene contamination in consumer products — prompting recalls of sunscreens, antiperspirants, and dry shampoos. Claims from contaminated products and occupational exposure proceed in individual lawsuits across multiple jurisdictions.',
    ],
    allegations: [
      'Employers and manufacturers allegedly failed to protect workers from known benzene hazards',
      'Warnings allegedly understated or omitted leukemia risk from chronic exposure',
      'Protective equipment and exposure controls were allegedly inadequate',
      'Consumer products allegedly contained benzene contamination at unsafe levels',
    ],
    eligibility: [
      'Regular occupational exposure to benzene — refinery, chemical, mechanic, painter, printer, or similar work',
      'Or regular use of a recalled benzene-contaminated product (sunscreen, antiperspirant, dry shampoo)',
      'Diagnosed with AML, MDS, CML/CLL, non-Hodgkin lymphoma, or related blood cancer',
      'Diagnosis generally consistent with exposure latency — often years after exposure',
    ],
    injuries: [
      'Acute myeloid leukemia (AML)',
      'Myelodysplastic syndrome (MDS)',
      'Chronic myeloid and lymphocytic leukemias',
      'Non-Hodgkin lymphoma',
      'Aplastic anemia and blood disorders',
      'Death of a family member from a benzene-related cancer',
    ],
    status:
      'Benzene claims proceed as individual lawsuits rather than a single consolidated MDL. Occupational exposure litigation is well-established, and consumer-product claims expanded after the contamination recalls. New claims continue to be filed.',
    faqs: [
      {
        q: 'My exposure was decades ago — can I still file?',
        a: 'Possibly. Benzene-related cancers have long latency — deadlines typically run from diagnosis, not exposure. Many claims involve exposure from decades earlier.',
      },
      {
        q: 'I don\'t know exactly which products contained benzene — is that a problem?',
        a: 'No. Work history, job duties, and the products you handled establish likely exposure. You do not need chemical documentation yourself.',
      },
      {
        q: 'I used a recalled sunscreen — does that count?',
        a: 'Potentially. Consumer-product claims are evaluated on which recalled product you used, how long, and your diagnosis.',
      },
    ],
  },
  {
    slug: 'tepezza',
    name: 'Tepezza Claims',
    shortLabel: 'Tepezza',
    icon: Ear,
    tagline: 'Thyroid eye disease infusion claims for permanent hearing loss',
    heroSummary:
      'Lawsuits allege Tepezza — the first drug approved for thyroid eye disease — causes permanent hearing loss and tinnitus, and that patients were not warned of the risk until years after approval.',
    overview: [
      'Tepezza (teprotumumab) was approved in 2020 as the first treatment for thyroid eye disease. It is delivered through a series of IV infusions over several months.',
      'After approval, patients and studies reported hearing loss, tinnitus, muffled hearing, and autophony — some permanent. A warning about hearing impairment was not added to the label until 2023. Lawsuits allege the manufacturer knew or should have known of ototoxicity risk from clinical data but failed to warn.',
      'Federal claims are consolidated in a multidistrict litigation in the Northern District of Illinois (MDL 3079), which continues to grow as more patients connect persistent hearing problems to their infusions.',
    ],
    allegations: [
      'The manufacturer allegedly failed to warn patients and prescribers of hearing-loss risk until 2023',
      'Clinical data allegedly showed ototoxicity signals before the label was updated',
      'Patients allegedly were not offered baseline or monitoring hearing tests',
      'Marketing allegedly emphasized benefits while hearing risks went undisclosed',
    ],
    eligibility: [
      'Received Tepezza (teprotumumab) infusions for thyroid eye disease',
      'Experienced hearing loss, tinnitus, muffled hearing, or other hearing problems during or after treatment',
      'Hearing problems documented — audiogram or ENT evaluation helps',
      'Able to provide approximate infusion dates',
    ],
    injuries: [
      'Permanent hearing loss',
      'Tinnitus (persistent ringing)',
      'Muffled or distorted hearing',
      'Autophony (hearing one\'s own voice echo)',
      'Hearing-aid dependence',
      'Balance and related ear complications',
    ],
    status:
      'MDL 3079 in the Northern District of Illinois is active with hundreds of pending cases. Coordinated pretrial proceedings are underway — no global settlement has been announced.',
    faqs: [
      {
        q: 'My hearing problems started after my infusions ended — is that connected?',
        a: 'Potentially. Many reported cases involve symptoms appearing during or after the infusion series. Timing and audiology records shape the review.',
      },
      {
        q: 'My hearing improved — can I still file?',
        a: 'Possibly. Claims cover a range of outcomes, though documented permanent impairment is the core of the litigation.',
      },
      {
        q: 'Is there a deadline?',
        a: 'Yes — deadlines vary by state and typically relate to when you connected hearing problems to Tepezza. Early review is recommended.',
      },
    ],
  },
  {
    slug: 'taxotere',
    name: 'Taxotere Claims',
    shortLabel: 'Taxotere',
    icon: Syringe,
    tagline: 'Chemotherapy claims for permanent hair loss and tear-duct damage',
    heroSummary:
      'Lawsuits allege Taxotere (docetaxel) chemotherapy caused permanent hair loss — and separate claims allege it damaged tear ducts causing chronic tearing — risks patients say were never adequately disclosed.',
    overview: [
      'Taxotere (docetaxel) is a chemotherapy drug widely used for breast, lung, and prostate cancers. While temporary hair loss is expected with chemotherapy, lawsuits allege Taxotere caused permanent alopecia — hair that never regrew — at rates far higher than patients were told.',
      'A second wave of claims alleges Taxotere caused canalicular stenosis — scarring and blockage of the tear ducts — producing chronic excessive tearing (epiphora) and requiring surgical intervention. Plaintiffs allege the manufacturer knew of this complication but failed to warn oncologists in time to prevent it.',
      'Federal claims were consolidated in MDL 2740 (hair loss) and MDL 3023 (tear-duct injuries) in the Eastern District of Louisiana. Much of the hair-loss litigation has resolved; tear-duct claims continue.',
    ],
    allegations: [
      'The manufacturer allegedly failed to disclose that hair loss could be permanent rather than temporary',
      'Internal data allegedly showed elevated permanent-alopecia rates before U.S. labeling reflected it',
      'Tear-duct damage was allegedly preventable with early intervention had oncologists been warned',
      'Patients allegedly were denied the informed choice between alternative chemotherapy regimens',
    ],
    eligibility: [
      'Received Taxotere (docetaxel) chemotherapy — most commonly for breast cancer',
      'Experienced permanent hair loss (no meaningful regrowth) or chronic excessive tearing requiring treatment',
      'Completed treatment generally within the last two decades',
      'Medical records confirming the drug and the lasting condition help but are not required to start',
    ],
    injuries: [
      'Permanent alopecia — scalp and body hair that never regrew',
      'Canalicular stenosis (blocked tear ducts)',
      'Chronic excessive tearing (epiphora)',
      'Surgical tear-duct procedures',
      'Psychological and emotional harm from permanent disfigurement',
    ],
    status:
      'The hair-loss MDL (2740) has substantially resolved through settlements and dispositions. Tear-duct claims in MDL 3023 remain active — new claims continue to be evaluated for qualifying injuries.',
    faqs: [
      {
        q: 'My chemo was years ago — is it too late?',
        a: 'Not necessarily. Deadlines vary by state and often relate to when you connected the lasting injury to the drug. Early review is still recommended.',
      },
      {
        q: 'I\'m not sure which chemo drug I received — can I still ask?',
        a: 'Yes. Treatment records identify the regimen. You do not need to know the drug name before requesting a review.',
      },
      {
        q: 'Hair eventually grew back thin and patchy — does that count?',
        a: 'Partial, patchy regrowth is a documented pattern in these claims. The degree of permanence shapes eligibility.',
      },
    ],
  },
  {
    slug: 'silicosis',
    name: 'Silicosis (Engineered Stone) Claims',
    shortLabel: 'Silicosis',
    icon: HardHat,
    tagline: 'Countertop fabrication workers exposed to deadly silica dust',
    heroSummary:
      'Engineered-stone countertops contain up to 95% crystalline silica — and cutting them has created a silicosis epidemic among fabrication workers. California alone has confirmed hundreds of cases, and early verdicts are already large.',
    overview: [
      'Engineered stone — quartz countertop material — contains up to 95% crystalline silica, far more than natural stone. Cutting, grinding, and polishing it releases respirable silica dust that causes silicosis, an incurable and often progressive lung disease.',
      'The crisis has hit fabrication workers — often young, immigrant workers in small shops — with hundreds of confirmed cases in California alone and cases rising nationally. In 2024, a California jury returned a landmark verdict exceeding $50 million against engineered-stone manufacturers.',
      'Claims allege manufacturers knew their products would be dry-cut in fabrication shops, knew silica content created extreme hazard, and failed to warn fabricators or require wet-cutting and respiratory protection.',
    ],
    allegations: [
      'Manufacturers allegedly knew engineered stone would be dry-cut, releasing extreme silica concentrations',
      'Warnings allegedly failed to communicate that ordinary shop dust control was insufficient',
      'Products allegedly contained silica levels far exceeding natural stone without adequate safeguards',
      'Fabrication workers — often with limited safety resources — allegedly bore the harm',
    ],
    eligibility: [
      'Fabricated, cut, ground, or polished engineered-stone (quartz) countertops',
      'Diagnosed with silicosis or a silica-related lung disease',
      'Work history in countertop fabrication, stone shops, or related trades',
      'Able to describe employment history and approximate exposure period',
    ],
    injuries: [
      'Silicosis — chronic, accelerated, and acute forms',
      'Progressive lung scarring and respiratory failure',
      'Lung transplant necessity',
      'Tuberculosis and autoimmune complications linked to silica',
      'Wrongful death of a family member',
    ],
    status:
      'Silicosis litigation is early-stage but producing major results — including a landmark 2024 California jury verdict over $50 million. Hundreds of cases are confirmed in California, and filings are expanding to other states.',
    faqs: [
      {
        q: 'I worked in a small shop — does that matter?',
        a: 'No — many claims come from small fabrication shops. What matters is your work with engineered stone and your diagnosis.',
      },
      {
        q: 'I was diagnosed recently but haven\'t worked in years — can I still file?',
        a: 'Yes — silicosis often surfaces years after exposure. Deadlines typically run from diagnosis, not your last day of exposure.',
      },
      {
        q: 'Do I need to prove which brand of stone I cut?',
        a: 'Not at the start. Shop records, suppliers, and employment history can identify products later.',
      },
    ],
  },
  {
    slug: 'paraquat',
    name: 'Paraquat Claims',
    shortLabel: 'Paraquat',
    icon: Leaf,
    tagline: 'Herbicide exposure claims for Parkinson\'s disease',
    heroSummary:
      'Paraquat is one of the most toxic herbicides in use — banned in dozens of countries but still applied on U.S. farms. Lawsuits allege exposure causes Parkinson\'s disease in applicators, farmworkers, and nearby residents.',
    overview: [
      'Paraquat is a fast-acting herbicide so toxic that a single sip can be fatal — it has been banned in more than 50 countries but remains in widespread U.S. agricultural use, applied to corn, soybeans, cotton, and orchards.',
      'Scientific studies — including long-running agricultural health research — link paraquat exposure to a substantially elevated risk of Parkinson\'s disease. Exposure routes include mixing and application, field work, and drift onto nearby homes and communities.',
      'Federal claims are consolidated in a multidistrict litigation in the Southern District of Illinois (MDL 3004) with thousands of plaintiffs. Early bellwether cases were dismissed on evidentiary grounds, but new claims continue to be filed and the litigation remains active.',
    ],
    allegations: [
      'Manufacturers allegedly knew of the link between paraquat exposure and Parkinson\'s disease',
      'Warnings allegedly failed to disclose neurological risk to applicators and workers',
      'Safer herbicide alternatives allegedly existed and were in use in countries that banned paraquat',
      'The product allegedly remained on the market despite mounting scientific evidence',
    ],
    eligibility: [
      'Mixed, loaded, or applied paraquat — or worked in fields where it was used',
      'Or lived near agricultural land with regular paraquat application',
      'Diagnosed with Parkinson\'s disease or Parkinsonism after exposure',
      'Able to describe work history or residence location during exposure years',
    ],
    injuries: [
      'Parkinson\'s disease',
      'Parkinsonism and related movement disorders',
      'Tremors, rigidity, and mobility decline',
      'Cognitive changes associated with Parkinson\'s',
      'Wrongful death of a family member with Parkinson\'s',
    ],
    status:
      'MDL 3004 in the Southern District of Illinois remains active with thousands of pending plaintiffs. New claims continue to be filed, and coordinated pretrial proceedings — including replacement bellwether selection — are ongoing.',
    faqs: [
      {
        q: 'I only handled paraquat occasionally — does that count?',
        a: 'Reviews look at cumulative exposure — mixing, loading, application, field entry, and drift exposure all contribute. Describe your history and let the review assess it.',
      },
      {
        q: 'I lived near farmland but never worked with chemicals — can I still ask?',
        a: 'Yes — drift exposure claims exist for people who lived near treated fields. Proximity and duration of residence matter.',
      },
      {
        q: 'Is there a deadline?',
        a: 'Yes — deadlines vary by state and typically relate to diagnosis timing. Early review is recommended.',
      },
    ],
  },
  {
    slug: 'paragard',
    name: 'Paragard IUD Claims',
    shortLabel: 'Paragard',
    icon: Wrench,
    tagline: 'Copper IUD breakage claims for surgical retrieval injuries',
    heroSummary:
      'Lawsuits allege the Paragard copper IUD\'s arms are prone to break during removal — leaving fragments embedded that require surgery to retrieve, sometimes hysterectomy.',
    overview: [
      'Paragard is a non-hormonal copper IUD marketed as a long-term contraceptive lasting up to ten years. Its T-shaped arms are flexible plastic designed to fold during removal.',
      'Lawsuits allege a defect makes the arms prone to snapping during routine removal — leaving copper-wire fragments embedded in the uterus. Plaintiffs report needing ultrasounds, hysteroscopies, laparoscopic surgery, and in some cases hysterectomy to retrieve fragments, along with chronic pain and fertility harm.',
      'Federal claims are consolidated in a multidistrict litigation in the Northern District of Georgia (MDL 2974) with thousands of pending cases, and coordinated state proceedings run in parallel.',
    ],
    allegations: [
      'The IUD arms were allegedly defectively designed — prone to brittleness and breakage at removal',
      'The manufacturer allegedly knew of breakage reports but failed to warn physicians and patients',
      'Removal instructions allegedly understated the risk of arm fracture',
      'Patients allegedly faced surgical retrieval that should never have been necessary',
    ],
    eligibility: [
      'Had a Paragard copper IUD implanted',
      'The device broke or fractured during removal — or a fragment was left behind',
      'Required additional procedures — imaging, hysteroscopy, laparoscopy, or hysterectomy',
      'Medical records documenting removal complications help but are not required to start',
    ],
    injuries: [
      'IUD arm fracture during removal',
      'Embedded device fragments',
      'Surgical fragment retrieval (hysteroscopy/laparoscopy)',
      'Hysterectomy in severe cases',
      'Chronic pelvic pain and internal injury',
      'Fertility complications',
    ],
    status:
      'MDL 2974 in the Northern District of Georgia is active with thousands of pending cases. Bellwether trial selection is underway — no global settlement has been announced.',
    faqs: [
      {
        q: 'My IUD broke but the pieces were eventually removed — is that a claim?',
        a: 'Potentially — the need for additional procedures beyond a routine removal is the core of these claims, even if fragments were ultimately retrieved.',
      },
      {
        q: 'I\'m not sure it was Paragard — how do I find out?',
        a: 'Medical records identify the device. You do not need to confirm the brand before requesting a review.',
      },
      {
        q: 'Is there a deadline?',
        a: 'Yes — deadlines vary by state and typically relate to when the breakage occurred or was discovered. Early review is recommended.',
      },
    ],
  },
  {
    slug: 'wildfire',
    name: 'Wildfire Damage Claims',
    shortLabel: 'Wildfire',
    icon: Flame,
    tagline: 'Claims against utilities and responsible parties for fire losses',
    heroSummary:
      'When wildfires are sparked by utility equipment or negligence, victims can recover for destroyed homes, smoke damage, evacuation costs, injuries, and wrongful death — often through inverse condemnation claims that don\'t require proving negligence.',
    overview: [
      'The January 2025 Los Angeles fires — Eaton and Palisades among them — destroyed thousands of structures and displaced entire communities. Investigations have focused on utility equipment and infrastructure as potential ignition sources.',
      'In California, inverse condemnation law allows property owners to hold utilities responsible when their equipment contributes to a fire — even without proving negligence. Claims can cover property destruction, smoke and ash damage, evacuation and displacement costs, business losses, personal injuries, and wrongful death.',
      'Victims include homeowners, renters, and businesses — including those whose insurance underpaid or denied claims. Filing deadlines apply, and early claims activity shapes recovery options.',
    ],
    allegations: [
      'Utility equipment or infrastructure allegedly sparked or contributed to fire ignition',
      'Power lines allegedly remained energized in dangerous wind conditions',
      'Vegetation management and equipment maintenance were allegedly inadequate',
      'Warnings and shutoff protocols were allegedly insufficient for known fire weather',
    ],
    allegationsHeading: 'What these claims are based on',
    eligibility: [
      'Owned, rented, or occupied property damaged or destroyed in a wildfire linked to utility or third-party fault',
      'Suffered smoke/ash damage, evacuation costs, displacement, business losses, injuries, or lost a family member',
      'Located within the fire\'s burn or evacuation footprint',
      'Insurance claims underpaid, denied, or insufficient to cover losses',
    ],
    injuries: [
      'Home and property destruction',
      'Smoke, ash, and contamination damage',
      'Evacuation and displacement expenses',
      'Business interruption and income loss',
      'Burn injuries and smoke-related health harm',
      'Wrongful death of a family member',
    ],
    status:
      'Litigation against Southern California Edison and other parties over the January 2025 fires is active and expanding. Filing deadlines begin as early as January 2027 for some claims — early review protects recovery options.',
    faqs: [
      {
        q: 'My insurance paid — can I still file a claim?',
        a: 'Often yes. Insurance rarely covers the full loss — claims can pursue what insurance missed, including underpayment, evacuation costs, and non-economic harm.',
      },
      {
        q: 'I rented, not owned — do I have a claim?',
        a: 'Yes — renters can claim destroyed belongings, displacement costs, and injuries just like owners.',
      },
      {
        q: 'What if investigators haven\'t confirmed the cause yet?',
        a: 'You can still request a review — claims are evaluated as investigations proceed, and filing windows can open regardless of final determinations.',
      },
    ],
  },
  {
    slug: 'ivc-filter',
    name: 'IVC Filter Claims',
    shortLabel: 'IVC Filter',
    icon: HeartPulse,
    tagline: 'Retrievable blood clot filter claims for fracture, migration, and perforation',
    heroSummary:
      'Retrievable IVC filters — designed to catch blood clots — allegedly fractured, migrated, and perforated organs and vessels, causing injuries far worse than the clots they were meant to prevent.',
    overview: [
      'Inferior vena cava (IVC) filters are small cage-like devices implanted in the body\'s largest vein to catch blood clots before they reach the lungs. Retrievable models — intended for temporary use — were left in place for months or years in many patients.',
      'Lawsuits allege the filters tilt, fracture, migrate through the vein wall, and perforate organs — causing internal bleeding, cardiac injury, and emergency removal surgeries. Studies showed fracture and migration rates rising sharply the longer devices remained implanted.',
      'Litigation against manufacturers including Cook Medical and C.R. Bard produced large MDLs — Cook\'s MDL 2570 in the Southern District of Indiana alone held thousands of cases — plus significant jury verdicts and settlements. Remaining and new claims continue to be evaluated.',
    ],
    allegations: [
      'Retrievable filter designs allegedly fractured, tilted, and migrated at rates manufacturers knew about',
      'The devices allegedly perforated the vena cava wall and adjacent organs',
      'Manufacturers allegedly failed to warn about escalating risk the longer filters remained implanted',
      'Retrieval instructions allegedly understated how difficult delayed removal could become',
    ],
    eligibility: [
      'Received an implanted retrievable IVC filter — Cook, Bard, or similar manufacturers',
      'Experienced fracture, migration, perforation, tilt, or removal complications — or the filter remains implanted',
      'Complications documented in imaging or operative records',
      'Able to provide approximate implant date and facility',
    ],
    injuries: [
      'Filter fracture and strut migration',
      'Vena cava or organ perforation',
      'Cardiac injury and tamponade',
      'Internal bleeding and hematoma',
      'Emergency open surgical removal',
      'Pulmonary embolism despite the device',
    ],
    status:
      'IVC filter litigation produced thousands of cases and significant verdicts and settlements. While major MDLs have wound down, remaining and newly discovered claims — including filters still implanted — continue to be evaluated.',
    faqs: [
      {
        q: 'My filter is still implanted and hasn\'t failed — can I still ask?',
        a: 'Yes — filters that remain implanted carry ongoing risk, and some claims involve monitoring and retrieval complications even without a documented fracture.',
      },
      {
        q: 'The implant was years ago — is it too late?',
        a: 'Not necessarily. Deadlines often relate to when a complication was discovered or the filter was confirmed problematic. Early review is recommended.',
      },
      {
        q: 'I don\'t know the filter brand — can you still review it?',
        a: 'Yes. Operative and implant records identify the manufacturer and model.',
      },
    ],
  },
  {
    slug: 'mesothelioma',
    name: 'Mesothelioma & Asbestos Claims',
    shortLabel: 'Mesothelioma',
    icon: Factory,
    tagline: 'Asbestos exposure claims for mesothelioma and lung cancer',
    heroSummary:
      'Mesothelioma is almost exclusively caused by asbestos exposure — often decades before diagnosis. Claims can proceed through lawsuits, asbestos bankruptcy trusts holding over $30 billion, or both.',
    overview: [
      'Asbestos was used for decades in insulation, shipbuilding, construction materials, automotive parts, and industrial equipment. Inhaled fibers lodge in the lining of the lungs, abdomen, or heart — causing mesothelioma and lung cancer typically 20 to 50 years after exposure.',
      'Exposed populations include shipyard and construction workers, Navy veterans, pipefitters, electricians, mechanics, and industrial workers — plus family members exposed secondhand through contaminated work clothing.',
      'Compensation comes through two main channels: lawsuits against solvent companies, and asbestos bankruptcy trusts — established when liable companies reorganized — collectively holding over $30 billion for claimants. Many victims pursue both simultaneously.',
    ],
    allegations: [
      'Manufacturers allegedly knew asbestos was lethal decades before warnings appeared',
      'Internal documents allegedly showed companies suppressed known health risks',
      'Workers allegedly were never provided respiratory protection or hazard warnings',
      'Products allegedly remained on the market long after dangers were established',
    ],
    allegationsHeading: 'What these claims are based on',
    eligibility: [
      'Diagnosed with mesothelioma or asbestos-related lung cancer',
      'Or lost a family member to a diagnosed asbestos disease',
      'Work or exposure history — shipyards, construction, military service, industrial trades, or secondary household exposure',
      'A confirmed diagnosis is essential — pathology or specialist records establish it',
    ],
    injuries: [
      'Mesothelioma — pleural, peritoneal, and pericardial',
      'Asbestos-related lung cancer',
      'Asbestosis and pleural disease',
      'Respiratory failure',
      'Wrongful death of a family member',
    ],
    status:
      'Asbestos litigation is the longest-running mass tort in U.S. history and remains fully active — state court dockets produce regular verdicts, and 60+ bankruptcy trusts continue paying claims. New diagnoses generate new claims every year.',
    faqs: [
      {
        q: 'I was exposed 30+ years ago — is that normal for these claims?',
        a: 'Yes — mesothelioma latency is typically 20 to 50 years. Nearly every claim involves exposure from decades before diagnosis.',
      },
      {
        q: 'My husband brought dust home on his clothes — can I file?',
        a: 'Yes — secondary (household) exposure claims are well established for family members who laundered contaminated work clothing.',
      },
      {
        q: 'What\'s the difference between a lawsuit and a trust claim?',
        a: 'Lawsuits target companies still operating; trust claims target companies that reorganized in bankruptcy. Most claimants pursue both — they follow separate processes and can pay simultaneously.',
      },
    ],
  },
  {
    slug: 'allergan-breast-implant',
    name: 'Allergan Breast Implant Claims',
    shortLabel: 'Allergan Breast Implant',
    icon: Activity,
    tagline: 'Recalled BIOCELL textured implants linked to BIA-ALCL lymphoma',
    heroSummary:
      'Allergan recalled its BIOCELL textured breast implants worldwide in 2019 after they were linked to BIA-ALCL — a rare lymphoma. Lawsuits allege women were never adequately warned of the cancer risk.',
    overview: [
      'Allergan\'s BIOCELL textured breast implants were linked to breast implant-associated anaplastic large cell lymphoma (BIA-ALCL) — a rare but serious cancer of the immune system that develops in the tissue surrounding the implant.',
      'In July 2019, the FDA requested a worldwide recall of BIOCELL textured implants after data showed they accounted for the overwhelming majority of BIA-ALCL cases. Lawsuits allege the manufacturer knew of lymphoma risk signals for years but marketed the implants without adequate warnings.',
      'Federal claims are consolidated in a multidistrict litigation in the District of New Jersey (MDL 2921). Claims cover diagnosed BIA-ALCL, explant (removal) surgeries, and medical monitoring — with bellwether proceedings underway.',
    ],
    allegations: [
      'Textured implant surfaces allegedly created conditions for lymphoma development',
      'The manufacturer allegedly knew of BIA-ALCL signals years before the recall',
      'Warnings allegedly failed to communicate cancer risk to patients and surgeons',
      'Women allegedly face removal surgery, monitoring costs, and ongoing anxiety from implanted recalled devices',
    ],
    eligibility: [
      'Received Allergan BIOCELL textured breast implants',
      'Diagnosed with BIA-ALCL — or underwent/recommended for explant surgery due to the recall or symptoms',
      'Implant records identifying textured BIOCELL devices help — operative reports establish it',
      'Diagnosis or surgery after implantation',
    ],
    injuries: [
      'BIA-ALCL (breast implant-associated lymphoma)',
      'Explant (implant removal) surgery',
      'Chemotherapy and cancer treatment',
      'Seroma and capsular complications',
      'Medical monitoring costs and anxiety',
      'Wrongful death of a family member',
    ],
    status:
      'MDL 2921 in the District of New Jersey is active, with bellwether proceedings scheduled. Claims span diagnosed BIA-ALCL, explant surgeries, and medical-monitoring theories.',
    faqs: [
      {
        q: 'I don\'t know if my implants were the recalled textured ones — how do I check?',
        a: 'Implant cards and operative reports identify the model. Your surgeon\'s records or the review process can establish it.',
      },
      {
        q: 'I haven\'t been diagnosed with cancer but my implants were recalled — can I still file?',
        a: 'Potentially — claims also cover explant surgery and medical-monitoring costs for recalled devices, not only diagnosed cancer.',
      },
      {
        q: 'Is there a deadline?',
        a: 'Yes — deadlines vary by state and typically relate to diagnosis or when you learned the implant was recalled. Early review is recommended.',
      },
    ],
  },
  {
    slug: 'valsartan',
    name: 'Valsartan Claims',
    shortLabel: 'Valsartan',
    icon: Pill,
    tagline: 'NDMA-contaminated blood pressure medication claims for cancer',
    heroSummary:
      'Millions of blood pressure patients took valsartan contaminated with NDMA — a probable carcinogen — for years before massive 2018 recalls. Cancer claims continue in the ongoing personal-injury track.',
    overview: [
      'Valsartan is a widely prescribed blood pressure medication. In 2018, regulators discovered that batches manufactured overseas were contaminated with NDMA and NDEA — probable human carcinogens formed during the manufacturing process — triggering one of the largest drug recalls in history.',
      'Patients had taken contaminated pills for years before detection. Lawsuits allege they developed cancers — liver, kidney, colorectal, stomach, and others — from chronic NDMA exposure, and that manufacturers and distributors failed to control contamination or warn patients.',
      'Federal claims are consolidated in MDL 2875 in the District of New Jersey. The economic-loss track has resolved through settlement; the personal-injury cancer track remains in active litigation.',
    ],
    allegations: [
      'Manufacturing processes allegedly generated carcinogenic NDMA/NDEA impurities in the drug',
      'Contaminated batches allegedly circulated for years before detection',
      'Quality control and supply-chain oversight were allegedly inadequate',
      'Patients allegedly ingested a probable carcinogen daily without any warning',
    ],
    eligibility: [
      'Took recalled valsartan — generally 2014–2018 era contaminated batches',
      'Diagnosed with cancer after use — liver, kidney, colorectal, stomach, or related cancers',
      'Pharmacy or prescription records confirming valsartan use help',
      'Diagnosis timing consistent with exposure',
    ],
    injuries: [
      'Liver cancer',
      'Kidney cancer',
      'Colorectal cancer',
      'Stomach cancer',
      'Other cancers under review',
      'Wrongful death of a family member',
    ],
    status:
      'MDL 2875\'s economic-loss claims resolved through settlement. The personal-injury cancer track remains in active litigation — qualifying claims continue to be evaluated and filed.',
    faqs: [
      {
        q: 'How do I know if my pills were from a contaminated batch?',
        a: 'Pharmacy records and recall lot data establish it — you don\'t need the lot number yourself. The review reconstructs which batches your prescriptions came from.',
      },
      {
        q: 'I heard there was a settlement — did I miss it?',
        a: 'The settlement covered economic losses (the cost of recalled pills). Personal-injury cancer claims are a separate track that remains active.',
      },
      {
        q: 'Is there a deadline?',
        a: 'Yes — deadlines vary by state and typically relate to diagnosis. Early review is recommended.',
      },
    ],
  },
  {
    slug: 'exactech',
    name: 'Exactech Implant Claims',
    shortLabel: 'Exactech',
    icon: Bone,
    tagline: 'Recalled knee, hip, and ankle implants failing early from packaging defect',
    heroSummary:
      'Exactech recalled hundreds of thousands of knee, hip, and ankle implants after defective packaging let the plastic components degrade — causing early failure and revision surgery.',
    overview: [
      'Exactech\'s Optetrak, Truliant, and other orthopedic implants used polyethylene (plastic) components packaged in bags that allegedly lacked adequate oxygen barriers. Oxygen exposure degraded the plastic — sometimes before implantation — causing premature wear once inside the body.',
      'Beginning in 2021, Exactech recalled hundreds of thousands of knee, hip, and ankle implants. Lawsuits allege patients experienced accelerated polyethylene wear, bone loss, loosening, and device failure requiring revision surgery years earlier than expected.',
      'Federal claims are consolidated in MDL 3044 in the Eastern District of New York. Exactech\'s Chapter 11 bankruptcy filing has stayed portions of the litigation, and claim procedures are being worked through the bankruptcy process.',
    ],
    allegations: [
      'Defective vacuum packaging allegedly allowed oxygen to degrade implant polyethylene before use',
      'Degraded plastic allegedly caused accelerated wear, bone loss, and early device failure',
      'The manufacturer allegedly knew of packaging and wear problems years before the recalls',
      'Patients allegedly required revision surgery on implants expected to last 15+ years',
    ],
    eligibility: [
      'Received an Exactech knee, hip, or ankle implant — including recalled Optetrak, Truliant, Vantage, or related lines',
      'Experienced early loosening, wear, pain, or failure — or required/face revision surgery',
      'Implant records identifying the Exactech device help',
      'Complications occurring earlier than the implant\'s expected lifespan',
    ],
    injuries: [
      'Premature implant wear and loosening',
      'Bone loss (osteolysis)',
      'Revision (replacement) surgery',
      'Chronic pain and mobility loss',
      'Joint instability and device failure',
      'Complications from revision procedures',
    ],
    status:
      'MDL 3044 proceedings are affected by Exactech\'s Chapter 11 bankruptcy — claim procedures are being handled through the bankruptcy process. Deadlines and claim mechanics differ from typical MDLs, making early review important.',
    faqs: [
      {
        q: 'The company went bankrupt — can I still file?',
        a: 'Bankruptcy changes the process but doesn\'t eliminate claims — the Chapter 11 case established claim procedures. Deadlines under bankruptcy rules are strict, so early review matters.',
      },
      {
        q: 'My implant hasn\'t failed yet but it was recalled — should I do anything?',
        a: 'Recalled devices still in place may qualify for review — particularly if you\'re experiencing symptoms or facing monitoring or revision decisions.',
      },
      {
        q: 'How do I know if my implant was Exactech?',
        a: 'Operative and implant records identify the manufacturer and model. You do not need to know before requesting a review.',
      },
    ],
  },
  {
    slug: 'philips-cpap',
    name: 'Philips CPAP Claims',
    shortLabel: 'Philips CPAP',
    icon: Wind,
    tagline: 'Recalled sleep apnea devices — degrading foam inhaled by users',
    heroSummary:
      'Philips recalled millions of CPAP and BiPAP devices in 2021 after their sound-dampening foam was found to degrade — potentially releasing particles and chemicals users inhaled nightly for years.',
    overview: [
      'Philips Respironics\' DreamStation, SystemOne, and related CPAP/BiPAP devices used polyester-based polyurethane (PE-PUR) foam to dampen sound and vibration. The foam was found to degrade — potentially releasing particles and chemical gases directly into the device\'s air pathway.',
      'In June 2021, Philips recalled millions of devices worldwide. Users had inhaled air passing over degrading foam nightly — in many cases for years — and reported respiratory problems, headaches, cancers, and organ conditions allegedly connected to exposure.',
      'Federal claims are consolidated in MDL 3014 in the Western District of Pennsylvania. Philips agreed to a ~$1.1 billion personal-injury settlement program in 2024 alongside earlier economic-loss settlements — registration deadlines have closed for some tracks, but claim evaluation continues for eligible users.',
    ],
    allegations: [
      'PE-PUR foam allegedly degraded into particles and chemical gases inhaled by users',
      'The manufacturer allegedly knew of foam degradation issues years before the recall',
      'Users allegedly continued inhaling degraded foam nightly without warning',
      'Recall and replacement programs allegedly came only after regulatory pressure',
    ],
    eligibility: [
      'Used a recalled Philips Respironics CPAP, BiPAP, or ventilator device',
      'Diagnosed with respiratory conditions, cancers, or organ problems after use',
      'Device registration or purchase records help establish the model',
      'Diagnosis timing consistent with exposure period',
    ],
    injuries: [
      'Respiratory conditions and airway injury',
      'Lung, kidney, liver, and other cancers',
      'Headaches and inflammatory symptoms',
      'Organ damage — kidney and liver',
      'Worsening of existing respiratory disease',
      'Wrongful death of a family member',
    ],
    status:
      'Philips agreed to a ~$1.1 billion personal-injury settlement program in 2024 — registration deadlines for some tracks have closed, but claim evaluation continues. MDL 3014 proceedings are in the settlement-administration phase.',
    faqs: [
      {
        q: 'I registered in the recall — is that the same as a legal claim?',
        a: 'No — recall registration only addressed the device itself. Legal claims for injuries are a separate process.',
      },
      {
        q: 'I threw the device away — does that hurt my claim?',
        a: 'Not necessarily. Purchase records, prescription records, and recall registration history can establish which device you used.',
      },
      {
        q: 'Is there still time to file?',
        a: 'Deadlines under the settlement program and state law vary — some registration windows have closed. A review can determine which paths remain open for you.',
      },
    ],
  },
  {
    slug: 'transvaginal-mesh',
    name: 'Transvaginal Mesh (TVM) Claims',
    shortLabel: 'Transvaginal Mesh (TVM)',
    icon: Stethoscope,
    tagline: 'Pelvic mesh claims for erosion, chronic pain, and revision surgery',
    heroSummary:
      'Transvaginal mesh implants for prolapse and incontinence eroded through tissue in thousands of women — causing chronic pain, infection, and repeat surgeries. The litigation is among the largest in history.',
    overview: [
      'Transvaginal mesh was implanted in hundreds of thousands of women to treat pelvic organ prolapse (POP) and stress urinary incontinence (SUI). Manufacturers including Ethicon (J&J), Boston Scientific, C.R. Bard, and American Medical Systems marketed mesh as a durable repair.',
      'The mesh proved prone to erosion — cutting through vaginal tissue and into surrounding organs — causing chronic pain, painful intercourse, infection, and repeat surgeries. Some women underwent multiple revision operations without full removal being possible.',
      'Litigation produced some of the largest MDLs in history — billions in settlements and verdicts across multiple manufacturers. While the major MDLs have largely resolved, remaining and newly diagnosed claims continue to be evaluated.',
    ],
    allegations: [
      'Mesh design allegedly made erosion and tissue integration failure foreseeable',
      'Manufacturers allegedly failed to test long-term safety before marketing',
      'Warnings allegedly understated erosion and revision rates',
      'Complete removal was allegedly difficult or impossible once erosion occurred',
    ],
    eligibility: [
      'Received transvaginal mesh or a pelvic sling for prolapse or incontinence',
      'Experienced erosion, chronic pain, infection, or painful intercourse after implant',
      'Underwent revision or removal surgery — or were told removal is needed',
      'Operative records identifying the implant help but are not required to start',
    ],
    injuries: [
      'Mesh erosion through vaginal tissue',
      'Chronic pelvic and vaginal pain',
      'Painful intercourse (dyspareunia)',
      'Infection and abscess',
      'Revision and removal surgeries',
      'Organ perforation and nerve damage',
    ],
    status:
      'TVM litigation produced billions in settlements across multiple manufacturers, and the major MDLs have largely resolved. Remaining claims — including late-diagnosed complications — continue to be evaluated under state-specific deadlines.',
    faqs: [
      {
        q: 'The big settlements happened years ago — is it too late for me?',
        a: 'Not necessarily. Deadlines typically run from when complications were discovered or connected to the mesh — late-surfacing injuries can still qualify.',
      },
      {
        q: 'I don\'t know the mesh manufacturer — is that a problem?',
        a: 'No. Operative records identify the implant. You don\'t need the brand before requesting a review.',
      },
      {
        q: 'My mesh was partially removed — can I still file?',
        a: 'Yes — partial removal and residual fragments are common in these claims and can reflect the severity of the injury.',
      },
    ],
  },
  {
    slug: 'premises-liability',
    name: 'Premises Liability Claims',
    shortLabel: 'Premises Liability',
    icon: Building,
    tagline: 'Slip and fall, negligent security, and dangerous-condition claims',
    heroSummary:
      'Property owners owe visitors a duty of reasonable safety. When dangerous conditions — wet floors, broken stairs, poor lighting, inadequate security — cause injury, victims can recover for medical bills, lost income, and pain.',
    overview: [
      'Premises liability covers injuries caused by dangerous conditions on someone else\'s property — slip and falls on wet floors, trips on broken pavement, falls on defective stairs, injuries from falling merchandise, and assaults enabled by negligent security.',
      'Liability turns on what the owner knew or should have known: a hazard that existed long enough to be discovered and fixed — or one the owner created — supports a claim. Commercial properties, apartment complexes, parking structures, and retail stores are common settings.',
      'Negligent security claims arise when foreseeable crimes — assaults, robberies, shootings — occur on properties with inadequate lighting, locks, cameras, or security staffing despite a known history of incidents.',
    ],
    allegations: [
      'A dangerous condition existed that the owner knew or should have known about',
      'The owner allegedly failed to repair, warn of, or cordon off the hazard',
      'For security claims — prior incidents allegedly made the crime foreseeable',
      'Inadequate lighting, locks, cameras, or staffing allegedly enabled the harm',
    ],
    allegationsHeading: 'What these claims are based on',
    eligibility: [
      'Injured on someone else\'s property — commercial, residential, or public',
      'A dangerous condition or inadequate security contributed to the injury',
      'Sought medical treatment — records and incident documentation help',
      'Within your state\'s filing deadline — often one to three years',
    ],
    injuries: [
      'Fractures and orthopedic injuries from falls',
      'Head and traumatic brain injuries',
      'Back, neck, and spinal injuries',
      'Injuries from assaults enabled by negligent security',
      'Hip fractures — particularly in older adults',
      'Wrongful death of a family member',
    ],
    status:
      'Premises liability claims are evaluated individually — strength depends on the hazard, the owner\'s notice of it, injury severity, and documentation. Photos, incident reports, and witness information significantly affect outcomes.',
    faqs: [
      {
        q: 'I didn\'t report the fall when it happened — is that a problem?',
        a: 'Not necessarily — though prompt reporting helps. Medical records, photos, and witness accounts can still establish what happened.',
      },
      {
        q: 'There was a "wet floor" sign — can I still file?',
        a: 'Possibly. A sign doesn\'t automatically eliminate liability — placement, visibility, and whether the hazard was actually addressed all matter.',
      },
      {
        q: 'I was hurt at an apartment complex — who is responsible?',
        a: 'Potentially the owner, property manager, or security contractor — claims can involve multiple parties. A review sorts out responsibility.',
      },
    ],
  },
  {
    slug: 'ca-juvenile-detention-abuse',
    name: 'CA Juvenile Detention Abuse Claims',
    shortLabel: 'CA Juvenile Detention Abuse',
    icon: ShieldAlert,
    tagline: 'Sexual abuse claims by survivors of California juvenile facilities',
    heroSummary:
      'Thousands of survivors allege staff sexually abused them inside California juvenile halls, camps, and detention facilities — and revival windows have reopened filing deadlines for childhood abuse claims.',
    overview: [
      'Survivors have come forward alleging decades of sexual abuse by probation officers and staff inside California juvenile detention facilities — including Los Angeles County juvenile halls and camps, and facilities across the state.',
      'California\'s AB 218 and related legislation opened revival windows allowing childhood sexual abuse survivors to file claims that would otherwise be time-barred. Los Angeles County agreed to a multi-billion-dollar settlement framework in 2025 covering thousands of claims — the largest such resolution in U.S. history.',
      'Claims allege facilities failed to screen, supervise, and discipline staff — and that abuse was enabled by institutional cover-ups. Survivors may qualify even if the abuse happened decades ago.',
    ],
    allegations: [
      'Staff allegedly sexually abused minors in custody across multiple facilities and decades',
      'Facilities allegedly failed to screen, supervise, or remove predatory staff',
      'Complaints were allegedly ignored, discouraged, or covered up',
      'The county and facility operators allegedly enabled systemic abuse through institutional failures',
    ],
    allegationsHeading: 'What these claims are based on',
    eligibility: [
      'Detained or housed in a California juvenile hall, camp, ranch, or detention facility',
      'Experienced sexual abuse or sexual misconduct by staff while in custody',
      'Abuse occurred during childhood — decades-old claims may still qualify under revival windows',
      'No documentation is required to begin — your account starts the review',
    ],
    injuries: [
      'Sexual abuse and assault while in custody',
      'PTSD and psychological trauma',
      'Depression, anxiety, and emotional harm',
      'Substance-use and behavioral consequences',
      'Educational and life-course disruption',
    ],
    status:
      'Los Angeles County agreed to a multi-billion-dollar settlement framework in 2025 covering thousands of juvenile-facility abuse claims. Revival windows keep filing available for many survivors — deadlines under those windows still apply.',
    faqs: [
      {
        q: 'The abuse was decades ago — can I still file?',
        a: 'Yes — California\'s revival windows specifically reopened deadlines for childhood sexual abuse claims. Many qualifying claims involve abuse from the 1980s, 1990s, and 2000s.',
      },
      {
        q: 'I never reported it at the time — does that matter?',
        a: 'No — most survivors never reported while in custody. A lack of contemporaneous report does not disqualify a claim.',
      },
      {
        q: 'Which facilities are included?',
        a: 'Claims involve LA County juvenile halls and camps plus facilities across California. The facility name and approximate dates are enough to begin a review.',
      },
    ],
  },
  {
    slug: 'ca-womens-prison-abuse',
    name: 'CA Women\'s Prison Abuse Claims',
    shortLabel: 'CA Women\'s Prison Abuse',
    icon: ShieldAlert,
    tagline: 'Sexual abuse claims by survivors inside California women\'s prisons',
    heroSummary:
      'Survivors allege correctional staff sexually abused incarcerated women inside California facilities — including CCWF and CIW — for decades, enabled by institutional failures and retaliation against those who reported.',
    overview: [
      'Claims allege correctional officers and staff sexually abused incarcerated women at California women\'s facilities — including the Central California Women\'s Facility (CCWF) in Chowchilla and the California Institution for Women (CIW) — over decades.',
      'Survivors allege abuse was systemic: staff exploited custodial power, reports were met with retaliation or ignored, and oversight systems failed to protect vulnerable inmates. Federal and state investigations have documented patterns of misconduct at California women\'s facilities.',
      'Claims proceed under civil-rights and tort theories, with California\'s abuse revival windows extending filing availability for many survivors. A federal class settlement addressing conditions at CCWF established precedent for institutional accountability.',
    ],
    allegations: [
      'Correctional staff allegedly sexually abused incarcerated women over decades',
      'Facilities allegedly failed to investigate reports and protected abusive staff',
      'Survivors who reported allegedly faced retaliation, isolation, or disciplinary consequences',
      'Oversight systems allegedly failed to screen, supervise, or remove predators',
    ],
    allegationsHeading: 'What these claims are based on',
    eligibility: [
      'Incarcerated at a California women\'s facility — CCWF, CIW, or related institutions',
      'Experienced sexual abuse or sexual misconduct by correctional staff',
      'Abuse may have occurred years or decades ago — revival windows extend eligibility',
      'No documentation required to begin — your account starts the review',
    ],
    injuries: [
      'Sexual abuse and assault while incarcerated',
      'PTSD and psychological trauma',
      'Depression, anxiety, and emotional harm',
      'Retaliation harm for reporting',
      'Long-term mental-health consequences',
    ],
    status:
      'Claims against California facilities and staff are active and expanding, supported by documented investigations and prior settlements. Revival windows keep filing available for many survivors — individual deadlines still apply.',
    faqs: [
      {
        q: 'I was incarcerated years ago — can I still file?',
        a: 'Yes — revival windows and delayed-discovery rules extend filing availability for many survivors, even for abuse from decades ago.',
      },
      {
        q: 'I reported it and nothing happened — does that affect my claim?',
        a: 'Documented reports that were ignored can actually support institutional-failure claims. Either way, your account is enough to start a review.',
      },
      {
        q: 'Will filing affect anything related to my record?',
        a: 'These are civil claims separate from any criminal matters. A review is confidential and does not affect your record or status.',
      },
    ],
  },
]

export const tortBySlug = (slug: string) => torts.find((t) => t.slug === slug)
