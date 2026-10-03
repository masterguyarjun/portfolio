'use client';

import { useState, FormEvent } from 'react';
import { SectionHeading } from '@/components/ui';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { Button } from '@/components/ui';
import { profile } from '@/data/profile';
import { socialLinks, socialCategories } from '@/data/socials';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { cn } from '@/lib/utils';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 20) newErrors.message = 'Message must be at least 20 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    
    // Simulate form submission (replace with actual endpoint)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const professionalLinks = socialLinks.filter(s => s.category === 'development' || s.category === 'security');

  return (
    <div className="min-h-screen">
      <header className="section relative overflow-hidden" aria-labelledby="contact-hero-title">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 id="contact-hero-title" className="text-display-md font-bold text-brand-text-primary tracking-tight mb-4">
              Get in Touch
            </h1>
            <p className="text-body-lg text-brand-text-secondary">
              I&apos;m open to cybersecurity research collaborations, infrastructure consulting engagements, 
              security engineering roles, and freelance opportunities. Let&apos;s discuss how I can help.
            </p>
          </div>
        </div>
      </header>

      <main className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <aside className="lg:col-span-1 space-y-6">
            <Card padding="md" className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-heading-md">Preferred Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-body-sm text-brand-text-muted">Email</p>
                  <a 
                    href={`mailto:${profile.email}`}
                    className="link-internal text-body text-brand-text-primary flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    {profile.email}
                  </a>
                </div>
                <div>
                  <p className="text-body-sm text-brand-text-muted">Location</p>
                  <p className="text-body text-brand-text-secondary">{profile.location}</p>
                </div>
                <div>
                  <p className="text-body-sm text-brand-text-muted">Availability</p>
                  <p className="text-body text-brand-text-secondary">Open to remote/EU/Germany roles</p>
                  <span className="badge badge-blue mt-2 inline-block">Available for hire</span>
                </div>
              </CardContent>
            </Card>

            <Card padding="md">
              <CardHeader>
                <CardTitle className="text-heading-md">Professional Networks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {professionalLinks.map((social) => (
                  <ExternalLink
                    key={social.name}
                    href={social.url}
                    label={`${social.name}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-brand-dark-elevated transition-colors"
                  >
                    <span className="w-10 h-10 rounded-lg bg-brand-blue-primary/10 flex items-center justify-center text-brand-blue-primary font-semibold text-body-lg">
                      {social.name.charAt(0)}
                    </span>
                    <div className="text-left">
                      <p className="text-body text-brand-text-primary">{social.name}</p>
                      <p className="text-body-sm text-brand-text-muted">{social.url.replace(/^https?:\/\//, '')}</p>
                    </div>
                  </ExternalLink>
                ))}
              </CardContent>
            </Card>

            <Card padding="md" className="border-brand-gold-accent/30 bg-brand-gold-accent/5">
              <CardHeader>
                <CardTitle className="text-heading-md text-brand-gold-accent flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Security Reporting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-brand-text-secondary mb-3">
                  Found a security issue? I follow responsible disclosure. Report vulnerabilities via email with PGP encryption.
                </p>
                <a
                  href={`mailto:${profile.email}?subject=Security%20Vulnerability%20Report`}
                  className="btn btn-sm btn-outline"
                >
                  Report Security Issue
                </a>
              </CardContent>
            </Card>
          </aside>

          <section className="lg:col-span-2" aria-labelledby="contact-form-title">
            <div className="space-y-6">
              <SectionHeading id="contact-form-title" title="Send a Message" subtitle="Fill out the form below and I&apos;ll get back to you within 2 business days." />
              
              {status === 'success' ? (
                <Card padding="lg" className="border-brand-green/50 bg-brand-green/5 text-center" role="alert">
                  <svg className="w-12 h-12 mx-auto text-brand-green mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3 className="text-heading-md font-semibold text-brand-text-primary mb-2">Message Sent Successfully</h3>
                  <p className="text-body text-brand-text-secondary">
                    Thank you for reaching out. I&apos;ll respond to your message within 2 business days.
                  </p>
                  <Button onClick={() => setStatus('idle')} variant="secondary" className="mt-4">
                    Send Another Message
                  </Button>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-body-sm font-medium text-brand-text-primary mb-1.5">
                        Name <span className="text-brand-red-accent" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={cn(
                          'input',
                          errors.name && 'border-brand-red-accent focus-visible:ring-brand-red-accent'
                        )}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-invalid={!!errors.name}
                        disabled={status === 'submitting'}
                      />
                      {errors.name && <p id="name-error" className="text-body-sm text-brand-red-accent mt-1" role="alert">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-body-sm font-medium text-brand-text-primary mb-1.5">
                        Email <span className="text-brand-red-accent" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={cn(
                          'input',
                          errors.email && 'border-brand-red-accent focus-visible:ring-brand-red-accent'
                        )}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                        disabled={status === 'submitting'}
                      />
                      {errors.email && <p id="email-error" className="text-body-sm text-brand-red-accent mt-1" role="alert">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-body-sm font-medium text-brand-text-primary mb-1.5">
                      Subject <span className="text-brand-red-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What&apos;s this about?"
                      className={cn(
                        'input',
                        errors.subject && 'border-brand-red-accent focus-visible:ring-brand-red-accent'
                      )}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      aria-invalid={!!errors.subject}
                      disabled={status === 'submitting'}
                    />
                    {errors.subject && <p id="subject-error" className="text-body-sm text-brand-red-accent mt-1" role="alert">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-body-sm font-medium text-brand-text-primary mb-1.5">
                      Message <span className="text-brand-red-accent" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, opportunity, or question in detail (minimum 20 characters)..."
                      rows={6}
                      className={cn(
                        'textarea',
                        errors.message && 'border-brand-red-accent focus-visible:ring-brand-red-accent'
                      )}
                      aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                      aria-invalid={!!errors.message}
                      disabled={status === 'submitting'}
                    />
                    {errors.message ? (
                      <p id="message-error" className="text-body-sm text-brand-red-accent mt-1" role="alert">{errors.message}</p>
                    ) : (
                      <p id="message-hint" className="text-body-sm text-brand-text-muted mt-1">
                        Minimum 20 characters. Be specific about your needs.
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <Button type="submit" size="lg" disabled={status === 'submitting'}>
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                    {status === 'error' && (
                      <p className="text-body-sm text-brand-red-accent" role="alert">
                        Failed to send. Please try again or email directly.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </section>
        </div>

        <section className="mt-16" aria-labelledby="faq-title">
          <SectionHeading id="faq-title" title="Frequently Asked" subtitle="Quick answers to common questions." />
          <dl className="space-y-4 max-w-3xl">
            <div className="card p-6 border-brand-blue-primary/20">
              <dt className="text-heading-sm font-semibold text-brand-text-primary mb-2">What types of roles are you looking for?</dt>
              <dd className="text-body text-brand-text-secondary">
                I&apos;m seeking full-time or contract roles as a Security Engineer, Infrastructure Engineer, or Cybersecurity Researcher.
                Remote-first positions based in EU/Germany are preferred. I&apos;m also open to freelance consulting engagements.
              </dd>
            </div>
            <div className="card p-6 border-brand-blue-primary/20">
              <dt className="text-heading-sm font-semibold text-brand-text-primary mb-2">Can you work in Germany/EU without sponsorship?</dt>
              <dd className="text-body text-brand-text-secondary">
                I&apos;m currently based in {profile.location} and authorized to work in the EU. 
                For Germany-specific roles, I may require visa sponsorship depending on the employer&apos;s requirements.
              </dd>
            </div>
            <div className="card p-6 border-brand-blue-primary/20">
              <dt className="text-heading-sm font-semibold text-brand-text-primary mb-2">Do you accept bug bounty invitations?</dt>
              <dd className="text-body text-brand-text-secondary">
                Yes, I actively participate in bug bounty programs on HackerOne, Bugcrowd, and Intigriti. 
                I specialize in authentication bypasses, business logic flaws, and SSRF chains.
              </dd>
            </div>
            <div className="card p-6 border-brand-blue-primary/20">
              <dt className="text-heading-sm font-semibold text-brand-text-primary mb-2">What&apos;s your preferred tech stack?</dt>
              <dd className="text-body text-brand-text-secondary">
                For security tooling: Go, Python, Rust. For infrastructure: Terraform, Kubernetes, AWS/GCP, Linux hardening.
                For web: Next.js, TypeScript, React. I adapt to the stack required by the engagement.
              </dd>
            </div>
          </dl>
        </section>
      </main>

      <footer className="border-t border-brand-dark-border py-8">
        <div className="container-custom text-center">
          <p className="text-body-sm text-brand-text-muted">
            © {new Date().getFullYear()} {profile.name} — MasterGuyArjun
          </p>
        </div>
      </footer>
    </div>
  );
}
