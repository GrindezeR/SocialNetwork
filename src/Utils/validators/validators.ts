// Synchronous validation function
// export const validate = value => {
//     let errorMessage;
//     if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//         errorMessage = 'Invalid email address';
//     }
//     return errorMessage;
// };
//
// // Async validation function
// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//
// export const validateAsync = value => {
//     return sleep(2000).then(() => {
//         if (['admin', 'null', 'god'].includes(value)) {
//             return 'Nice try';
//         }
//     });
// };


export const required = (value: string) => {
    let error = ''
    if (value) {
        return undefined
    }
    error = `Field required`
    return error
}

export const maxLengthCreator = (maxLength: number) => {
    let error = ''
    return (value: string) => {
        if (value.length >= maxLength) {
            error = `Max length is ${maxLength} symbols`
            return error;
        }
        return undefined
    }
}