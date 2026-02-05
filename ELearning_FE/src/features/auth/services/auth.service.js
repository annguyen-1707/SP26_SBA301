export const auth = {
  login: async (payload) => {
    if (
      payload.email === "admin@example.com" &&
      payload.password === "123456"
    ) {
      return {
        user: {
          id: 1,
          name: "John",
          email: "admin@example.com",
        },
        accessToken: "ACCESS_TOKEM_SAMPLE",
      };
    } else throw new Error("Invalid credentials!");
  },
  logout: async () => {},
  findByEmail: async (email) => {
    
  },
  register: (payload) => {

    const promise = fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    return promise;
  },
  refreshToke: async () => {},
};
