import type { NewPrediction } from "./schema";

// Comprehensive, researched list of Elon Musk predictions that did NOT come true
// (or did not arrive on the timeline he stated). Compiled from WIRED, Reuters,
// Wikipedia, Tesorb, SEC filings, Tesla earnings calls and mainstream reporting.

export const seedPredictions: NewPrediction[] = [
  // ---------------- SELF-DRIVING / AUTONOMY ----------------
  {
    title: "90% of miles driven autonomously within 3 years",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "We should be able to do 90 percent of miles driven [autonomously] within three years.",
    datePredicted: "Sep 2013",
    targetDate: "By 2016",
    outcome:
      "Autopilot launched in 2014 as lane-keeping assist. Nowhere near 90% of miles were autonomous by 2016 — or any year since.",
    status: "missed",
    lateness: "10+ years & counting",
    source: "Tesla job posting / WIRED",
  },
  {
    title: "Full autonomy in 'about two years'",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "Tesla will have a car that can do full autonomy in about three years… We will have complete autonomy in approximately two years.",
    datePredicted: "Oct–Dec 2015",
    targetDate: "By 2017–2018",
    outcome:
      "FSD remains classified as SAE Level 2 — a human must stay attentive at all times — a full decade later.",
    status: "missed",
    lateness: "~10 years",
    source: "Press briefings / WIRED",
  },
  {
    title: "Summon your car from across the country",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "Within two years you'll be able to summon your car from across the country.",
    datePredicted: "Jan 2016",
    targetDate: "By 2018",
    outcome:
      "Cross-country autonomous summoning never materialized. FSD still requires a licensed driver behind the wheel.",
    status: "missed",
    lateness: "8+ years",
    source: "WIRED",
  },
  {
    title: "Autonomous driving is 'a basically solved problem'",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "I consider autonomous driving to be a basically solved problem. We're less than two years away from complete autonomy.",
    datePredicted: "Jun 2016",
    targetDate: "By 2018",
    outcome:
      "Complete autonomy still not achieved in 2026. The 'basically solved' problem has consumed another decade of development.",
    status: "missed",
    lateness: "~10 years",
    source: "Code Conference 2016",
  },
  {
    title: "LA to New York fully autonomous by end of next year",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "A demonstration drive of full autonomy all the way from LA to New York… without the need for a single touch, including the charger, by the end of next year.",
    datePredicted: "Oct 2016",
    targetDate: "By end of 2017",
    outcome:
      "The cross-country demo never happened on schedule — nor did the promised robotic 'snake' charger. A single owner finally did it in late 2025, roughly 8 years late.",
    status: "missed",
    lateness: "~8 years",
    source: "Media call / TED 2017",
  },
  {
    title: "Full self-driving next year",
    category: "Self-Driving",
    company: "Tesla",
    quote: "I think we'll get to full self-driving next year.",
    datePredicted: "Nov 2018",
    targetDate: "2019",
    outcome:
      "No full self-driving in 2019. Tesla was still years away, and still is. This 'next year' promise became an annual tradition.",
    status: "missed",
    lateness: "7+ years",
    source: "Kara Swisher interview (Recode)",
  },
  {
    title: "1 million robotaxis on the road by 2020",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "Next year there will be over a million Tesla cars with full self-driving… functioning as robotaxis.",
    datePredicted: "Apr 2019",
    targetDate: "2020",
    outcome:
      "Zero robotaxis in 2020. The defining missed prediction of Musk's public track record. A limited Austin service only launched in mid-2025.",
    status: "missed",
    lateness: "5+ years",
    source: "Tesla Autonomy Day 2019",
  },
  {
    title: "FSD safer than humans by end of 2021",
    category: "Self-Driving",
    company: "Tesla",
    quote: "We're aiming to release FSD that is reliable enough that you won't have to pay attention by the end of 2021.",
    datePredicted: "Jan 2021",
    targetDate: "End of 2021",
    outcome:
      "Not achieved. NHTSA opened a formal investigation into FSD safety in 2022, and recalls followed.",
    status: "missed",
    lateness: "5+ years",
    source: "Tesla earnings call",
  },
  {
    title: "Unsupervised FSD in Texas & California by end of 2025",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "We expect to have unsupervised FSD in Texas and California next year… Cybercab production before 2027.",
    datePredicted: "Oct 2024",
    targetDate: "End of 2025",
    outcome:
      "Robotaxi launched in Austin mid-2025, but with a human safety monitor in the passenger seat, ~44 cars, a tiny geofence and a $4.20 fare. Cybercab production still TBD.",
    status: "missed",
    lateness: "Unknown",
    source: "'We, Robot' event 2024",
  },
  {
    title: "Fall asleep in your car and wake at your destination",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "Next year you'll be able to go to sleep in your car and arrive at your destination.",
    datePredicted: "Apr 2025",
    targetDate: "End of 2025",
    outcome:
      "No sleeping passengers. Safety monitors remained in vehicles through the end of 2025.",
    status: "missed",
    lateness: "Missed on schedule",
    source: "Tesla Q1 2025 call",
  },
  {
    title: "Autonomous ride-hailing for half of the US",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "Autonomous ride-hailing covering about half of the US population by the end of next year.",
    datePredicted: "Jul 2025",
    targetDate: "End of 2025",
    outcome:
      "Service stayed limited to a small Austin area with ~44 vehicles; fewer than 10 ran without a safety monitor.",
    status: "missed",
    lateness: "Missed on schedule",
    source: "Tesla Q2 2025 call",
  },

  // ---------------- TESLA VEHICLES / HARDWARE ----------------
  {
    title: "An 'affordable' family car",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote:
      "Our long term plan is to build a wide range of models, including affordably priced family cars.",
    datePredicted: "Aug 2006",
    targetDate: "Within ~3 years",
    outcome:
      "The 'Secret Master Plan' cheap car never properly arrived. The $35K Model 3 was briefly sold then pulled, and Reuters reported the promised low-cost Model 2 was scrapped in 2025.",
    status: "missed",
    lateness: "19+ years",
    source: "Tesla 'Secret Master Plan' / Reuters",
  },
  {
    title: "New Tesla Roadster (2020, flying edition)",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote:
      "The point of doing this is to give a hardcore smackdown to gasoline cars. 0–60 in 1.9 seconds, 620 miles of range.",
    datePredicted: "Nov 2017",
    targetDate: "2020",
    outcome:
      "Still unreleased in 2026. Founders Series deposits of up to $250,000 collected. Musk later teased it could 'fly' with SpaceX thrusters — no demo ever delivered.",
    status: "missed",
    lateness: "6+ years",
    source: "Tesla Semi / Roadster unveil 2017",
  },
  {
    title: "Tesla Semi: volume production, 50k/year by 2023",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote:
      "Production begins in 2019… Tesla will produce 50,000 trucks per year by 2023.",
    datePredicted: "Nov 2017",
    targetDate: "2019 / 2023",
    outcome:
      "Only limited deliveries occurred; volume production kept slipping. PepsiCo and Walmart pre-orders waited years. Volume production pushed toward 2026.",
    status: "missed",
    lateness: "7+ years",
    source: "Tesla Semi unveil 2017",
  },
  {
    title: "Cybertruck deliveries in 2021",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote: "We'll start production in late 2021 and deliver the first trucks that year.",
    datePredicted: "Nov 2019",
    targetDate: "2021",
    outcome:
      "First deliveries only began in November 2023 — two years late — and the launch windows famously shattered on stage. Base price also leapt from $39,900 to $79,990+.",
    status: "missed",
    lateness: "~2 years",
    source: "Cybertruck unveil 2019",
  },
  {
    title: "A 'flying' Tesla with SpaceX thrusters",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote:
      "Maybe it can hover… like a meter, maybe two or three meters. The Roadster will have SpaceX option packages.",
    datePredicted: "2021–2025",
    targetDate: "TBD",
    outcome:
      "A street car hovering on cold-air thrusters never came close to existing, and no regulator would ever permit it. Pure hype.",
    status: "missed",
    lateness: "Indefinite",
    source: "Joe Rogan podcast / X posts",
  },
  {
    title: "Solar Roof: widespread & cheaper than a normal roof",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote:
      "The cost of the solar roof will be less than a normal roof… before you even take the value of electricity into account.",
    datePredicted: "2016",
    targetDate: "2017",
    outcome:
      "Production delays and high costs kept installations niche. Mass-market solar roofing never arrived as promised.",
    status: "missed",
    lateness: "9+ years",
    source: "Solar Roof unveil 2016",
  },
  {
    title: "Model 3: 500,000 cars built in 2018",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote: "We will build half a million cars in 2018.",
    datePredicted: "2016–2017",
    targetDate: "2018",
    outcome:
      "Tesla delivered roughly 145,000 Model 3s in 2018 and entered what Musk himself called 'production hell.' The half-million target slipped by years.",
    status: "missed",
    lateness: "2–3 years",
    source: "Tesla shareholder letters",
  },

  // ---------------- SPACEX / MARS / STARSHIP ----------------
  {
    title: "Humans on Mars within 10 years",
    category: "SpaceX & Mars",
    company: "SpaceX",
    quote: "I'm hopeful that the first people could be taken to Mars in 10 to 15 years.",
    datePredicted: "2011",
    targetDate: "~2021–2026",
    outcome:
      "No crewed Mars mission has been attempted. Starship was still in early test flights through 2025, and NASA projects a Mars landing no sooner than the late 2030s.",
    status: "missed",
    lateness: "15+ years",
    source: "Wall Street Journal, 2011",
  },
  {
    title: "Cargo to Mars by 2018, people by 2025",
    category: "SpaceX & Mars",
    company: "SpaceX",
    quote:
      "Our first Red Dragon mission is targeted for 2018… humans on Mars by 2025.",
    datePredicted: "2016 (IAC)",
    targetDate: "2018 / 2025",
    outcome:
      "No SpaceX rocket has reached Mars. Red Dragon was cancelled and every Mars date has repeatedly slid.",
    status: "missed",
    lateness: "10+ years",
    source: "International Astronautical Congress 2016",
  },
  {
    title: "A self-sustaining city on Mars by 2050",
    category: "SpaceX & Mars",
    company: "SpaceX",
    quote:
      "We'll be landing humans on Mars in 2026… a city on Mars by 2050.",
    datePredicted: "2020–2024",
    targetDate: "2026 / 2050",
    outcome:
      "No Starship cargo mission reached the 2024 Mars window. In early 2026 Musk pivoted priority to the Moon and pushed a Mars city '5 to 7 years' further out.",
    status: "revised",
    lateness: "Goalposts moved again",
    source: "X posts / SpaceX updates",
  },
  {
    title: "Starship reaches orbit in 2022",
    category: "SpaceX & Mars",
    company: "SpaceX",
    quote: "I feel, at this point, highly confident that we'll get to orbit this year.",
    datePredicted: "Feb 2022",
    targetDate: "2022",
    outcome:
      "The first orbital attempt only came in April 2023 — and it exploded about four minutes after liftoff. Starship didn't reliably reach orbit until later test flights.",
    status: "missed",
    lateness: "~1–2 years",
    source: "Starship update, Feb 2022",
  },
  {
    title: "dearMoon: tourists around the Moon by 2023",
    category: "SpaceX & Mars",
    company: "SpaceX",
    quote:
      "Only the people who fly with me will be able to see the Moon up close and the Earth from far away.",
    datePredicted: "2018",
    targetDate: "2023",
    outcome:
      "The dearMoon project was officially cancelled in 2024. Starship simply wasn't ready for a crewed lunar flyby.",
    status: "missed",
    lateness: "Cancelled",
    source: "dearMoon announcement / Yusaku Maezawa",
  },
  {
    title: "Two private citizens around the Moon in 2018",
    category: "SpaceX & Mars",
    company: "SpaceX",
    quote:
      "We are planning to send two private citizens on a trip around the Moon late next year.",
    datePredicted: "Feb 2017",
    targetDate: "2018",
    outcome:
      "The mission never flew in 2018 — or ever. It quietly morphed into the dearMoon project, which was itself later cancelled.",
    status: "missed",
    lateness: "Never flew",
    source: "SpaceX press release, 2017",
  },

  // ---------------- HYPERLOOP & BORING ----------------
  {
    title: "Hyperloop: LA to SF in 30 minutes",
    category: "Hyperloop & Boring",
    company: "Hyperloop",
    quote:
      "A cross between a Concorde, a railgun and an air hockey table… 700+ mph passenger pods.",
    datePredicted: "Aug 2013",
    targetDate: "Mid-2020s",
    outcome:
      "No commercial Hyperloop was ever built. Hyperloop One shut down in 2023, and Musk's test tunnel was famously dismantled into a SpaceX parking lot.",
    status: "missed",
    lateness: "Dead",
    source: "'Hyperloop Alpha' white paper, 2013",
  },
  {
    title: "Boston to New York in under 30 minutes",
    category: "Hyperloop & Boring",
    company: "Hyperloop",
    quote: "Hyperloop could go from Boston to New York City in less than half an hour.",
    datePredicted: "2022",
    targetDate: "TBD",
    outcome:
      "Never happened. Hyperloop development had effectively stalled by the time this claim was made.",
    status: "missed",
    lateness: "Never delivered",
    source: "X post, 2022",
  },
  {
    title: "Boring tunnels will 'solve traffic'",
    category: "Hyperloop & Boring",
    company: "The Boring Company",
    quote:
      "Finally, finally, finally, there is something that I think can solve the goddamn traffic problem.",
    datePredicted: "2017",
    targetDate: "Rolling out 2020s",
    outcome:
      "Only a single 1.7-mile Las Vegas Loop exists — chauffeur-driven Model Ys that crawl at ~15 mph when congested. City projects elsewhere were quietly dropped.",
    status: "missed",
    lateness: "Effectively abandoned",
    source: "Boring Company pitch, 2017",
  },
  {
    title: "Skates at 150 mph, a mile of tunnel per week",
    category: "Hyperloop & Boring",
    company: "The Boring Company",
    quote:
      "The car gets on a skate… we're designing this to operate at 200 km/h. One mile of tunnel per week.",
    datePredicted: "Apr 2017",
    targetDate: "2018+",
    outcome:
      "No autonomous skates, no 150 mph pods, no weekly-mile tunneling cadence. The Vegas Loop is a small, slow underground road.",
    status: "missed",
    lateness: "Never delivered",
    source: "TED 2017",
  },

  // ---------------- NEURALINK ----------------
  {
    title: "Neuralink product on the market in ~4 years",
    category: "Neuralink",
    company: "Neuralink",
    quote: "We'll have something that's ready to be useful to a patient in about four years.",
    datePredicted: "2017",
    targetDate: "~2021",
    outcome:
      "No commercial product in 2021. The first human implant didn't happen until January 2024 — and it's still in early trials.",
    status: "missed",
    lateness: "~7 years",
    source: "Wait But Why / Wall Street Journal",
  },
  {
    title: "Human clinical trials by 2020",
    category: "Neuralink",
    company: "Neuralink",
    quote: "Human trials will begin by the end of next year.",
    datePredicted: "2019",
    targetDate: "2020",
    outcome:
      "The first human patient (Noland Arbaugh) wasn't implanted until January 2024 — roughly four years behind schedule.",
    status: "missed",
    lateness: "~4 years",
    source: "Neuralink presentation, 2019",
  },
  {
    title: "Brain chips to cure paralysis & give telepathy",
    category: "Neuralink",
    company: "Neuralink",
    quote:
      "A Fitbit in your skull with tiny wires… it can solve spinal injuries, give telepathy and superhuman vision.",
    datePredicted: "2020",
    targetDate: "Near future",
    outcome:
      "Years later the chip only cursor-controls a screen for a handful of trial patients. Curing paralysis and granting telepathy remains science fiction.",
    status: "missed",
    lateness: "Indefinite",
    source: "Neuralink demo, 2020",
  },

  // ---------------- xAI / GROK / AGI ----------------
  {
    title: "Grok will 'understand the universe'",
    category: "xAI & AGI",
    company: "xAI",
    quote: "xAI will build artificial intelligence to understand the true nature of the universe.",
    datePredicted: "2023",
    targetDate: "Ongoing",
    outcome:
      "Grok launched, but it's a chatbot prone to hallucinations — far from any 'understanding of the universe.' Reviewers flagged inaccuracy and off-target outputs.",
    status: "missed",
    lateness: "Ongoing",
    source: "xAI founding statement, 2023",
  },
  {
    title: "xAI will reach AGI in 2025",
    category: "xAI & AGI",
    company: "xAI",
    quote: "I think we'll achieve AGI by 2025.",
    datePredicted: "2024",
    targetDate: "2025",
    outcome:
      "No credible AGI claim came from any lab in 2025. The goalpost was promptly nudged toward 2026.",
    status: "missed",
    lateness: "Goalposts moved",
    source: "X posts / interviews, 2024",
  },
  {
    title: "Grok 5: '10% chance' it's the first AGI",
    category: "xAI & AGI",
    company: "xAI",
    quote: "Grok 5 has roughly a 10% chance of becoming the world's first AGI.",
    datePredicted: "Oct 2025",
    targetDate: "Q1 2026",
    outcome:
      "Grok 5 slipped past its Q1 2026 target. The probabilistic '10%' framing made the claim conveniently unfalsifiable.",
    status: "revised",
    lateness: "Delayed",
    source: "Baron Investment Conference, Nov 2025",
  },

  // ---------------- OPTIMUS ----------------
  {
    title: "Optimus doing 'boring tasks' by 2022–2023",
    category: "Optimus",
    company: "Tesla",
    quote: "Within the next few years we'll make a useful humanoid robot to do boring, repetitive and dangerous tasks.",
    datePredicted: "2021",
    targetDate: "2022–2023",
    outcome:
      "No working Optimus was deployed in 2022 or 2023. Early demos were humans in suits or teleoperated prototypes.",
    status: "missed",
    lateness: "3+ years",
    source: "Tesla AI Day, 2021",
  },
  {
    title: "Thousands of Optimus robots by fall 2025",
    category: "Optimus",
    company: "Tesla",
    quote: "Thousands of Optimus robots working in Tesla factories by the end of this year… 1 million/year by 2029–2030.",
    datePredicted: "Apr 2025",
    targetDate: "Fall 2025",
    outcome:
      "Not achieved at any scale. Musk later conceded production would be 'agonizingly slow.'",
    status: "missed",
    lateness: "Missed on schedule",
    source: "Tesla Q1 2025 call",
  },

  // ---------------- X / TWITTER ----------------
  {
    title: "Defeating the bots on X",
    category: "X / Twitter",
    company: "X (Twitter)",
    quote: "If our Twitter bid succeeds, we will defeat the spam bots or die trying!",
    datePredicted: "Apr 2022",
    targetDate: "2022–2023",
    outcome:
      "Years after the $44B takeover, X is still overrun with crypto spam, porn bots and AI-generated replies. Studies show bot volume barely changed.",
    status: "missed",
    lateness: "3+ years",
    source: "X post, 2022",
  },
  {
    title: "X Money payments launch in 2023",
    category: "X / Twitter",
    company: "X (Twitter)",
    quote: "X will offer the entire payments ecosystem… by mid-2023.",
    datePredicted: "2023",
    targetDate: "2023",
    outcome:
      "Missed 2023, missed the 2024 internal goal, and missed the end-of-2025 CES target too. 'X Money' kept slipping.",
    status: "missed",
    lateness: "3+ years",
    source: "Linda Yaccarino / X announcements",
  },
  {
    title: "'The most accurate source of information'",
    category: "X / Twitter",
    company: "X (Twitter)",
    quote: "X will be the most accurate source of information about the world.",
    datePredicted: "2022–2023",
    targetDate: "Ongoing",
    outcome:
      "The platform's reputation for accuracy instead declined, relying heavily on volunteer Community Notes to correct viral falsehoods.",
    status: "missed",
    lateness: "Ongoing",
    source: "Musk statements, 2022–2023",
  },

  // ---------------- DOGE / POLITICS ----------------
  {
    title: "Cut $2 trillion from the federal budget",
    category: "DOGE",
    company: "Department of Government Efficiency",
    quote: "I can balance the budget… we'll cut $2 trillion from the federal budget.",
    datePredicted: "Late 2024",
    targetDate: "2025",
    outcome:
      "The $2T figure was quietly revised to $1T, then to 'hundreds of billions.' Federal spending actually rose to ~$7.6T in 2025 — about $248B higher than 2024.",
    status: "missed",
    lateness: "Goalposts moved",
    source: "Campaign rallies / DOGE, 2024",
  },
  {
    title: "'Waste, fraud and abuse' slashed",
    category: "DOGE",
    company: "Department of Government Efficiency",
    quote: "We're going to find tremendous waste, fraud and abuse and eliminate it.",
    datePredicted: "2025",
    targetDate: "2025",
    outcome:
      "NYT and CATO Institute analyses found spending rose year-over-year, and many 'cancelled' contracts quietly remained active.",
    status: "missed",
    lateness: "Missed on schedule",
    source: "DOGE statements / NYT & CATO, 2025",
  },

  // ---------------- WILD & BIZARRE ----------------
  {
    title: "'Funding secured' to take Tesla private at $420",
    category: "Wild & Bizarre",
    company: "Tesla",
    quote: "Am considering taking Tesla private at $420. Funding secured.",
    datePredicted: "Aug 2018",
    targetDate: "2018",
    outcome:
      "No funding was secured. The SEC charged Musk with fraud, he settled for $40M and a $20M personal fine, and stepped down as Tesla chairman.",
    status: "missed",
    lateness: "Never true",
    source: "SEC complaint / X post, 2018",
  },
  {
    title: "AI will be 'seriously dangerous' within 5 years",
    category: "Wild & Bizarre",
    company: "OpenAI / xAI",
    quote: "The risk of something seriously dangerous happening is in the five-year timeframe.",
    datePredicted: "2014",
    targetDate: "By 2019",
    outcome:
      "No AI catastrophe arrived by 2019 — or in the years since. Musk went on to start his own AI company instead.",
    status: "missed",
    lateness: "12+ years (so far)",
    source: "MIT symposium / interviews, 2014",
  },
  {
    title: "Nuke Mars to make it habitable",
    category: "Wild & Bizarre",
    company: "SpaceX",
    quote: "The fast way is to drop thermonuclear weapons over the poles [of Mars].",
    datePredicted: "2015",
    targetDate: "TBD",
    outcome:
      "Mars was never nuked and remains uninhabitable. Physicists largely dismissed the terraforming math as fantasy.",
    status: "missed",
    lateness: "Never attempted",
    source: "The Late Show with Stephen Colbert, 2015",
  },
  {
    title: "Starting a candy company to beat Warren Buffett",
    category: "Wild & Bizarre",
    company: "—",
    quote: "I'm starting a candy company, and it's going to be amazing.",
    datePredicted: "May 2018",
    targetDate: "TBD",
    outcome:
      "No candy company ever materialized. He later clarified he was 'mostly joking' — a frequent fallback when a prediction stalls.",
    status: "missed",
    lateness: "Never happened",
    source: "X post, 2018",
  },
  {
    title: "Population collapse is the biggest threat",
    category: "Wild & Bizarre",
    company: "—",
    quote: "Population collapse due to low birth rates is the biggest danger civilization faces.",
    datePredicted: "2022",
    targetDate: "Near future",
    outcome:
      "Global population kept growing past 8 billion. Demographers broadly rejected the collapse framing, calling it a significant overstatement.",
    status: "missed",
    lateness: "Disputed",
    source: "X posts / interviews, 2022",
  },
  {
    title: "Cybertruck windows are 'bulletproof'",
    category: "Wild & Bizarre",
    company: "Tesla",
    quote: "We made the glass shatterproof… the windows are bulletproof.",
    datePredicted: "Nov 2019",
    targetDate: "2019",
    outcome:
      "Both 'Armor Glass' windows famously shattered live on stage during the unveil — twice — and production windows weren't bulletproof either.",
    status: "missed",
    lateness: "Broke on stage",
    source: "Cybertruck unveil, 2019",
  },

  // ---------------- ADDITIONAL EARLY & HARDWARE MISSES ----------------
  {
    title: "First Falcon 1 launch in November 2003",
    category: "SpaceX & Mars",
    company: "SpaceX",
    quote:
      "The Falcon 1 will carry 1,400 lb to orbit for about $7 million, with a first launch in November 2003.",
    datePredicted: "2002",
    targetDate: "Nov 2003",
    outcome:
      "The first launch attempt didn't happen until March 2006 — roughly 2.5 years late — and it failed. The first three Falcon 1 flights all failed before the fourth finally reached orbit in 2008.",
    status: "missed",
    lateness: "~3 years late + 3 failures",
    source: "SpaceX founding, 2002",
  },
  {
    title: "Mars 'greenhouse' mission with mice & plants",
    category: "SpaceX & Mars",
    company: "SpaceX",
    quote:
      "Send a small greenhouse of plants — and mice — to Mars to rekindle public excitement for space.",
    datePredicted: "2001",
    targetDate: "Mid-2000s",
    outcome:
      "The 'Mars Oasis' greenhouse never flew. It eventually morphed into the founding of SpaceX, but no mice or plants reached Mars.",
    status: "missed",
    lateness: "Never flew",
    source: "Mars Society / founding era, 2001",
  },
  {
    title: "A trip to Mars by the end of the decade",
    category: "SpaceX & Mars",
    company: "SpaceX",
    quote: "Hints of a trip to Mars by the end of the decade.",
    datePredicted: "2002",
    targetDate: "By 2010",
    outcome:
      "No Mars mission of any kind by 2010 — or in the decade after, or the one after that.",
    status: "missed",
    lateness: "16+ years & counting",
    source: "SpaceX founding era, 2002",
  },
  {
    title: "Falcon Heavy demo flight in 2013",
    category: "SpaceX & Mars",
    company: "SpaceX",
    quote: "Falcon Heavy will perform its first demonstration flight in 2013.",
    datePredicted: "2011",
    targetDate: "2013",
    outcome:
      "Falcon Heavy didn't launch until February 6, 2018 — about five years late — famously carrying a Tesla Roadster into space.",
    status: "missed",
    lateness: "~5 years",
    source: "SpaceX announcements, 2011",
  },
  {
    title: "Crew Dragon flying astronauts in 2017",
    category: "SpaceX & Mars",
    company: "SpaceX",
    quote: "SpaceX will fly NASA astronauts to the Space Station in 2017.",
    datePredicted: "2014",
    targetDate: "2017",
    outcome:
      "The first crewed Dragon flight (Demo-2) didn't launch until May 30, 2020 — roughly three years behind schedule.",
    status: "missed",
    lateness: "~3 years",
    source: "NASA CCtCap / SpaceX, 2014",
  },
  {
    title: "Earth-to-Earth rocket travel: anywhere in under an hour",
    category: "SpaceX & Mars",
    company: "SpaceX",
    quote:
      "Using Starship, most long-distance trips on Earth could be completed in under an hour.",
    datePredicted: "2017 (IAC)",
    targetDate: "2020s",
    outcome:
      "No point-to-point Earth rocket transport has ever carried a passenger. It remains a slick animated concept.",
    status: "missed",
    lateness: "Never delivered",
    source: "IAC 2017 presentation",
  },
  {
    title: "Starlink IPO",
    category: "SpaceX & Mars",
    company: "SpaceX",
    quote:
      "We'll take Starlink public via an IPO once its revenue growth and cash flow are reasonably predictable.",
    datePredicted: "2020–2021",
    targetDate: "Once predictable",
    outcome:
      "The Starlink IPO was repeatedly deferred and still hasn't happened years later.",
    status: "revised",
    lateness: "Kept getting pushed",
    source: "Musk posts, 2020–2021",
  },
  {
    title: "Model X deliveries beginning in 2014",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote: "The Model X will begin customer deliveries in 2014.",
    datePredicted: "2012–2013",
    targetDate: "2014",
    outcome:
      "Deliveries only began in late 2015 — more than 18 months late — bogged down by the complex 'falcon-wing' doors and build-quality issues.",
    status: "missed",
    lateness: "18+ months",
    source: "Tesla, 2012–2013",
  },
  {
    title: "A real $35,000 Model 3",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote: "The Model 3 will start at $35,000 before incentives.",
    datePredicted: "Mar 2016",
    targetDate: "2017",
    outcome:
      "The $35,000 Standard version was briefly sold in 2019 then effectively pulled; the cheapest Model 3 ran far higher. Hundreds of thousands had paid $1,000 deposits expecting the base price.",
    status: "missed",
    lateness: "Briefly existed, then pulled",
    source: "Model 3 unveil, 2016",
  },
  {
    title: "5,000 Model 3s per week by end of 2017",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote:
      "Tesla will be producing 5,000 Model 3s per week by the end of 2017.",
    datePredicted: "2017",
    targetDate: "End of 2017",
    outcome:
      "That 5,000-per-week rate wasn't reached until mid-2018, during what Musk himself called 'production hell.'",
    status: "missed",
    lateness: "~6 months",
    source: "Tesla, 2017",
  },
  {
    title: "Teslas as 'appreciating assets'",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote:
      "I think there's a good chance that a Tesla will be an appreciating asset.",
    datePredicted: "2019",
    targetDate: "Ongoing",
    outcome:
      "Teslas have only depreciated — often steeply. Frequent price cuts cratered resale values across the lineup.",
    status: "missed",
    lateness: "Wrong direction",
    source: "Tesla investor call, 2019",
  },
  {
    title: "Cybertruck: 500-mile range & 14,000-lb towing",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote:
      "A 500-mile range version, 14,000-pound towing, and a $39,900 base price for the Cybertruck.",
    datePredicted: "Nov 2019",
    targetDate: "2021",
    outcome:
      "The 500-mile range variant was cancelled, towing and specs fell short of claims, and the base price leapt toward $80,000+.",
    status: "missed",
    lateness: "Downgraded specs",
    source: "Cybertruck unveil, 2019",
  },
  {
    title: "Model S 'Plaid+' with 520-mile range",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote: "A Model S Plaid+ with over 520 miles of range is coming.",
    datePredicted: "2021",
    targetDate: "2022",
    outcome:
      "Musk abruptly cancelled the Plaid+ in 2021, calling it unnecessary. The 520-mile version never shipped.",
    status: "missed",
    lateness: "Cancelled",
    source: "Tesla / X post, 2021",
  },
  {
    title: "90-second battery swap stations",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote:
      "We demonstrated swapping a battery in about 90 seconds and will build a network of swap stations.",
    datePredicted: "Jun 2013",
    targetDate: "2014+",
    outcome:
      "The program was quietly abandoned. Only a single demonstration station briefly existed before Supercharging won out.",
    status: "missed",
    lateness: "Abandoned",
    source: "Tesla event, 2013",
  },
  {
    title: "A fully solar-powered Supercharger network",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote:
      "All Superchargers will be covered with solar panels and battery so they can operate off-grid.",
    datePredicted: "2012–2017",
    targetDate: "Rolling out",
    outcome:
      "The vast majority of Superchargers remain grid-tied. Solar canopies only ever appeared on a small number of stations.",
    status: "missed",
    lateness: "Mostly unrealized",
    source: "Tesla, 2012–2017",
  },
  {
    title: "Tesla won't need to raise capital again",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote: "Tesla will not need to raise capital; it will be self-funding.",
    datePredicted: "2018–2020",
    targetDate: "Ongoing",
    outcome:
      "Tesla repeatedly raised billions afterward through stock and debt offerings, contradicting the self-funding claim.",
    status: "missed",
    lateness: "Raised billions",
    source: "Tesla earnings calls, 2018–2020",
  },
  {
    title: "20–30% vehicle volume growth in 2025",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote: "We expect to see 20 to 30 percent volume growth in 2025.",
    datePredicted: "Jan 2025",
    targetDate: "2025",
    outcome:
      "Tesla's 2025 deliveries fell year-over-year instead — its first annual sales decline — the opposite of the growth guidance.",
    status: "missed",
    lateness: "Sales declined",
    source: "Tesla Q4 2024 call",
  },
  {
    title: "Robotaxi rides 'cheaper than a subsidized bus'",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "A robotaxi ride will cost less than a subsidized bus ticket — under $0.20 per mile.",
    datePredicted: "2019 / 2024",
    targetDate: "2020s",
    outcome:
      "The Austin robotaxi charged a flat $4.20 promo fare in a tiny geofenced zone — more marketing stunt than bus-beating mass transit.",
    status: "missed",
    lateness: "Not at scale",
    source: "Tesla Autonomy Day / 'We, Robot'",
  },
  {
    title: "'Tens of billions' of Optimus robots",
    category: "Optimus",
    company: "Tesla",
    quote:
      "There will be tens of billions of humanoid robots… everyone will have their own C-3PO or R2-D2, but better.",
    datePredicted: "2025",
    targetDate: "2030s",
    outcome:
      "Optimus is still in early, largely-teleoperated demos with no meaningful production. The 'tens of billions' figure remains pure projection.",
    status: "pending",
    lateness: "Pure projection",
    source: "Tesla earnings call / interview, 2025",
  },
  {
    title: "X (Twitter) will become cash-flow positive",
    category: "X / Twitter",
    company: "X (Twitter)",
    quote: "X will become cash-flow positive and break even.",
    datePredicted: "2022–2023",
    targetDate: "2023–2024",
    outcome:
      "After the $44B debt-laden takeover and an advertiser exodus, X's ad revenue collapsed and the platform stayed financially strained.",
    status: "missed",
    lateness: "Revenue collapsed",
    source: "Musk posts, 2022–2023",
  },
  {
    title: "Tesla will match Apple's market cap within a decade",
    category: "Wild & Bizarre",
    company: "Tesla",
    quote:
      "At a 50% growth rate for ten years… our market cap would be the same as Apple's is today.",
    datePredicted: "2015",
    targetDate: "By ~2025",
    outcome:
      "Tesla peaked near $1.2T in 2021 but never approached Apple's ~$3T+ valuation, and its share price later tumbled sharply.",
    status: "missed",
    lateness: "Never close",
    source: "Interview, 2015",
  },

  // ---------------- MORE FSD GRANULAR MISSES ----------------
  {
    title: "'Feature complete' FSD by end of 2019 — 'I am certain'",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "The car will be able to find you in a parking lot, pick you up and take you all the way to your destination without an intervention, this year. I am certain of that. That is not a question mark.",
    datePredicted: "Feb 2019",
    targetDate: "End of 2019",
    outcome:
      "It did not happen in 2019. Tesla was nowhere near hands-off, door-to-door autonomy — and still isn't.",
    status: "missed",
    lateness: "7+ years",
    source: "Innovations podcast / Tesla, 2019",
  },
  {
    title: "Level 5 autonomy by end of 2020",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "I remain confident that we will have the basic functionality for level five autonomy complete this year.",
    datePredicted: "Jul 2020",
    targetDate: "End of 2020",
    outcome:
      "No Level 5 functionality was remotely 'complete' by 2020. FSD stayed at SAE Level 2 supervision.",
    status: "missed",
    lateness: "6+ years",
    source: "World AI Conference (Shanghai), 2020",
  },
  {
    title: "FSD better than humans by end of 2023",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "I think we'll achieve full self-driving… later this year. We'll be better than human by the end of this year. I've been wrong in the past, I may be wrong this time.",
    datePredicted: "Jul 2023",
    targetDate: "End of 2023",
    outcome:
      "FSD did not surpass human safety by 2023. The rare candour ('I've been wrong') was the most accurate part of the claim.",
    status: "missed",
    lateness: "3+ years",
    source: "Podcasts / earnings, 2023",
  },
  {
    title: "Hardware 3 'will never need a retrofit'",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "The Hardware 3 computer is more than capable of full self-driving. We won't need to upgrade it.",
    datePredicted: "2019",
    targetDate: "Ongoing",
    outcome:
      "In January 2025 Musk admitted HW3 — sold to millions of customers who paid for FSD — can't actually deliver unsupervised driving. A promised free upgrade never materialized cleanly.",
    status: "missed",
    lateness: "6 years, then admitted",
    source: "Tesla / court testimony, 2019–2025",
  },
  {
    title: "Coast-to-coast drive in '3 months, 6 months at the outside'",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "Timing-wise, I think we could probably do a coast-to-coast drive in three months, six months at the outside.",
    datePredicted: "Feb 2018",
    targetDate: "By late 2018",
    outcome:
      "It took until the very last day of 2025 for a single owner to complete a zero-intervention coast-to-coast FSD drive — roughly eight years, not six months.",
    status: "missed",
    lateness: "~8 years",
    source: "Tesla earnings call, Feb 2018",
  },
  {
    title: "Teslas will self-deliver to customers' doors 'in about a year'",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "Probably [we'll] technically be able to [self-deliver Teslas to customers' doors] in about a year.",
    datePredicted: "Nov 2018",
    targetDate: "By 2019",
    outcome:
      "Cars did not autonomously deliver themselves in 2019. The first factory-to-home autonomous delivery only happened in mid-2025 — and remained a limited demo.",
    status: "missed",
    lateness: "~7 years",
    source: "X post, Nov 2018",
  },
  {
    title: "Robotaxi in 8–10 metro areas, ~1,500 cars by end of 2025",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "Probably eight to ten metro areas by the end of the year… a thousand cars or more in the Bay Area, 500 or more in Greater Austin.",
    datePredicted: "Oct 2025",
    targetDate: "End of 2025",
    outcome:
      "Crowdsourced tracking showed only ~35 cars in Austin and ~130 in the Bay Area, and the service never reached 8–10 metro areas.",
    status: "missed",
    lateness: "Missed on schedule",
    source: "All-In Podcast, Oct 2025",
  },
  {
    title: "'Unsupervised is pretty much solved' — no driver in ~3 weeks",
    category: "Self-Driving",
    company: "Tesla",
    quote:
      "Unsupervised is pretty much solved at this point. There will be Tesla robotaxis operating in Austin with no one in them in about three weeks.",
    datePredicted: "Dec 2025",
    targetDate: "End of 2025",
    outcome:
      "Three weeks passed and regular customers still reported human safety monitors in the cars. Only a handful of driverless test runs were ever shown.",
    status: "missed",
    lateness: "Missed on schedule",
    source: "xAI hackathon, Dec 2025",
  },

  // ---------------- MORE BORING / TUNNELS ----------------
  {
    title: "Boring Company: Chicago O'Hare express tunnel",
    category: "Hyperloop & Boring",
    company: "The Boring Company",
    quote:
      "An 18-mile tunnel from downtown Chicago to O'Hare, delivering passengers in about 12 minutes.",
    datePredicted: "Jun 2018",
    targetDate: "2021",
    outcome:
      "The project was announced with fanfare alongside the mayor of Chicago, then quietly cancelled. Not a single foot of tunnel was dug.",
    status: "missed",
    lateness: "Cancelled",
    source: "Boring Company / City of Chicago, 2018",
  },
  {
    title: "A D.C.-to-Baltimore Loop and East Coast tunnels",
    category: "Hyperloop & Boring",
    company: "The Boring Company",
    quote:
      "We're proposing a Loop connecting Washington, D.C. and Baltimore, with expansion across the East Coast.",
    datePredicted: "2018–2019",
    targetDate: "2020s",
    outcome:
      "Multiple Boring Company city projects — D.C., Baltimore, Chicago, LA — were abandoned. Only the short Las Vegas Loop was ever built.",
    status: "missed",
    lateness: "Abandoned",
    source: "Boring Company proposals, 2018–2019",
  },

  // ---------------- MORE X / TWITTER ----------------
  {
    title: "Twitter deal 'temporarily on hold' over bot counts",
    category: "X / Twitter",
    company: "X (Twitter)",
    quote:
      "Twitter deal temporarily on hold pending details supporting calculation that spam/fake accounts do indeed represent less than 5% of users.",
    datePredicted: "May 2022",
    targetDate: "2022",
    outcome:
      "The 'hold' was widely seen as a renegotiation ploy. He was later forced to complete the $44B purchase at the original price after Twitter sued.",
    status: "missed",
    lateness: "Bluff called",
    source: "X post, May 2022",
  },
  {
    title: "Twitter is '20% bots' and he'd fix it",
    category: "X / Twitter",
    company: "X (Twitter)",
    quote:
      "If our Twitter bid succeeds, we will defeat the spam bots or die trying!",
    datePredicted: "Apr 2022",
    targetDate: "2022–2023",
    outcome:
      "After taking over, Musk himself claimed the platform was ~80% bots — far higher than before — and spam, crypto scams and AI replies remained rampant.",
    status: "missed",
    lateness: "Got worse",
    source: "X posts, 2022",
  },

  // ---------------- MORE HARDWARE / COMPANY ----------------
  {
    title: "Flying Roadster demo 'before the end of 2025'",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote:
      "We're getting close to demonstrating the prototype… one thing I can guarantee is that this product demo will be unforgettable. Hopefully before the end of the year.",
    datePredicted: "Nov 2025",
    targetDate: "End of 2025",
    outcome:
      "2025 ended with no Roadster demo and no flying car. Musk had even hinted the Roadster could hover with SpaceX thrusters — neither arrived.",
    status: "missed",
    lateness: "Missed on schedule",
    source: "Joe Rogan Experience, Nov 2025",
  },
  {
    title: "SolarCity synergies: a $1B+ solar energy powerhouse",
    category: "Tesla Vehicles",
    company: "Tesla",
    quote:
      "Acquiring SolarCity will create the world's only vertically integrated sustainable energy company, with massive cost synergies.",
    datePredicted: "2016",
    targetDate: "Near term",
    outcome:
      "The $2.6B acquisition of the debt-laden SolarCity drew shareholder lawsuits over conflicts of interest, and the promised solar synergies largely failed to materialize at scale.",
    status: "missed",
    lateness: "Synergies unmet",
    source: "Tesla / SolarCity merger, 2016",
  },
];
