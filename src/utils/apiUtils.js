import axios from 'axios';

export const callApi = async (url, method = 'GET', data = null, setLoading, setError,headerData=null) => {
    let response;
    try {
        setLoading(true);
       
        switch (method.toUpperCase()) {
            case 'GET':
                response = await axios.get(url,data);
                break;
            case 'POST':
                response = await axios.post(url, data);
                break;
            case 'PUT':
                response = await axios.put(url, data,headerData);
                break;
            case 'DELETE':
                response = await axios.delete(url,{data:data});
                break;
            default:
                throw new Error('Invalid HTTP method');
        }
        setLoading(false);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
        return error;// Re-throw the error for handling in the calling code
    }
};
