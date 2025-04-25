"use client"

import React, { useEffect, useRef, useState } from "react";
import style from "./StickyRoll.module.scss";

const StickyRoll = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]');

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const topDistance = rect.top + window.scrollY;
        
        if (scrollPosition >= topDistance && 
            scrollPosition < (topDistance + rect.height)) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={style.stickyRollWrapper}>
      <div className={style.container}>
        <div className={style.stickyContainer}>
          <div className={`${style.colorBox} ${style[`color${activeSection}`]}`} />
        </div>
        
        <div className={style.sectionsContainer}>
          <div className={style.section}>
            <div className={style.content} data-section="documents">
              <h3>Document Requirement</h3>
              <ul>
                <li>ID Proof (PAN)</li>
                <li>Passport-Size Photo</li>
                <li>Residence Proof (Max 2 Month Old Bill)</li>
                <li>Director's Address Proof</li>
                <li>Business Address Proof</li>
                <li>Notarized/Apostilled Documents For NRI/Foreign Residents</li>
              </ul>
            </div>
          </div>

          <div className={style.section}>
            <div className={style.content} data-section="directors">
              <h3>Two Directors</h3>
              <p>At Least Two Directors Are Required (Maximum Of Fifteen), With One Being A Resident Of India.</p>
            </div>
          </div>

          <div className={style.section}>
            <div className={style.content} data-section="capital">
              <h3>Minimum Capital Contribution</h3>
              <p>No Minimum Capital For LLP, But Authorized Capital Should Be At Least ₹1 Lakh.</p>
            </div>
          </div>

          <div className={style.section}>
            <div className={style.content} data-section="office">
              <h3>Registered Office</h3>
              <p>The Registered Office Of The Company Does Not Have To Be A Commercial Space. A Rented Home Can Serve As The Registered Office With An NOC From The Landlord.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyRoll;