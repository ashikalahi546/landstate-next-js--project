"use client"
const { useEffect } = require("react");

export const HandleOutsideClickEvent = (subButtonRef, setIsMenuVisible) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                subButtonRef.current &&
                !subButtonRef.current.contains(event.target)
            ) {
                setIsMenuVisible(false);
            }
            // else {
            //     setIsMenuVisible((prev) => !prev);
            // }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [subButtonRef, setIsMenuVisible]);
}
