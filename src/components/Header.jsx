import React, { useEffect, useState } from "react";
import "./Header.css";
import { useTranslation } from 'react-i18next';
import Modal from "../Helpers/Modal";
import LanguageSelector from "../Helpers/LanguageSelector";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTbl42IVQGw_wyLconeuBktMywVXQLIwk",
  authDomain: "workcomfo.firebaseapp.com",
  projectId: "workcomfo",
  storageBucket: "workcomfo.appspot.com",
  messagingSenderId: "waqasnizamani3@gmail.com",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { t, i18n } = useTranslation();
    

    const [isVisible,setIsVisible] = useState(false)

    const [selectedLanguage, setSelectedLanguage] = useState("en");

    const handleLanguageSelect = (code) => {
      setSelectedLanguage(code);
      setIsModalOpen(false); // Close modal after selection
      console.log("Selected Language:", code);
    };
   

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        
        // Cleanup event listener on unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <div className="sticky-header">
      <div className="header-row-wrapper snipcss-YmkOR">
        <div className="header-row max-width-container equal-padding row-main">
          <button
            className="btn-navicon js-side-nav-trigger"
            data-track-tag="HEADER_NAVICON"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="19"
              viewBox="0 0 23 19"
            >
              <rect y="16" width="23" height="3" rx="1.5" fill="#555"></rect>
              <rect width="23" height="3" rx="1.5" fill="#555"></rect>
              <rect y="8" width="23" height="3" rx="1.5" fill="#555"></rect>
            </svg>
          </button>
          <a href="/?source=top_nav" className="site-logo">
            <img
            src="/img/bgremoved.png"
            width={"100px"}
            ></img>
          </a>
          <div className="fiverr-header-search-animated fiverr-header-search-animated-show fiverr-header-search-animated-long">
            <div className="search-bar-package search_bar-package">
              <form className="search-form dark">
                <input
                  type="search"
                  className="long-placeholder"
                  autoComplete="off"
                  placeholder={t('description')}
                  value=""
                />
                <input
                  type="search"
                  className="short-placeholder"
                  autoComplete="off"
                  placeholder="Find services"
                  value=""
                />
                <button className="ZQi_S8t AOOSxop co-white submit-button dark-search-button bg-co-green-700">
                  <div className="submit-button-icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentFill"
                    >
                      <path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z"></path>
                    </svg>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <nav className="fiverr-nav fiverr-nav-right nav-with-space">
            <ul>
              
              {/* <li className="display-from-md">
                <div className="tmELUJj Z_rWxb2 DX8eVtZ">
                  <span className="vpfXdaJ">
                    <button className="y2EinTV">
                      Explore
                      <span className="flex flex-items-center">
                        <span
                          className="nFghBOe iqNcR9P style-x15OK"
                          aria-hidden="true"
                          id="style-x15OK"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 14 9"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentFill"
                          >
                            <path d="M.19 1.272.81.653a.375.375 0 0 1 .53 0L7 6.3 12.66.653a.375.375 0 0 1 .53 0l.62.62a.375.375 0 0 1 0 .53L7.264 8.346a.375.375 0 0 1-.53 0L.19 1.802a.375.375 0 0 1 0-.53Z"></path>
                          </svg>
                        </span>
                      </span>
                    </button>
                  </span>
                </div>
              </li> */}
              <li className="display-from-lg">
                <div className="lean-locale-settings">
                  <div className="lean-locale-settings">
                    <section className="locale-settings-package locale-settings-link locale_settings-package locale-settings-package locale_settings-package">
                      <button
                      onClick={() => setIsModalOpen(true)}
                      
                      className="selection-trigger language-selection-trigger text-body-2 locale-settings-link-title lean-menu">
                        <span
                          className="nFghBOe trigger-icon style-88Y41"
                          aria-hidden="true"
                          id="style-88Y41"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 1C4.58875 1 1 4.58875 1 9C1 13.4113 4.58875 17 9 17C13.4113 17 17 13.4113 17 9C17 4.58875 13.4113 1 9 1ZM8.53125 4.92676C7.81812 4.89612 7.11218 4.7959 6.43811 4.63293C6.54578 4.37781 6.6626 4.13281 6.78857 3.90063C7.30542 2.94824 7.93994 2.27991 8.53125 2.03784V4.92676ZM8.53125 5.86499V8.53125H5.60339C5.64465 7.4906 5.82202 6.45752 6.11536 5.51782C6.8927 5.71362 7.70874 5.83215 8.53125 5.86499ZM8.53125 9.46875V12.135C7.70874 12.1678 6.8927 12.2864 6.11536 12.4822C5.82202 11.5425 5.64465 10.5094 5.60339 9.46875H8.53125ZM8.53125 13.0732V15.9622C7.93994 15.7201 7.30542 15.0518 6.78857 14.0994C6.6626 13.8672 6.54578 13.6222 6.43811 13.3671C7.11218 13.2041 7.81799 13.1039 8.53125 13.0732ZM9.46875 13.0732C10.1819 13.1039 10.8878 13.2041 11.5619 13.3671C11.4542 13.6222 11.3374 13.8672 11.2114 14.0994C10.6946 15.0518 10.0601 15.7201 9.46875 15.9622V13.0732ZM9.46875 12.135V9.46875H12.3966C12.3553 10.5094 12.178 11.5425 11.8846 12.4822C11.1073 12.2864 10.2913 12.1678 9.46875 12.135ZM9.46875 8.53125V5.86499C10.2913 5.83215 11.1073 5.71362 11.8846 5.51782C12.178 6.45752 12.3553 7.4906 12.3966 8.53125H9.46875ZM9.46875 4.92676V2.03784C10.0601 2.27991 10.6946 2.94824 11.2114 3.90063C11.3374 4.13281 11.4542 4.37781 11.5619 4.63293C10.8878 4.7959 10.1819 4.89612 9.46875 4.92676ZM12.0354 3.45349C11.8007 3.02087 11.5457 2.63953 11.2769 2.31421C12.2141 2.63428 13.0631 3.14636 13.7771 3.8031C13.3699 4.02124 12.931 4.21069 12.4694 4.36902C12.3384 4.0509 12.1936 3.74487 12.0354 3.45349ZM5.9646 3.45349C5.8064 3.74487 5.66162 4.0509 5.53064 4.36902C5.06897 4.21069 4.63013 4.02112 4.2229 3.8031C4.93689 3.14636 5.78589 2.63428 6.72314 2.31421C6.45435 2.63953 6.19946 3.02075 5.9646 3.45349ZM5.2135 5.25012C4.89355 6.27368 4.70544 7.38953 4.66492 8.53125H1.95349C2.05383 7.00769 2.63892 5.61438 3.5564 4.50525C4.06555 4.79724 4.62317 5.047 5.2135 5.25012ZM4.66492 9.46875C4.70544 10.6106 4.89355 11.7263 5.2135 12.7499C4.62317 12.953 4.06555 13.2028 3.5564 13.4948C2.63892 12.3856 2.05383 10.9923 1.95349 9.46875H4.66492ZM5.53064 13.631C5.66162 13.9491 5.8064 14.2551 5.9646 14.5465C6.19946 14.9791 6.45435 15.3605 6.72314 15.6858C5.78589 15.3657 4.93689 14.8536 4.22302 14.1969C4.63 13.9789 5.06897 13.7893 5.53064 13.631ZM12.0354 14.5465C12.1936 14.2551 12.3384 13.9491 12.4694 13.631C12.931 13.7893 13.3699 13.9789 13.7771 14.1969C13.0631 14.8536 12.2141 15.3657 11.2769 15.6858C11.5457 15.3605 11.8005 14.9792 12.0354 14.5465ZM12.7865 12.7499C13.1064 11.7263 13.2946 10.6105 13.3351 9.46875H16.0465C15.9462 10.9923 15.3611 12.3856 14.4436 13.4948C13.9344 13.2028 13.3768 12.953 12.7865 12.7499ZM13.3351 8.53125C13.2946 7.3894 13.1064 6.27368 12.7865 5.25012C13.3768 5.047 13.9344 4.79724 14.4436 4.50525C15.3611 5.61438 15.9462 7.00769 16.0465 8.53125H13.3351Z"
                              strokeWidth="0.2"
                            ></path>
                          </svg>
                        </span>
                        <span className="label">{selectedLanguage.toUpperCase()}</span>
                        {/* <button onClick={() => i18n.changeLanguage('es')}>🇪🇸 Spanish</button>
                        <button onClick={() => i18n.changeLanguage('en')}>🇺🇸 English</button> */}
                      </button>
                    </section>
                  </div>
                </div>
              </li>
              <li className="display-from-md">
                <a
                  href="/start_selling?source=top_nav"
                  className="nav-link"
                  rel="nofollow"
                >
                  Become a Seller
                </a>
              </li>
              <li className="display-from-sm">
                <a
                  rel="nofollow"
                  href="/login?source=top_nav"
                  className="nav-link"
                >
                  Sign in
                </a>
              </li>
              <li className="">
                <a
                  className="ZQi_S8t AOOSxop a1WZUBV MHWZydm co-green-700 fiverr-header-join"
                  rel="nofollow"
                  href="/join?source=top_nav"
                >
                  Join
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        className={`categories-menu-wrapper categories_menu-package ${isVisible ? "shown":""} snipcss-RVWtl`} 
        data-reactroot=""
      >
        <nav
          id="categories-menu-package"
          className="categories-menu-package default has-overflow has-overflow-vertical"
        >
          <button className="right">
            <span
              className="nFghBOe icon-chevron style-6hSYv"
              aria-hidden="true"
              id="style-6hSYv"
            >
              <svg
                width="8"
                height="16"
                viewBox="0 0 8 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
              </svg>
            </span>
          </button>
          <ul className="categories">
            <li
              data-level="top"
              className="sub-menu-item target top-level buckets_without_title buckets-without-title style-XpyTq"
              id="style-XpyTq"
            >
              <a href="/categories/graphics-design?source=category_tree">
                Graphics &amp; Design
              </a>
            </li>
            <li
              data-level="top"
              className="sub-menu-item target top-level buckets_without_title buckets-without-title style-iYSU3"
              id="style-iYSU3"
            >
              <a href="/categories/programming-tech?source=category_tree">
                Programming &amp; Tech
              </a>
            </li>
            <li
              data-level="top"
              className="sub-menu-item target top-level buckets_with_title buckets-with-title style-FYfAp"
              id="style-FYfAp"
            >
              <a href="/categories/online-marketing?source=category_tree">
                Digital Marketing
              </a>
            </li>
            <li
              data-level="top"
              className="sub-menu-item target top-level buckets_with_title buckets-with-title style-obBpM"
              id="style-obBpM"
            >
              <a href="/categories/video-animation?source=category_tree">
                Video &amp; Animation
              </a>
            </li>
            <li
              data-level="top"
              className="sub-menu-item target top-level buckets_with_title buckets-with-title style-6EC2g"
              id="style-6EC2g"
            >
              <a href="/categories/writing-translation?source=category_tree">
                Writing &amp; Translation
              </a>
            </li>
            <li
              data-level="top"
              className="sub-menu-item target top-level buckets_without_title buckets-without-title style-qMhJw"
              id="style-qMhJw"
            >
              <a href="/categories/music-audio?source=category_tree">
                Music &amp; Audio
              </a>
            </li>
            <li
              data-level="top"
              className="sub-menu-item target top-level buckets_without_title buckets-without-title style-i3QVU"
              id="style-i3QVU"
            >
              <a href="/categories/business?source=category_tree">Business</a>
            </li>
            <li
              data-level="top"
              className="sub-menu-item target top-level buckets_without_title buckets-without-title style-TOozi"
              id="style-TOozi"
            >
              <a href="/categories/finance?source=category_tree">Finance</a>
            </li>
            <li
              data-level="top"
              className="sub-menu-item target top-level buckets_without_title buckets-without-title style-47rcZ"
              id="style-47rcZ"
            >
              <a href="/categories/ai-services">AI Services</a>
            </li>
            <li
              data-level="top"
              className="sub-menu-item target top-level buckets_without_title buckets-without-title style-yHMTB"
              id="style-yHMTB"
            >
              <a href="/categories/lifestyle?source=category_tree">
                Personal Growth
              </a>
            </li>
            <li
              data-level="top"
              className="sub-menu-item target top-level buckets_without_title buckets-without-title style-9YDve"
              id="style-9YDve"
            >
              <a href="/categories/consulting-services">Consulting</a>
            </li>
            <li
              data-level="top"
              className="sub-menu-item target top-level buckets_with_title buckets-with-title style-eXdLm"
              id="style-eXdLm"
            >
              <a href="/categories/data?source=category_tree">Data</a>
            </li>
            <li
              data-level="top"
              className="sub-menu-item target top-level buckets_without_title buckets-without-title style-TJrOC"
              id="style-TJrOC"
            >
              <a href="/categories/photography?source=category_tree">
                Photography
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <LanguageSelector onSelect={handleLanguageSelect} />
      </Modal>
    </div>
  );
}
