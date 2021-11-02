import { useState, useEffect } from "react";

// Hook
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    // Handler to call on window resize
    const HandleResize = () => {
        // Set window width/height to state
        console.log("HandleResize"); 
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useEffect(() => {
        HandleResize(); 

        // Add event listener
        window.addEventListener("resize", HandleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", HandleResize);
    }, []); // Empty array ensures that effect is only run on mount


    return [windowSize.width, windowSize.height];
};

export default useWindowSize;

