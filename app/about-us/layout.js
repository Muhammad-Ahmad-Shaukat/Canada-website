

export const metadata = {
  title: "About SAUCAN Consulting",
  description: "Founded by Canadian professionals with on the ground experience in Jazan.",
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
