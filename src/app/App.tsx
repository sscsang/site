import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
