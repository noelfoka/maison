import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";

const LandingPage = () => {
  const onSearchCTAContainerClick = useCallback(() => {
    // Please sync "Properties grid view" to the project
  }, []);

  return (
    <div className="relative bg-gray-white w-full h-[5095.99px] flex flex-col items-center justify-start text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col py-[120px] px-[30px] items-center justify-start bg-[url(/hero-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-33xl text-gray-white font-body-regular-400">
        <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
            <div className="self-stretch relative leading-[72px] font-semibold">
              Find Your Dream Home
            </div>
            <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-primary-50">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[17px] text-base font-body-large-400">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <div className="rounded bg-primary-500 overflow-hidden flex flex-row py-3 px-6 items-start justify-start">
                <div className="relative leading-[24px] font-medium">Rent</div>
              </div>
              <div className="rounded bg-gray-white overflow-hidden flex flex-row py-3 px-6 items-start justify-start text-primary-400">
                <div className="relative leading-[24px] font-medium">Sale</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-primary-700">
              <div className="flex-1 rounded-lg bg-gray-white flex flex-row py-8 px-[62px] box-border items-center justify-between max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
                <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative leading-[24px] capitalize font-semibold">
                    Locations
                  </div>
                  <Dropdown
                    overlay={
                      <Menu>
                        {[
                          { value: "New York" },
                          { value: "Los Angeles" },
                          { value: "Chicago" },
                          { value: "Berlin" },
                        ].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    placement="bottomLeft"
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select your city `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className="w-[177px] flex flex-col items-start justify-start gap-[16px] text-left">
                  <div className="relative leading-[24px] capitalize font-semibold flex items-end w-[150px]">
                    Property Type
                  </div>
                  <Dropdown
                    className="self-stretch"
                    overlay={
                      <Menu>
                        {[
                          { value: "Studio apartments" },
                          { value: "One-bedroom apartments" },
                          { value: "Two-bedroom apartments" },
                          { value: "Three-bedroom apartments" },
                          { value: "Four or more bedroom apartments/houses" },
                        ].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    placement="bottomLeft"
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select property type `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className="w-[155px] flex flex-col items-start justify-start gap-[16px] text-left">
                  <div className="relative leading-[24px] capitalize font-semibold flex items-end w-[150px]">
                    Rent Range
                  </div>
                  <Dropdown
                    className="self-stretch"
                    overlay={
                      <Menu>
                        {[
                          { value: "$500-$2000" },
                          { value: "$2500-$10000" },
                          { value: "$10000+" },
                        ].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    placement="bottomLeft"
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select rent range `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div
                  className="rounded bg-primary-500 w-[102px] flex flex-row py-3 px-6 box-border items-center justify-center cursor-pointer text-gray-white"
                  onClick={onSearchCTAContainerClick}
                >
                  <div className="relative leading-[24px] font-medium">
                    Search
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col py-[53px] px-[50px] items-center justify-start gap-[45px]">
        <div className="self-stretch flex flex-col py-0 px-[30px] items-center justify-start gap-[24px] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Properties by Area
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row flex-wrap py-0 px-2.5 box-border items-start justify-center max-w-[95%px] text-left text-5xl text-gray-white">
          <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-1@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-1@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url(/card-1@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
              <div className="flex-1 rounded-lg h-[241px] flex flex-row p-2.5 box-border items-start justify-start relative bg-[url(/card-4@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Arlington
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row p-2.5 box-border items-start justify-start relative bg-[url(/card-4@3x.png)] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-primary-50 flex flex-col py-[70px] px-0 items-center justify-start">
        <div className="self-stretch flex flex-col pt-[75px] px-0 pb-0 box-border items-center justify-start gap-[54px] max-w-[95%px]">
          <div className="self-stretch flex flex-col py-0 px-[30px] box-border items-center justify-start gap-[24px] max-w-[95%px]">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Properties by Area
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-left text-base text-gray-700">
            <div className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col p-[22px] box-border items-start justify-start min-w-[300px] max-w-[340px]">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <img
                  className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative text-5xl leading-[32px] font-semibold text-center">
                    Sell your home
                  </div>
                  <div className="relative leading-[24px] text-gray-400 flex items-end w-[268px]">
                    We do a free evaluation to be sure you want to start
                    selling.
                  </div>
                  <div className="relative leading-[24px] text-primary-500">
                    Read more
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] w-[312px] flex flex-col py-[22px] px-4 box-border items-start justify-start min-w-[300px] max-w-[340px]">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <img
                  className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative text-5xl leading-[32px] font-semibold text-center">
                    Rent your home
                  </div>
                  <div className="relative leading-[24px] text-gray-400 flex items-end w-[268px]">
                    We do a free evaluation to be sure you want to start
                    selling.
                  </div>
                  <div className="relative leading-[24px] text-primary-500">
                    Read more
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col p-[22px] box-border items-start justify-start min-w-[300px] max-w-[340px]">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <img
                  className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative text-5xl leading-[32px] font-semibold text-center">
                    Buy a home
                  </div>
                  <div className="relative leading-[24px] text-gray-400 flex items-end w-[268px]">
                    We do a free evaluation to be sure you want to start
                    selling.
                  </div>
                  <div className="relative leading-[24px] text-primary-500">
                    Read more
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] w-[312px] flex flex-col py-[22px] px-5 box-border items-start justify-start min-w-[300px] max-w-[340px]">
              <div className="flex flex-col items-start justify-start gap-[24px]">
                <img
                  className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <div className="relative text-5xl leading-[32px] font-semibold text-center">
                    Free marketing
                  </div>
                  <div className="relative leading-[24px] text-gray-400 flex items-end w-[268px]">
                    We do a free evaluation to be sure you want to start
                    selling.
                  </div>
                  <div className="relative leading-[24px] text-primary-500">
                    Read more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1920px] flex flex-col py-[86px] px-0 box-border items-center justify-start gap-[39px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Latest Properties of Rent
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px] text-left text-[14.51px] text-gray-700">
            <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
              <img
                className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                alt=""
                src="/unsplashrlwe8f8anoc@2x.png"
              />
              <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                <div className="flex-1 relative leading-[20.32px] font-medium">
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className="self-stretch flex flex-row p-2.5 items-start justify-start text-[13.55px] text-primary-500">
                <div className="relative leading-[18.98px] font-semibold">
                  $ 590,693
                </div>
              </div>
              <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start gap-[17px] text-[10.84px] text-gray-500">
                <div className="flex flex-row items-center justify-start gap-[4.35px]">
                  <img
                    className="relative w-[17.42px] h-[17.42px]"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.35px]">
                  <img
                    className="relative w-[17.42px] h-[17.42px]"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.35px]">
                  <img
                    className="relative w-[17.42px] h-[17.42px]"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    2,096.00 ft
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px]">
                <div className="flex flex-row items-center justify-start gap-[5.81px]">
                  <img
                    className="relative rounded-[50%] w-[27.57px] h-[27.57px] object-cover"
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                  <div className="relative leading-[17.42px] font-medium">
                    Jenny Wilson
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8.71px]">
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                    <img
                      className="relative w-[14.51px] h-[14.51px]"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                    <img
                      className="relative w-[14.51px] h-[14.51px]"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                    <img
                      className="relative w-[14.51px] h-[14.51px]"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
              <img
                className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                alt=""
                src="/unsplashrlwe8f8anoc@2x.png"
              />
              <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                <div className="flex-1 relative leading-[20.32px] font-medium">
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className="self-stretch flex flex-row p-2.5 items-start justify-start text-[13.55px] text-primary-500">
                <div className="relative leading-[18.98px] font-semibold">
                  $ 590,693
                </div>
              </div>
              <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start gap-[17px] text-[10.84px] text-gray-500">
                <div className="flex flex-row items-center justify-start gap-[4.35px]">
                  <img
                    className="relative w-[17.42px] h-[17.42px]"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.35px]">
                  <img
                    className="relative w-[17.42px] h-[17.42px]"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.35px]">
                  <img
                    className="relative w-[17.42px] h-[17.42px]"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    2,096.00 ft
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px]">
                <div className="flex flex-row items-center justify-start gap-[5.81px]">
                  <img
                    className="relative rounded-[50%] w-[27.57px] h-[27.57px] object-cover"
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                  <div className="relative leading-[17.42px] font-medium">
                    Jenny Wilson
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8.71px]">
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                    <img
                      className="relative w-[14.51px] h-[14.51px]"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                    <img
                      className="relative w-[14.51px] h-[14.51px]"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                    <img
                      className="relative w-[14.51px] h-[14.51px]"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
              <img
                className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                alt=""
                src="/unsplashrlwe8f8anoc@2x.png"
              />
              <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                <div className="flex-1 relative leading-[20.32px] font-medium">
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className="self-stretch flex flex-row p-2.5 items-start justify-start text-[13.55px] text-primary-500">
                <div className="relative leading-[18.98px] font-semibold">
                  $ 590,693
                </div>
              </div>
              <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start gap-[17px] text-[10.84px] text-gray-500">
                <div className="flex flex-row items-center justify-start gap-[4.35px]">
                  <img
                    className="relative w-[17.42px] h-[17.42px]"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.35px]">
                  <img
                    className="relative w-[17.42px] h-[17.42px]"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.35px]">
                  <img
                    className="relative w-[17.42px] h-[17.42px]"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    2,096.00 ft
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px]">
                <div className="flex flex-row items-center justify-start gap-[5.81px]">
                  <img
                    className="relative rounded-[50%] w-[27.57px] h-[27.57px] object-cover"
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                  <div className="relative leading-[17.42px] font-medium">
                    Jenny Wilson
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8.71px]">
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                    <img
                      className="relative w-[14.51px] h-[14.51px]"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                    <img
                      className="relative w-[14.51px] h-[14.51px]"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                    <img
                      className="relative w-[14.51px] h-[14.51px]"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-3xs bg-gray-white box-border h-[466.99px] flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
              <img
                className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                alt=""
                src="/unsplashrlwe8f8anoc@2x.png"
              />
              <div className="self-stretch flex flex-row p-2.5 items-start justify-start">
                <div className="flex-1 relative leading-[20.32px] font-medium">
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className="self-stretch flex flex-row p-2.5 items-start justify-start text-[13.55px] text-primary-500">
                <div className="relative leading-[18.98px] font-semibold">
                  $ 590,693
                </div>
              </div>
              <div className="self-stretch flex flex-row py-0 px-2.5 items-start justify-start gap-[17px] text-[10.84px] text-gray-500">
                <div className="flex flex-row items-center justify-start gap-[4.35px]">
                  <img
                    className="relative w-[17.42px] h-[17.42px]"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.35px]">
                  <img
                    className="relative w-[17.42px] h-[17.42px]"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.35px]">
                  <img
                    className="relative w-[17.42px] h-[17.42px]"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className="relative leading-[16.27px] font-medium">
                    2,096.00 ft
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px]">
                <div className="flex flex-row items-center justify-start gap-[5.81px]">
                  <img
                    className="relative rounded-[50%] w-[27.57px] h-[27.57px] object-cover"
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                  <div className="relative leading-[17.42px] font-medium">
                    Jenny Wilson
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8.71px]">
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                    <img
                      className="relative w-[14.51px] h-[14.51px]"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                    <img
                      className="relative w-[14.51px] h-[14.51px]"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row p-[2.902620315551758px] items-start justify-start">
                    <img
                      className="relative w-[14.51px] h-[14.51px]"
                      alt=""
                      src="/icon.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded bg-primary-500 flex flex-row py-3 px-6 items-start justify-start text-base text-gray-white">
          <div className="relative leading-[24px] font-medium">
            Load more listing
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Latest Properties of Rent
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-base text-gray-white">
            <div className="flex-1 rounded-md h-[426px] flex flex-col p-6 box-border items-center justify-end bg-[url(/card-11@3x.png)] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px]">
              <div className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px]">
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img className="relative w-6 h-6" alt="" src="/icon.svg" />
                  <div className="relative leading-[24px] font-medium">
                    Washington
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img className="relative w-6 h-6" alt="" src="/icon.svg" />
                  <div className="relative leading-[24px] font-medium">
                    12000
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-md h-[426px] flex flex-col p-6 box-border items-center justify-end bg-[url(/card-11@3x.png)] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px]">
              <div className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px]">
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img className="relative w-6 h-6" alt="" src="/icon.svg" />
                  <div className="relative leading-[24px] font-medium">
                    Washington
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img className="relative w-6 h-6" alt="" src="/icon.svg" />
                  <div className="relative leading-[24px] font-medium">
                    12000
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-md h-[426px] flex flex-col p-6 box-border items-center justify-end bg-[url(/card-11@3x.png)] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px]">
              <div className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px]">
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img className="relative w-6 h-6" alt="" src="/icon.svg" />
                  <div className="relative leading-[24px] font-medium">
                    Washington
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img className="relative w-6 h-6" alt="" src="/icon.svg" />
                  <div className="relative leading-[24px] font-medium">
                    12000
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-md h-[426px] flex flex-col p-6 box-border items-center justify-end bg-[url(/card-11@3x.png)] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px]">
              <div className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px]">
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img className="relative w-6 h-6" alt="" src="/icon.svg" />
                  <div className="relative leading-[24px] font-medium">
                    Washington
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end gap-[8px]">
                  <img className="relative w-6 h-6" alt="" src="/icon.svg" />
                  <div className="relative leading-[24px] font-medium">
                    12000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded bg-primary-500 flex flex-row py-3 px-6 items-start justify-start text-base text-gray-white">
          <div className="relative leading-[24px] font-medium">
            Load more listing
          </div>
        </div>
      </div>
      <div className="self-stretch bg-primary-50 flex flex-row flex-wrap py-[86px] px-[5px] items-start justify-center">
        <div className="flex-1 flex flex-col py-0 px-2.5 box-border items-center justify-start gap-[40px] max-w-[900px]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Contact us
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-7 px-[30px] items-center justify-start gap-[17px] text-left text-5xl text-darkslategray font-poppins">
            <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
              <b className="self-stretch relative leading-[36px]">
                Enquiry Form
              </b>
              <div className="self-stretch relative text-[18px] leading-[30px] font-components-input-text text-slategray">
                Are you looking for details about a certain property? Ask us a
                question using the form below.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-base text-darkgray font-components-input-text">
              <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
                <div className="self-stretch flex-1 rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray md:flex-[unset] md:self-stretch">
                  <div className="relative tracking-[0.15px] leading-[24px]">
                    First name
                  </div>
                </div>
                <div className="self-stretch flex-1 rounded flex flex-col py-4 px-3 items-start justify-center border-[1px] border-solid border-gray md:flex-[unset] md:self-stretch">
                  <div className="relative tracking-[0.15px] leading-[24px]">
                    Last name
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded flex flex-col py-4 px-3 items-start justify-start border-[1px] border-solid border-gray">
                <div className="relative tracking-[0.15px] leading-[24px]">
                  Email id
                </div>
              </div>
              <div className="self-stretch rounded box-border h-[105px] flex flex-col p-3 items-start justify-start border-[1px] border-solid border-gray">
                <div className="relative tracking-[0.15px] leading-[24px]">
                  Comments or questions
                </div>
              </div>
              <div className="rounded bg-primary-500 w-[222px] h-[46px] flex flex-col items-center justify-center text-center text-gray-white">
                <div className="relative inline-block w-[203.12px]">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row p-[50px] items-start justify-start md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col">
        <footer className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-gray-black font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
          <div className="w-[312px] h-[300px] flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-large-400">
            <div className="flex flex-row items-center justify-center gap-[8px]">
              <img className="relative w-11 h-11" alt="" src="/icon.svg" />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px] font-semibold">
                  REIS
                </div>
                <div className="relative text-[14px] leading-[16px] font-medium">
                  Real State
                </div>
              </div>
            </div>
            <div className="self-stretch h-[168px] flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
              <div className="relative text-5xl leading-[32px] font-semibold text-gray-black">
                Contact Us
              </div>
              <div className="relative leading-[24px]">Call : +123 400 123</div>
              <div className="relative leading-[24px] flex items-end w-[312px]">
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
                auctor felis.
              </div>
              <div className="relative leading-[24px] text-gray-700">
                Email: example@mail.com
              </div>
            </div>
            <div className="w-[304px] flex flex-row items-center justify-between">
              <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                <img className="relative w-5 h-5" alt="" src="/icon.svg" />
              </div>
              <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
              </div>
              <div className="rounded bg-primary-50 flex flex-col p-3.5 items-center justify-center">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/icon.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
            <div className="relative leading-[32px] font-semibold">
              Features
            </div>
            <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
              <div className="relative leading-[24px]">Home</div>
              <div className="relative leading-[24px]">Become a Host</div>
              <div className="relative leading-[24px]">Pricing</div>
              <div className="relative leading-[24px]">Blog</div>
              <div className="relative leading-[24px]">Contact</div>
            </div>
          </div>
          <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
            <div className="relative leading-[32px] font-semibold">Company</div>
            <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
              <div className="relative leading-[24px]">About Us</div>
              <div className="relative leading-[24px]">Press</div>
              <div className="relative leading-[24px]">Contact</div>
              <div className="relative leading-[24px]">Careers</div>
              <div className="relative leading-[24px]">Blog</div>
            </div>
          </div>
          <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px]">
            <div className="relative leading-[32px] font-semibold">
              Team and policies
            </div>
            <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
              <div className="relative leading-[24px]">Terms of servies</div>
              <div className="relative leading-[24px]">Privacy Policy</div>
              <div className="relative leading-[24px]">Security</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
