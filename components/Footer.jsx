'use client';

import { motion } from 'framer-motion';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { basePath } from '../next.config';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Register Now
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#fe0100] rounded-[32px] gap-[12px]"
          onClick={() => window.open('https://unstop.com/o/zspXwvc?utm_medium=Share&utm_source=shortUrl')}
        >
          <span className="font-normal text-[16px] text-white">
            Register
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            IEEE NITK
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2024 IEEE NITK.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a key={social.name} href={social.link}>
                <img
                  src={basePath + social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
