import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-black pb-2">
        <div className="mx-10 sm:mx-[10%] flex flex-col sm:flex-row  text-center justify-between gap-8">
          {/* About Section */}
          <div className="flex flex-col gap-4 mt-5">
            <span className="text-xl sm:text-3xl  text-primary font-semibold">
              FURNIGUARD&reg;
            </span>
            <p className="font-light text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quo
              blanditiis. Asperiores expedita voluptas culpa eos. Illo debitis
              eaque consequatur iste quo veritatis recusandae necessitatibus
              dicta quas vero quasi, ipsa fugiat suscipit corrupti esse nobis,
              rerum exercitationem, beatae pariatur sed.
            </p>
          </div>

          {/* Stores Section */}
          <div className="flex flex-col gap-5 mt-5">
            <h1 className="text-3xl font-semibold text-primary">Stores</h1>
            <p className="font-light text-white text-sm">
              MUMBAI, KOLKATA, HYDERABAD, CHENNAI, BENGALURU, JAIPUR, AHMEDABAD,
              PRAYAGRAJ, PUNE, AGRA, VARANASI, LUCKNOW, VISHAKHAPATNAM,
              CHANDIGARH, KANPUR, SURAT, NEW DELHI, NAGPUR, MADURAI, KOCHI,
              PATNA, JODHPUR, COIMBATORE, GUWAHATI, NASHIK, LUDHIANA, AMRITSAR,
              JABALPUR
            </p>
          </div>

          {/* Social Media Section */}
          <div>
            <ul className="flex flex-col gap-4 mt-5 justify-center items-center sm:items-start">
              <li className="flex items-center text-xl font-medium gap-3 text-primary cursor-pointer">
                <FaInstagram className="text-white w-6 h-6" /> Instagram
              </li>
              <li className="flex items-center text-xl font-medium gap-3 text-primary cursor-pointer">
                <FaXTwitter className="text-white w-6 h-6" /> Twitter
              </li>
              <li className="flex items-center text-xl font-medium gap-3 text-primary cursor-pointer">
                <FaLinkedin className="text-white w-6 h-6" /> LinkedIn
              </li>
              <li className="flex items-center text-xl font-medium gap-3 text-primary cursor-pointer">
                <FaYoutube className="text-white w-6 h-6" /> YouTube
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-2 border-primary" />
      <div className="flex items-center justify-center m-2">
        <span className="font-medium text-sm">All Copyrights © Reserved 2024-29 @ FurniGuard</span>
      </div>
    </>
  );
};

export default Footer;
