import {useState} from "react"
import emailjs from '@emailjs/browser'

interface SendEmailResult {
    status: number;
    text: string;
}

export function useEmail() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);

    const sendEmail = async (formData: HTMLFormElement): Promise<SendEmailResult | void> => {
        setLoading(true);
        setError(null);
        try {
            const result: SendEmailResult = await emailjs.sendForm(
                'service_jfop5u8',
                'template_hj6z246',
                formData,
                '9I3KlYzuwGiCvSCfh'
            );
            setSuccess(true);
            return result;
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return {sendEmail, loading, error, success};
}