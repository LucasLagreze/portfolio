import type { Metadata } from 'next';
import RootLayoutClient from './RootLayoutClient';

export const metadata: Metadata = {
  title: 'Mon CV animé',
  description: 'CV en ligne animé d’un développeur PHP & Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Note : RootLayoutClient est un Client Component
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
