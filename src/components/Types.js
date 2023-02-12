import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const Types = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ['<h1>Well Fast Delivery' ,'<h1>Your delivery is safe with us! </h1>', '<h1>Security and commitment for over 15 years. </h1>', '<h1>Contact us, we deliver anywhere in the country<h1>'],
      typeSpeed: 75,
      backSpeed: 25,
      bindInputFocusEvents: true,
      loop: true,
      cursorChar: ' ',
      backDelay: 1000,
      startDelay: 1000,
      margin: 0
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typeTarget} />;
};

export default Types;


