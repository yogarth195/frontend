import { FaInstagram, FaYoutube, FaFacebook, FaMapMarkerAlt, FaEllipsisH, FaWhatsapp } from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="px-2 py-6">
      {/* <div className="text-center text-lg mb-4 font-medium">Follow Us</div> */}
      <ul className="flex justify-center space-x-6 text-base">
        <li>
          <a
            href="https://www.instagram.com/surajphotographystudios"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="hover:opacity-80"
          >
            <FaInstagram size={24} aria-hidden="true" />
            <span className="sr-only">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/919310061467"  // WhatsApp chat link with dummy number
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
            className="hover:opacity-80"
          >
            <FaWhatsapp size={24} aria-hidden="true" />
            <span className="sr-only">WhatsApp</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@surajstudio5456"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
            className="hover:opacity-80"
          >
            <FaYoutube size={24} aria-hidden="true" />
            <span className="sr-only">YouTube</span>
          </a>
        </li>
        <li>
          <a
            href="https://facebook.com/dummypage"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="hover:opacity-80"
          >
            <FaFacebook size={24} aria-hidden="true" />
            <span className="sr-only">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://maps.google.com/?q=dummy+location"
            target="_blank"
            rel="noopener noreferrer"
            title="Google Maps"
            className="hover:opacity-80"
          >
            <FaMapMarkerAlt size={24} aria-hidden="true" />
            <span className="sr-only">Google Maps</span>
          </a>
        </li>
        {/* <li>
          <a
            href="#"
            title="More"
            className="hover:opacity-80 cursor-not-allowed"
            aria-disabled="true"
          >
            <FaEllipsisH size={24} aria-hidden="true" />
            <span className="sr-only">More</span>
          </a>
        </li> */}
      </ul>
    </div>
  );
};
