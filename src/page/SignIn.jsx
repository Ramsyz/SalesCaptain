import signinImg from "../assets/signinImg.png";

export default function SignIn() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="bg-white flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto rounded-lg p-8 px-8">
          <h2 className="text-xl text-black text-center">Login</h2>
          <div className="flex flex-col py-2">
            <input
              className="rounded-md mt-2 p-2 border focus:border-black text-xs"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <input
              className="p-2 rounded-lg mt-2 border focus:border-black text-xs"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="w-full my-5 py-2 bg-blue-500 text-white font-semibold rounded-lg">
            SIGNIN
          </button>
          <div className="flex justify-center text-gray-400 py-2">
            <p>Forgot Password</p>
          </div>
        </form>
      </div>
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={signinImg} alt="" />
      </div>
    </div>
  );
}
