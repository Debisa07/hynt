import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { IFooterSection } from "../../types/Footer";
import Image from "next/image";
import { FILE_URL } from "../../config/urls";

interface FooterProps {
  footer?: IFooterSection;
}

const Footer = ({ footer }: FooterProps) => {
  return (
    <div className="border-t border-t-[#cacaca] h-[145px] mt-4 max-w-[100vw] overflow-x-hidden">
      <div className="mt-[30px] flex justify-center align-middle">
        {(footer?.data?.attributes?.social_links?.data || []).map((icon) => {
          return (
            <div
              key={icon.id}
              className="w-[20px] h-[20px] mx-2 cursor-pointer"
            >
              <Image
                className=""
                src={`${FILE_URL}${
                  icon?.attributes?.icon?.data?.attributes?.url || ""
                }`}
                width={24}
                height={24}
                alt={`${icon?.attributes?.name}`}
                key={icon?.id}
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center align-middle mt-[11px]">
        <p className="text-[#444] text-[12px] font-[600] mx-[5px] cursor-pointer animated hover:text-[black]">
          {footer?.data?.attributes?.privacyPolicyText}
        </p>
        <span className="relative bottom-[4px]">-</span>
        <p className="text-[#444] text-[12px] font-[600] mx-[5px] cursor-pointer animated hover:text-[black]">
          {footer?.data?.attributes?.termsOfUseText}
        </p>
        <span className="relative bottom-[4px]">-</span>
        <p className="text-[#444] text-[12px] font-[600] mx-[5px] cursor-pointer animated hover:text-[black]">
          {footer?.data?.attributes?.imprintText}
        </p>
      </div>
    </div>
  );
};

export default Footer;
