

export const fetchFromApi = async ({ name, method = "GET", id, loginIsAccount }, options = {}) => {
  try {
    const url = `http://43.204.218.113/api/v1/${name}${id ? `/${id}/` : ""}`;
    const token = localStorage.getItem("access_token");

    const res = await fetch(url, {
      method,
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      ...(loginIsAccount ? { body: JSON.stringify(loginIsAccount) } : {}),
    });

    const data = await res.json();
    data._status = res.status;
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};








// export const fetchFromApi = async ({ name, method, id, loginIsAccount }, options = {}) => {
//     try {
//         const url = `http://43.204.218.113/api/v1/${name}${id ? `/${id}` : ""}`;
//         const res = await fetch(url, {
//             method, ...options,
//             headers: {  
//                 "Content-Type": "application/json",
//                 Authorization:  `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ5Mjc0MDExLCJpYXQiOjE3NDg2NjkyMTEsImp0aSI6IjQ5MWYxN2M3MTY0ZTQ5NDZiODRjMjQ0ODYwYjc3NTFhIiwidXNlcl9pZCI6MX0.t9lXGzSFwXe-5K2is7Tm3hNyutvtKjMukgAN1QfOJNU"}`
//             },
//             body: JSON.stringify(loginIsAccount),

//         });
//         console.log(loginIsAccount);
//         const data = await res.json();
//         data._status = res.status;
//         return data;
//     } catch (error) {
//         console.log("ERROR", error);
//         throw error;
//     }
// };
