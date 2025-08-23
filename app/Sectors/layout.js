

export const metadata = {
  title: " Jazan industry sectors for Canadian business",
  description: "Sector by sector view of where Canadian firms can enter and win in Jazan.",
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
