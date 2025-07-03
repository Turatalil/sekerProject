export const fetchFromApi = async ({ name, method, id, loginIsAccount }, options = {}) => {
    try {
        const url = `http://43.204.218.113/api/v1/${name}${id ? `/${id}` : ""}`;
        const res = await fetch(url, {
            method, ...options,
            headers: {  
                "Content-Type": "application/json",
                Authorization:  `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ5Mjc0MDExLCJpYXQiOjE3NDg2NjkyMTEsImp0aSI6IjQ5MWYxN2M3MTY0ZTQ5NDZiODRjMjQ0ODYwYjc3NTFhIiwidXNlcl9pZCI6MX0.t9lXGzSFwXe-5K2is7Tm3hNyutvtKjMukgAN1QfOJNU"}`
            },
            body: JSON.stringify(loginIsAccount),

        });
        console.log(loginIsAccount);
        const data = await res.json();
        data._status = res.status;
        return data;
    } catch (error) {
        console.log("ERROR", error);
        throw error;
    }
};

// const API_URL = 'http://43.204.218.113/api/v1/';
// let store;

// export const testStore = (formSt) => {
//     store = formSt;
// };

// export const fetchApi = async ({ endpoint, method, loginIsAccount, customHeaders = {} }) => {
//     const token = store.getState().auth.token || localStorage.getItem('token');
//     console.log(token);
//     console.log(loginIsAccount)
//     console.log(method)
//     console.log(endpoint);
    
//     try {
//         let headers = {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`,
//             ...customHeaders
//         };
        
//         // console.log(headers);
        
//         let options = {
//             method: method,
//             headers: headers,
//         };
        
//         if (loginIsAccount) {
//             options.body = JSON.stringify(loginIsAccount);
//         }
        
//         const response = await fetch(`${API_URL}${endpoint}`, options);
        
//         if (!response.ok) {
//             throw new Error(`Запрос катасы: ${response.status} - ${response.statusText}`);
//         }
        
//         const result = await response.json();
//         return result;
//     } catch (error) {
//         console.error("Запрос катасы:", error);
//         console.log(endpoint);
//         throw error;
//     }
// };
