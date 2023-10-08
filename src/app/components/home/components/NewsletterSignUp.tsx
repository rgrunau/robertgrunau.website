"use client";

export default function NewsLetterSignUp() {
  return (
    <form className="w-full flex-col items-center justify-start">
      <div className="w-full flex flex-col items-center lg:flex-row">
        <div className="w-full sr-only">
          <label htmlFor="email">Email</label>
        </div>
        <div className="w-full lg:w-2/3 p-2">
          <input
            className="w-full p-2 text-xl rounded-md"
            id="newsletterSignUp"
            name="newsletterSignUp"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="w-full lg:w-1/3 my-3">
          <button
            type="submit"
            className="w-full bg-dark text-white p-2 text-xl rounded-md"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}
