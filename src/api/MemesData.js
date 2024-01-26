import axios from 'axios'

const MemesData = {
    getMemes: async () => {
        try {
            const response = await axios.get('https://api.imgflip.com/get_memes');
            if (response.data.success) { return response.data.data.memes; }
            else { console.error('Failed to fetch memes:', response.data.error_message); }
        } catch (error) {
            console.error('Error fetching memes:', error.message);
        }
    },
};

export default MemesData;