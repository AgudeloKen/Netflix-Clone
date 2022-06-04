import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full h-96 mt-16 flex items-center justify-center">
      <footer className="w-4/5 mx-auto flex flex-col justify-center">
        <div className="text-white flex space-x-4 text-2xl mb-4">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
        <div className="grid grid-cols-4 gap-y-6 text-gray-400 text-sm">
          <p>Audio and Subtitles</p>
          <p>Audio Description</p>
          <p>Help Center</p>
          <p>Gift Cards</p>
          <p>Media Center</p>
          <p>Investor Relations</p>
          <p>Jobs</p>
          <p>Terms of Use</p>
          <p>Privacy</p>
          <p>Legal Notices</p>
          <p>Cookie Preferences</p>
          <p>Coorporate Information</p>
          <p>Contact Us</p>
        </div>
        <div className="flex flex-col space-y-4 mt-4 items-start text-gray-300 text-sm">
          <button className="border-2 border-gray-300 py-1 px-2">
            Service Code
          </button>
          <p>&copy; 1997 - 2022 Netflix</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
