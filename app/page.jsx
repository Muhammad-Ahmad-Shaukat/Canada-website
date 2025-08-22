export default function Home() {
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/city.jpg')",
      }}
    >
      <div className="relative flex flex-col p-24 text-left w-full">
        <p className="text-green-600 text-7xl font-extrabold m-0 p-0 leading-none relative top-7">Big. Bold.</p>
        <p className="text-white text-[15rem] font-extralight m-0 p-0 leading-none">Jazan.</p>
        <p className="text-white text-4xl font-bold max-w-3xl m-0 p-0 leading-none">Canada’s next big business and investment opportunity is in Jazan, Saudi Arabia’s fastest growing investment hub</p>
      </div>

    </div>
  );
}