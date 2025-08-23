

export const metadata = {
  title: "Jazan opportunities for Canadian expertise",
  description: "Energy, logistics, tourism, agriculture, manufacturing, and renewables opportunities aligned to Canadian strengths.",
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
