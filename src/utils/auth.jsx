export const loginUser = (email, password) => {
    // dummy auth: accept any email/password
    const user = { role: "user", email };
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  };
  
  export const signupUser = (name, email, password) => {
    const user = { role: "user", name, email };
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  };
  
  export const loginAdmin = (username, password) => {
    // Dummy admin login — change as needed
    if (username === "admin" && password === "admin123") {
      const admin = { role: "admin", username };
      localStorage.setItem("admin", JSON.stringify(admin));
      return admin;
    }
    return null;
  };
  
  // logout both user & admin
  export const logoutAll = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
  };
  