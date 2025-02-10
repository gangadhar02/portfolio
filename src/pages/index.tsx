import Profile from '@/components/Profile';
import Currently from '@/components/Currently';
import About from '@/components/About';
import RecentWork from '@/components/RecentWork';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <Profile />
      <Currently />
      <About />
      <RecentWork />
      <Footer />
    </div>
  );
}