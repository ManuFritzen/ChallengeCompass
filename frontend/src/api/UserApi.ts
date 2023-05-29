import api from './config';

// TODO criar as tipagens

export type LoginDto = {
    user: string;
    password: string;
}

export const UserAPI = {
    register: async function(userDto: any) {
        try {
            const response = await api.post('/users', userDto);
            const data = response.data;
            return data;
        } catch (error) {
            console.error('Error creating user');
            console.error({ error });
            return null;
        }
    },

    getAll: async function() {
        const response = await api.get('/users');
        return response.data;
    },

    login: async function(loginDto: LoginDto) {
        try {
            const response = await api.post('/users/login', loginDto);
            const { jwt } = response.data;
            api.defaults.headers.common['Authoritzation'] = `bearer ${jwt}`
            // SALVAR O JWT NO LOCAL STORAGE
            return jwt;
        } catch (error) {
            console.error('Error login');
            console.error({ error });
            return null;
        }
    }
}