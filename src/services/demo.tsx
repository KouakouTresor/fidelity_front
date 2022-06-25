export const getDemoApi = () => {
    return fetch('http://localhost:8080/api/v1/demo', {
        method: 'GET',
    })
        .then((res) => {
            console.log(res);
            res.json();
        })
        .catch((err) => console.log(err));
};

export const getDemoNameApi = (name: string) => {
    fetch(`http://localhost:8080/api/v1/demo/${name}`)
        .then((res) => {
            console.log(res);
            res.json();
        })
        .catch((err) => console.log(err));
};
