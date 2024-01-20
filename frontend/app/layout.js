import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Space Weather Predictor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-custom">
        {children}
      </body>
    </html>
  );
}
