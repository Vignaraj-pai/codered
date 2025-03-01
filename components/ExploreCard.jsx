/* eslint-disable react/no-danger */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, shortDescription, description, objective, link, index, active, handleClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
        onClick={() => handleClick(id)}
      >
        <img src={imgUrl} alt={title} className="absolute w-full h-full object-cover rounded-[24px]" />

        {active !== id ? (
          <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] bg-[rgba(0,0,0,0.5)] p-2 rounded">
            {title}
          </h3>
        ) : (
          <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
            <p className="font-bold text-[16px] leading-[20.16px] text-white uppercase">{shortDescription}</p>
            <h2 className="mt-[24px] font-bold sm:text-[32px] text-[24px] text-white">
              {title}
            </h2>
            <button
              type="button"
              className="mt-[24px] py-2 px-4 bg-[#120106] rounded-[12px] text-white shadow-lg shadow-white font-bold text-[16px]"
              onClick={(e) => {
                e.stopPropagation(); // Prevents triggering parent click
                setIsModalOpen(true);
              }}
            >
              Read Challenge
            </button>
          </div>
        )}
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-[#1a1a1a] text-white p-6 rounded-[12px] max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            <button
              type="button"
              className="absolute top-2 right-4 text-white text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold my-2 mb-4 text-blue-400"
            >
              Link
            </a>
            <p className="mb-2 text-md" dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }} />
            <p className="mb-1 mt-3 font-semibold"> Objective: </p>
            <p className="mb-2" dangerouslySetInnerHTML={{ __html: `${objective.replace(/\n/g, '<br />')}` }} />
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline mt-4 inline-block"
            >
              View Challenge
            </a>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ExploreCard;
