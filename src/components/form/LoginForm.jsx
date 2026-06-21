function LoginForm() {
  return (
    <div className="w-full bg-white shadow-xl overflow-hidden">
      <div className="h-12 w-full bg-auntviolet" />

      {/* Form Content Container */}
      <form
        className="flex flex-col p-6 pt-7 pb-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-auntviolet text-[28px] font-normal tracking-wide text-center mb-1">
          MGBL Access
        </h2>
        <p className="text-gray-400 text-sm tracking-wide text-center mb-6">
          Login to your account
        </p>

        {/* input */}
        <div className="rounded-sm mb-6 overflow-hidden space-y-4">
          <div className="">
            <label htmlFor="userName" className="sr-only">
              Username
            </label>
            <input
              type="text"
              id="userName"
              placeholder="Username"
              className="w-full px-4 py-3 text-sm text-gray-800 placeholder-gray-400 border border-gray-300"
            />
          </div>

          <div className="">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 text-sm text-gray-800 placeholder-gray-400 border border-gray-300"
            />
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-auntviolet hover:bg-auntviolet/90 text-white text-base py-2.5 transition-colors font-normal mb-5 cursor-pointer"
        >
          Login
        </button>

        {/* Forgot Password Link */}
        <a
          href="#forgot-password"
          className="text-xs text-gray-500 hover:text-gray-700 text-center transition-colors font-normal block"
        >
          Forgot your password?
        </a>
      </form>
    </div>
  );
}

export default LoginForm;
