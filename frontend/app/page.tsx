export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-6 justify-center w-full h-screen">
        <h1 className="text-3xl font-bold self-center">ChatMate</h1>
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-4 border-2 border-gray-300 p-10">
            <div className="border-2 border-sky-200 rounded-md">
              <input className="p-4" type="text" placeholder="Username" />
            </div>
            <div className="border-2 border-sky-200 rounded-md">
              <input
                className="p-4"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button className="px-5 py-2 rounded-lg bg-blue-400 hover:bg-blue-500">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}
