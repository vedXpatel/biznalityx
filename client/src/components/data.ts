import axios from 'axios';

interface coordinates {
    county: string;
}

interface metrics{
    county: string;
}

export const getData = async({county}:coordinates) => {
    try {
        const response = await axios.get('http://localhost:5000/coordinates/' + county);
        return response.data.coordinates;
    } catch (err: any) {
        console.error(`Error: ${err.message}`);
    }
}

export const getMetrics = async({county}:metrics) => {
    try {
        const response = await axios.get('http://localhost:5000/metrics/' + county);
        return response.data;
    }
        catch(err: any) {
            console.error(`Error: ${err.message}`);
        }
}