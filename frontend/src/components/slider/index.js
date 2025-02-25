"use client"
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './slider.module.css';

export default function Slider({ slides, autoPlayInterval }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlayInterval) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);
      return () => clearInterval(intervalId);
    }
  }, [autoPlayInterval, slides.length]);

  return (
    <div className={styles.slider}>
      <div className={styles.slide_viewer}>
        <img
          src={slides[currentIndex].imageSrc}
          alt="side img"
        />
      </div>
      <div className={styles.dots}>
        {slides.map((_,index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
  autoPlayInterval: PropTypes.number,
};

Slider.defaultProps = {
  autoPlayInterval: 4000,
};
