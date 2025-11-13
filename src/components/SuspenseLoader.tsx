import React from 'react'
import AnimatedCSS from '../CSS/AnimatedLoader.module.css';

const SuspenseLoader = () => {
   return (
    <div className={AnimatedCSS["loader-container"]}>
      <div className={AnimatedCSS["spinner"]}></div>
      <p>Loading content...</p>
    </div>
  );
}

export default SuspenseLoader
