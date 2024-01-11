export default function Profile() {
  return (
    <div className="transition duration-300 opacity-100 py-6">
      <div className="flex gap-x-4 items-center ">
        <div className="rounded-full p-px h-[80px] w-[80px]">
          <img
            src="./ui/icon.png"
            width={80}
            alt="profile icon"
            className="rounded-full"
          ></img>
        </div>
        <div className="flex-row items-center">
          <h1 className="my-1 text-3xl sm:text-4xl">Y.Umemura</h1>
          <h2 className="my-1 leading-6 text-lg align-middle">
            Developer at NTTDATA
          </h2>
        </div>
      </div>
    </div>
  );
}
