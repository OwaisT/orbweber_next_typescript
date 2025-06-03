"use client";
import { useEffect, useState } from "react";

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(() => {
        if (typeof window === 'undefined') return false; // Ensure code runs only on client side
        return window.matchMedia(query).matches;
    });

    useEffect(() => {
        if (typeof window === 'undefined') return; // Ensure code runs only on client side

        function handleChange() {
            setMatches(window.matchMedia(query).matches);
        }

        const mediaQueryList = window.matchMedia(query);
        mediaQueryList.addEventListener('change', handleChange);

        return () => {
            mediaQueryList.removeEventListener('change', handleChange);
        };
    }, [query]);

    return matches;
}

export default useMediaQuery;