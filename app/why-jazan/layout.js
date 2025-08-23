

export const metadata = {
  title: "Why Jazan is strategic for Canadian investors",
  description: "Red Sea access, modern infrastructure, and investor support make Jazan a high potential entry point for Canadian companies.",
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
