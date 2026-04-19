
import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, CheckCircle2 } from 'lucide-react'
import AnimateInView from '@/components/AnimateInView'

export default function ContactPage() {
  const WHATSAPP = '233200000000'
  const WHATSAPP_MSG = encodeURIComponent('Hello! I would like to get a quote from JM Logistics.')

  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    )
    const mailtoLink = `mailto:info@jmlogistics.com.gh?subject=${encodeURIComponent(form.subject || 'New Enquiry from Website')}&body=${body}`
    window.location.href = mailtoLink
    setTimeout(() => {
      setSent(true)
      setLoading(false)
    }, 800)
  }

  return (
    <div>
      <section className="bg-slate-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateInView variant="fade-up" delay={0}>
            <p className="font-semibold text-sm uppercase tracking-wider mb-3">
              <span className="text-orange-400">Get in</span>
              <span className="text-slate-500 mx-2" aria-hidden="true">
                ·
              </span>
              <span className="text-green-400">Touch</span>
            </p>
          </AnimateInView>
          <AnimateInView variant="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-5">Contact Us</h1>
          </AnimateInView>
          <AnimateInView variant="fade-up" delay={200}>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Have a question or ready to ship? Reach out and we'll get back to you within the hour.
            </p>
          </AnimateInView>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Info cards */}
            <div className="space-y-5">
              <AnimateInView variant="fade-right" delay={0}>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-50 p-3 rounded-xl">
                      <Phone size={22} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-0.5">Phone / WhatsApp</p>
                      <a href="tel:+233200000000" className="font-bold text-slate-900 hover:text-orange-500 transition-colors">
                        +233 20 000 0000
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <a
                      href="tel:+233200000000"
                      className="flex-1 text-center bg-slate-900 hover:bg-slate-800 text-white text-sm py-2.5 rounded-xl font-semibold transition-colors"
                    >
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white text-sm py-2.5 rounded-xl font-semibold transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </AnimateInView>

              <AnimateInView variant="fade-right" delay={80}>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl">
                      <Mail size={22} className="text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-0.5">Email Us</p>
                      <a href="mailto:info@jmlogistics.com.gh" className="font-bold text-slate-900 hover:text-orange-500 transition-colors text-sm">
                        info@jmlogistics.com.gh
                      </a>
                    </div>
                  </div>
                </div>
              </AnimateInView>

              <AnimateInView variant="fade-right" delay={160}>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-50 p-3 rounded-xl shrink-0">
                      <MapPin size={22} className="text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Office Address</p>
                      <p className="font-bold text-slate-900 text-sm leading-relaxed">
                        12 Logistics Way,<br />
                        Airport Residential Area, Accra, Ghana
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateInView>

              <AnimateInView variant="fade-right" delay={240}>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-50 p-3 rounded-xl shrink-0">
                      <Clock size={22} className="text-purple-500" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-2">Business Hours</p>
                      <div className="space-y-1 text-sm text-slate-700">
                        <p><span className="font-semibold">Mon – Fri:</span> 7:00 AM – 8:00 PM</p>
                        <p><span className="font-semibold">Saturday:</span> 8:00 AM – 6:00 PM</p>
                        <p><span className="font-semibold">Sunday:</span> 9:00 AM – 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateInView>

              <AnimateInView variant="fade-right" delay={320}>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${WHATSAPP_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-2xl font-semibold transition-colors"
                >
                  <MessageCircle size={22} />
                  <div>
                    <p className="text-sm font-bold">Chat on WhatsApp</p>
                    <p className="text-xs text-green-100">Usually replies within minutes</p>
                  </div>
                </a>
              </AnimateInView>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <AnimateInView variant="fade-left" delay={100}>
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                  <p className="text-slate-500 text-sm mb-8">
                    Fill in the form below and your email client will open pre-filled with your message.
                  </p>

                  {sent ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="bg-green-50 p-4 rounded-full mb-5">
                        <CheckCircle2 size={40} className="text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Message Ready!</h3>
                      <p className="text-slate-500 mb-6">
                        Your email client should have opened. If not, email us directly at{' '}
                        <a href="mailto:info@jmlogistics.com.gh" className="text-orange-500 font-semibold">
                          info@jmlogistics.com.gh
                        </a>
                      </p>
                      <button
                        type="button"
                        onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                        className="text-sm text-slate-500 hover:text-orange-500 underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Full Name <span className="text-orange-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Mensah"
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Email Address <span className="text-orange-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@email.com"
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+233 20 000 0000"
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                          <select
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition bg-white"
                          >
                            <option value="">Select a subject</option>
                            <option value="Get a Quote">Get a Quote</option>
                            <option value="Track a Shipment">Track a Shipment</option>
                            <option value="Business Partnership">Business Partnership</option>
                            <option value="General Enquiry">General Enquiry</option>
                            <option value="Complaint / Feedback">Complaint / Feedback</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Message <span className="text-orange-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={6}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your delivery needs, pickup location, destination, and any special requirements..."
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white font-bold py-3.5 rounded-xl transition-colors text-base"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Opening email…
                          </>
                        ) : (
                          <><Send size={18} /> Send Message</>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </AnimateInView>

              <AnimateInView variant="fade-up" delay={200}>
                <div className="mt-6 bg-slate-200 rounded-3xl overflow-hidden h-64 flex items-center justify-center">
                  <div className="text-center text-slate-500">
                    <MapPin size={32} className="mx-auto mb-2 text-slate-400" />
                    <p className="font-semibold">12 Logistics Way, Airport Residential Area</p>
                    <p className="text-sm">Accra, Ghana</p>
                    <a
                      href="https://maps.google.com?q=Airport+Residential+Area,Accra,Ghana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-orange-500 hover:underline text-sm font-semibold"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </AnimateInView>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
