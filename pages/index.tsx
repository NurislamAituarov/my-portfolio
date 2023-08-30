import { Home } from '@/layout/home/Home';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  return <Home />;
}
