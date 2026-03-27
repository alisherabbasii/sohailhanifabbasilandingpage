export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: 'Military' | 'Welfare' | 'Professional' | 'Personal';
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'lessons-from-25-years-in-pakistan-army',
    title: 'Lessons from 25 Years in the Pakistan Army',
    date: '2024-12-15',
    excerpt: 'Reflecting on a quarter century of service, discipline, and leadership in the EME Department of the Pakistan Army.',
    category: 'Military',
    content: `
## A Journey of Duty and Discipline

Twenty-five years in the Pakistan Army is not just a career — it is a way of life. When I first joined the EME (Electrical and Mechanical Engineering) Department, I was a young man from Khanspur Ayubia with big dreams and a willingness to serve my country.

### Early Days

The early days were the most formative. Military training instills in you a sense of discipline, punctuality, and precision that stays with you for life. Every morning began before dawn, and every task was carried out with absolute focus. These habits didn't just make me a better soldier — they made me a better human being.

### Specializing in Radar Systems

As I progressed through my career, I had the opportunity to specialize in radar systems — one of the most technically demanding fields in military engineering. Radar technology is the backbone of modern defense, and being entrusted with its maintenance and operation was both an honor and a responsibility.

### Training in China

One of the highlights of my career was the opportunity to receive advanced technical training in China. This international exposure taught me that excellence knows no borders. The training was rigorous, but it sharpened my skills in ways that classroom learning alone never could.

### The Tamgha-e-Khidmat

Receiving the Tamgha-e-Khidmat was a proud moment — not just for me, but for my family and my community. This medal represents years of consistent effort, sacrifice, and unwavering commitment to duty. It is a reminder that dedication is always recognized.

### Life After Service

Transitioning from military to civilian life is one of the biggest challenges any veteran faces. But the skills I gained — discipline, technical expertise, leadership, and teamwork — have proven invaluable in every aspect of my post-service life. Today, I apply these principles to business operations and community welfare with the same passion I brought to the frontlines.

### To Fellow Veterans

To my fellow veterans: our service doesn't end when we take off the uniform. The values we carry are needed in every corner of society. Continue serving, continue leading, and never forget the oath we took.

*Pakistan Zindabad.*
    `.trim()
  },
  {
    slug: 'roshan-ayubia-building-a-brighter-community',
    title: 'Roshan Ayubia: Building a Brighter Community',
    date: '2025-01-20',
    excerpt: 'How a small welfare initiative in Ayubia is making a real difference in the lives of families and young people in the region.',
    category: 'Welfare',
    content: `
## The Vision Behind Roshan Ayubia

Every community has untapped potential. The people of the Ayubia region — hardworking, resilient, and full of spirit — deserve opportunities that match their determination. That's why Roshan Ayubia was born: to be a bridge between potential and progress.

### Why Community Welfare Matters

In our rapidly changing world, it is easy for smaller communities to feel left behind. Urban centers attract resources, jobs, and attention, while rural and semi-urban areas often struggle. Roshan Ayubia was created to address this gap — to bring resources, support, and visibility to the people of Ayubia.

### What We Do

Our focus areas include:

- **Education Support**: Helping local students with resources, mentorship, and guidance.
- **Social Welfare**: Organizing community events, health awareness programs, and support for families in need.
- **Youth Empowerment**: Encouraging young people to develop skills, pursue education, and contribute to their community.
- **Infrastructure Advocacy**: Working with local authorities to improve basic amenities in the region.

### The Power of Collective Action

One person can start a movement, but it takes a community to sustain it. Roshan Ayubia's greatest strength is its people. Volunteers, donors, and well-wishers from across Pakistan and even abroad have contributed to our mission.

### Looking Forward

We have ambitious plans for the future. We want to expand our education programs, establish a community skill center, and create sustainable livelihood opportunities for the people of Ayubia. The road is long, but with faith, discipline, and community support, every goal is achievable.

### How You Can Help

Whether you are from Ayubia or anywhere in the world, you can support Roshan Ayubia through donations, volunteering, or simply sharing our mission. Every contribution, no matter how small, makes a difference.

*Together, we shine brighter.*
    `.trim()
  },
  {
    slug: 'from-radar-technician-to-business-support',
    title: 'From Radar Technician to Business Support Specialist',
    date: '2025-02-28',
    excerpt: 'How military technical skills translate into the corporate world — a veteran\'s perspective on adapting and thriving.',
    category: 'Professional',
    content: `
## Bridging Two Worlds

When people hear "Radar Technician," they often think of a role limited to military bases and defense installations. But the truth is, the skills developed in radar systems engineering — analytical thinking, precision, troubleshooting, and documentation — are highly transferable to the business world.

### Technical Discipline in Business

In the military, a small error in radar calibration could have serious consequences. This taught me to approach every task with meticulous attention to detail. In business support, this same discipline applies to stock management, data entry, and operational coordination. Every number matters. Every record must be accurate.

### Excel and Data: The Common Ground

My proficiency in MS Excel began in the Army — managing inventories, creating reports, and tracking maintenance schedules. Today, these same skills power my work in business operations. Advanced Excel skills (pivot tables, VLOOKUP, data validation) are among the most sought-after abilities in the corporate world, and my military background gave me a head start.

### Graphic Design: A Creative Outlet

One skill that surprises people is my graphic design capability. In the military, I often created visual materials for briefings and training sessions. This evolved into a genuine passion and skill that I now offer professionally. Design requires the same discipline as engineering — grid systems, alignment, precision — concepts that come naturally to a trained technician.

### Adapting to Civilian Work Culture

The transition wasn't always smooth. Military hierarchy is clear and structured; civilian workplaces can be more fluid and ambiguous. But adaptability is itself a military skill. We are trained to operate in unfamiliar environments, and that training served me well.

### Advice for Transitioning Veterans

1. **Document your skills** — Military experience translates well, but you need to express it in civilian terms.
2. **Invest in IT** — Computer literacy, Excel, and basic design are universal enablers.
3. **Network actively** — Your fellow veterans are your strongest support system.
4. **Stay disciplined** — The habits that made you successful in service will make you successful outside it.
5. **Never stop learning** — Every new skill is a new opportunity.

*The uniform may change, but the soldier never does.*
    `.trim()
  }
];
