

export const metadata = {
  title: "Contact SAUCAN Consulting",
  description: "Connect with SAUCAN to access Jazan opportunities and tailored market entry guidance.",
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
