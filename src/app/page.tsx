import { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { ProfessionalFocus } from '@/components/home/ProfessionalFocus';
import { SecurityResearchPreview } from '@/components/home/SecurityResearchPreview';
import { SelectedProjects } from '@/components/home/SelectedProjects';
import { CareerSnapshot } from '@/components/home/CareerSnapshot';
import { TechnicalCapabilities } from '@/components/home/TechnicalCapabilities';
import { ExternalProfiles } from '@/components/home/ExternalProfiles';
import { CTASection } from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Mallikharjun Swamy Sudnagunta — Cybersecurity Researcher, Infrastructure Engineer, Security Engineer. Specializing in application security, API security, vulnerability research, and security automation.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProfessionalFocus />
      <SecurityResearchPreview />
      <SelectedProjects />
      <CareerSnapshot />
      <TechnicalCapabilities />
      <ExternalProfiles />
      <CTASection />
    </>
  );
}
