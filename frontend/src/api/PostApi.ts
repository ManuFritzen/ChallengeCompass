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
    },

    newPost:async function(postDto: any) {
        try {
            const response = await api.post('/posts', postDto);
            const data = response.data;
            return data;
        } catch (error) {
            console.error('Error creating user');
            console.error({ error });
            return null;
        }
    }, 

}