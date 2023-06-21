
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function App() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Designer !", "","","Developer !"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 10,
      typeSpeed: 10,
      backSpeed: 10,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      // cursorChar: "!"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
      <span ref={el}></span>
  );
}