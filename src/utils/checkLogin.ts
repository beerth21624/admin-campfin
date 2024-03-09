const isLoggedIn = () => {
    return localStorage.getItem('token') !== null;
    }

export {
    isLoggedIn
};
