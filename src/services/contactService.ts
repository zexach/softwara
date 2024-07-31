import emailjs from '@emailjs/browser'
import { emailValidator } from '../validators/emailValidator';

export const sendEmail = (
        e: React.FormEvent,
        mail: string,
        name: string,
        message: string,
        setIsSent: React.Dispatch<React.SetStateAction<boolean>>,
        setMail: React.Dispatch<React.SetStateAction<string>>,
        setName: React.Dispatch<React.SetStateAction<string>>,
        setMessage: React.Dispatch<React.SetStateAction<string>>
    ): void => {
    
    e.preventDefault();
    
    const templateParams = {
        to_name: name,
        from_name: mail,
        message: message
    }

    if ( (mail !== '' && emailValidator(mail)) && name !== '' && message !== '' ) {
        setIsSent(false)
        emailjs.send("service_dsdu5kr","template_1tayn0d", templateParams, 'eyjHM7vPS1VsYrbD4')
        .then(
            (response) => {
              console.log('SUCCESS!', response.status, response.text);
              setIsSent(true);
              setMail('');
              setName('');
              setMessage('');
            },
            (error) => {
              console.log('FAILED...', error);
              setIsSent(true);
            }
        );
    }
}