import api from './config';

export const CommentAPI = {
    getAll: async function() {
        try {
            const response = await api.get('/posts/:id/comments');
            const data = response.data;
            return data.comments;
        } catch (error) {
            console.error('Error getting comments');
            console.error({ error });
            return null;
        }
    },

    newPost:async function(commentDto: any) {
        try {
            const response = await api.post('/posts/:id/comments', commentDto);
            const data = response.data;
            return data;
        } catch (error) {
            console.error('Error creating comment');
            console.error({ error });
            return null;
        }
    }, 

}