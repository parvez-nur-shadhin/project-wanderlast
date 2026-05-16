export const fetchingDestinations = async() => {
    const res = await fetch('http://localhost:8000/destinations');
    const data = await res.json();
    return data;
}