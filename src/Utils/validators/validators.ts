import {FormikErrorType} from "../../components/Login/LoginForm";

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
        if (value.length > maxLength) {
            error = `Max length is ${maxLength} symbols`
            return error;
        }
        return undefined
    }
}
type ValuesType = {
    email: string
    password: string
    remember: boolean
}

export const validateFormik = (values: ValuesType,
                               errors: FormikErrorType,
                               minPassLength: number) => {
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Password required';
    } else if (values.password.length < minPassLength) {
        errors.password = `Min length ${minPassLength} characters`;
    }
    return errors;
}