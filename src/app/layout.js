import "./globals.css";

export const metadata = {
  title: "Research Portal",
  description: "Institutional Academic Research Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#030712]">{children}</body>
    </html>
  );
}