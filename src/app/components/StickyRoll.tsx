"use client"

import React, { useEffect, useRef, useState } from "react";
import style from "./StickyRoll.module.scss";
import image1 from './Download Free Vectors, Images, Photos & Videos _ Vecteezy.jpeg'
import image2 from './ERROR unique T-shirt.jpeg'
import image3 from './_ (7).jpeg'
import image4 from './peakpx (7).png'
import { StaticImageData } from 'next/image';

const sections = [
  {
    title: "Document Requirement",
    listItems: [
      "ID Proof (PAN)",
      "Passport-Size Photo",
      "Residence Proof (Max 2 Month Old Bill)",
      "Director's Address Proof",
      "Business Address Proof",
      "Notarized/Apostilled Documents For NRI/Foreign Residents"
    ]
  },
  {
    title: "Two Directors",
    listItems: [
        "ID Proof (PAN)",
        "Passport-Size Photo",
        "Residence Proof (Max 2 Month Old Bill)",
        "Director's Address Proof",
        "Business Address Proof",
        "Notarized/Apostilled Documents For NRI/Foreign Residents"
      ]
  },
  {
    title: "Minimum Capital Contribution",
    listItems: [
        "ID Proof (PAN)",
        "Passport-Size Photo",
        "Residence Proof (Max 2 Month Old Bill)",
        "Director's Address Proof",
        "Business Address Proof",
        "Notarized/Apostilled Documents For NRI/Foreign Residents"
      ]
  },
  {
    title: "Registered Office",
    listItems: [
        "ID Proof (PAN)",
        "Passport-Size Photo",
        "Residence Proof (Max 2 Month Old Bill)",
        "Director's Address Proof",
        "Business Address Proof",
        "Notarized/Apostilled Documents For NRI/Foreign Residents"
      ]
  },
];

const images: StaticImageData[] = [image1, image2, image3, image4];

const StickyRoll = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const titles = document.querySelectorAll('h3');
      const scrollPosition = window.scrollY;
      
      titles.forEach((title, index) => {
        const rect = title.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
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
          <div className={style.colorBox}>
            {images.map((img: StaticImageData, index: number) => (
              <img 
                key={index}
                src={img.src} 
                alt={`Section ${index + 1}`}
                className={activeSection === index ? style[`image${index}`] : ''}
              />
            ))}
          </div>
        </div>
        
        <div className={style.sectionsContainer}>
          {sections.map((section, index) => (
            <div key={index} className={style.section}>
              <div className={style.content} data-section={`section-${index}`}>
                <h3>{section.title}</h3>
                {/* {section.description && <p>{section.description}</p>} */}
                {section.listItems && (
                  <ul>
                    {section.listItems.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickyRoll;