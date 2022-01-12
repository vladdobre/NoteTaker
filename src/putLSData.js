//Upload data to local storage after turning it into a JSON string. Key can be used to retrieve data.
const putLSData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export default putLSData;