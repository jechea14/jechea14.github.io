import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

// Reveal animation to fade in
function Reveal({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
