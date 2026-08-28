import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Vidyawan SaaS',
  description: 'Academic Research Portfolio & NAAC Metric Aggregation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#030712] text-slate-100 min-h-screen flex flex-col antialiased">
        <Toaster position="bottom-right" toastOptions={{ style: { background: '#1e293b', color: '#fff' } }} />
        
        {/* Pages will now render their own headers naturally */}
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}