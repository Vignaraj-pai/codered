'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} pt-4 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-center gap-8 w-full`}>
      {/* <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" /> */}
      <img src="/hackLogoTrans.png" alt="logo" className="w-64 h-64 object-contain p-0" />
      {/* <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" /> */}
    </div>
  </motion.nav>
);

export default Navbar;
