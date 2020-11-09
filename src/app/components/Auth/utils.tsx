// module for saving tokens to local storage
const TOKEN_KEY = 'aurign://auth/jwt';
// tokens = { accessToken: "xyz", refreshToken: "abc" }
export function saveTokens(tokens: JSON) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(tokens));
}

export function getTokens()  {
    const token = localStorage.getItem(TOKEN_KEY);
    return token && JSON.parse(token);
}

export function deleteTokens() {
    localStorage.removeItem(TOKEN_KEY);
}