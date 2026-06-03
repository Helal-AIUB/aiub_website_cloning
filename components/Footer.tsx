import Link from "next/link";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 relative border-t-gray-800 border-t">
      <div className="flex h-[4px] w-full absolute top-0 left-0">
        <div className="flex-1 bg-[#0047AB]"></div> {/* Blue */}
        <div className="flex-1 bg-[#00A859]"></div> {/* Green */}
        <div className="flex-1 bg-[#F1C40F]"></div> {/* Yellow */}
        <div className="flex-1 bg-[#E74C3C]"></div> {/* Red */}
      </div>

      <div
        className="max-w-[1400px] mx-auto px-6 py-12"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="bg-white inline-block rounded-full p-1 mb-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold text-xs">
                <Image
                  src="/aiub-logo.png"
                  alt="AIUB Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">
                American International University-
              </p>
              <p className="text-white font-semibold text-sm">
                Bangladesh (AIUB)
              </p>
              <p className="text-xs mt-1 text-gray-500">
                Where leaders are created
              </p>
            </div>

            <div className="flex space-x-3 pt-4">
              <Link href="#" className="text-white hover:text-blue-500">
                <FaFacebook size={18} />
              </Link>
              <Link href="#" className="text-white hover:text-red-500">
                <FaYoutube size={18} />
              </Link>
              <Link href="#" className="text-white hover:text-blue-400">
                <FaLinkedin size={18} />
              </Link>
              <Link href="#" className="text-white hover:text-pink-500">
                <FaInstagram size={18} />
              </Link>
              <Link href="#" className="text-white hover:text-blue-300">
                <FaTwitter size={18} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <div className="space-y-6 text-sm">
              <div className="flex items-start space-x-3">
                <MdEmail size={20} className="text-gray-400 mt-1" />
                <div>
                  <p className="text-gray-500 mb-1">E-mail Us</p>
                  <a
                    href="mailto:info@aiub.edu"
                    className="hover:text-white transition-colors"
                  >
                    info@aiub.edu
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MdLocationOn size={20} className="text-gray-400 mt-1" />
                <div>
                  <p className="text-gray-500 mb-1">Visit Us</p>
                  <p>408/1 (Old KA 66/1),</p>
                  <p>Kuratoli, Khilkhet,Dhaka 1229,</p>
                  <p>Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MdPhone size={20} className="text-gray-400 mt-1" />
                <div>
                  <p className="text-gray-500 mb-1">Telephone</p>
                  <p>+88 02 841 4046-9; +88 02 841 4050</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-6">Become AIUBian</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="https://www.aiub.edu/future-Students"
                  className="hover:text-white transition-colors"
                >
                  Future Students
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aiub.edu/onCampus"
                  className="hover:text-white transition-colors"
                >
                  On Campus
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aiub.edu/admission"
                  className="hover:text-white transition-colors"
                >
                  Admission
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aiub.edu/tuition-fee"
                  className="hover:text-white transition-colors"
                >
                  Tuition Fees
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.aiub.edu/admission/scholarships"
                  className="hover:text-white transition-colors"
                >
                  Scholarships
                </Link>
              </li>
              <li>
                <Link
                  href="https://admission.aiub.edu/"
                  className="hover:text-white transition-colors"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 4: Academic */}
          <div>
            <h3 className="text-white font-bold mb-6">Academic</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Academic Regulations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Faculty of Arts & Social Sciences
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Faculty of Business Administration
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Faculty of Engineering
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Faculty of Health and Life Sciences
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Faculty of Science & Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1a1a1a] bg-black py-4">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between text-xs text-gray-500">
          <p>
            2000-{new Date().getFullYear()} © American International
            University-Bangladesh (AIUB)
          </p>
        </div>
      </div>
    </footer>
  );
}
