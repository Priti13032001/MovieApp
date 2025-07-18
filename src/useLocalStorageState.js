import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
    const [value, setValue] = useState(function() {
        const storedValue = localStorage.getItem(key);
        // console.log(storedValue);
        // return JSON.parse(storedValue);
        return storedValue ? JSON.parse(storedValue) : initialState;
    });

    useEffect(
        function() {
            localStorage.setItem(key, JSON.stringify(value));
        }, [value, key]
    );
    return [value, setValue];
}