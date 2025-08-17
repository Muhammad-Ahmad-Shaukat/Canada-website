export default function Home() {
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/city.jpg')",
      }}
    >
      <p className="text-lg font-medium text-white bg-black/50 px-4 py-2 rounded-lg">
        This is some dummy text displayed in the center.
      </p>
    </div>
  );
}