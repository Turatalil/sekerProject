
export const fetchFromApi = async ({ name, method, id = "" }, options = {}) => {
    try {
        const url = `http://43.204.218.113/api/v1/${name}${id ? `/${id}` : ""}`;
        const res = await fetch(url, { method, ...options });
        const data = await res.json();
        data._status = res.status;
        return data;
    } catch (error) {
        console.log("ERROR", error);
        throw error;
    }
};