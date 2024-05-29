import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

export default function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  mt?: string;
}) {
  const revealAnimate = useAnimation();
  const revealRef = useRef(null);

  const inView = useInView(revealRef, { once: true, margin: "-20%" });

  useEffect(() => {
    if (inView) {
      revealAnimate.start("visible")!;
    }
  }, [inView, revealAnimate]);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: 0.25 }}
      ref={revealRef}
      initial="hidden"
      animate={revealAnimate}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
}
