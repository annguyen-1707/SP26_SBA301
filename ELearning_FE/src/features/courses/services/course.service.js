import axiosClient from "@/shared/services/axiosClient"
const courseService = {
    findAll: async () => {
        axiosClient.get()
    }
}

export default courseService;