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