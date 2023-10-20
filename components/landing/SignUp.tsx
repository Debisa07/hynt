import Image from "next/image";
import { colors } from "../../styles/colors/colors";
import hyntLastSectionLogo from "../../assets/images/last_section.png";
import { ISignupSection } from "../../types/Signup";
import { FILE_URL } from "../../config/urls";

interface SignUpProp {
  signup?: ISignupSection;
}

const SignUp = ({ signup }: SignUpProp) => {
  const text = signup?.data?.attributes?.termsAndConditionsText
    ? `<p class="px-4 text-center text-[13px] pt-[20px] pb-10 font-medium text-black">
    ${signup?.data?.attributes?.termsAndConditionsText}
  </p>`
        .replace(
          signup?.data?.attributes?.termsAndConditionHighlight,
          ` <span class="font-bold cursor-pointer hover:underline">
        ${signup?.data?.attributes?.termsAndConditionHighlight}
      </span>`
        )
        .replace(
          signup?.data?.attributes?.privacyPolicyHighlight,
          `<span class="font-bold cursor-pointer hover:underline">${signup?.data?.attributes?.privacyPolicyHighlight}</span>`
        )
    : `
<span class="inline-block max-w-[600px] text-[16px] lg:text-[21px] xl:text-[21px] md:text-[18px]">
We provide <span class="text-[#F1C093]">free access</span> to a
collection of the best ideas, tips and strategies perfectly shaped
for your needs.
</span>
`;

  return (
    <div className="h-[310px] orange-gradient p-3 lg:ml-[150px] xl:ml-[150px] mr-[150px] relative mt-32 mb-40 ">
      <div className="pl-6 z-10 relative">
        <p className="pl-10 pt-10 text-[24px] font-bold">
          {signup?.data?.attributes?.title}
        </p>
        {/* 1 */}
        {(signup?.data?.attributes?.benefits?.data || []).map((benefit) => {
          return (
            <div
              key={benefit.id}
              className="w-[555px] ml-14 mt-3 py-3 bg-white rounded-xl flex justify-start pl-6 align-middle signup-shadow animated cursor-pointer"
            >
              <span>
                <Image
                  width={16}
                  height={16}
                  src={`${FILE_URL}${
                    benefit?.attributes?.icon?.data?.attributes?.url || ""
                  }`}
                  alt="Create list of hynts"
                  className=" mr-3"
                />
              </span>
              <p className="text-[13px] font-semibold">
                {benefit?.attributes?.benefit}
              </p>
            </div>
          );
        })}
      </div>

      <div className="signup-box-shadow rounded-[26px] absolute bg-white right-0 top-[-110px] w-[410px] z-10">
        <p className="text-center py-1 bg-[#D9D9D9] rounded-t-[26px] text-white font-bold text-[14px]">
          {signup?.data?.attributes?.label}
        </p>
        <p className="text-center py-4 font-bold text-[28px] pt-6 px-4">
          {signup?.data?.attributes?.header}
        </p>

        <form className="bg-white rounded px-12 pt-2 pb-8 mb-4">
          <div className="mb-4 px-4">
            <label
              className="block text-[#d0d0d0] text-[13px] font-bold mb-1"
              htmlFor="email"
            >
              {signup?.data?.attributes?.emailTitle}
            </label>
            <input
              className="text-sm animated signup-field appearance-none border w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder={signup?.data?.attributes?.emailPlaceholder}
            />
          </div>
          <div className="mb-6 px-4">
            <label
              className="block text-[#d0d0d0] text-[13px] font-bold mb-1"
              htmlFor="email"
            >
              {signup?.data?.attributes?.passwordTitle}
            </label>
            <input
              className="text-sm animated signup-field appearance-none border w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="password"
              placeholder={signup?.data?.attributes?.passwordPlaceholder}
            />
          </div>
          <div className="px-4">
            <button
              className={`signup-btn-bottom animated rounded-[10px] w-full animated flex justify-center align-middle flex-row text-white font-bold bg-[${colors.bgLightOrange}] hover:bg-[#F8A985] font-bold py-[6px] text-center`}
            >
              {signup?.data?.attributes?.loginButtonText}
            </button>
          </div>

          <div dangerouslySetInnerHTML={{ __html: text }}></div>

          <p className="text-center text-[15px] mt-2 text-[#303030] font-[600]">
            {signup?.data?.attributes?.haveAnAccountText}
            <span className="underline cursor-pointer animated hover:text-[black] hover:font-bold">
              {signup?.data?.attributes?.loginButtonText}
            </span>
          </p>
        </form>
      </div>

      <div className="absolute top-[48%] translate-y-[-50%] right-[320px] z-0">
        <Image
          alt="Hynt logo"
          src={hyntLastSectionLogo}
          className="w-[300px]"
        />
      </div>
    </div>
  );
};

export default SignUp;
