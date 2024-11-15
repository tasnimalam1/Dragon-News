import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100 *:justify-start">
        <button className="btn join-item"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item"><FaTwitter></FaTwitter> Twitter</button>
        <button className="btn join-item"><FaInstagramSquare></FaInstagramSquare> Instagram</button>
      </div>
    </div>
  );
};

export default SocialLinks;
