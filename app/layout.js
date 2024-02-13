import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: ['100', '300', '400']});

export const metadata = {
  title: "Shaik Abdus Samad",
  description: "Full Stack Developer | Aspiring DevOps Engineer"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
