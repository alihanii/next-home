/* eslint-disable @next/next/no-img-element */
import Logo from "../Logo/Logo";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="bg-black1 w-full  text-white flex items-center justify-center">
      <div className="w-[1400px] relative flex items-center justify-between flex-col">
        <div className="flex xl:w-full md:flex-row gap-3 flex-col  items-center justify-center md:justify-between pb-[36px]	lg:pt-[124.75px] pt-[80px] w-3/5 ">
          {" "}
          <a
            className="flex mb-2 md:mb-0 items-center justify-center gap-[8px]"
            href="/"
          >
            <Logo color={"white"} font={"40"} className="" />
            <p className={`text-4xl font-bold	text-white`}>PrimeCRM</p>
          </a>
          <div className="flex space-x-[27px] items-center justify-center">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.766 2.48405C16.9948 2.48759 18.1723 2.95887 19.0411 3.79499C19.91 4.63111 20.3998 5.76411 20.4035 6.94656V15.8706C20.3998 17.053 19.91 18.186 19.0411 19.0222C18.1723 19.8583 16.9948 20.3296 15.766 20.3331H6.49213C5.26333 20.3296 4.08591 19.8583 3.21701 19.0222C2.34812 18.186 1.85835 17.053 1.85468 15.8706V6.94656C1.85835 5.76411 2.34812 4.63111 3.21701 3.79499C4.08591 2.95887 5.26333 2.48759 6.49213 2.48405H15.766ZM15.766 0.699341H6.49213C2.92138 0.699341 0 3.51052 0 6.94656V15.8706C0 19.3066 2.92138 22.1178 6.49213 22.1178H15.766C19.3368 22.1178 22.2582 19.3066 22.2582 15.8706V6.94656C22.2582 3.51052 19.3368 0.699341 15.766 0.699341Z"
                fill="white"
              />
              <path
                d="M17.1571 6.94696C16.8819 6.94696 16.613 6.86845 16.3842 6.72136C16.1554 6.57427 15.9771 6.3652 15.8718 6.12059C15.7665 5.87598 15.739 5.60682 15.7927 5.34715C15.8464 5.08748 15.9788 4.84895 16.1734 4.66174C16.368 4.47452 16.6158 4.34703 16.8857 4.29538C17.1555 4.24372 17.4352 4.27023 17.6894 4.37155C17.9436 4.47287 18.1609 4.64445 18.3138 4.86459C18.4666 5.08473 18.5482 5.34355 18.5482 5.60831C18.5486 5.78421 18.5129 5.95845 18.4431 6.12104C18.3733 6.28362 18.2709 6.43134 18.1416 6.55572C18.0124 6.6801 17.8589 6.77869 17.6899 6.84583C17.5209 6.91297 17.3399 6.94734 17.1571 6.94696ZM11.129 7.83908C11.8627 7.83908 12.58 8.04845 13.1901 8.44072C13.8002 8.83298 14.2757 9.39053 14.5565 10.0428C14.8372 10.6952 14.9107 11.4129 14.7676 12.1054C14.6244 12.7979 14.2711 13.434 13.7523 13.9333C13.2334 14.4325 12.5724 14.7725 11.8528 14.9103C11.1331 15.048 10.3872 14.9773 9.70929 14.7071C9.03141 14.4369 8.452 13.9794 8.04436 13.3923C7.63672 12.8053 7.41914 12.115 7.41914 11.409C7.42019 10.4625 7.81138 9.55507 8.50689 8.8858C9.2024 8.21653 10.1454 7.84009 11.129 7.83908ZM11.129 6.05437C10.0284 6.05437 8.95259 6.36841 8.0375 6.95678C7.12242 7.54516 6.4092 8.38143 5.98803 9.35986C5.56686 10.3383 5.45667 11.4149 5.67138 12.4536C5.88609 13.4923 6.41606 14.4464 7.19427 15.1953C7.97249 15.9441 8.96399 16.4541 10.0434 16.6607C11.1228 16.8673 12.2417 16.7613 13.2585 16.356C14.2752 15.9507 15.1443 15.2644 15.7557 14.3839C16.3672 13.5033 16.6935 12.468 16.6935 11.409C16.6935 9.98885 16.1073 8.62688 15.0637 7.6227C14.0202 6.61851 12.6048 6.05437 11.129 6.05437Z"
                fill="white"
              />
            </svg>

            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.2583 11.4732C23.2583 5.52483 18.109 0.70166 11.7583 0.70166C5.40763 0.70166 0.258301 5.52483 0.258301 11.4732C0.258301 16.8494 4.46299 21.3057 9.96143 22.1145V14.5879H7.04073V11.4732H9.96143V9.10012C9.96143 6.40098 11.6787 4.90883 14.3052 4.90883C15.5636 4.90883 16.8799 5.11945 16.8799 5.11945V7.77051H15.4291C14.0013 7.77051 13.5547 8.60049 13.5547 9.45356V11.4732H16.7439L16.2346 14.5879H13.5552V22.1155C19.0536 21.3071 23.2583 16.8508 23.2583 11.4732Z"
                fill="white"
              />
            </svg>
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7294 2.86C20.924 3.20971 20.0718 3.4401 19.1998 3.5439C20.1162 3.00768 20.8054 2.15579 21.138 1.14802C20.2716 1.65428 19.3253 2.00949 18.3396 2.19845C17.9246 1.76376 17.4254 1.41796 16.8724 1.18205C16.3194 0.946146 15.7242 0.825069 15.123 0.826179C12.6887 0.826179 10.7187 2.76613 10.7187 5.15755C10.717 5.49019 10.7551 5.82184 10.8323 6.14541C9.08679 6.06364 7.37753 5.61866 5.81393 4.83896C4.25032 4.05925 2.8668 2.96199 1.75188 1.61736C1.36074 2.27628 1.15388 3.02809 1.15293 3.79422C1.15293 5.29612 1.93707 6.62369 3.12111 7.40146C2.4196 7.38483 1.73246 7.19929 1.11804 6.8606V6.91424C1.11804 9.01511 2.6389 10.7629 4.65182 11.1607C4.27329 11.2615 3.88323 11.3126 3.49148 11.3127C3.21351 11.3131 2.93618 11.2862 2.66351 11.2322C3.2231 12.9531 4.85177 14.2047 6.78103 14.2405C5.21336 15.4478 3.28868 16.1003 1.30949 16.0955C0.958176 16.095 0.60719 16.0741 0.258301 16.0329C2.27174 17.3177 4.6122 17.9972 7.00111 17.9908C15.1136 17.9908 19.5456 11.3886 19.5456 5.66265C19.5456 5.47492 19.5407 5.28718 19.5317 5.10391C20.3919 4.49245 21.1361 3.73258 21.7294 2.86Z"
                fill="white"
              />
            </svg>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7394 0.533569H2.58746C1.5956 0.533569 0.729004 1.24724 0.729004 2.22744V20.4197C0.729004 21.4053 1.5956 22.2835 2.58746 22.2835H20.7341C21.7313 22.2835 22.4789 21.3994 22.4789 20.4197V2.22744C22.4848 1.24724 21.7313 0.533569 20.7394 0.533569ZM7.471 18.6632H4.35513V8.97526H7.471V18.6632ZM6.02084 7.50229H5.99851C5.00131 7.50229 4.35561 6.75997 4.35561 5.83075C4.35561 4.88453 5.0183 4.15969 6.03783 4.15969C7.05736 4.15969 7.68121 4.87919 7.70355 5.83075C7.70306 6.75997 7.05736 7.50229 6.02084 7.50229ZM18.8586 18.6632H15.7428V13.366C15.7428 12.097 15.2893 11.2299 14.162 11.2299C13.3008 11.2299 12.791 11.8125 12.5643 12.38C12.4793 12.5839 12.4565 12.8616 12.4565 13.1451V18.6632H9.34062V8.97526H12.4565V10.3235C12.9099 9.67776 13.6183 8.74854 15.2665 8.74854C17.3119 8.74854 18.8591 10.0967 18.8591 13.0034L18.8586 18.6632Z"
                fill="white"
              />
            </svg>
            <svg
              width="27"
              height="20"
              viewBox="0 0 27 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.3119 5.10379C26.3119 2.87729 24.6309 1.08619 22.5537 1.08619C19.74 0.958047 16.8705 0.908569 13.938 0.908569H13.0239C10.0985 0.908569 7.22391 0.958047 4.41028 1.08669C2.33814 1.08669 0.65707 2.88768 0.65707 5.11418C0.5301 6.8751 0.476265 8.63651 0.479313 10.3979C0.474234 12.1593 0.531793 13.9224 0.651991 15.6871C0.651991 17.9136 2.33306 19.7195 4.4052 19.7195C7.36104 19.8531 10.3931 19.9125 13.4759 19.9076C16.5638 19.9175 19.5873 19.8548 22.5465 19.7195C24.6238 19.7195 26.3048 17.9136 26.3048 15.6871C26.4267 13.9207 26.4826 12.1593 26.4775 10.393C26.489 8.63156 26.4338 6.8685 26.3119 5.10379ZM10.9924 15.2517V5.5293L18.3566 10.388L10.9924 15.2517Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        {/* <span className="border-t-[0.2px] my-10 border-black2 w-full"></span> */}

        <div className="w-full  flex-col xl:flex-row flex justify-center text-white items-center text-[25px]">
          <div className="flex w-3/5 text-[20px] items-center lg:flex-row flex-col">
            <div className="flex items-center flex-col sm:flex-row w-full lg:w-4/6	">
              <ul className=" lg:w-1/2 w-full">
                <li
                  className="justify-center sm:justify-normal text-[25px] border-y h-[74px]  items-center flex 	w-full	
                	  border-black2"
                >
                  Usefull Link
                </li>
                <ul
                  className="h-[320px] border-b flex-col items-center sm:items-start py-[54px] justify-between flex 		
                	  border-black2"
                >
                  <li>Solution</li>
                  <li>Industries</li>
                  <li>Products</li>
                  <li>Resources</li>
                  <li>Pricing</li>
                </ul>
              </ul>

              <ul className="lg:w-1/2 w-full ">
                <li
                  className="justify-center sm:justify-normal text-[25px] sm:border-y border-t-0 border-b h-[74px]  items-center flex 		
                	  border-black2"
                >
                  {" "}
                  Service
                </li>
                <ul
                  className=" items-center sm:items-start h-[320px] border-b flex-col  py-[54px] justify-between flex 		
                	  border-black2"
                >
                  <li>Sale</li>
                  <li>Marketing</li>
                  <li>Real Estate</li>
                  <li>Autimotive</li>
                  <li>Education</li>
                </ul>
              </ul>
            </div>
            <div className="lg:w-2/6 w-full ">
              <p
                className="text-[25px] lg:border-y border-b justify-center lg:justify-normal border-t-0 h-[74px] items-center flex 		
                	  border-black2"
              >
                Contact Us{" "}
              </p>
              <div
                className="md:h-[320px] sm:h-[280px] border-b flex-col items-center flex 		
                	  border-black2 justify-between py-[20px] sm:py-[54px]"
              >
                <div className="box w-full rounded-[20px]">
                  <div className="lg:text-left bg-black1 text-center m-[1px] text-balance	w-auto rounded-[20px] px-[21px] py-[19px]">
                    1700 W Blancke St, kiyev port south USA, American
                  </div>
                </div>
                <div className="box w-full  rounded-[20px]">
                  <div className="lg:text-left bg-black1 m-[1px] w-auto rounded-[20px] text-center px-[21px] py-[19px] flex justify-center flex-col">
                    +3255 456 789 mail@primarily.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-2/5 w-3/5">
            <div
              className="justify-between text-[25px] xl:border-y border-b h-[74px]  items-center flex 		
                	  border-black2  xl:pl-[41px] pl-[0px]"
            >
              <span className="text-[25px] ">Our Latest News</span>
              <span className="border border-black2 rounded-full w-[40px] h-[40px] flex items-center justify-center">
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.793945 7.15869L6.79395 1.15869L12.7939 7.15869"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div
              className="sm:h-[320px] h-[170px] border-b  items-center flex 		
                	  border-black2 w-auto pl-0 xl:pl-[41px] "
            >
              <img src="/image.jpg" alt="image" className="w-auto" />
            </div>
          </div>
        </div>
        {/* <span className="w-full my-10 border-t border-black2"></span>
        <span className="w-full my-10 border-t border-black2 absolute top-[18rem]"></span> */}

        <div className="text-[20px] py-[36px] w-3/5 text-center">
          Copyright © Primarly | Designed by VictorFlow Templates{" "}
        </div>
      </div>
    </div>
  );
}
