'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="The Lazurus Missions"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        ✨ Greetings from IEEE NITK! ✨ Ready to push the boundaries of Machine Learning? Join THE LAZARUS MISSIONS 🏆—a 4-day ML Hackathon for 1st, 2nd, and 3rd-year BTech students! Tackle real-world challenges in Digital Image Processing, Computer Vision, NLP, and more!
      </motion.p>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="mt-[16px] p-[16px] bg-secondary-white bg-opacity-10 rounded-md"
      >
        <p className="font-bold text-[24px] text-center text-white">
          💰 ₹15,000+ prize pool, ⏳ 96-hour challenge, and a chance to compete solo or in teams (1-3 members).
        </p>
        <p className="font-bold text-[24px] text-center text-white mt-[8px]">
          📅 1st March, 6 PM – 5th March, 6 PM 2025.
        </p>
        <p className="font-bold text-[24px] text-center text-white mt-[8px]">
          Register now: Unstop. 🚀 Innovate. Compete. Win! 🔥
        </p>
      </motion.div>

      <motion.img
        variants={fadeIn('up', 'tween', 0.4, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
