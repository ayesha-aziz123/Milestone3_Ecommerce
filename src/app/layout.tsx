import "./globals.css";
import { Metadata } from "next";
import Providers from "./Provider";

export const metadata: Metadata = {
  title: "AA MakeupStore",
  description: "Ayesha's Makeup Web",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body
        className={`bg-myWhite antialiased`}
      >
        <div className=" mx-auto">
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
