import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-3xl w-1/2 px-24 ">
        {/* Left Sidebar */}
        <Image
          src={"/pictures/facebook.svg"}
          alt="Facebook Logo"
          width={300}
          height={100}
        ></Image>
        <p className="ml-8 mt-3">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="bg-white flex flex-col p-3 rounded-xl w-1/4 drop-shadow-lg shadow-black">
        {/* Right Sidebar */}
        <input className="my-2 border border-1 border-gray-300 p-3 rounded-lg focus:outline outline-blue-500 focus:shadow-md shadow-blue-500" type="text" placeholder="Email address or phone number" />
        <input className="my-2 border border-1 border-gray-300 p-3 rounded-lg focus:outline outline-blue-500 focus:shadow-md shadow-blue-500" type="password" placeholder="Password" />
        <button className="bg-blue-500 my-2 p-2.5 font-bold text-white rounded-lg hover:bg-blue-600 text-xl">Log in</button>
        <p className="text-blue-600 text-sm my-2 text-center hover:underline">Forgotten password?</p>
        <span className="my-2">
          <hr />
        </span>
        <button className="bg-green-500 my-2 py-2 font-bold text-white rounded cursor-pointer hover:bg-green-600 w-fit p-3 mx-auto">Create new account</button>
      </div>
    </div>
  );
}
