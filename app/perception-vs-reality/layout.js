

export const metadata = {
  title: "Saudi Arabia for Canadian investors — perception vs reality",
  description: "A clear view of the market conditions Canadian leadership teams need to know.",
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
