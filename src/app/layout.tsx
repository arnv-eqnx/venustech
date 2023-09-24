import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: 'IONI reimagined',
  description: 'Developed by Arnav Jain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
