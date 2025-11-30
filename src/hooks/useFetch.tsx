import { useState, useEffect } from 'react';

const useFetch = async (url: string) => {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};
export default useFetch;