import api from './config';

export const PostAPI = {
    getAll: async function() {
        try {
            const response = await api.get('/posts');
            const data = response.data;
            return data.posts;
        } catch (error) {
            console.error('Error getting posts');
            console.error({ error });
            return null;
        }
    }

}