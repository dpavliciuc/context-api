import { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        visible && (
            <button
                onClick={scrollUp}
                className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer md:hidden"
            >
                ↑
            </button>
        )
    );
};

export default ScrollToTop;