export function getAuthHeader() {
    const token = JSON.parse(localStorage.getItem('user')).token;
    const header = {
        'Authorization': `Token ${token}`
    }
    return header;
}