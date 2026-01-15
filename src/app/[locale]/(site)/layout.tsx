import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar/navbar';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
