const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Ok')
        }
        else{
            reject('Error')
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Ok')
            }, 2000);
        }
        else{
            const error = new Error('Ocurrió un error')
            reject(error)
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Results array', response)
    })
    .catch(err => {
        console.log(err)
    })