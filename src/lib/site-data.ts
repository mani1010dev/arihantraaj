export const NAV_LINKS = [
  { label: "Home", to: "/", hash: "" },
  { label: "About", to: "/", hash: "#about" },
  { label: "Services", to: "/", hash: "#services" },
  { label: "Vastu", to: "/", hash: "#vastu" },
  { label: "Astrology", to: "/", hash: "#astrology" },
  { label: "Numerology", to: "/", hash: "#numerology" },
  { label: "Blog", to: "/blog", hash: "" },
  { label: "Testimonials", to: "/", hash: "#testimonials" },
  { label: "Contact", to: "/", hash: "#contact" },
] as const;

export const DIRECTIONS = [
  { key: "N", name: "North", deity: "Kubera", element: "Water", significance: "Wealth, career growth and new opportunities.", remedy: "Keep the north open, clean and clutter free. Place a water feature or aquarium." },
  { key: "NE", name: "North-East", deity: "Ishanya", element: "Water + Air", significance: "Spiritual energy, clarity of thought and intuition.", remedy: "Ideal zone for the pooja room. Keep it light, open and uncluttered." },
  { key: "E", name: "East", deity: "Indra", element: "Air", significance: "Health, social connections and fresh beginnings.", remedy: "Use large windows. Morning sunlight must enter freely." },
  { key: "SE", name: "South-East", deity: "Agni", element: "Fire", significance: "Fire, energy and prosperity through enterprise.", remedy: "Ideal zone for the kitchen and electrical equipment." },
  { key: "S", name: "South", deity: "Yama", element: "Fire", significance: "Fame, recognition and stability.", remedy: "Keep south walls heavy. Avoid water elements here." },
  { key: "SW", name: "South-West", deity: "Nairutya", element: "Earth", significance: "Stability, relationships and ancestral support.", remedy: "Master bedroom and heavy storage belong here." },
  { key: "W", name: "West", deity: "Varuna", element: "Water", significance: "Gains, profits and creative expression.", remedy: "Suitable for children's room, dining or study." },
  { key: "NW", name: "North-West", deity: "Vayu", element: "Air", significance: "Support, networking and quick decisions.", remedy: "Good for guest rooms, garage or marriageable daughter's room." },
] as const;

export const ZODIAC = [
  { name: "Aries", symbol: "♈", element: "Fire", dates: "Mar 21 – Apr 19", trait: "Bold, ambitious, pioneering." },
  { name: "Taurus", symbol: "♉", element: "Earth", dates: "Apr 20 – May 20", trait: "Grounded, devoted, sensual." },
  { name: "Gemini", symbol: "♊", element: "Air", dates: "May 21 – Jun 20", trait: "Curious, expressive, adaptive." },
  { name: "Cancer", symbol: "♋", element: "Water", dates: "Jun 21 – Jul 22", trait: "Intuitive, nurturing, protective." },
  { name: "Leo", symbol: "♌", element: "Fire", dates: "Jul 23 – Aug 22", trait: "Regal, magnetic, generous." },
  { name: "Virgo", symbol: "♍", element: "Earth", dates: "Aug 23 – Sep 22", trait: "Analytical, refined, devoted." },
  { name: "Libra", symbol: "♎", element: "Air", dates: "Sep 23 – Oct 22", trait: "Balanced, gracious, diplomatic." },
  { name: "Scorpio", symbol: "♏", element: "Water", dates: "Oct 23 – Nov 21", trait: "Intense, transformative, loyal." },
  { name: "Sagittarius", symbol: "♐", element: "Fire", dates: "Nov 22 – Dec 21", trait: "Visionary, adventurous, philosophical." },
  { name: "Capricorn", symbol: "♑", element: "Earth", dates: "Dec 22 – Jan 19", trait: "Disciplined, strategic, enduring." },
  { name: "Aquarius", symbol: "♒", element: "Air", dates: "Jan 20 – Feb 18", trait: "Inventive, humanitarian, independent." },
  { name: "Pisces", symbol: "♓", element: "Water", dates: "Feb 19 – Mar 20", trait: "Compassionate, artistic, intuitive." },
] as const;

export const SERVICES = [
  {
    title: "Scientific Vastu",
    desc: "Architectural energy alignment for homes, offices and industries — backed by measurable analysis.",
    items: ["Residential Vastu", "Commercial Vastu", "Industrial Vastu", "Plot Analysis"],
    icon: "compass",
  },
  {
    title: "Astrology",
    desc: "Decode your birth chart to navigate career, relationships and business decisions with confidence.",
    items: ["Birth Chart Analysis", "Career Guidance", "Marriage Compatibility", "Business Astrology"],
    icon: "stars",
  },
  {
    title: "Numerology",
    desc: "Align your name, brand and numbers with the vibrations that attract success and prosperity.",
    items: ["Name Correction", "Mobile Number Analysis", "Business Name Analysis", "Lucky Number Guidance"],
    icon: "calculator",
  },
] as const;

export const TESTIMONIALS = [
  { name: "Rajeev Mehta", role: "Founder, Mehta Industries", rating: 5, text: "After the Vastu audit of our factory, production stabilised and team friction dropped noticeably within a quarter. The recommendations were practical, never disruptive." },
  { name: "Anushka Sharma", role: "Brand Designer", rating: 5, text: "The name correction Arihant ji suggested completely changed how clients respond to my studio. The reasoning was scientific, the result was magical." },
  { name: "Dr. Vikram Iyer", role: "Cardiologist", rating: 5, text: "I have consulted many astrologers. Arihant Raaj stands apart for the clarity, depth and honesty of his readings. No fear, only direction." },
  { name: "Neha Kapoor", role: "Entrepreneur, Mumbai", rating: 5, text: "Our new office was Vastu-aligned from blueprint stage. Within six months we closed our largest contract ever. Highly recommended." },
  { name: "Aditya Joshi", role: "CEO, Joshi Realty", rating: 5, text: "Sharp, structured and refreshingly modern. Felt like consulting a strategist who also understood the unseen." },
];

export const POSTS = [
  { slug: "vastu-for-modern-apartments", title: "Vastu for Modern Apartments: A Practical Guide", category: "Vastu Tips", excerpt: "How to honour ancient Vastu principles when you live in a compact, contemporary home.", date: "Apr 12, 2025" },
  { slug: "saturn-return-explained", title: "Your Saturn Return, Explained Without Fear", category: "Astrology Insights", excerpt: "The most misunderstood transit of your life — and how to use it as a launchpad.", date: "Mar 28, 2025" },
  { slug: "business-name-numerology", title: "The Numerology of a Powerful Business Name", category: "Numerology Guides", excerpt: "Why some brand names magnetise success while others struggle quietly.", date: "Mar 11, 2025" },
  { slug: "factory-vastu-case-study", title: "Case Study: A Factory's Turnaround in 90 Days", category: "Success Stories", excerpt: "Inside a Vastu intervention that lifted productivity and reduced attrition.", date: "Feb 22, 2025" },
  { slug: "lucky-mobile-number", title: "Choosing a Lucky Mobile Number That Actually Helps", category: "Numerology Guides", excerpt: "A scientific framework to evaluate your phone number's vibration.", date: "Feb 09, 2025" },
  { slug: "vastu-kitchen-rules", title: "The Five Vastu Rules Every Kitchen Should Follow", category: "Vastu Tips", excerpt: "Small placements that change the energy of your home's most active room.", date: "Jan 30, 2025" },
];