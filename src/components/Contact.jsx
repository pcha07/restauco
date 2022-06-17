import { AiFillPhone } from "react-icons/ai"

const Contact = () => {
  return (
    <div className="p-6 border border-gray-300 sm:rounded-md">
      <h1 className="text-2xl font-bold text-center mt-5">Contact Us</h1>
      <form>
        <label className="block mb-6">
          <span className="text-gray-700">Your name</span>
          <input
            type="text"
            name="name"
            className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
            placeholder="Joe Bloggs"
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-700">Email address</span>
          <input
            name="email"
            type="email"
            className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
            placeholder="joe.bloggs@example.com"
            required
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-700">Message</span>
          <textarea
            name="message"
            className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
            rows="3"
            placeholder="Tell us what you're thinking about..."
          ></textarea>
        </label>
        <div className="mb-6">
          <button
            type="submit"
            className="
            h-10
            px-5
            bg-black
            text-white
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:text-red-500
          "
          >
            Contact Us
          </button>
        </div>
        <div className="mt-4 flex items-center justify-center space-x-5">
          <AiFillPhone className="!w-5 !h-5 text-black"/>
          <h1 className="font-bold">800 123 4567</h1>
          <h1 className="font-semibold">123 Address Ave, California, USA</h1>
        </div>
      </form>
    </div>
  );
};

export default Contact;
