import { useState } from 'react';

function useStateStorage(key, defaultValue) {
    const [state, setState] = useState(() => {
        const storageValue = window.localStorage.getItem(key);
        return storageValue ? JSON.parse(storageValue) : defaultValue;
    });

    const setValue = (newValue) => {
        let valueToSet;
        if (typeof newValue === 'function') {
            valueToSet = newValue();
        } else {
            valueToSet = newValue;
        }

        setState(valueToSet);
        window.localStorage.setItem(key, JSON.stringify(valueToSet));
    };

    return [state, setValue];
}

export default useStateStorage;
