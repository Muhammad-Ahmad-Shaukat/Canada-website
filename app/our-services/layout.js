

export const metadata = {
  title: " SAUCAN services for Canadian companies in Saudi Arabia",
  description: "Market intelligence, partner development, and bid support for entering Jazan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased h-screen w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
