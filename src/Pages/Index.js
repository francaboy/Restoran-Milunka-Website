import React, { useState } from "react";
import DatePicker from "react-datepicker";
import emailjs from "@emailjs/browser";

import "react-datepicker/dist/react-datepicker.css"; // CSS za kalendar

function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    people: "",
    
    datetime: null,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, datetime: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Slanje...");

    const templateParams = {
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  people: formData.people,
  
  datetime: formData.datetime ? formData.datetime.toLocaleString() : "",
};


    emailjs
      .send(
        "service_d04ss99", // Tvoj Service ID
        "template_6kmb0df", // Tvoj Template ID
        templateParams,
        "XvKjasZ6LpGAX2an6" // Tvoj Public Key
      )
      .then(
        () => {
          setStatus("Rezervacija poslana uspješno!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            people: "",
            
            datetime: null,
          });
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("Greška pri slanju. Pokušajte ponovo.");
        }
      );
  };

  return (
    <React.Fragment>
      <React.Fragment>
        {" "}
        {/*<div
          className="lqd-preloader-wrap lqd-preloader-dissolve"
          data-preloader-options='{ "animationType":  "scale", "animationTargets":  ".lqd-preloader-dissolve-el", "stagger":  12, "dir":  "y", "duration":  600 }'
        >
            <div className="lqd-preloader-inner flex flex-col">
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
            <div className="lqd-preloader-dissolve-el w-full flex-grow-1" />
          </div>
        </div>*/}
        <div id="wrap">
          <div className="lqd-sticky-placeholder hide hidden h-80" />
          <header
            id="site-header"
            className="main-header main-header-overlay sticky-header-noshadow pointer-events-none"
            data-sticky-header="true"
            data-sticky-values-measured="false"
            data-sticky-options='{"stickyTrigger": "first-section"}'
          >
            <section className="lqd-section px-40 md:hidden">
              <div className="container-fluid">
                <div className="row justify-between items-center">
                  <div className="col col-md-4 static p-0 text-start">
                    <div className="w-auto flex pointer-events-auto">
                      <button
                        className="nav-trigger main-nav-trigger collapsed style-1 fill-none txt-right nav-trigger-dark flex items-center justify-center uppercase tracking-2 leading-1em pointer-events-auto"
                        type="button"
                        data-ld-toggle="true"
                        data-bs-toggle="collapse"
                        data-bs-target="#main-header-collapse-1"
                        aria-expanded="false"
                        aria-controls="main-header-collapse-1"
                      >
                        <span className="bars relative inline-block">
                          <span className=" bars-inner w-full h-full flex flex-col rounded-inherit">
                            <span className="bar" />
                            <span className="bar" />
                            <span className="bar" />
                          </span>
                        </span>
                        <span className="txt inline-block whitespace-nowrap font-semibold transition-all text-11 text-white">
                          Navigacija
                        </span>
                      </button>
                    </div>
                    <div
                      className="navbar-fullscreen fixed h-100vh top-0 left-0"
                      id="main-header-collapse-1"
                    >
                      <div className="lqd-fsh-bg w-full h-full top-0 left-0 fixed flex">
                        <div className="lqd-fsh-bg-side-container lqd-fsh-bg-before-container relative flex-grow-1 h-full">
                          <span className="w-full h-full inline-block bg-green-900" />
                        </div>
                        <div className="container lqd-fsh-bg-container px-0 relative flex-grow-1 h-full">
                          <div className="row lqd-fsh-bg-row mx-0 h-full">
                            <div className="col col-md-3 px-0 lqd-fsh-bg-col h-full relative p-0">
                              <span className="w-full h-full inline-block bg-green-900" />
                            </div>
                            <div className="col col-md-3 px-0 lqd-fsh-bg-col h-full relative p-0">
                              <span className="w-full h-full inline-block bg-green-900" />
                            </div>
                            <div className="col col-md-3 px-0 lqd-fsh-bg-col h-full relative p-0">
                              <span className="w-full h-full inline-block bg-green-900" />
                            </div>
                            <div className="col col-md-3 px-0 lqd-fsh-bg-col h-full relative p-0">
                              <span className="w-full h-full inline-block bg-green-900" />
                            </div>
                          </div>
                        </div>
                        <div className="lqd-fsh-bg-side-container lqd-fsh-bg-after-container relative flex-grow-1 h-full">
                          <span className="w-full h-full inline-block bg-green-900" />
                        </div>
                      </div>
                      <div className="header-modules-container flex flex-col justify-center items-start flex-grow-1 h-100vh">
                        <div className="container module-container">
                          <div className="row">
                            <div className="col col-12">
                              <div className="relative flex items-center p-10 pointer-events-auto module-main-nav">
                                <div className="static">
                                  <div
                                    className="mobile-navbar-collapse navbar-collapse collapse"
                                    id="lqd-mobile-sec-nav"
                                    role="navigation"
                                  >
                                    <ul
                                      className="lqd-menu-counter-left lqd-menu-items-block main-nav-hover-fade-inactive items-stretch flex flex-col justify-start link-white-80 link-bold reset-ul"
                                      data-submenu-options='{"toggleType": "fade", "handler": "mouse-in-out"}'
                                      data-localscroll="true"
                                      data-localscroll-options='{"itemsSelector":"> li > a", "trackWindowScroll": true, "includeParentAsOffset": true}'
                                    >
                                      <li className="w-auto leading-1em py-10">
                                        <a
                                          className="relative flex items-stretch flex-grow-0 whitespace-nowrap overflow-hidden text-82 leading-1em"
                                          href="#banner"
                                        >
                                          Početna
                                        </a>
                                      </li>
                                      <li className="w-auto leading-1em py-10">
                                        <a
                                          className="relative flex items-stretch flex-grow-0 whitespace-nowrap overflow-hidden text-82 leading-1em"
                                          href="#about"
                                        >
                                          Naša Priča
                                        </a>
                                      </li>
                                      <li className="w-auto leading-1em py-10">
                                        <a
                                          className="relative flex items-stretch flex-grow-0 whitespace-nowrap overflow-hidden text-82 leading-1em"
                                          href="#text-box"
                                        >
                                          Menu
                                        </a>
                                      </li>
                                      <li className="w-auto leading-1em py-10">
                                        <a
                                          className="relative flex items-stretch flex-grow-0 whitespace-nowrap overflow-hidden text-82 leading-1em"
                                          href="#map"
                                        >
                                          Kontakt
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="relative w-full flex flex-wrap items-center border-bottom border-white-20 pb-10 mb-25">
                                <div className="w-50percent relative flex p-10 md:w-full">
                                  <div className="lqd-fancy-menu lqd-menu-td-none pointer-events-auto">
                                    <ul className="reset-ul inline-nav">
                                      <li className="mr-50 inline-flex relative w-auto items-center">
                                        <a
                                          className="text-white text-16"
                                          href="https://www.facebook.com/people/Restoran-Milunka/61574127065458/"
                                        >
                                          <span className="link-icon left-icon icon-next-to-label" />
                                          Fb.
                                        </a>
                                      </li>
                                      <li className="mr-50 inline-flex relative w-auto items-center">
                                        <a
                                          className="text-white text-16"
                                          href="https://www.instagram.com/restoran_milunka/"
                                        >
                                          <span className="link-icon left-icon icon-next-to-label" />
                                          Ig.
                                        </a>
                                      </li>
                                      <li className="inline-flex relative w-auto items-center">
                                        <a
                                          className="text-white text-16"
                                          href="tel:+38765246666"
                                        >
                                          <span className="link-icon left-icon icon-next-to-label" />
                                          Wa.
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="w-50percent relative flex p-10 md:w-full">
                                  <div className="ld-fancy-heading pointer-events-auto">
                                    <p className="ld-fh-element mb-0/5em text-16 leading-1/5em text-white">
                                      <a className="text-white" href="!#">
                                        milunkagastroatelje@gmail.com
                                      </a>
                                      <span>
                                        {" "}
                                        - Tražite savršen spoj tradicije i
                                        modernog ukusa? Javite nam se – Restoran
                                        Milunka je pravo mjesto za vas!
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-4 static p-0 text-center">
                    <div className="module-logo no-rotate navbar-brand-plain flex w-full items-center justify-center py-35 pointer-events-auto">
                      <a className="navbar-brand" href="!#" rel="home">
                        <span className="navbar-brand-inner">
                          <img
                            className="logo-dark"
                            src="./assets/images/demo/restaurant/logo/logo-dark.svg"
                            alt="Restaurant"
                          />
                          <img
                            className="logo-sticky"
                            src="./assets/images/demo/restaurant/logo/logo-dark.svg"
                            alt="Restaurant"
                          />
                          <img
                            className="logo-default"
                            src="./assets/images/demo/restaurant/logo/logo-1.svg"
                            alt="Restaurant"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="col col-md-4 static p-0 text-end">
                    <div className="flex items-center justify-end pointer-events-auto">
                      <a
                        href="#contact-modal"
                        className="btn btn-underlined btn-hover-txt-liquid-x border-thick uppercase text-11 font-semibold leading-24 tracking-2 text-white hover:text-white before:bg-white after:bg-accent"
                        data-lity="#contact-modal"
                      >
                        <span
                          className="btn-txt"
                          data-text="Make a reservation"
                          data-split-text="true"
                          data-split-options='{"type": "chars, words"}'
                        >
                          Rezervacija
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="lqd-mobile-sec elementor">
              <div className="lqd-mobile-sec-inner navbar-header flex items-stretch">
                <div className="lqd-mobile-modules-container empty" />
                <button
                  type="button"
                  className="bg-transparent border-none navbar-toggle collapsed nav-trigger style-mobile flex relative items-center justify-end p-0"
                  data-ld-toggle="true"
                  data-bs-toggle="collapse"
                  data-bs-target="#lqd-mobile-sec-nav"
                  aria-expanded="false"
                  data-toggle-options='{ "changeClassnames": {"html": "mobile-nav-activated"} }'
                >
                  <span className="sr-only">Navigacija</span>
                  <span className="bars inline-block relative z-1">
                    <span className="bars-inner flex flex-col w-full h-full">
                      <span className="bar inline-block" />
                      <span className="bar inline-block" />
                      <span className="bar inline-block" />
                    </span>
                  </span>
                </button>
                <a className="navbar-brand" href="!#">
                  <span className="navbar-brand-inner justify-start">
                    <img
                      className="logo-default"
                      src="./assets/images/demo/restaurant/logo/logo-dark.svg"
                      alt="Restaurant"
                    />
                  </span>
                </a>
              </div>
              <div className="lqd-mobile-sec-nav">
                <div
                  className="mobile-navbar-collapse navbar-collapse collapse"
                  id="lqd-mobile-sec-nav"
                  role="navigation"
                >
                  <ul
                    className="lqd-mobile-main-nav main-nav reset-ul"
                    data-localscroll="true"
                    data-localscroll-options='{"itemsSelector":"> li > a", "trackWindowScroll": true, "includeParentAsOffset": true}'
                  >
                    <li>
                      <a href="#banner">Početna</a>
                    </li>
                    <li>
                      <a href="#about">Naša Priča</a>
                    </li>
                    <li>
                      <a href="#text-box">Menu</a>
                    </li>
                    <li>
                      <a href="#map">Kontakt</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <main className="content bg-orange-100" id="lqd-site-content">
            <div id="lqd-contents-wrap">
              {/* Start Banner */}
              <section
                className="lqd-section banner bg-no-rapeat bg-center bg-cover transition-all"
                id="banner"
                style={{
                  backgroundImage:
                    "url(./assets/images/demo/restaurant/banner/bg-1.jpg)",
                }}
              >
                <div
                  className="background-overlay transition-all bg-transparent "
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg, #000 0%, #00000000 100%)",
                  }}
                />
                <div className="container min-h-100vh flex flex-col justify-center items-center">
                  <div className="row">
                    <div
                      className="col col-12 text-center"
                      data-parallax="true"
                      data-parallax-options='{"ease": "linear", "start": "top top", "end": "bottom+=100% top"}'
                      data-parallax-from='{"transformPerspective": "px", "y": "0px", "opacity" : 1}'
                      data-parallax-to='{"y": "-40%", "opacity" : 0}'
                    >
                      <div className="ld-fancy-heading">
                        <h6
                          className="ld-fh-element mb-3em lqd-split-words text-white"
                          data-split-text="true"
                          data-split-options='{"type": "words"}'
                        >
                          {" "}
                          Moderna kuhinja u srcu Banjaluke
                        </h6>
                      </div>
                      <div className="ld-fancy-heading">
                        <h1
                          className="ld-fh-element mb-0/5em lqd-split-words text-78 leading-1em text-white"
                          data-split-text="true"
                          data-split-options='{"type": "words"}'
                        >
                          {" "}
                          Gastro Atelje Milunka
                        </h1>
                      </div>
                      <a
                        href="#contact-modal"
                        className="btn btn-solid btn-hover-txt-switch-change btn-hover-txt-switch btn-hover-txt-switch-y rounded-4 bg-orange-100 text-11 font-semibold uppercase leading-1/6em tracking-2 text-black module-btn-px hover:bg-secondary hover:text-white"
                        data-lity="#contact-modal"
                      >
                        <span
                          className="btn-txt"
                          data-text="vaše mjesto."
                          data-split-text="true"
                          data-split-options='{"type": "chars, words"}'
                        >
                          Rezervišite
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Banner */}
              {/* Start Navigation BTN */}
              <section className="lqd-section navigation-btn">
                <div className="continer">
                  <div className="row">
                    <div className="col col-12 text-center p-0">
                      <div className="flex -mt-100 w-full justify-center items-center module-btn">
                        <a
                          href="#about"
                          className="btn btn-solid btn-custom-size btn-icon-right w-35 h-35 rotate-45 rounded-6 bg-orange-100  text-11 font-semibold uppercase leading-1/6em tracking-2text-black hover:bg-secondary hover:text-white"
                          data-localscroll="true"
                        >
                          <span className="btn-icon text-18 m-0">
                            <i
                              aria-hidden="true"
                              className="lqd-icn-ess icon-ion-ios-arrow-down -rotate-45"
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Navigation BTN */}
              {/* Start Date 
              <section className="lqd-section date border-bottom border-black-20 pl-45 transition-all pt-10">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col col-12 p-0">
                      <div className="lqd-contact-form lqd-contact-form-inputs-underlined lqd-contact-form-inputs-border-none lqd-contact-form-button-block lqd-contact-form-button-underlined lqd-contact-form-button-border-none lqd-contact-form-inputs-lg">
                        <div role="form" className="lqd-cf" lang="en-US">
                          <div className="screen-reader-response">
                            <p
                              role="status"
                              aria-live="polite"
                              aria-atomic="true"
                            />
                          </div>
                          <form
                            action="./assets/php/mailer.php"
                            method="post"
                            className="lqd-cf-form"
                            noValidate="novalidate"
                            data-status="init"
                          >
                            <div className="flex flex-wrap">
                              <div
                                className="w-20percent relative flex pl-50 md:w-50percent"
                                data-col={20}
                              >
                                <svg
                                  className="absolute top-50percent left-5percent"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14.875"
                                  height={17}
                                  viewBox="0 0 14.875 17"
                                >
                                  <path
                                    id="Path-5"
                                    data-name="Path-5"
                                    d="M10.412-4.781c-.953,0-1.411.531-2.975.531s-2.019-.531-2.975-.531A4.464,4.464,0,0,0,0-.319v.85A1.594,1.594,0,0,0,1.594,2.125H13.281A1.594,1.594,0,0,0,14.875.531v-.85A4.464,4.464,0,0,0,10.412-4.781ZM13.281.531H1.594v-.85A2.874,2.874,0,0,1,4.463-3.187a13,13,0,0,0,2.975.531,12.874,12.874,0,0,0,2.975-.531A2.874,2.874,0,0,1,13.281-.319ZM7.437-5.312a4.782,4.782,0,0,0,4.781-4.781,4.782,4.782,0,0,0-4.781-4.781,4.782,4.782,0,0,0-4.781,4.781A4.782,4.782,0,0,0,7.437-5.312Zm0-7.969a3.193,3.193,0,0,1,3.187,3.187A3.193,3.193,0,0,1,7.437-6.906,3.193,3.193,0,0,1,4.25-10.094,3.193,3.193,0,0,1,7.437-13.281Z"
                                    transform="translate(0 14.875)"
                                    fill="#bba07a"
                                  />
                                </svg>
                                <span
                                  className="w-full block m-0 lqd-cf-form-control-wrap"
                                  data-name="text"
                                >
                                  <input
                                    type="text"
                                    name="name"
                                    defaultValue=""
                                    size={40}
                                    className="lqd-cf-form-control text-black bg-transparent px-0"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Ime"
                                  />
                                </span>
                              </div>
                              <div
                                className="w-20percent relative flex pl-50 border-left border-black-10 md:w-50percent"
                                data-col={20}
                              >
                                <svg
                                  className="absolute top-50percent left-5percent"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20.305"
                                  height="15.94"
                                  viewBox="0 0 20.305 15.94"
                                >
                                  <path
                                    id="fi-rr-envelope"
                                    d="M16.075,1H4.23C1.9,1,0,2.623,0,4.623v8.694c0,2,1.9,3.62,4.23,3.623H16.075c2.335,0,4.227-1.623,4.23-3.623V4.623c0-2-1.9-3.62-4.23-3.623ZM4.23,2.449H16.075a2.566,2.566,0,0,1,2.352,1.367L11.948,9.365a2.855,2.855,0,0,1-3.591,0L1.878,3.816A2.566,2.566,0,0,1,4.23,2.449ZM16.075,15.491H4.23a2.377,2.377,0,0,1-2.538-2.174V5.709l5.469,4.68a4.754,4.754,0,0,0,5.983,0l5.469-4.68v7.608A2.377,2.377,0,0,1,16.075,15.491Z"
                                    transform="translate(0 -1)"
                                    fill="#bba07a"
                                  />
                                </svg>
                                <span
                                  className="w-full block m-0 lqd-cf-form-control-wrap"
                                  data-name="email"
                                >
                                  <input
                                    type="email"
                                    name="email"
                                    defaultValue=""
                                    size={40}
                                    className="lqd-cf-form-control text-black bg-transparent px-0"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="E-mail"
                                  />
                                </span>
                              </div>
                              <div
                                className="w-20percent relative flex pl-50 border-left border-black-10 md:border-0 md:w-50percent"
                                data-col={20}
                              >
                                <svg
                                  className="absolute top-50percent left-5percent"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19.533"
                                  height="19.533"
                                  viewBox="0 0 19.533 19.533"
                                >
                                  <g
                                    id="fi-rr-calendar"
                                    transform="translate(0 0)"
                                  >
                                    <path
                                      id="Path-2"
                                      data-name="Path-2"
                                      d="M15.464,1.628H14.65V.814a.814.814,0,0,0-1.628,0v.814H6.511V.814a.814.814,0,1,0-1.628,0v.814H4.069A4.074,4.074,0,0,0,0,5.7v9.767a4.074,4.074,0,0,0,4.069,4.069H15.464a4.074,4.074,0,0,0,4.069-4.069V5.7A4.074,4.074,0,0,0,15.464,1.628ZM1.628,5.7A2.442,2.442,0,0,1,4.069,3.256H15.464A2.442,2.442,0,0,1,17.906,5.7v.814H1.628ZM15.464,17.906H4.069a2.442,2.442,0,0,1-2.442-2.442V8.139H17.906v7.325A2.442,2.442,0,0,1,15.464,17.906Z"
                                      fill="#bba07a"
                                    />
                                    <circle
                                      id="Ellipse-1"
                                      data-name="Ellipse-1"
                                      cx="1.221"
                                      cy="1.221"
                                      r="1.221"
                                      transform="translate(8.546 10.988)"
                                      fill="#bba07a"
                                    />
                                    <circle
                                      id="Ellipse-2"
                                      data-name="Ellipse-2"
                                      cx="1.221"
                                      cy="1.221"
                                      r="1.221"
                                      transform="translate(4.476 10.988)"
                                      fill="#bba07a"
                                    />
                                    <circle
                                      id="Ellipse-3"
                                      data-name="Ellipse-3"
                                      cx="1.221"
                                      cy="1.221"
                                      r="1.221"
                                      transform="translate(12.615 10.988)"
                                      fill="#bba07a"
                                    />
                                  </g>
                                </svg>
                                <span
                                  className="w-full block m-0 lqd-cf-form-control-wrap"
                                  data-name="date"
                                >
                                  <input
                                    type="text"
                                    name="date"
                                    defaultValue=""
                                    className="lqd-cf-form-control lqd-cf-validates-as-date hasDatepicker bg-transparent px-0"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Datum"
                                  />
                                </span>
                                <i className="lqd-icn-ess icon-ion-ios-arrow-down" />
                              </div>
                              <div
                                className="w-20percent relative flex pl-50 border-left border-black-10 md:w-50percent"
                                data-col={20}
                              >
                                <svg
                                  className="absolute top-50percent left-5percent"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18.875"
                                  height="18.875"
                                  viewBox="0 0 18.875 18.875"
                                >
                                  <g
                                    id="fi-rr-clock"
                                    transform="translate(0 0)"
                                  >
                                    <path
                                      id="Path-3"
                                      data-name="Path-3"
                                      d="M9.438,0a9.438,9.438,0,1,0,9.438,9.438A9.438,9.438,0,0,0,9.438,0Zm0,17.3A7.865,7.865,0,1,1,17.3,9.438,7.865,7.865,0,0,1,9.438,17.3Z"
                                      fill="#bba07a"
                                    />
                                    <path
                                      id="Path-4"
                                      data-name="Path-4"
                                      d="M10.966,6a.786.786,0,0,0-.786.786v3.4L7.528,11.849a.788.788,0,1,0,.835,1.337l3.02-1.888a.786.786,0,0,0,.369-.675V6.786A.786.786,0,0,0,10.966,6Z"
                                      transform="translate(-1.528 -1.281)"
                                      fill="#bba07a"
                                    />
                                  </g>
                                </svg>
                                <span
                                  className="w-full block m-0 lqd-cf-form-control-wrap"
                                  data-name="text"
                                >
                                  <input
                                    type="text"
                                    name="name"
                                    defaultValue=""
                                    size={40}
                                    className="lqd-cf-form-control text-black bg-transparent px-0"
                                    aria-required="true"
                                    aria-invalid="false"
                                    placeholder="Vrijeme"
                                  />
                                </span>
                                <i className="lqd-icn-ess icon-ion-ios-arrow-down" />
                              </div>
                              <div
                                className="w-20percent border-left border-black-10 md:w-full md:border-0"
                                data-col={20}
                              >
                                <input
                                  type="submit"
                                  value="Rezervišite"
                                  className="lqd-cf-form-control has-spinner text-11 tracking-2 leading-1/6em font-semibold bg-transparent uppercase rounded-4 text-black hover:bg-black hover:text-white"
                                />
                              </div>
                            </div>
                          </form>
                          <div className="lqd-cf-response-output" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
               End Date */}
              {/* Start About */}
              <section className="lqd-section about pt-140 pb-80" id="about">
                <div className="container">
                  <div className="row">
                    <div
                      className="w-35percent relative flex lg:w-50percent sm:w-full sm:order-last"
                      data-custom-animations="true"
                      data-ca-options='{"addPerspective": false, "animationTarget": ".animation-element", "initValues" :{"x": "-10px", "y": "10px", "opacity" : 0} , "animations" :{"x": "0px", "y": "0px", "opacity" : 1}}'
                    >
                      <div className="w-full sticky flex flex-wrap flex-col items-start top-110 transition-all p-10">
                        <div className="ld-fancy-heading w-auto mb-20 border-1 border-black rounded-4 animation-element">
                          <h6 className="ld-fh-element text-black my-0/25em mx-1/5em">
                            Restoran Milunka – Više od gastronomije
                          </h6>
                        </div>
                        <div className="ld-fancy-heading animation-element">
                          <h2 className="ld-fh-element mb-0/35em">O Nama.</h2>
                        </div>
                        <div className="ld-fancy-heading animation-element">
                          <p className="ld-fh-element pr-10percent mb-1/5em text-16 leading-1/4em">
                            Inspirisani lokalnim nasljeđem i savremenim
                            tehnikama kuvanja, naš tim donosi jela koja
                            balansiraju između poznatog i neočekivanog. U fokusu
                            su male serije, lokalni proizvođači, sezonske
                            namirnice i posvećenost detaljima. Iza svega stoji
                            chef Saša Stanivuković, čija je misija jasna:
                            vratiti autentičnost ukusu i kuhinji koju pamtimo.
                          </p>
                          <p className="ld-fh-element pr-10percent mb-1/5em text-16 leading-1/4em">
                            U srcu Banjaluke, Milunka donosi novu interpretaciju tradicionalnih sastojaka, kreirajući jedinstvena gastronomska iskustva za sve koji cijene dobru hranu, detalje i atmosferu. Naša filozofija je jednostavna – poštujemo namirnicu a trudeći se zadržimo autentičnost . Svaki tanjir je priča, a svaka posjeta prilika da se otkriju novi slojevi ukusa.

                          </p>
                        </div>
                        <a
                          href="#contact-modal"
                          className="btn btn-solid btn-xl btn-hover-txt-liquid-x border-2 border-black bg-transparent text-12 font-semibold uppercase leading-1/6em tracking-2 text-brown-500 hover:text-white animation-element"
                          data-lity="#contact-modal"
                        >
                          <span
                            className="btn-txt"
                            data-text="Rezervacija"
                            data-split-text="true"
                            data-split-options='{"type": "chars, words"}'
                          >
                            Rezervacija
                          </span>
                        </a>
                      </div>
                    </div>
                    <div
                      className="w-45percent px-15 relative flex flex-wrap justify-end mb-15percent content-start lg:w-40percent sm:w-full module-middle sm:justify-start"
                      data-custom-animations="true"
                      data-ca-options='{"addPerspective": false, "animationTarget": ".animation-element", "startDelay" : 500, "initValues" :{"x": "10px", "y": "10px", "opacity" : 0} , "animations" :{"x": "0px", "y": "0px", "opacity" : 1}}'
                    >
                      <div
                        className="w-350 relative"
                        data-parallax="true"
                        data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom+=0px top"}'
                        data-parallax-from='{"transformPerspective": "px", "y": "60px"}'
                        data-parallax-to='{"y": "-115px"}'
                      >
                        <div
                          className="lqd-imggrp-single relative block rounded-6"
                          data-hover3d="true"
                        >
                          <div
                            className="lqd-imggrp-img-container animation-element"
                            data-stacking-factor={1}
                          >
                            <figure className="w-full">
                              <img
                                width={714}
                                height={798}
                                src="./assets/images/demo/restaurant/about/2@2x.jpg"
                                alt="o nama"
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-300 absolute module-img"
                        data-parallax="true"
                        data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom+=55% top"}'
                        data-parallax-from='{"transformPerspective": "px", "y": "60px"}'
                        data-parallax-to='{"y": "-40px"}'
                      >
                        <div
                          className="lqd-imggrp-single relative block rounded-6"
                          data-hover3d="true"
                        >
                          <div
                            className="lqd-imggrp-img-container animation-element"
                            data-stacking-factor={1}
                          >
                            <figure className="w-full">
                              <img
                                width={606}
                                height={642}
                                src="./assets/images/demo/restaurant/about/1@2x.jpg"
                                alt="o nama"
                              />
                            </figure>
                            
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-auto max-w-full absolute z-1 -bottom-35percent module-text"
                        data-parallax="true"
                        data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom+=0px top"}'
                        data-parallax-from='{"transformPerspective": "px", "y": "30px"}'
                        data-parallax-to='{"y": "-49px"}'
                      >
                        <div className="ld-fancy-heading animation-element">
                          <p className="ld-fh-element ml-2em mb-0/5em text-vertical vertical-medium text-12 text-secondary font-semibold uppercase tracking-2 sm:text-horizontal">
                            Gastro atelje Milunka
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-20percent relative flex flex-wrap content-start justify-end mt-55 p-10 sm:justify-start lg:w-10percent sm:w-full sm:order-first module-bottom"
                      data-custom-animations="true"
                      data-ca-options='{"addPerspective": false, "animationTarget": ".animation-element", "startDelay" : 800, "initValues" :{"x": "10px", "y": "10px", "opacity" : 0} , "animations" :{"x": "0px", "y": "0px", "opacity" : 1}}'
                    >
                      <div className="ld-fancy-heading w-full text-end sm:text-start animation-element">
                        <h6 className="ld-fh-element m-0">
                          Novo Doba Starih
                        </h6>
                      </div>
                      <div
                        className="w-full relative"
                        data-parallax="true"
                        data-parallax-options='{"ease": "linear", "start": "top bottom", "end": "bottom+=100% top"}'
                        data-parallax-from='{"transformPerspective": "px", "y": "0px", "scaleX" : 1, "scaleY" : 1}'
                        data-parallax-to='{"y": "100px", "scaleX" : 1.5, "scaleY" : 1.5}'
                      >
                        <div className="ld-fancy-heading module-number text-end sm:text-start animation-element">
                          <p className="ld-fh-element m-0 text-86 leading-1em text-secondary">
                            Ukusa.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End About */}
              {/* Start Experience */}
              <section className="lqd-section experience py-110">
                <div className="container flex flex-wrap mx-auto p-0">
                  <div
                    className="w-40percent flex sm:w-full"
                    data-custom-animations="true"
                    data-ca-options='{"addPerspective": false, "animationTarget": ".animation-element", "duration" : 1500, "initValues" :{"x": "-10px", "scaleX" : 0.8, "scaleY" : 0.8, "opacity" : 0} , "animations" :{"x": "0px", "scaleX" : 1, "scaleY" : 1, "opacity" : 1}}'
                  >
                    <div className="swiper-container w-full relative flex items-center justify-center bg-yellow-100 transition-all py-35 pr-25 pl-35 rounded-10 rounded-right-0">
                      <div className="w-full relative flex items-center justify-center module-img">
                        <div className="w-full h-full absolute rounded-10 z-0 top-0 left-0">
                          <div className="w-full h-full relative z-1">
                            <div className="carousel-container carousel-dots-mobile-inside carousel-dots-mobile-center">
                              <div
                                className="carousel-items"
                                data-lqd-flickity='{"fade": true, "cellAlign": "center", "autoPlay" :true, "prevNextButtons": false, "pageDots": false, "groupCells": false, "wrapAround" :true, "pauseAutoPlayOnHover": false}'
                              >
                                <div className="carousel-item w-full">
                                  <img
                                    className="h-full objfit-cover"
                                    src="./assets/images/demo/restaurant/experience/5@2x-1.jpg"
                                    alt="milunka"
                                  />
                                </div>
                                <div className="carousel-item w-full">
                                  <img
                                    className="h-full objfit-cover"
                                    src="./assets/images/demo/restaurant/experience/6@2x-1.jpg"
                                    alt="milunka"
                                  />
                                </div>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-60percent flex sm:w-full"
                    data-custom-animations="true"
                    data-ca-options='{"addPerspective": false, "animationTarget": ".ld-fancy-heading", "startDelay" : 100, "delay" : 70, "initValues" :{"x": "-10px", "y": "10px", "opacity" : 0} , "animations" :{"x": "0px", "y": "0px", "opacity" : 1}}'
                  >
                    <div className="w-full flex flex-wrap items-center justify-center bg-yellow-100 transition-all py-65 pr-65 pl-40 rounded-10 rounded-left-0 module-content">
                      <div className="w-full mb-40 border-top border-bottom border-black">
                        <div className="ld-fancy-heading text-center">
                          <h3 className="ld-fh-element m-0 text-13 font-semibold uppercase tracking-1 py-1/5em">
                            Šefov potpis.
                          </h3>
                        </div>
                      </div>
                      <div className="w-50percent flex flex-col pr-45 sm:w-full module-col-first">
                        <div className="ld-fancy-heading">
                          <h3 className="ld-fh-element mb-1/35em text-14 uppercase font-semibold tracking-0/5 text-green-700">
                            Šef Saša – Srce naše kuhinje
                          </h3>
                        </div>
                        <div className="ld-fancy-heading">
                          <p className="ld-fh-element mb-4em text-16 leading-1/25em">
                            Kad god tanjir iz naše kuhinje stigne pred vas, znajte da iza njega stoji šef Saša. Od predjela do glavnog jela, on je taj koji vodi glavnu riječ – u začinima, tehnikama, mirisima i balansu. Iskusan, predan i nepokolebljivo posvećen svakom detalju, Saša ne priznaje prosječnost. Njegova filozofija je jasna: samo ono što bi poslužio svojoj porodici može izaći iz kuhinje Milunke. Svako jelo nosi njegov potpis – autentično, domaće i iskreno.
                          </p>
                        </div>
                      
                      </div>
                      <div className="w-50percent flex flex-col pr-45 pl-35 sm:w-full module-col-last">
                        <div className="ld-fancy-heading">
                          <h3 className="ld-fh-element mb-1/35em text-14 uppercase font-semibold tracking-0/5 text-green-700">
                          Šef Stefan – Slatka strana
                          </h3>
                        </div>
                        <div className="ld-fancy-heading">
                          <p className="ld-fh-element mb-4em text-16 leading-1/25em">
                            Kad dođe vrijeme za desert, šef Stefan preuzima pozornicu. Njegov teren su šećer, čokolada i zlatne kore koje pucaju pod viljuškom. Svaka poslastica iz njegovih ruku priča priču – bilo da se radi o modernoj varijaciji klasične torte ili o receptu prenesenom s bakinog stola. Stefan ne pravi deserte samo da budu slatki – on ih stvara da budu nezaboravni.
                          </p>
                        </div>
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Experience */}
              {/* Start Image BG */}
              <section
                className="lqd-section image-bg pt-120 pb-140 bg-no-rapeat bg-center bg-cover transition-all"
                style={{
                  backgroundImage:
                    "url(./assets/images/demo/restaurant/image-bg/bg-22.jpg)",
                }}
              >
                <div
                  className="background-overlay w-full h-full absolute top-0 left-0 bg-transparent opacity-100 transition-all"
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg, #0E0B07 0%, #0E0B0700 82%)",
                  }}
                />
                <div className="container">
                  <div className="row justify-center">
                    <div
                      className="col col-12 col-md-10 col-lg-8 text-center"
                      data-parallax="true"
                      data-parallax-options='{"ease": "linear", "start": "top top", "end": "bottom+=0% top"}'
                      data-parallax-from='{"transformPerspective": "px", "y": "0px", "opacity" : 1}'
                      data-parallax-to='{"y": "-40%", "opacity" : 0}'
                      data-custom-animations="true"
                      data-ca-options='{"addPerspective": false, "animationTarget": ".btn, .lqd-split-words .lqd-words", "delay" : 70, "initValues" :{"x": "-10px", "y": "10px", "opacity" : 0} , "animations" :{"x": "0px", "y": "0px", "opacity" : 1}}'
                    >
                      <div className="ld-fancy-heading">
                        <h4
                          className="ld-fh-element mb-2em lqd-split-words text-white"
                          data-split-text="true"
                          data-split-options='{"type": "words"}'
                        >
                          Pogledajte kako živimo gastronomiju.
                        </h4>
                      </div>
                      
                      <a
                        href="https://www.youtube.com/watch?v=-FVgpu8p4BE"
                        className="btn btn-solid btn-hover-txt-switch-change btn-hover-txt-switch btn-hover-txt-switch-y bg-orange-100 rounded-4 text-11 font-semibold uppercase leading-1/6em tracking-2 text-black module-btn-px hover:bg-secondary hover:text-white"
                        data-fresco-group="gallery"
                        aria-label="milunka"
                      >
                        <span
                          className="btn-txt"
                          data-text="Ukuse"
                          data-split-text="true"
                          data-split-options='{"type": "chars, words"}'
                        >
                          Otkrijte
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Image BG */}
              {/* Start Experience */}
              <section className="lqd-section experience py-110">
                <div className="container flex flex-wrap mx-auto p-0">
                  <div
                    className="w-40percent flex sm:w-full"
                    data-custom-animations="true"
                    data-ca-options='{"addPerspective": false, "animationTarget": ".animation-element", "duration" : 1500, "initValues" :{"x": "-10px", "scaleX" : 0.8, "scaleY" : 0.8, "opacity" : 0} , "animations" :{"x": "0px", "scaleX" : 1, "scaleY" : 1, "opacity" : 1}}'
                  >
                    <div className="swiper-container w-full relative flex items-center justify-center bg-yellow-100 transition-all py-35 pr-25 pl-35 rounded-10 rounded-right-0">
                      <div className="w-full relative flex items-center justify-center module-img">
                        <div className="w-full h-full absolute rounded-10 z-0 top-0 left-0">
                          <div className="w-full h-full relative z-1">
                            <div className="carousel-container carousel-dots-mobile-inside carousel-dots-mobile-center">
                              <div
                                className="carousel-items"
                                data-lqd-flickity='{"fade": true, "cellAlign": "center", "autoPlay" :true, "prevNextButtons": false, "pageDots": false, "groupCells": false, "wrapAround" :true, "pauseAutoPlayOnHover": false}'
                              >
                                <div className="carousel-item w-full">
                                  <img
                                    className="h-full objfit-cover"
                                    src="./assets/images/demo/restaurant/experience/1@2x-1.jpg"
                                    alt="milunka"
                                  />
                                </div>
                                <div className="carousel-item w-full">
                                  <img
                                    className="h-full objfit-cover"
                                    src="./assets/images/demo/restaurant/experience/2@2x-1.jpg"
                                    alt="milunka"
                                  />
                                </div>
                                <div className="carousel-item w-full">
                                  <img
                                    className="h-full objfit-cover"
                                    src="./assets/images/demo/restaurant/experience/3@2x-1.jpg"
                                    alt="milunka"
                                  />
                                </div>
                                <div className="carousel-item w-full">
                                  <img
                                    className="h-full objfit-cover"
                                    src="./assets/images/demo/restaurant/experience/4@2x-1.jpg"
                                    alt="milunka"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-60percent flex sm:w-full"
                    data-custom-animations="true"
                    data-ca-options='{"addPerspective": false, "animationTarget": ".ld-fancy-heading", "startDelay" : 100, "delay" : 70, "initValues" :{"x": "-10px", "y": "10px", "opacity" : 0} , "animations" :{"x": "0px", "y": "0px", "opacity" : 1}}'
                  >
                    <div className="w-full flex flex-wrap items-center justify-center bg-yellow-100 transition-all py-65 pr-65 pl-40 rounded-10 rounded-left-0 module-content">
                      <div className="w-full mb-40 border-top border-bottom border-black">
                        <div className="ld-fancy-heading text-center">
                          <h3 className="ld-fh-element m-0 text-13 font-semibold uppercase tracking-1 py-1/5em">
                            Milunkina Preporuka Za Hedoniste.
                          </h3>
                        </div>
                      </div>
                      <div className="w-50percent flex flex-col pr-45 sm:w-full module-col-first">
                        <div className="ld-fancy-heading">
                          <h3 className="ld-fh-element mb-1/35em text-14 uppercase font-semibold tracking-0/5 text-green-700">
                            Četiri slijeda
                          </h3>
                        </div>
                        <div className="ld-fancy-heading">
                          <p className="ld-fh-element mb-4em text-16 leading-1/25em">
                            Carpaccio, Ravioli, Obrazi, Desert Natalija.
                          </p>
                        </div>
                       
                      </div>
                      <div className="w-50percent flex flex-col pr-10 pl-35 sm:w-full module-col-last">
                        <div className="ld-fancy-heading">
                          <h3 className="ld-fh-element mb-1/35em text-14 uppercase font-semibold tracking-0/5 text-green-700">
                            Bukovo Manastir Merlot
                          </h3>
                        </div>
                        <div className="ld-fancy-heading">
                          <p className="ld-fh-element mb-4em text-16 leading-1/25em">
                            Izražena punoća ukusa i vrlo nježni tanini.
                          </p>
                        </div>
                        <div className="ld-fancy-heading">
                          <h3 className="ld-fh-element mb-1/35em text-14 uppercase font-semibold tracking-0/5 text-green-700">
                            Temet Tri Morave
                          </h3>
                        </div>
                        <div className="ld-fancy-heading">
                          <p className="ld-fh-element mb-4em text-16 leading-1/25em">
                            Svježe note crvenog voća,na ukusu živahan.
                          </p>
                        </div>
                        <div className="ld-fancy-heading">
                          <h3 className="ld-fh-element mb-1/35em text-14 uppercase font-semibold tracking-0/5 text-green-700">
                            Trianon Erdevik
                          </h3>
                        </div>
                        <div className="ld-fancy-heading">
                          <p className="ld-fh-element mb-4em text-16 leading-1/25em">
                            Snažne arome zrelog crvenog i crnog voća.
                          </p>
                        </div>
                        <div className="ld-fancy-heading">
                          <h3 className="ld-fh-element mb-1/35em text-14 uppercase font-semibold tracking-0/5 text-green-700">
                           Moscato D'Asti Palas
                          </h3>
                        </div>
                        <div className="ld-fancy-heading">
                          <p className="ld-fh-element mb-4em text-16 leading-1/25em">
                            Sa aromama belog cvijeća i tropskog voća.
                          </p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Experience */}
              {/* Start Icon Box */}
              <section
                className="lqd-section icon-box transition-all"
                data-custom-animations="true"
                data-ca-options='{"addPerspective": false, "animationTarget": ".animation-element", "initValues" :{"x": "-15px", "y": "10px", "opacity" : 0} , "animations" :{"x": "0px", "y": "0px", "opacity" : 1}}'
              >
                
                 
                  <div className="w-full flex items-center justify-center sm:w-full animation-element">
                    <div className="w-255 relative mt-45 mb-55 text-center">
                      <div className="iconbox iconbox-default flex-col items-center justify-center relative">
                        <div className="iconbox-icon-wrap">
                          <span className="iconbox-icon-container text-50 leading-1em text-primary mb-20">
                            <svg
                              className="w-40 relative h-auto"
                              xmlns="http://www.w3.org/2000/svg"
                              width="38.878"
                              height={54}
                              viewBox="0 0 38.878 54"
                            >
                              <path
                                d="M108.381,20.64H105.33a8.674,8.674,0,0,0-.553-4.016,7.081,7.081,0,0,1-.487-2.586,7.156,7.156,0,0,1,.729-3.137L105.76,9.4l.362.178h0a1.638,1.638,0,0,0,2.192-.747L109.8,5.805a1.64,1.64,0,0,0-.747-2.192l-7-3.444a1.637,1.637,0,0,0-2.192.747L98.373,3.937A1.638,1.638,0,0,0,99.12,6.13l.362.178-.741,1.506A7.126,7.126,0,0,1,94.356,11.5a8.7,8.7,0,0,0-5.363,4.508L86.714,20.64H73.624a2.063,2.063,0,0,0-2.06,2.06v4.456a2.063,2.063,0,0,0,2.06,2.06h.445L77.032,52.2A2.064,2.064,0,0,0,79.075,54h2.018a.792.792,0,0,0,0-1.585H79.075A.476.476,0,0,1,78.6,52L75.668,29.216h2.9v6.329a2.063,2.063,0,0,0,2.06,2.06h10.8a2.063,2.063,0,0,0,2.06-2.06V29.216h5.2a.792.792,0,1,0,0-1.585h-5.2V22.225h14.891a.476.476,0,0,1,.475.475v4.456a.476.476,0,0,1-.475.475h-5.99a.792.792,0,0,0,0,1.585h4.029L103.484,52a.476.476,0,0,1-.471.414H84.791a.792.792,0,1,0,0,1.585h18.222a2.065,2.065,0,0,0,2.043-1.8l2.962-22.988h.363a2.063,2.063,0,0,0,2.06-2.06V22.7a2.063,2.063,0,0,0-2.061-2.061Zm-8.586-16,1.486-3.021a.053.053,0,0,1,.071-.024l7,3.444a.053.053,0,0,1,.024.071l-1.486,3.021a.053.053,0,0,1-.071.024h0l-7-3.444a.053.053,0,0,1-.024-.071Zm-9.38,12.07A7.115,7.115,0,0,1,94.8,13.02a8.714,8.714,0,0,0,5.363-4.507l.741-1.506L104.338,8.7,103.6,10.2a8.7,8.7,0,0,0-.3,7,7.1,7.1,0,0,1,.434,3.44H100.8a4.042,4.042,0,0,0-2.235-3.763,4.011,4.011,0,0,0-5.776,3.763H88.481Zm3.966,3.933A2.423,2.423,0,0,1,97.869,18.3a2.442,2.442,0,0,1,1.347,2.341ZM73.624,27.632a.476.476,0,0,1-.475-.475V22.7a.476.476,0,0,1,.475-.475h4.941v5.406Zm18.281,7.914a.476.476,0,0,1-.475.475h-10.8a.476.476,0,0,1-.475-.475V22.225H91.905Z"
                                transform="translate(-71.564 0)"
                                fill="#8b752c"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="contents relative z-2">
                          <h3 className="lq-icon-box-el text-16 font-semibold uppercase tracking-0/5 mb-1/25em leading-1/5em">
                            Kap kao potpis.
                          </h3>
                          <p>Probrane rakije i pažljivo čuvana vina.
                              Za trenutke koji ne traže ništa više – osim još jednog gutljaja.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                 
                
              </section>
              {/* End Icon Box */}
              {/* Start Text Box */}
              <section className="lqd-section text-box border-top border-black-20 transition-all" id="text-box">
  <div className="container-fluid">
  
    <div className="row">
      
      <div
        className="col col-12 col-md-4 flex p-0"
        data-custom-animations="true"
        data-ca-options='{"addPerspective": false, "animationTarget": "li, p", "delay": 120, "initValues": {"x": "-10px", "y": "10px", "opacity": 0}, "animations": {"x": "0px", "y": "0px", "opacity": 1}}'
      >
        <div className="w-full flex flex-wrap border-right border-black-20 p-60 sm:border-right-0 sm:border-bottom module-col">
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Benedikt jaja</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">13KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Tortilja</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">16KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Doručak Milunka</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">20KM</p>
            </div>
          </div>
        </div>
      </div>
     
      <div
        className="col col-12 col-md-4 flex p-0"
        data-custom-animations="true"
        data-ca-options='{"addPerspective": false, "animationTarget": "li, p", "startDelay": 250, "delay": 120, "initValues": {"x": "-10px", "y": "10px", "opacity": 0}, "animations": {"x": "0px", "y": "0px", "opacity": 1}}'
      >
        <div className="w-full flex flex-wrap border-right border-black-20 p-60 sm:border-right-0 sm:border-bottom module-col">
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Tatarski biftek</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">28KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Carpaccio</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">25KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Carpaccio od ribe</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">22KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Burata</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">19KM</p>
            </div>
          </div>
        </div>
      </div>
     
      <div
        className="col col-12 col-md-4 flex p-0"
        data-custom-animations="true"
        data-ca-options='{"addPerspective": false, "animationTarget": "li, p", "startDelay": 500, "delay": 120, "initValues": {"x": "-10px", "y": "10px", "opacity": 0}, "animations": {"x": "0px", "y": "0px", "opacity": 1}}'
      >
        <div className="w-full flex flex-wrap p-60 module-col">
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Krem potaž od kukuruza</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">6KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Krem potaž od povrća</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">8KM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="row">
     
      <div
        className="col col-12 col-md-4 flex p-0"
        data-custom-animations="true"
        data-ca-options='{"addPerspective": false, "animationTarget": "li, p", "delay": 120, "initValues": {"x": "-10px", "y": "10px", "opacity": 0}, "animations": {"x": "0px", "y": "0px", "opacity": 1}}'
      >
        <div className="w-full flex flex-wrap border-right border-black-20 p-60 sm:border-right-0 sm:border-bottom module-col">
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Tagliatelle</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">25KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Ravioli</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">24KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Njoke</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">24KM</p>
            </div>
          </div>
        </div>
      </div>
    
      <div
        className="col col-12 col-md-4 flex p-0"
        data-custom-animations="true"
        data-ca-options='{"addPerspective": false, "animationTarget": "li, p", "startDelay": 250, "delay": 120, "initValues": {"x": "-10px", "y": "10px", "opacity": 0}, "animations": {"x": "0px", "y": "0px", "opacity": 1}}'
      >
        <div className="w-full flex flex-wrap border-right border-black-20 p-60 sm:border-right-0 sm:border-bottom module-col">
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Rižoto losos</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">23KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Rižoto teletina</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">24KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Rižoto povrće</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">16KM</p>
            </div>
          </div>
        </div>
      </div>
      
      <div
        className="col col-12 col-md-4 flex p-0"
        data-custom-animations="true"
        data-ca-options='{"addPerspective": false, "animationTarget": "li, p", "startDelay": 500, "delay": 120, "initValues": {"x": "-10px", "y": "10px", "opacity": 0}, "animations": {"x": "0px", "y": "0px", "opacity": 1}}'
      >
        <div className="w-full flex flex-wrap p-60 module-col">
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Biftek Milunka</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">55KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Obrazi</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">36KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Juneći rep</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">33KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Pileći kolač</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">29KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Svinjska bajadera</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">36KM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="row">
      <div
        className="col col-12 col-md-4 flex p-0"
        data-custom-animations="true"
        data-ca-options='{"addPerspective": false, "animationTarget": "li, p", "delay": 120, "initValues": {"x": "-10px", "y": "10px", "opacity": 0}, "animations": {"x": "0px", "y": "0px", "opacity": 1}}'
      >
        <div className="w-full flex flex-wrap border-right border-black-20 p-60 sm:border-right-0 sm:border-bottom module-col">
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Sabljarka</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">44KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Tuna</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">46KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Brancin</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">39KM</p>
            </div>
          </div>
        </div>
      </div>
     
      <div
        className="col col-12 col-md-4 flex p-0"
        data-custom-animations="true"
        data-ca-options='{"addPerspective": false, "animationTarget": "li, p", "startDelay": 250, "delay": 120, "initValues": {"x": "-10px", "y": "10px", "opacity": 0}, "animations": {"x": "0px", "y": "0px", "opacity": 1}}'
      >
        <div className="w-full flex flex-wrap border-right border-black-20 p-60 sm:border-right-0 sm:border-bottom module-col">
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Biftek salata</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">21KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Pileća salata</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">17KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Miks svježih salata</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">8KM</p>
            </div>
          </div>
        </div>
      </div>
      
      <div
        className="col col-12 col-md-4 flex p-0"
        data-custom-animations="true"
        data-ca-options='{"addPerspective": false, "animationTarget": "li, p", "startDelay": 500, "delay": 120, "initValues": {"x": "-10px", "y": "10px", "opacity": 0}, "animations": {"x": "0px", "y": "0px", "opacity": 1}}'
      >
        <div className="w-full flex flex-wrap p-60 module-col">
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Sjećanja</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">13KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Anna</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">9KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Sofija</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">9KM</p>
            </div>
          </div>
          <div className="w-75percent flex justify-start p-10">
            <ul className="icon-list-items reset-ul flex">
              <li className="icon-list-item flex items-center">
                <span className="icon-list-icon flex">
                  <svg className="w-5 h-5 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                  </svg>
                </span>
                <span className="icon-list-icon text-17 pl-5">Natalija</span>
              </li>
            </ul>
          </div>
          <div className="w-25percent flex justify-end p-10">
            <div className="ld-fancy-heading text-end">
              <p className="ld-fh-element m-0">7KM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
              
              {/* End Text Box */}
              {/* Start Gallery */}
              <section
                className="lqd-section gallery bg-green-900 bg-top-center bg-no-rapeat bg-cover pt-65 pb-55 transition-all"
                id="gallery"
                style={{
                  backgroundImage:
                    "url(./assets/images/demo/restaurant/gallery/bg-3.svg)",
                }}
              >
                <div className="container-fluid">
                  <div className="row">
                    <div
                      className="col col-12 text-center"
                      data-custom-animations="true"
                      data-ca-options='{"addPerspective": false, "animationTarget": ".ld-fancy-heading,.animation-element", "initValues" :{"x": "-10px", "y": "10px", "opacity" : 0} , "animations" :{"x": "0px", "y": "0px", "opacity" : 1}}'
                    >
                      <div className="ld-fancy-heading">
                        <h6 className="ld-fh-element mb-1/25em text-12 tracking-2 text-white">
                          Restoran Milunka | Ukus s potpisom
                        </h6>
                      </div>
                      <div className="ld-fancy-heading">
                        <h2 className="ld-fh-element mb-1em text-white">
                          Doživite kroz fotografije.
                        </h2>
                      </div>
                      <div
                        className="ld-media-row flex mb-50 animation-element"
                        data-liquid-masonry="true"
                      >
                        <div
                          className="masonry-item w-25percent sm:w-50percent module-item-1"
                          id="module-item-1"
                        >
                          <div className="ld-media-item h-full relative overflow-hidden">
                            <figure className="h-full">
                              <img
                                className="h-full objfit-cover"
                                width={702}
                                height={562}
                                src="./assets/images/demo/restaurant/gallery/gallery-1@2x.jpg"
                                alt="milunka"
                              />
                            </figure>
                            <div className="ld-media-item-overlay flex flex-col items-center text-center justify-center w-full h-full absolute top-0 left-0">
                              <div
                                className="ld-media-bg w-full h-full absolute top-0 left-0 bg-transparent"
                                style={{
                                  backgroundImage:
                                    "linear-gradient(0deg, #0E0B07 0%, #0E0B0700 60%)",
                                }}
                              />
                              <div className="ld-media-content">
                                <div className="ld-media-txt">
                                  <h6
                                    className="uppercase ltr-sp-135"
                                    aria-hidden="true"
                                  />
                                  <span className="ld-media-icon icon-lg">
                                    <span className="ld-media-icon-inner">
                                      <i className="lqd-icn-ess icon-ion-ios-add" />
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <a
                              href="./assets/images/demo/restaurant/gallery/gallery-1@2x.jpg"
                              className="liquid-overlay-link w-full h-full absolute top-0 left-0 fresco"
                              data-fresco-group="gallery"
                              aria-label="milunka"
                            />
                          </div>
                        </div>
                        <div
                          className="masonry-item w-25percent sm:w-50percent module-item-2"
                          id="module-item-2"
                        >
                          <div className="ld-media-item h-full relative overflow-hidden">
                            <figure className="h-full">
                              <img
                                className="h-full objfit-cover"
                                width={702}
                                height={1159}
                                src="./assets/images/demo/restaurant/gallery/gallery-3@2x.jpg"
                                alt="milunka"
                              />
                            </figure>
                            <div className="ld-media-item-overlay flex flex-col items-center text-center justify-center w-full h-full absolute top-0 left-0">
                              <div
                                className="ld-media-bg w-full h-full absolute top-0 left-0 bg-transparent"
                                style={{
                                  backgroundImage:
                                    "linear-gradient(0deg, #0E0B07 0%, #0E0B0700 60%)",
                                }}
                              />
                              <div className="ld-media-content">
                                <div className="ld-media-txt">
                                  <h6
                                    className="uppercase ltr-sp-135"
                                    aria-hidden="true"
                                  />
                                  <span className="ld-media-icon icon-lg">
                                    <span className="ld-media-icon-inner">
                                      <i className="lqd-icn-ess icon-ion-ios-add" />
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <a
                              href="./assets/images/demo/restaurant/gallery/gallery-3@2x.jpg"
                              className="liquid-overlay-link w-full h-full absolute top-0 left-0 fresco"
                              data-fresco-group="gallery"
                              aria-label="milunka"
                            />
                          </div>
                        </div>
                        <div
                          className="masonry-item w-50percent sm:w-50percent module-item-3"
                          id="module-item-3"
                        >
                          <div className="ld-media-item h-full relative overflow-hidden shadow-onhover">
                            <figure className="h-full">
                              <img
                                className="h-full objfit-cover"
                                width={1440}
                                height={1159}
                                src="./assets/images/demo/restaurant/gallery/gallery-4@2x.jpg"
                                alt="milunka"
                              />
                            </figure>
                            <div className="ld-media-item-overlay flex flex-col items-center text-center justify-center w-full h-full absolute top-0 left-0">
                              <div
                                className="ld-media-bg w-full h-full absolute top-0 left-0 bg-transparent"
                                style={{
                                  backgroundImage:
                                    "linear-gradient(0deg, #0E0B07 0%, #0E0B0700 60%)",
                                }}
                              />
                              <div className="ld-media-content">
                                <div className="ld-media-txt">
                                  <h6
                                    className="uppercase ltr-sp-135"
                                    aria-hidden="true"
                                  />
                                  <span className="ld-media-icon icon-play bordered inline-flex items-center justify-center rounded-full">
                                    <span className="ld-media-icon-inner flex items-center justify-center">
                                      <i className="lqd-icn-ess icon-ion-ios-play" />
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <a
                              href="https://www.youtube.com/watch?v=-FVgpu8p4BE"
                              className="liquid-overlay-link w-full h-full absolute top-0 left-0 fresco"
                              data-fresco-group="gallery"
                              aria-label="milunka"
                            />
                          </div>
                        </div>
                        <div
                          className="masonry-item w-25percent sm:w-50percent module-item-4"
                          id="module-item-4"
                        >
                          <div className="ld-media-item h-full relative overflow-hidden">
                            <figure className="h-full">
                              <img
                                className="h-full objfit-cover"
                                width={702}
                                height={562}
                                src="./assets/images/demo/restaurant/gallery/gallery-2@2x.jpg"
                                alt="milunka"
                              />
                            </figure>
                            <div className="ld-media-item-overlay flex flex-col items-center text-center justify-center w-full h-full absolute top-0 left-0">
                              <div
                                className="ld-media-bg w-full h-full absolute top-0 left-0 bg-transparent"
                                style={{
                                  backgroundImage:
                                    "linear-gradient(0deg, #0E0B07 0%, #0E0B0700 60%)",
                                }}
                              />
                              <div className="ld-media-content">
                                <div className="ld-media-txt">
                                  <h6
                                    className="uppercase ltr-sp-135"
                                    aria-hidden="true"
                                  />
                                  <span className="ld-media-icon icon-lg">
                                    <span className="ld-media-icon-inner">
                                      <i className="lqd-icn-ess icon-ion-ios-add" />
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <a
                              href="./assets/images/demo/restaurant/gallery/gallery-2@2x.jpg"
                              className="liquid-overlay-link w-full h-full absolute top-0 left-0 fresco"
                              data-fresco-group="gallery"
                              aria-label="milunka"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="ld-fancy-heading">
                        <p className="ld-fh-element mb-0/5em text-15 text-white">
                          <span>
                            Dinamičan meni koji se mijenja u ritmu sezone. Naš
                            jelovnik reflektuje bogatstvo lokalnih sastojaka i
                            slobodu kreativne interpretacije. Očekujte domaće,
                            ali u novom ruhu. Otkrijte magiju naših kulinarskih
                            kreacija kroz objektiv – posjetite našu{" "}
                          </span>
                          <a
                            className="text-primary underline text-primary"
                            href="https://www.instagram.com/restoran_milunka/"
                          >
                            Instagram
                          </a>
                          <span>
                            {" "}
                            stranicu i uživajte u spoju ukusa i estetike.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Gallery */}
              {/* Start Reserve Form */}
              <section
                className="lqd-section reserve-form pt-55 pb-50 transition-all bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(./assets/images/da/restaurant/form-reserve/bg-5.png)",
                }}
                data-custom-animations="true"
                data-ca-options='{"addPerspective": false, "animationTarget": ".animation-element", "initValues": {"x": "-5px", "y": "10px", "opacity": 0}, "animations": {"x": "0px", "y": "0px", "opacity": 1}}'
              >
                <div className="container flex items-center justify-center p-0">
                  <div className="w-full flex flex-wrap rounded-10 bg-yellow-100 items-center">
                    <div className="w-40percent py-35 px-30 sm:w-full">
                      <div
                        className="w-full relative flex flex-col bg-center bg-cover rounded-10 text-center pt-430 pb-50 px-15 animation-element"
                        style={{
                          backgroundImage:
                            "url(./assets/images/demo/restaurant/form-reserve/bg-6@2x.jpg)",
                        }}
                      >
                        <div
                          className="background-overlay opacity-100 rounded-10 bg-transparent"
                          style={{
                            backgroundImage:
                              "linear-gradient(0deg, #0E0B07 0%, #0E0B0700 35%)",
                          }}
                        />
                        <div className="ld-fancy-heading relative">
                          <p className="ld-fh-element m-0 text-11 text-white font-semibold uppercase tracking-2">
                            Telefon: 065/246-666
                          </p>
                        </div>
                        <div className="ld-fancy-heading relative">
                          <p className="ld-fh-element mb-2/5em text-11 text-white font-semibold uppercase tracking-2">
                            Adresa: Bulevar Stepe Stepanovića 171G
                          </p>
                        </div>
                        <div className="w-auto">
                          <a
                            href="#map"
                            className="font-semibold uppercase leading-1/6em tracking-2 text-11 btn btn-underlined border-thin btn-icon-right btn-hover-reveal text-white"
                            data-localscroll="true"
                          >
                            <span className="btn-txt" data-text="informacije">
                              Idi na mapu
                            </span>
                            <span className="btn-icon text-white -mr-10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                              >
                                <path d="M565.6 36.2C572.1 40.7 576 48.1 576 56V392c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456V120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5V421.2l120-45.7V90.8L48 136.5zM360 422.7V137.3l-144-48V374.7l144 48zm48-1.5l120-45.7V90.8L408 136.5V421.2z" />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-60percent p-60 text-center sm:w-full module-content"
                      data-custom-animations="true"
                      data-ca-options='{"addPerspective": false, "animationTarget": ".animation-element, .ld-fancy-heading", "startDelay": 200, "initValues": {"x": "-10px", "y": "10px", "opacity": 0}, "animations": {"x": "0px", "y": "0px", "opacity": 1}}'
                    >
                      <div className="ld-fancy-heading border-top border-bottom border-black mb-35">
                        <h3 className="ld-fh-element py-1/5em m-0 text-13 font-medium uppercase tracking-1">
                          Kontaktirajte nas – Rezervacije u restoranu Milunka
                        </h3>
                      </div>
                      <div className="ld-fancy-heading">
                        <h2 className="ld-fh-element mb-0/25em">
                          Zakažite svoje gastronomsko iskustvo
                        </h2>
                      </div>
                      <div className="ld-fancy-heading px-20percent sm:p-0">
                        <p className="ld-fh-element mb-0/5em text-17 leading-1/5em text-black-40">
                          Milunka vas čeka – sa stilom i ukusom.
                        </p>
                      </div>
                      <div className="lqd-contact-form lqd-contact-form-inputs-underlined lqd-contact-form-button-block lqd-contact-form-button-md lqd-contact-form-button-border-none lqd-contact-form-inputs-lg mb-30 animation-element">
                        <div role="form" className="lqd-cf" lang="en-US">
                          <div className="screen-reader-response">
                            <p
                              role="status"
                              aria-live="polite"
                              aria-atomic="true"
                            />
                          </div>
                          <form
                            onSubmit={handleSubmit}
                            className="lqd-cf-form"
                            noValidate="novalidate"
                            data-status="init"
                          >
                            <div className="w-full relative flex">
                              <svg
                                className="left-0"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14.875"
                                height={17}
                                viewBox="0 0 14.875 17"
                              >
                                <path
                                  id="path-6"
                                  data-name="Path 34205"
                                  d="M10.412-4.781c-.953,0-1.411.531-2.975.531s-2.019-.531-2.975-.531A4.464,4.464,0,0,0,0-.319v.85A1.594,1.594,0,0,0,1.594,2.125H13.281A1.594,1.594,0,0,0,14.875.531v-.85A4.464,4.464,0,0,0,10.412-4.781ZM13.281.531H1.594v-.85A2.874,2.874,0,0,1,4.463-3.187a13,13,0,0,0,2.975.531,12.874,12.874,0,0,0,2.975-.531A2.874,2.874,0,0,1,13.281-.319ZM7.437-5.312a4.782,4.782,0,0,0,4.781-4.781,4.782,4.782,0,0,0-4.781-4.781,4.782,4.782,0,0,0-4.781,4.781A4.782,4.782,0,0,0,7.437-5.312Zm0-7.969a3.193,3.193,0,0,1,3.187,3.187A3.193,3.193,0,0,1,7.437-6.906,3.193,3.193,0,0,1,4.25-10.094,3.193,3.193,0,0,1,7.437-13.281Z"
                                  transform="translate(0 14.875)"
                                  fill="#212121"
                                />
                              </svg>
                              <span
                                className="lqd-form-control-wrap w-full"
                                data-name="text"
                              >
                                <input
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  size={40}
                                  className="lqd-form-control bg-transparent border-black text-black pl-55"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Ime"
                                  required
                                />
                              </span>
                            </div>
                            <div className="w-full relative flex">
                              <svg
                                className="left-0"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20.305"
                                height="15.94"
                                viewBox="0 0 20.305 15.94"
                              >
                                <path
                                  d="M16.075,1H4.23C1.9,1,0,2.623,0,4.623v8.694c0,2,1.9,3.62,4.23,3.623H16.075c2.335,0,4.227-1.623,4.23-3.623V4.623c0-2-1.9-3.62-4.23-3.623ZM4.23,2.449H16.075a2.566,2.566,0,0,1,2.352,1.367L11.948,9.365a2.855,2.855,0,0,1-3.591,0L1.878,3.816A2.566,2.566,0,0,1,4.23,2.449ZM16.075,15.491H4.23a2.377,2.377,0,0,1-2.538-2.174V5.709l5.469,4.68a4.754,4.754,0,0,0,5.983,0l5.469-4.68v7.608A2.377,2.377,0,0,1,16.075,15.491Z"
                                  transform="translate(0 -1)"
                                  fill="#212121"
                                />
                              </svg>
                              <span
                                className="lqd-form-control-wrap w-full"
                                data-name="email"
                              >
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  size={40}
                                  className="lqd-form-control bg-transparent border-black text-black pl-55"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="E-mail"
                                  required
                                />
                              </span>
                            </div>
                            <div className="w-full relative flex">
                              <svg
                                className="left-0"
                                id="Time-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18.875"
                                height="18.875"
                                viewBox="0 0 18.875 18.875"
                              >
                                <path
                                  id="Path-7"
                                  data-name="Path-7"
                                  d="M9.438,0a9.438,9.438,0,1,0,9.438,9.438A9.438,9.438,0,0,0,9.438,0Zm0,17.3A7.865,7.865,0,1,1,17.3,9.438,7.865,7.865,0,0,1,9.438,17.3Z"
                                  fill="#212121"
                                />
                                <path
                                  id="Path-8"
                                  data-name="Path-8"
                                  d="M10.966,6a.786.786,0,0,0-.786.786v3.4L7.528,11.849a.788.788,0,1,0,.835,1.337l3.02-1.888a.786.786,0,0,0,.369-.675V6.786A.786.786,0,0,0,10.966,6Z"
                                  transform="translate(-1.528 -1.281)"
                                  fill="#212121"
                                />
                              </svg>
                              <span
                                className="lqd-form-control-wrap w-full"
                                data-name="datetime"
                              >
                                <DatePicker
                                  selected={formData.datetime}
                                  onChange={handleDateChange}
                                  showTimeSelect
                                  timeFormat="HH:mm"
                                  timeIntervals={15}
                                  dateFormat="dd.MM.yyyy HH:mm"
                                  className="lqd-form-control bg-transparent border-black text-black pl-30"
                                  placeholderText="Datum i vrijeme"
                                  required
                                />
                              </span>
                            </div>
                            <p>
                              <input
                                type="submit"
                                value="Pošaljite"
                                className="lqd-form-control has-spinner text-white bg-dark rounded-4 mt-20 font-semibold uppercase leading-1/6em tracking-2 text-11 hover:bg-secondary"
                              />
                            </p>
                            {status && (
                              <p className="text-13 mt-10">{status}</p>
                            )}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Reserve Form */}
              {/* Start Map */}
              <section className="lqd-section map" id="map">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col col-12 p-0 module-col">
                      <div className="ld-gmap-container h-585">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d546.0791885043649!2d17.202326532091163!3d44.76636803469464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475e030054b13569%3A0x20eba573fe573780!2sMILUNKA%20Gastro%20Atelje!5e0!3m2!1sen!2sba!4v1748081922333!5m2!1sen!2sba"
                          width="100%"
                          height={585}
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Google mapa lokacija Banja Luka"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Map */}
              {/* Start Contact */}
              <section
                className="lqd-section contact px-10"
                data-custom-animations="true"
                data-ca-options='{"addPerspective": false, "animationTarget": ".ld-fancy-heading, .btn", "initValues" :{"x": "-10px", "y": "10px", "opacity" : 0} , "animations" :{"x": "0px", "y": "0px", "opacity" : 1}}'
              >
                <div className="container">
                  <div className="row">
                    <div className="col col-12 p-0">
                      <div className="w-40percent flex flex-col items-center -mt-485 p-65 rounded-6 transition-all text-center bg-white module-contact">
                        <div className="ld-fancy-heading">
                          <h2 className="ld-fh-element mb-1/15em text-40">
                            Informacije
                          </h2>
                        </div>

                        <div className="ld-fancy-heading">
                          <p className="ld-fh-element mb-0/5em text-14 uppercase font-bold block">
                            ADRESA
                          </p>
                          <p className="ld-fh-element mb-0/5em text-14 uppercase font-semibold block">
                            Bulevar Stepe Stepanovića 171G,
                            <br /> Banja Luka 78000
                          </p>
                        </div>
                        <div className="ld-fancy-heading">
                          <p className="ld-fh-element mb-0/5em text-14 uppercase font-bold">
                            RADNO VRIJEME
                          </p>
                          <p className="ld-fh-element mb-4em text-14 uppercase font-semibold">
                            Ponedeljak-Nedelja: 08.00h - 23.00h
                          </p>
                        </div>
                        <a
                          href="https://maps.app.goo.gl/iU77Brb6Cy5uM9219"
                          className="btn btn-underlined btn-hover-txt-liquid-x-alt border-thin btn-icon-right btn-hover-reveal font-normal uppercase leading-1/6em tracking-2 text-13 text-accent"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span
                            className="btn-txt"
                            data-text="Mapa"
                            data-split-text="true"
                            data-split-options='{"type": "chars, words"}'
                          >
                            Prikaži na Google Mapi
                          </span>
                          <span className="btn-icon inline-block text-1em -mr-10 text-accent">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <path d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z" />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Contact */}
            </div>
          </main>
          <footer
            id="site-footer"
            className="main-footer bg-green-900 text-white"
            data-sticky-footer="true"
            data-sticky-footer-options='{"shadow": "3"}'
          >
            <section className="lqd-section module-btn pt-45 pb-25">
              <div className="container">
                <div className="row">
                  <div className="col col-12 text-center">
                    <a
                      href="#contact-modal"
                      className="btn btn-solid btn-hover-txt-liquid-y-alt font-semibold uppercase leading-1/6em tracking-1/5 text-12 text-white bg-transparent border-2 border-white-20 rounded-0 hover:bg-white"
                      data-lity="#contact-modal"
                    >
                      <span
                        className="btn-txt"
                        data-text="Rezervisite"
                        data-split-text="true"
                        data-split-options='{"type": "chars, words"}'
                      >
                        Rezervacija
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="lqd-section module-logo py-15 border-top border-bottom border-white-20">
              <div className="container">
                <div className="row">
                  <div className="col col-12 text-center">
                    <div className="flex w-full items-center justify-center">
                      <img
                        width={228}
                        height={80}
                        src="./assets/images/demo/restaurant/logo/logo-2.svg"
                        alt="Milunka"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="lqd-section module-menu py-50">
              <div className="container">
                <div className="row">
                  <div className="w-20percent relative flex flex-col mb-20 p-10 sm:w-50percent">
                    <div className="lqd-fancy-menu lqd-custom-menu lqd-menu-td-none">
                      <ul className="reset-ul">
                        <li className="mb-15">
                          <a className="text-15 text-white-80" href="!#">
                            Linkovi
                          </a>
                        </li>
                        <li className="mb-15">
                          <a className="text-15 text-white-80" href="!#">
                            Politika privatnosti
                          </a>
                        </li>
                        <li className="mb-15">
                          <a className="text-15 text-white-80" href="!#">
                            Uslovi korištenja
                          </a>
                        </li>
                        <li>
                          <a className="text-15 text-white-80" href="!#">
                            Kolačići
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-20percent relative flex flex-col mb-20 p-10 sm:w-50percent">
                    <div className="lqd-fancy-menu lqd-custom-menu lqd-menu-td-none">
                      <ul
                        className="lqd-menu-counter-left lqd-menu-items-block main-nav-hover-fade-inactive items-stretch flex flex-col justify-start link-white-80 link-bold reset-ul"
                        data-submenu-options='{"toggleType": "fade", "handler": "mouse-in-out"}'
                        data-localscroll="true"
                        data-localscroll-options='{"itemsSelector":"> li > a", "trackWindowScroll": true, "includeParentAsOffset": true}'
                      >
                        <li className="mb-15">
                          <a className="text-15 text-white-80" href="#banner">
                            Početna
                          </a>
                        </li>
                        <li className="mb-15">
                          <a className="text-15 text-white-80" href="#about">
                            Naša Priča
                          </a>
                        </li>
                        <li className="mb-15">
                          <a className="text-15 text-white-80" href="#gallery">
                            Menu
                          </a>
                        </li>
                        <li>
                          <a className="text-15 text-white-80" href="#map">
                            Kontakt
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-20percent relative flex flex-col mb-20 p-10 sm:w-50percent">
                    <div className="ld-fancy-heading">
                      <p className="ld-fh-element mb-2em text-14 leading-18">
                        Radno Vrijeme:
                        <br />
                        <br />
                        Ponedeljak - Nedelja:
                        <br />
                        8:00h - 23:00h
                      </p>
                    </div>
                    <div className="ld-fancy-heading">
                      <h3 className="ld-fh-element mb-0/5em text-9 font-bold uppercase leading-18 text-white-60 tracking-1">
                        E-mail:
                      </h3>
                    </div>
                    <div className="ld-fancy-heading">
                      <p className="ld-fh-element m-0 text-14 leading-18">
                        milunkagastroatelje <br />
                        @gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="w-20percent relative flex flex-col mb-20 p-10 sm:w-50percent">
                    <div className="ld-fancy-heading">
                      <p className="ld-fh-element mb-2em text-14 leading-18">
                        Naša Adresa:
                        <br /> Bulevar Stepe
                        <br /> Stepanovića 171G,
                        <br />
                        Banja Luka 78000
                      </p>
                    </div>
                    <div className="ld-fancy-heading">
                      <h3 className="ld-fh-element mb-0/5em text-9 font-bold uppercase leading-18 text-white-60 tracking-1">
                        Telefon:
                      </h3>
                    </div>
                    <div className="ld-fancy-heading">
                      <p className="ld-fh-element m-0 text-14 leading-18">
                        065/246-666
                      </p>
                    </div>
                  </div>
                  <div className="w-20percent p-10 sm:w-full">
                    <div className="social-icons-wrapper max-w-full flex-wrap gap-20 lg:gap-y-0">
                      <span className="grid-item">
                        <a
                          className="icon social-icon social-icon-foursquare animation-shrink border-1 border-white-10 rounded-full text-white items-center justify-center leading-16 text-160"
                          href="https://www.facebook.com/people/Restoran-Milunka/61574127065458/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">Facebook</span>
                          <svg
                            className="w-1em h-1em"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            fill="#fff"
                          >
                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                          </svg>
                        </a>
                      </span>
                      {/* <span className="grid-item">
                        <a
                          className="icon social-icon social-icon-twitter animation-shrink border-1 border-white-10 rounded-full text-white items-center justify-center leading-16 text-16"
                          href="!#"
                          target="_blank"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="w-1em h-1em"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="#fff"
                          >
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                          </svg>
                        </a>
                      </span> */}
                      <span className="grid-item">
                        <a
                          className="icon social-icon social-icon-instagram animation-shrink border-1 border-white-10 rounded-full text-white items-center justify-center leading-16 text-16"
                          href="https://www.instagram.com/restoran_milunka/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">Instagram</span>
                          <svg
                            className="w-1em h-1em"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="#fff"
                          >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="lqd-section module-copy-right pb-35">
              <div className="container">
                <div className="divider w-full pt-5">
                  <span className="divider-separator w-full border-bottom border-white-20" />
                </div>
                <div className="flex justify-center pt-5">
                  <p className="m-0 text-14 text-white-70 text-center">
                    © 2025 Restoran Milunka. Sva prava zadržana. Made by{" "}
                    <a
                      href="https://srdjanmilosevic.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-inherit hover:text-white"
                    >
                      Franca
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>
          </footer>
        </div>
        {/* Contact Modal */}
        <div
          id="contact-modal"
          className="lity-modal lqd-modal lity-hide"
          data-modal-type="fullscreen"
        >
          <div className="lqd-modal-inner">
            <div className="lqd-modal-head" />
            <section className="lqd-section lqd-modal-content link-black">
              <div className="container min-h-100vh flex items-center flex-wrap">
                <div className="w-55percent flex flex-col sm:w-full">
                  <div className="flex flex-col items-start justify-center py-10 pr-100 pl-10 module-content">
                    <div className="ld-fancy-heading">
                      <h2 className="ld-fh-element mb-0/5em text-100 leading-0/8em font-medium text-black">
                        Vaša <span>Rezervacija.</span>
                      </h2>
                    </div>
                    <div className="ld-fancy-heading">
                      <p className="ld-fh-element mb-0/5em text-18">
                        Unesite podatke i rezervišite svoj doživljaj.
                      </p>
                    </div>
                    <div className="w-full flex flex-wrap module-info">
                      <div className="w-50percent flex flex-col sm:w-full module-info-inner">
                        <div className="ld-fancy-heading relative mb-10">
                          <h6 className="ld-fh-element relative mb-0/5em text-13 font-bold tracking-0/1em text-black">
                            Restoran
                          </h6>
                        </div>
                        <div className="ld-fancy-heading relative mb-10">
                          <p className="ld-fh-element relative mb-0/5em text-16 leading-1/2em">
                            Telefon:
                          </p>
                        </div>
                        <div className="ld-fancy-heading relative">
                          <p className="ld-fh-element relative mb-0/5em text-16 font-bold leading-1/2em text-black">
                            065/246-666
                          </p>
                        </div>
                      </div>
                      <div className="w-50percent flex flex-col sm:w-full">
                        <div className="ld-fancy-heading relative mb-10">
                          <h6 className="ld-fh-element relative mb-0/5em text-13 font-bold tracking-0/1em text-black">
                            Milunka.
                          </h6>
                        </div>
                        <div className="ld-fancy-heading relative mb-10">
                          <p className="ld-fh-element relative mb-0/5em text-16 leading-1/2em">
                            E-mail:
                          </p>
                        </div>
                        <div className="ld-fancy-heading relative">
                          <p className="ld-fh-element relative mb-0/5em text-16 font-bold leading-1/2em text-black">
                            milunkagastroatelje@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-45percent flex flex-col sm:w-full">
                  <div className="lqd-contact-form lqd-contact-form-inputs-underlined lqd-contact-form-button-lg lqd-contact-form-button-block p-10">
                    <div role="form">
                      <div className="screen-reader-response">
                        <p
                          role="status"
                          aria-live="polite"
                          aria-atomic="true"
                        />
                      </div>
                     <form onSubmit={handleSubmit} className="lqd-cf-form" noValidate>
      <div className="w-full relative flex">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="lqd-cf-form-control pl-30 text-13 text-black bg-transparent border-black-10"
          placeholder="Ime"
          required
        />
      </div>

      <div className="w-full relative flex">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="lqd-cf-form-control pl-30 text-13 text-black bg-transparent border-black-10"
          placeholder="E-mail"
          required
        />
      </div>

      <div className="w-full relative flex">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="lqd-cf-form-control pl-30 text-13 text-black bg-transparent border-black-10"
          placeholder="Broj telefona"
          required
        />
      </div>

      <div className="w-full relative flex">
        <input
          type="number"
          name="people"
          value={formData.people}
          onChange={handleChange}
          className="lqd-cf-form-control pl-30 text-13 text-black bg-transparent border-black-10"
          placeholder="Broj osoba"
          required
        />
      </div>




      <div className="w-full relative flex">
        <DatePicker
          selected={formData.datetime}
          onChange={handleDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="dd.MM.yyyy HH:mm"
          className="lqd-cf-form-control pl-30 text-13 text-black bg-transparent border-black-10"
          placeholderText="Datum i vrijeme"
          required
        />
      </div>

      <p>
        <input
          type="submit"
          value="Rezervišite"
          className="lqd-cf-form-control has-spinner mb-30 text-11 font-semibold uppercase leading-1/6em tracking-2 rounded-4 text-black bg-yellow-200 border-none hover:bg-black hover:text-white"
        />
      </p>

      {status && <p className="text-13">{status}</p>}
    </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="lqd-modal-foot" />
          </div>
        </div>
        {/* Contact Modal */}
        {/* Google map api */}
        {/* Start custom cursor 
        <div className="lqd-cc lqd-cc--inner fixed pointer-events-none" />
        <div className="lqd-cc--el lqd-cc-solid lqd-cc-explore flex items-center justify-center rounded-full fixed pointer-events-none">
          <div className="lqd-cc-solid-bg flex absolute lqd-overlay" />
          <div className="lqd-cc-solid-txt flex justify-center text-center relative">
            <div className="lqd-cc-solid-txt-inner">Explide</div>
          </div>
        </div>
        <div className="lqd-cc--el lqd-cc-solid lqd-cc-drag flex items-center justify-center rounded-full fixed pointer-events-none">
          <div className="lqd-cc-solid-bg flex absolute lqd-overlay" />
          <div className="lqd-cc-solid-ext lqd-cc-solid-ext-left inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              viewBox="0 0 32 32"
              style={{ width: "1em", height: "1em" }}
            >
              <path
                fill="currentColor"
                d="M19.943 6.07L9.837 14.73a1.486 1.486 0 0 0 0 2.25l10.106 8.661c.96.826 2.457.145 2.447-1.125V7.195c0-1.27-1.487-1.951-2.447-1.125z"
              />
            </svg>
          </div>
          <div className="lqd-cc-solid-txt flex justify-center text-center relative">
            <div className="lqd-cc-solid-txt-inner">Drag</div>
          </div>
          <div className="lqd-cc-solid-ext lqd-cc-solid-ext-right inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              viewBox="0 0 32 32"
              style={{ width: "1em", height: "1em" }}
            >
              <path
                fill="currentColor"
                d="M11.768 25.641l10.106-8.66a1.486 1.486 0 0 0 0-2.25L11.768 6.07c-.96-.826-2.457-.145-2.447 1.125v17.321c0 1.27 1.487 1.951 2.447 1.125z"
              />
            </svg>
          </div>
        </div>
        <div className="lqd-cc--el lqd-cc-arrow inline-flex items-center fixed top-0 left-0 pointer-events-none">
          <svg
            width={80}
            height={80}
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M60.4993 0V4.77005H8.87285L80 75.9207L75.7886 79.1419L4.98796 8.35478V60.4993H0V0H60.4993Z" />
          </svg>
        </div>
        <div className="lqd-cc--el lqd-cc-custom-icon rounded-full fixed pointer-events-none">
          <div className="lqd-cc-ci inline-flex items-center justify-center rounded-full relative">
            <svg
              width={32}
              height={32}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              style={{ width: "1em", height: "1em" }}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.03 6a1 1 0 0 1 1 1v8.02h8.02a1 1 0 1 1 0 2.01h-8.02v8.02a1 1 0 1 1-2.01 0v-8.02h-8.02a1 1 0 1 1 0-2.01h8.02v-8.01a1 1 0 0 1 1.01-1.01z"
              />
            </svg>
          </div>
        </div>
        <div className="lqd-cc lqd-cc--outer fixed top-0 left-0 pointer-events-none" />
        {/* End custom cursor */}
        <template id="lqd-snickersbar" />
        <template id="lqd-temp-sticky-header-sentinel" />
        <div
          className="lity"
          role="dialog"
          aria-label="Dialog Window (Press escape to close)"
          tabIndex={-1}
          data-modal-type="default"
        >
          <div className="lity-wrap" data-lity-close="" role="document">
            <div className="lity-loader" aria-hidden="true">
              Učitavanje...
            </div>
            <div className="lity-container">
              <div className="lity-content" />
            </div>
            <button
              className="lity-close"
              type="button"
              aria-label="Close (Press escape to close)"
              data-lity-close=""
            >
              ×
            </button>
          </div>
        </div>
      </React.Fragment>
    </React.Fragment>
  );
}

export default Index;
