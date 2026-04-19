import { createElement } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Award, Heart, ShieldCheck, TrendingUp, Users, Zap,
} from 'lucide-react'
import AnimateInView from '@/components/AnimateInView'
import { usePageMeta } from '@/hooks/usePageMeta'

const values = [
  {
    icon: ShieldCheck,
    title: 'Reliability',
    desc: "We show up. Every shipment, every time. Our clients trust us because we've earned it through consistent, on-time delivery.",
    color: 'bg-orange-50 text-orange-500',
  },
  {
    icon: Zap,
    title: 'Speed',
    desc: 'Time matters. We optimize every route and process to ensure your goods arrive as fast as humanly possible.',
    color: 'bg-blue-50 text-blue-500',
  },
  {
    icon: Heart,
    title: 'Customer First',
    desc: 'Every decision we make starts with the question: "Is this best for our customer?" — and we mean it.',
    color: 'bg-rose-50 text-rose-500',
  },
]

const team = [
  { name: 'James Mensah', role: 'CEO & Co-Founder', initials: 'JM' },
  { name: 'Aisha Boateng', role: 'Head of Operations', initials: 'AB' },
  { name: 'Kwame Osei', role: 'Fleet Manager', initials: 'KO' },
  { name: 'Fatima Asante', role: 'Customer Experience Lead', initials: 'FA' },
]

const milestones = [
  { year: '2018', event: 'JM Logistics founded in Accra with 2 motorcycles and a dream.' },
  { year: '2019', event: 'Expanded to 3 cities, onboarded our first 20 business clients.' },
  { year: '2021', event: 'Reached 10,000 successful deliveries. Launched intercity routes.' },
  { year: '2023', event: 'Nationwide coverage across Ghana, 200+ business clients, 50K+ deliveries.' },
  { year: '2024', event: 'Launched real-time tracking and dedicated business portal.' },
]

export default function AboutPage() {
  usePageMeta(
    'About Us — JM Logistics',
    'Learn about JM Logistics — our story, mission, values, and the team behind every delivery.'
  )

  return (
    <div>
      <section className="bg-slate-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <AnimateInView variant="fade-up" delay={0}>
              <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
            </AnimateInView>
            <AnimateInView variant="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Born to Move Things Forward</h1>
            </AnimateInView>
            <AnimateInView variant="fade-up" delay={200}>
              <p className="text-slate-300 text-lg leading-relaxed">
                JM Logistics was founded with one simple mission — make logistics stress-free for everyone. What started as a two-man operation in Accra has grown into a nationwide network trusted by thousands across Ghana.
              </p>
            </AnimateInView>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateInView variant="fade-right">
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl aspect-square max-w-sm mx-auto flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-orange-500 text-white rounded-full p-6 inline-block mb-4">
                      <TrendingUp size={40} />
                    </div>
                    <p className="font-bold text-orange-700 text-lg">Growing Since 2018</p>
                    <p className="text-orange-600 text-sm mt-1">From 2 bikes to nationwide reach</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-orange-400">50K+</p>
                  <p className="text-sm text-slate-400 mt-0.5">Deliveries Completed</p>
                </div>
              </div>
            </AnimateInView>

            <AnimateInView variant="fade-left" delay={150}>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">The JM Logistics Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  It started in 2018 when James Mensah, frustrated by unreliable delivery services in Accra, decided to build something better. With two motorcycles, a phone, and relentless determination, JM Logistics was born.
                </p>
                <p>
                  Word spread fast. Within a year, businesses were calling us instead of the old players. We kept our promise simple: pick up on time, deliver on time, and treat every package like it's our own.
                </p>
                <p>
                  Today, JM Logistics operates across Ghana with a professional fleet, dedicated support teams, and technology to keep you informed every step of the way.
                </p>
              </div>
            </AnimateInView>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <AnimateInView variant="fade-right">
              <div className="bg-white rounded-3xl p-10 shadow-sm h-full">
                <div className="bg-orange-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-5">
                  <Award size={24} className="text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-500 leading-relaxed">
                  To provide fast, reliable, and affordable logistics solutions that empower individuals and businesses to thrive — making every delivery a seamless experience.
                </p>
              </div>
            </AnimateInView>
            <AnimateInView variant="fade-left" delay={150}>
              <div className="bg-slate-900 rounded-3xl p-10 text-white h-full">
                <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-5">
                  <TrendingUp size={24} className="text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-slate-300 leading-relaxed">
                  To become Ghana's most trusted logistics brand — known for integrity, innovation, and an unwavering commitment to getting it there on time.
                </p>
              </div>
            </AnimateInView>
          </div>

          <AnimateInView variant="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
            <p className="text-slate-500 mt-3">The principles that guide every delivery we make.</p>
          </AnimateInView>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimateInView key={v.title} variant="fade-up" delay={i * 120}>
                <div className="bg-white rounded-2xl p-8 shadow-sm text-center h-full">
                  <div className={`${v.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                    {createElement(v.icon, { size: 28 })}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">{v.desc}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateInView variant="fade-up" className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900">Our Journey</h2>
            <p className="text-slate-500 mt-3">Milestones that shaped who we are today.</p>
          </AnimateInView>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-100" />
            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <AnimateInView key={year} variant="fade-right" delay={i * 100} threshold={0.1}>
                  <div className="relative flex gap-8 items-start">
                    <div className="relative shrink-0">
                      <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center font-bold text-sm shadow-lg shadow-orange-500/25">
                        {year}
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-5 flex-1 mt-1">
                      <p className="text-slate-700 leading-relaxed">{event}</p>
                    </div>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateInView variant="fade-up" className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900">Meet the Team</h2>
            <p className="text-slate-500 mt-3">The people behind every on-time delivery.</p>
          </AnimateInView>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, initials }, i) => (
              <AnimateInView key={name} variant="zoom" delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {initials}
                  </div>
                  <h4 className="font-bold text-slate-900">{name}</h4>
                  <p className="text-sm text-orange-500 mt-1">{role}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimateInView variant="zoom">
            <Users size={40} className="mx-auto mb-5 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Work With a Team That Cares</h2>
            <p className="text-orange-100 mb-8">
              Join thousands of satisfied customers who trust JM Logistics every day.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-orange-500 hover:bg-orange-50 px-8 py-3.5 rounded-xl font-bold transition-colors"
            >
              Get Started Today <ArrowRight size={18} />
            </Link>
          </AnimateInView>
        </div>
      </section>
    </div>
  )
}
