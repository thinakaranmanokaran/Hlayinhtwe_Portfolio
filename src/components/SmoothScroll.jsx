// SmoothScroll.jsx
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);
    const { scrollY } = useScroll();
    const [pageHeight, setPageHeight] = useState(0);

    // Smooth spring scroll
    const smoothY = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
        mass: 1,
    });

    const y = useTransform(smoothY, (val) => -val);

    // Measure content height to set container size
    useEffect(() => {
        if (scrollRef.current) {
            const resizeObserver = new ResizeObserver(() => {
                setPageHeight(scrollRef.current.scrollHeight);
            });
            resizeObserver.observe(scrollRef.current);

            return () => resizeObserver.disconnect();
        }
    }, []);

    return (
        <>
            {/* Fake spacer to keep natural scroll height */}
            <div style={{ height: pageHeight }} />

            {/* Fixed viewport with smooth motion */}
            <motion.div
                ref={scrollRef}
                style={{ y }}
                className="fixed top-0 left-0 w-full will-change-transform"
            >
                {children}
            </motion.div>
        </>
    );
};

export default SmoothScroll;
