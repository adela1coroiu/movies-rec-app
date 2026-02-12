import { useEffect, useState } from "react";

export function useWatchlist() {
    const [watchlist, setWatchlist] = useState(() => {
        const saved = localStorage.getItem('watchlist');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
    }, [watchlist]);

    const addToWatchlist = (movie) => {
        const isAlreadyAdded = watchlist.some(item => item.id === movie.id);
        if(!isAlreadyAdded) {
            setWatchlist(prev => [...prev, movie]);
            alert(`${movie.title} added to Watch later!`);
        }
        else {
            alert(`${movie.title} is already in the Watch later list!`);
        }
    };

    const removeFromWatchlist = (movieId) => {
        setWatchlist(prev => prev.filter(movie => movie.id !== movieId));
    };

    return { watchlist, addToWatchlist, removeFromWatchlist };
}