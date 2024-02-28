import { ILogin, IRegister } from '@/@types/custom';
import * as validation from 'zod';

export const loginFormSchema = validation.object({
    login: validation
        .string()
        .min(5, { message: 'Login-ul trebuie sa fie de minim 5 caractere' })
        .max(30, { message: 'Login-ul nu poate avea mai mult de 30 de caractere' }),
    password: validation.string().min(6, { message: 'Parola trebuie sa fie de minim 6 caractere' }),
});

export const registerFormSchema = validation.object({
    company: validation.string(),
    companyName: validation.string(),
    address: validation.string().min(3, { message: 'Adresa este obligatorie.' }),
    person: validation.string().min(3, { message: 'Numele și prenumele sunt obligatorii.' }),
    password: validation.string().min(6, { message: 'Parola trebuie să aibă minim 6 caractere.' }),
    UUID: validation.string().min(3, { message: 'UUID-ul este obligatoriu.' }),
    city: validation.string().min(3, { message: 'Orașul este obligatoriu.' }),
    phone: validation.string().min(3, { message: 'Telefonul este obligatoriu.' }),
});

export const productFormSchema = validation.object({
    name: validation.string().min(3, { message: 'Numele trebuie să aibă minim 3 caractere' }),
    image: validation.any(),
    UUID: validation.string().min(3, { message: 'UUID trebuie să aibă minim 3 caractere' }),
    price: validation.string(),
    packageInfo: validation
        .string()
        .min(3, { message: 'Info. despre cutie trebuie să aibă minim 3 caractere' }),
    packageSize: validation.string(),
});

export const initialRegisterSchema = {
    company: '',
    companyName: '',
    address: '',
    person: '',
    password: '',
    UUID: '',
    city: '',
    phone: '',
} as IRegister;

export const initialLoginSchema = {
    login: '',
    password: '',
} as ILogin;

export const initialProductSchema = {
    name: '',
    image: '',
    UUID: '',
    price: '',
    packageInfo: '',
    packageSize: '',
};
