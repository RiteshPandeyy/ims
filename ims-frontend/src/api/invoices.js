import api from './axiosClient';
export const fetchParents = () => api.get('/parents').then(r => r.data);
export const fetchChildren = (parentId) => api.get(`/parents/${parentId}/children`).then(r => r.data);