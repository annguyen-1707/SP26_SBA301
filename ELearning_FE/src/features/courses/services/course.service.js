import axiosClient from "@/shared/services/axiosClient";


const courseService = {
    findAll: async () => {
        const response = await axiosClient.get("/courses");
        return response.data;
    },
    findById: async (id) => {
        const response = await axiosClient.get(`/courses/${id}`);
        return response.data;
    },
};

export default courseService;