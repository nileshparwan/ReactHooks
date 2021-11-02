import { useState, useEffect } from 'react';

const useRandowJoke = (fistName, lastName) => {
    const [joke, setJoke] = useState('');
    const [loader, setLoader] = useState('...Loading');

    useEffect(() => {
        const fetchJoke = async () => {
            await fetch(`https://api.icndb.com/jokes/random?lastName=${fistName}&lastName=${lastName}`)
                .then(res => res.json())
                .then(data => {
                    setJoke(data.value.joke)
                    setLoader(''); 
                });
        };

        fetchJoke();
    }, [fistName, lastName]);

    return [loader, joke];
};

export default useRandowJoke;
