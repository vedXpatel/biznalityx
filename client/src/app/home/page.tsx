import type { NextPage } from "next";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";
import Link from 'next/link';
import {Button, ButtonGroup} from "@nextui-org/react";


const UpBusiness: NextPage = () => {
  return (
    <div>
      <Navbar shouldHideOnScroll style={{background:'black'}}>
      <NavbarBrand>
      <img
          style={{
            position: "relative",
            width: "43px",
            height: "43px",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/arrowup.svg"
        />
      <div style={{ position: "relative", fontWeight: "600", color: "#ffffff" }}>
          BIZNALYTIX
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
        <Button as={Link} color="primary" href="/dashboard" variant="light">
            Dashboard
          </Button>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            SCM
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    <div
      style={{
        borderRadius: "48px",
        backgroundColor: "#000000",
        height: "9585px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "24px",
        color: "#ffffff", // Change font color to white
        fontFamily: "Inter",
      }}
    >
      

      <div
        style={{
          position: "absolute",
          top: "82px",
          left: "131px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          fontSize: "36px",
          color: "#ffffff", // Change font color to white
        }}
      >
        
        
      </div>
      
      <div
        style={{
          position: "absolute",
          width: "calc(100% - 1119px)",
          top: "72px",
          right: "72px",
          left: "1047px",
          height: "63px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "calc(100% - 625px)",
            top: "0px",
            right: "0px",
            left: "625px",
            borderRadius: "12px",
            backgroundColor: "#7c76bb",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "425px",
          left: "-164px",
          borderRadius: "50%",
          backgroundColor: "rgba(220, 240, 255, 0.25)",
          // backdropFilter: "blur(12px)",
          width: "467px",
          height: "467px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "752px",
          left: "866px",
          borderRadius: "50%",
          backgroundColor: "rgba(220, 240, 255, 0.25)",
          // backdropFilter: "blur(12px)",
          width: "234px",
          height: "234px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "211px",
          left: "1520px",
          borderRadius: "50%",
          backgroundColor: "rgba(220, 240, 255, 0.25)",
          // backdropFilter: "blur(12px)",
          width: "345px",
          height: "345px",
        }}
      />
      <img
        style={{
          position: "absolute",
          top: "135px",
          left: "757px",
          width: "1160px",
          height: "888px",
          objectFit: "cover",
        }}
        alt=""
        src="/build-your-business@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "330px",
          left: "131px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "48px",
          fontSize: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "47px",
          }}
        >
          <b
            style={{
              position: "relative",
              display: "inline-block",
              width: "695px",
              height: "237px",
              flexShrink: "0",
            }}
          >
            <span>{`How to `}</span>
            <span style={{ color: "#ff87b0" }}>level up</span>
            <span> your business</span>
          </b>
          <div
            style={{
              position: "relative",
              fontSize: "24px",
              // color: "rgba(0, 0, 0, 0.61)",
              color: "#ffffff",
              display: "inline-block",
              width: "690px",
              height: "150px",
              flexShrink: "0",
            }}
          >
            At Biznalytix, we specialize in providing cutting-edge predictive analysis for businesses venturing into new locations and optimizing supply chains. Whether you're plotting expansion strategies or fine-tuning your supply chain, our predictive insights will be your guide to unparalleled success.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "52px",
            fontSize: "24px",
            color: "#fff",
          }}
        >
          <div
            style={{
              borderRadius: "12px",
              backgroundColor: "#7c76bb",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "15px 32px",
            }}
          >
            <div style={{ position: "relative", fontWeight: "500" }}>
              How we work
            </div>
          </div>
          <div
            style={{
              borderRadius: "9px",
              border: "3px solid #7c76bb",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px 32px",
              gap: "10px",
              color: "#7c76bb",
            }}
          >
            <div style={{ position: "relative", fontWeight: "500" }}>
              Let’s talk
            </div>
            <img
              style={{
                position: "relative",
                width: "24px",
                height: "24px",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/arrowright.svg"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "1070px",
          left: "180px",
          width: "1560px",
          height: "232px",
          fontSize: "30px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "14px",
            // backgroundColor: "rgba(220, 240, 255, 0.07)",
            // backgroundColor: "rgba(233, 233, 231, 0.21)",
            backgroundColor: "white",
            boxShadow: "0px 14px 37px -10px rgba(178, 178, 178, 0.17)",
            width: "1560px",
            height: "232px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "48px",
            left: "427px",
            width: "706px",
            height: "36px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "35px",
              fontWeight: "600",
              color:"black"
            }}
          >{`We working with customers brands and startups `}</div>
          <img
            style={{
              position: "absolute",
              height: "66.67%",
              width: "3.4%",
              top: "16.67%",
              right: "96.6%",
              bottom: "16.67%",
              left: "0%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            alt=""
            src="/chevronleft.svg"
          />
          <img
            style={{
              position: "absolute",
              height: "66.67%",
              width: "3.4%",
              top: "16.67%",
              right: "0%",
              bottom: "16.67%",
              left: "96.6%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            alt=""
            src="/chevronright.svg"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "126px",
            left: "79px",
            width: "1402px",
            height: "43px",
            // backgroundColor:"rgba(248,248,248,0.08)"
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "193px",
              height: "43px",
              objectFit: "cover",
            }}
            alt=""
            src="/image-1@2x.png"
          />
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "330px",
              width: "129px",
              height: "43px",
              objectFit: "cover",
            }}
            alt=""
            src="/image-2@2x.png"
          />
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "596px",
              width: "170px",
              height: "43px",
              objectFit: "cover",
            }}
            alt=""
            src="/image-3@2x.png"
          />
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "903px",
              width: "144px",
              height: "43px",
              objectFit: "cover",
            }}
            alt=""
            src="/image-4@2x.png"
          />
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "1184px",
              width: "218px",
              height: "43px",
              objectFit: "cover",
            }}
            alt=""
            src="/image-5@2x.png"
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "1435px",
          left: "0px",
          width: "1920px",
          height: "790px",
          color: "#ff87b0",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "45px",
            left: "0px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "304.9px",
            height: "323px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "153px",
            left: "189.73px",
            width: "812.74px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "44px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "38px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "25px",
                }}
              >
                {/* <div
                  style={{ position: "relative", fontWeight: "600" }}
                >{`Portfolio Service `}</div> */}
                <b
                  style={{
                    position: "relative",
                    fontSize: "64px",
                    display: "inline-block",
                    color: "#7c76bb",
                    width: "861px",
                  }}
                >
                  Why Choose Predictive Excellence With Us?
                </b>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                // color: "rgba(0, 0, 0, 0.61)",
                color: "#ffffff",
                display: "inline-block",
                width: "657px",
                height: "160px",
                flexShrink: "0",
              }}
            >
              Unlock the power of data-driven decision-making with our predictive analytics. From pinpointing optimal business locations to streamlining supply chains for peak efficiency, our solutions are designed to elevate your business strategies and outcomes. Join us in transforming possibilities into realities!
            </div>
          </div>
          {/* <div
            style={{
              position: "relative",
              width: "238px",
              height: "33px",
              fontSize: "20px",
              color: "rgba(0, 0, 0, 0.61)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "143px",
                width: "95px",
                height: "33px",
              }}
            >
              <div style={{ position: "absolute", top: "0px", left: "0px" }}>
                Case study
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "31.5px",
                  left: "-1.5px",
                  borderTop: "3px solid rgba(124, 118, 187, 0.31)",
                  boxSizing: "border-box",
                  width: "98px",
                  height: "3px",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "101px",
                height: "33px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "35px",
                  width: "66px",
                  height: "33px",
                }}
              >
                <div style={{ position: "absolute", top: "0px", left: "0px" }}>
                  See live
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "31.5px",
                    left: "-1.5px",
                    borderTop: "3px solid #7c76bb",
                    boxSizing: "border-box",
                    width: "69px",
                    height: "3px",
                  }}
                />
              </div>
              <img
                style={{
                  position: "absolute",
                  height: "72.73%",
                  width: "23.76%",
                  top: "15.15%",
                  right: "76.24%",
                  bottom: "12.12%",
                  left: "0%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                }}
                alt=""
                src="/playbuttono.svg"
              />
            </div>
          </div> */}
        </div>
        <div
          style={{
            position: "absolute",
            top: "323px",
            left: "1479.18px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "440.83px",
            height: "467px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "960.94px",
            width: "899.59px",
            height: "715px",
            objectFit: "cover",
          }}
          alt=""
          src="/ecommerce-2@2x.png"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "2307px",
          left: "0px",
          width: "1920px",
          height: "568px",
          color: "#ff87b0",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "15px",
            left: "564.83px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "364.37px",
            height: "349px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "1017.94px",
            height: "568px",
            objectFit: "cover",
          }}
          alt=""
          src="/finance-1@2x.png"
        />
        <div
          style={{
            position: "absolute",
            top: "284px",
            left: "1651.68px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "257.88px",
            height: "247px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "97px",
            left: "1052.4px",
            width: "867.6px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "43px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "38px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "25px",
                }}
              >
                {/* <div
                  style={{ position: "relative", fontWeight: "600" }}
                >Our Mission</div> */}
                <b
                  style={{
                    position: "relative",
                    fontSize: "64px",
                    display: "inline-block",
                    color: "#7c76bb",
                    width: "831px",
                  }}
                >
                  Our Mission
                </b>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                color: "#ffffff",
                display: "inline-block",
                width: "657px",
                height: "160px",
                flexShrink: "0",
              }}
            >
              At Biznalytix, our mission is to revolutionize the way businesses approach expansion and supply chain management. We are committed to providing businesses with predictive analytics that empower informed decisions, mitigate risks, and drive sustained growth.
            </div>
          </div>
          {/* <div
            style={{
              position: "relative",
              width: "238px",
              height: "33px",
              fontSize: "20px",
              color: "rgba(0, 0, 0, 0.61)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "143px",
                width: "95px",
                height: "33px",
              }}
            >
              <div style={{ position: "absolute", top: "0px", left: "0px" }}>
                Case study
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "31.5px",
                  left: "-1.5px",
                  borderTop: "3px solid rgba(124, 118, 187, 0.31)",
                  boxSizing: "border-box",
                  width: "98px",
                  height: "3px",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "101px",
                height: "33px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "35px",
                  width: "66px",
                  height: "33px",
                }}
              >
                <div style={{ position: "absolute", top: "0px", left: "0px" }}>
                  See live
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "31.5px",
                    left: "-1.5px",
                    borderTop: "3px solid #7c76bb",
                    boxSizing: "border-box",
                    width: "69px",
                    height: "3px",
                  }}
                />
              </div>
              <img
                style={{
                  position: "absolute",
                  height: "72.73%",
                  width: "23.76%",
                  top: "15.15%",
                  right: "76.24%",
                  bottom: "12.12%",
                  left: "0%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                }}
                alt=""
                src="/playbuttono1.svg"
              />
            </div>
          </div> */}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "3082px",
          left: "0px",
          width: "1920px",
          height: "688px",
          color: "#ff87b0",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "399px",
            left: "0px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "252.01px",
            height: "244px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "140px",
            left: "113.61px",
            width: "858.27px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "43px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "38px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "25px",
                }}
              >
                {/* <div style={{ position: "relative", fontWeight: "600" }}>
                  Portfolio Service
                </div> */}
                <b
                  style={{
                    position: "relative",
                    fontSize: "64px",
                    display: "inline-block",
                    color: "#7c76bb",
                    width: "831px",
                  }}
                >
                  Our Approach
                </b>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                color: "#ffffff",
                display: "inline-block",
                width: "657px",
                height: "88px",
                flexShrink: "0",
              }}
            >
              Our unique approach integrates advanced predictive analysis into aspect of your business strategy. By leveraging data-driven insights, we assist you in identifying prime business locations and optimizing supply chains for maximum efficiency. Let's embark on a journey where data shapes success!
            </div>
          </div>
          {/* <div
            style={{
              position: "relative",
              width: "238px",
              height: "33px",
              fontSize: "20px",
              color: "rgba(0, 0, 0, 0.61)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "143px",
                width: "95px",
                height: "33px",
              }}
            >
              <div style={{ position: "absolute", top: "0px", left: "0px" }}>
                Case study
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "31.5px",
                  left: "-1.5px",
                  borderTop: "3px solid rgba(124, 118, 187, 0.31)",
                  boxSizing: "border-box",
                  width: "98px",
                  height: "3px",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "101px",
                height: "33px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "35px",
                  width: "66px",
                  height: "33px",
                }}
              >
                <div style={{ position: "absolute", top: "0px", left: "0px" }}>
                  See live
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "31.5px",
                    left: "-1.5px",
                    borderTop: "3px solid #7c76bb",
                    boxSizing: "border-box",
                    width: "69px",
                    height: "3px",
                  }}
                />
              </div>
              <img
                style={{
                  position: "absolute",
                  height: "72.73%",
                  width: "23.76%",
                  top: "15.15%",
                  right: "76.24%",
                  bottom: "12.12%",
                  left: "0%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                }}
                alt=""
                src="/playbuttono2.svg"
              />
            </div>
          </div> */}
        </div>
        <div
          style={{
            position: "absolute",
            top: "37px",
            left: "1065.86px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "403.83px",
            height: "391px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "971.88px",
            width: "948.12px",
            height: "688px",
            objectFit: "cover",
          }}
          alt=""
          src="/messages-1@2x.png"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "3906px",
          left: "0px",
          width: "1920px",
          height: "676px",
          color: "#ff87b0",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "113px",
            left: "438.35px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "432.1px",
            height: "415px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "1039.13px",
            height: "676px",
            objectFit: "cover",
          }}
          alt=""
          src="/service-1@2x.png"
        />
        <div
          style={{
            position: "absolute",
            top: "134px",
            left: "1049.54px",
            width: "870.46px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "43px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "38px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "25px",
                }}
              >
                {/* <div style={{ position: "relative", fontWeight: "600" }}>
                  Portfolio Service
                </div> */}
                <b
                  style={{
                    position: "relative",
                    fontSize: "64px",
                    display: "inline-block",
                    color: "#7c76bb",
                    width: "836px",
                  }}
                >
                  See The Future, Act Today 
                </b>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                color: "#ffffff",
                display: "inline-block",
                width: "657px",
                height: "88px",
                flexShrink: "0",
              }}
            >
              Ready to see how predictive analysis can reshape the future of your business? Join us on a journey where predictions aren't just forecasts but blueprints for success. Let's turn data into decisive action and pave the way for your business's triumphant tomorrow.
            </div>
          </div>
          {/* <div
            style={{
              position: "relative",
              width: "238px",
              height: "33px",
              fontSize: "20px",
              color: "rgba(0, 0, 0, 0.61)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "143px",
                width: "95px",
                height: "33px",
              }}
            >
              <div style={{ position: "absolute", top: "0px", left: "0px" }}>
                Case study
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "31.5px",
                  left: "-1.5px",
                  borderTop: "3px solid rgba(124, 118, 187, 0.31)",
                  boxSizing: "border-box",
                  width: "98px",
                  height: "3px",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "101px",
                height: "33px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "35px",
                  width: "66px",
                  height: "33px",
                }}
              >
                <div style={{ position: "absolute", top: "0px", left: "0px" }}>
                  See live
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "31.5px",
                    left: "-1.5px",
                    borderTop: "3px solid #7c76bb",
                    boxSizing: "border-box",
                    width: "69px",
                    height: "3px",
                  }}
                />
              </div>
              <img
                style={{
                  position: "absolute",
                  height: "72.73%",
                  width: "23.76%",
                  top: "15.15%",
                  right: "76.24%",
                  bottom: "12.12%",
                  left: "0%",
                  maxWidth: "100%",
                  overflow: "hidden",
                  maxHeight: "100%",
                }}
                alt=""
                src="/playbuttono3.svg"
              />
            </div>
          </div> */}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "4699px",
          left: "471px",
          width: "971px",
          height: "299.33px",
          fontSize: "64px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "724.11px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "215.21px",
            height: "215.21px",
            transform: " rotate(34.57deg)",
            transformOrigin: "0 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "74px",
            left: "0px",
            width: "971px",
            height: "171px",
          }}
        >
          <b style={{ position: "absolute", top: "0px", left: "225px" }}>
            Our main services
          </b>
          <div
            style={{
              position: "absolute",
              top: "103px",
              left: "0px",
              fontSize: "24px",
              color: "#ffffff",
              textAlign: "center",
              display: "inline-block",
              width: "971px",
              height: "68px",
            }}
          >
            Elevate your business with our core services—Predictive Analysis for Strategic Expansion, enabling informed market entries; Supply Chain Optimization, revolutionizing efficiency through predictive insights; and Location Intelligence, harnessing the power of foresight for successful ventures. Predict the future, act decisively, and thrive with Biznalytix.
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "5089px",
          left: "52px",
          width: "1869px",
          height: "860px",
          textAlign: "center",
          fontSize: "36px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "551.95px",
            height: "860px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "20.11px",
              borderRadius: "34px",
              backgroundColor: "rgba(39, 163, 255, 0.16)",
              boxShadow: "0px 14px 37px -10px rgba(178, 178, 178, 0.17)",
              width: "511.74px",
              height: "860px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "485px",
              left: "92.69px",
              fontWeight: "600",
              textAlign: "left",
              display: "inline-block",
              width: "393.57px",
            }}
          >
            Optimize Supply Chain 
          </div>
          <div
            style={{
              position: "absolute",
              top: "559px",
              left: "56.3px",
              fontSize: "22px",
              color: "#ffffff",
              display: "inline-block",
              width: "439.35px",
              height: "150px",
            }}
          >{`Explore predictive supply chain optimization forecast demand, minimize disruptions, and maximize efficiency. Uncover how predictive analytics transforms your processes, a true game-changer for business success. `}</div>
          <div
            style={{
              position: "absolute",
              top: "748px",
              left: "204.09px",
              borderRadius: "13px",
              border: "2px solid #7c76bb",
              boxSizing: "border-box",
              width: "142.76px",
              height: "47px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "17px",
              fontSize: "20px",
            }}
          >
            <div style={{ position: "relative", fontWeight: "500" }}>
              Learn more
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              top: "35px",
              left: "0px",
              width: "551.95px",
              height: "412px",
              objectFit: "cover",
            }}
            alt=""
            src="/search-1@2x.png"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "578.09px",
            width: "663.55px",
            height: "860px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "77.41px",
              borderRadius: "34px",
              backgroundColor: "rgba(39, 163, 255, 0.16)",
              boxShadow: "0px 14px 37px -10px rgba(178, 178, 178, 0.17)",
              width: "511.74px",
              height: "860px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "485px",
              left: "168.9px",
              fontWeight: "600",
              textAlign: "left",
              display: "inline-block",
              width: "328.76px",
            }}
          >
            Location Intelligence
          </div>
          <div
            style={{
              position: "absolute",
              top: "559px",
              left: "111.6px",
              fontSize: "22px",
              color: "#ffffff",
              display: "inline-block",
              width: "439.35px",
              height: "125px",
            }}
          >{`Grasp location intelligence's role in expansion. Learn how predictive analysis assesses new locations, identifies challenges, and informs success. `}</div>
          <div
            style={{
              position: "absolute",
              top: "748px",
              left: "262.4px",
              borderRadius: "13px",
              border: "2px solid #7c76bb",
              boxSizing: "border-box",
              width: "142.76px",
              height: "47px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "17px",
              fontSize: "20px",
            }}
          >
            <div style={{ position: "relative", fontWeight: "500" }}>
              Learn more
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              top: "7px",
              left: "0px",
              width: "663.55px",
              height: "495px",
              objectFit: "cover",
            }}
            alt=""
            src="/instagram-shot-1@2x.png"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "1225.56px",
            width: "643.44px",
            height: "860px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "65.35px",
              borderRadius: "34px",
              backgroundColor: "rgba(39, 163, 255, 0.16)",
              boxShadow: "0px 14px 37px -10px rgba(178, 178, 178, 0.17)",
              width: "511.74px",
              height: "860px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "485px",
              left: "200.07px",
              fontWeight: "600",
              textAlign: "left",
              display: "inline-block",
              width: "272.3px",
            }}
          >
            Maximise Profit
          </div>
          <div
            style={{
              position: "absolute",
              top: "559px",
              left: "101.54px",
              fontSize: "24px",
              color: "white",
              display: "inline-block",
              width: "439.35px",
              height: "125px",
            }}
          >{`
          
Elevate profits, trim costs: Our strategies optimize your financial landscape, maximizing earnings and minimizing expenses for sustainable business success. `}</div>
          <div
            style={{
              position: "absolute",
              top: "748px",
              left: "255.37px",
              borderRadius: "13px",
              border: "2px solid #7c76bb",
              boxSizing: "border-box",
              width: "142.76px",
              height: "47px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "17px",
              fontSize: "20px",
            }}
          >
            <div style={{ position: "relative", fontWeight: "500" }}>
              Learn more
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "643.44px",
              height: "480px",
              objectFit: "cover",
            }}
            alt=""
            src="/product-launch-1@2x.png"
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "6129px",
          left: "777px",
          width: "529.7px",
          height: "400.7px",
          textAlign: "center",
          fontSize: "64px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "292.47px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "288.1px",
            height: "288.1px",
            transform: " rotate(34.57deg)",
            transformOrigin: "0 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "61px",
            left: "183.12px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "167.64px",
            height: "167.64px",
            transform: " rotate(34.57deg)",
            transformOrigin: "0 0",
          }}
        />
        <b style={{ position: "absolute", top: "102px", left: "0px" }}>
          Testimonials
        </b>
      </div>
      <div
        style={{
          position: "absolute",
          top: "6418px",
          left: "0px",
          width: "1920px",
          height: "1336.99px",
          color: "rgba(0, 0, 0, 0.61)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "239px",
            left: "841.45px",
            borderRadius: "24px",
            backgroundColor: "rgba(220, 240, 255, 0.04)",
            boxShadow: "0px 14px 37px -10px rgba(178, 178, 178, 0.17)",
            width: "984.95px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "66px",
            boxSizing: "border-box",
            gap: "36px",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "200px",
              backgroundColor: "#b4d1c4",
              width: "94px",
              height: "94px",
              overflow: "hidden",
              flexShrink: "0",
            }}
          >
            <img
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                maxWidth: "100%",
                overflow: "hidden",
                maxHeight: "100%",
                objectFit: "cover",
              }}
              alt=""
              src="/1@2x.png"
            />
          </div>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              width: "795px",
              flexShrink: "0",
            }}
          >
            <p style={{ margin: "" }}>
              <span>
                <span style={{ lineHeight: "0%", color:"white" }}>
                  “Biznalytix has been instrumental in transforming our approach to business expansion. Their predictive analysis not only identified the most lucrative locations for growth but also guided us through potential challenges. Thanks to their insights, we made informed decisions that have propelled our success to new heights”
                </span>
              </span>
            </p>
            <p style={{ margin: "10px" }}>
              {/* <span>
                <span style={{ lineHeight: "148.34%", fontWeight: "600" }}>
                  Sed arcu, enim eu adipiscing enim vulputate vulputate semper
                  adipiscing.
                </span>
                <span
                  style={{ lineHeight: "0%", fontFamily: "Inter" }}
                >{` `}</span>
              </span> */}
              <span
                style={{
                  lineHeight: "148.34%",
                  fontWeight: "600",
                  fontFamily: "Inter",
                  color: "#7c76bb",
                }}
              >
              Alex Murphy
              </span>
            </p>
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "990.54px",
            height: "797px",
            objectFit: "cover",
          }}
          alt=""
          src="/awards-1@2x.png"
        />
        <div
          style={{
            position: "absolute",
            top: "559px",
            left: "1788.45px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "163.61px",
            height: "167.77px",
            transform: " rotate(36.48deg)",
            transformOrigin: "0 0",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "101px",
            left: "841.45px",
            width: "88.83px",
            height: "95.33px",
            overflow: "hidden",
          }}
          alt=""
          src="/leftquote-1.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "621px",
            left: "1720.16px",
            width: "88.83px",
            height: "95.33px",
            overflow: "hidden",
          }}
          alt=""
          src="/leftquote-2.svg"
        />
        <div
          style={{
            position: "absolute",
            top: "744px",
            left: "797.07px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "358.88px",
            height: "368.01px",
            transform: " rotate(36.48deg)",
            transformOrigin: "0 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "948px",
            left: "1702.58px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "223.92px",
            height: "229.61px",
            transform: " rotate(36.48deg)",
            transformOrigin: "0 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "1069px",
            left: "231.4px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "183.88px",
            height: "188.55px",
            transform: " rotate(36.48deg)",
            transformOrigin: "0 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "849px",
            left: "239.48px",
            width: "1569.21px",
            height: "382px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "200px",
              backgroundColor: "#f6de9d",
              width: "116.48px",
              height: "125px",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                maxWidth: "100%",
                overflow: "hidden",
                maxHeight: "100%",
                objectFit: "cover",
              }}
              alt=""
              src="/2@2x.png"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "157px",
              left: "0px",
              display: "inline-block",
              width: "410.01px",
              height: "225px",
            }}
          >
            <span
              style={{ lineHeight: "0%" , color:"white"}}
            >{`“Biznalytix provided spot-on location insights for our expansion. Predictive analysis swiftly identified challenges, enabling informed decisions that fueled our success.“ - `}</span>
            <span
              style={{
                lineHeight: "148.34%",
                fontWeight: "600",
                color: "#7c76bb",
              }}
            >
              John Miller
            </span>
          </div>
          <div
            style={{
              position: "absolute",
              top: "157px",
              left: "579.6px",
              display: "inline-block",
              width: "410.01px",
              height: "225px",
            }}
          >
            <span
              style={{ lineHeight: "0%" ,color:"white"}}
            >{`“Biznalytix transformed our supply chain. Predictive strategies minimized disruptions, maximizing efficiency. Analytics are a game-changer for our business. “ - `}</span>
            <span
              style={{
                lineHeight: "148.34%",
                fontWeight: "600",
                color: "#7c76bb",
              }}
            >
              Joe Bright
            </span>
          </div>
          <div
            style={{
              position: "absolute",
              top: "157px",
              left: "1159.2px",
              display: "inline-block",
              width: "410.01px",
              height: "225px",
            }}
          >
            <span
              style={{ lineHeight: "0%" ,color:"white" }}
            >{`“Biznalytix elevated our market entry with precise predictions. Location intelligence and analysis navigated pitfalls, guiding us to success with informed decisions. “ - `}</span>
            <span
              style={{
                lineHeight: "148.34%",
                fontWeight: "600",
                color: "#7c76bb",
              }}
            >
              David Murphy
            </span>
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "579.6px",
              borderRadius: "200px",
              backgroundColor: "rgba(255, 135, 176, 0.85)",
              width: "116.48px",
              height: "125px",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "6%",
                right: "0%",
                bottom: "-6%",
                left: "0%",
                maxWidth: "100%",
                overflow: "hidden",
                maxHeight: "100%",
                objectFit: "cover",
              }}
              alt=""
              src="/27-23@2x.png"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "1159.2px",
              borderRadius: "200px",
              backgroundColor: "#ada8d6",
              width: "116.48px",
              height: "125px",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: "0%",
                right: "0%",
                bottom: "0%",
                left: "0%",
                maxWidth: "100%",
                overflow: "hidden",
                maxHeight: "100%",
                objectFit: "cover",
              }}
              alt=""
              src="/12@2x.png"
            />
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            height: "3.66%",
            width: "2.38%",
            top: "95.51%",
            right: "5.8%",
            bottom: "0.82%",
            left: "91.82%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src="/arrowright1.svg"
        />
        <img
          style={{
            position: "absolute",
            height: "3.66%",
            width: "2.38%",
            top: "95.51%",
            right: "10.17%",
            bottom: "0.82%",
            left: "87.46%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src="/arrowright2.svg"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "7757px",
          left: "311.61px",
          width: "1230.81px",
          height: "968.22px",
          fontSize: "72px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "1015.05px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "262.01px",
            height: "262.01px",
            transform: " rotate(34.57deg)",
            transformOrigin: "0 0",
          }}
        />
        <b style={{ position: "absolute", top: "130px", left: "213.39px" }}>
          Start your business now !!!
        </b>
        <div
          style={{
            position: "absolute",
            top: "385.17px",
            left: "237.85px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "419.21px",
            height: "419.21px",
            transform: " rotate(34.57deg)",
            transformOrigin: "0 0",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "191px",
            left: "165.39px",
            width: "938px",
            height: "703px",
            objectFit: "cover",
          }}
          alt=""
          src="/shopping-1@2x.png"
        />
        <div
          style={{
            position: "absolute",
            top: "879px",
            left: "493.39px",
            borderRadius: "15px",
            border: "3px solid #7c76bb",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "17px 34px 17px 36px",
            gap: "28px",
            fontSize: "30px",
          }}
        >
          <div style={{ position: "relative", fontWeight: "500" }}>
            Let’s talk
          </div>
          <img
            style={{
              position: "relative",
              width: "37px",
              height: "37px",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src="/arrowright3.svg"
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "8801px",
          left: "0px",
          width: "1920px",
          height: "689px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "33px",
            left: "0px",
            backgroundColor: "#000000",
            width: "1920px",
            height: "683px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "460.68px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "256.01px",
            height: "265.71px",
            transform: " rotate(37.42deg)",
            transformOrigin: "0 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "329px",
            left: "1189.73px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "122.04px",
            height: "126.66px",
            transform: " rotate(37.42deg)",
            transformOrigin: "0 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "405px",
            left: "1674.69px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "308.88px",
            height: "320.58px",
            transform: " rotate(37.42deg)",
            transformOrigin: "0 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "535px",
            left: "104.21px",
            borderRadius: "50%",
            backgroundColor: "rgba(220, 240, 255, 0.25)",
            // backdropFilter: "blur(12px)",
            width: "190.43px",
            height: "197.65px",
            transform: " rotate(37.42deg)",
            transformOrigin: "0 0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "162px",
            left: "1416.52px",
            width: "287.27px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "19px",
          }}
        >
          <b style={{ position: "relative" }}>Contact us</b>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "13px",
              fontSize: "20px",
              color: "rgba(0, 0, 0, 0.61)",
            }}
          >
            <a
              style={{
                position: "relative",
                fontWeight: "500",
                color: "white",
                display: "inline-block",
                width: "319px",
                height: "33px",
                flexShrink: "0",
                textDecoration: "none",
              }}
              href="mailto:trungkienspktnd@gamail.com"
              target="_blank"
            >
              biznalytix@gmail.com
            </a>
            <div
              style={{
                position: "relative",
                fontWeight: "500",
                display: "inline-block",
                width: "164px",
                height: "32px",
                flexShrink: "0",
                color: "white"
              }}
            >
              +91 9876543210
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "162px",
            left: "1006.78px",
            width: "309.78px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "15px",
          }}
        >
          <b style={{ position: "relative" }}>Location</b>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "24px",
              fontSize: "20px",
              color: "rgba(0, 0, 0, 0.61)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "14px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  width: "26px",
                  height: "26px",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/frame.svg"
              />
              <div
                style={{
                  position: "relative",
                  lineHeight: "30px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "281px",
                  flexShrink: "0",
                  color:"white"
                }}
              >
                21, Dr.v.b.gandhi Marg, Kalagoda, Fort, Mumbai 400001
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "14px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  width: "26px",
                  height: "26px",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/frame1.svg"
              />
              <div
                style={{
                  position: "relative",
                  lineHeight: "30px",
                  fontWeight: "500",
                  display: "inline-block",
                  width: "304px",
                  height: "59px",
                  flexShrink: "0",
                  color:"white"
                }}
              >
                 8/28 Wea, Abdul Aziz Road, Delhi 110005
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "162px",
            left: "751.03px",
            width: "104.46px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "19px",
          }}
        >
          <b style={{ position: "relative" }}>About us</b>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "27px",
              fontSize: "20px",
              color: "rgba(0, 0, 0, 0.61)",
            }}
          >
            <div style={{ position: "relative", fontWeight: "500" , color:"white" }}>Home</div>
            <div style={{ position: "relative", fontWeight: "500" , color:"white" }}>
              How we work
            </div>
            <div style={{ position: "relative", fontWeight: "500" , color:"white"}}>
              Our team
            </div>
            <div style={{ position: "relative", fontWeight: "500" , color:"white"}}>
              Pricing
            </div>
            <div style={{ position: "relative", fontWeight: "500"  , color:"white"}}>Legal</div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "652px",
            left: "717.71px",
            width: "425.95px",
            height: "27px",
            fontSize: "20px",
            color: "rgba(0, 0, 0, 0.61)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              fontWeight: "500",
              display: "inline-block",
              width: "425.95px",
              height: "27px",
              color:"white"
            }}
          >{` © 2023 Biznalytix | All Rights Reserved `}</div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "156px",
            left: "178.3px",
            width: "413.34px",
            height: "228px",
            fontSize: "20px",
            color: "rgba(0, 0, 0, 0.61)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "413.34px",
              height: "143px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "67px",
                left: "18.91px",
                fontWeight: "500",
                display: "inline-block",
                width: "394.43px",
                height: "76px",
                color:"white"
              }}
            >
              Strategic Insights, Predictive Growth: Powering Your Business to New Horizons with Biznalytix
            </div>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                fontSize: "36px",
                color: "#7c76bb",
              }}
            >
              <img
                style={{
                  position: "relative",
                  width: "43px",
                  height: "43px",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/arrowup.svg"
              />
              <div style={{ position: "relative", fontWeight: "600" }}>
                Biznalytix
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "183px",
              left: "16.21px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "27px",
            }}
          >
            {/* <img
              style={{ position: "relative", width: "99px", height: "99px" }}
              alt=""
              src="/dribble.svg"
            /> */}
            <img
              style={{ position: "relative", width: "99px", height: "99px" }}
              alt=""
              src="/instagram.svg"
            />
            <img
              style={{ position: "relative", width: "99px", height: "99px" }}
              alt=""
              src="/facebook.svg"
            />
            <img
              style={{ position: "relative", width: "99px", height: "99px" }}
              alt=""
              src="/tiwtter.svg"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UpBusiness;
