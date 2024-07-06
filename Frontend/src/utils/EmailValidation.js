
export const EmailValidation=(email)=>{

    const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);
}