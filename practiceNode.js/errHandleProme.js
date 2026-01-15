function fetchData() {
    return new Promise((resolve, reject) => {
        reject(new Error('network error'));
    });
}
fetchData()
    .then(
        data => console.log('Data:', data),
        error => console.error('Error handled in then:', error.message)
    );
fetchData()
    .then(data => console.log('Data:', data))
    .catch(error => console.log('Error handled in catch:', error.message));