import {FormWrapper, Input, Label, Textarea} from "./styles";
import {CaretDoubleRight} from "phosphor-react";
import React, {ChangeEvent, FormEvent, useState} from "react";
import {Button} from "@/components/Button";
import {useEmail} from "@/utils/useEmail";


interface FormValues {
    from_name: string;
    email: string;
    message: string;
}

export function ContactForm() {
    const {sendEmail, loading, error, success} = useEmail()
    const [formValues, setFormValues] = useState<FormValues>({
        from_name: '',
        email: '',
        message: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        sendEmail(e.currentTarget)
            .then(() => {
                setFormValues({
                    from_name: '',
                    email: '',
                    message: '',
                });
            })
            .catch(() => {
            });
    }


    return (
        <FormWrapper onSubmit={handleSubmit}>
            <Label htmlFor="nome">Nome</Label>
            <Input type="text" id="nome" name="from_name" value={formValues.from_name} onChange={handleChange}
                   required/>

            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} required/>

            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea id="message" name="message" value={formValues.message} onChange={handleChange} required/>

            <Button type="submit" color="primary" size="small" icon={<CaretDoubleRight size={20}/>} iconPosition="right"
                    label={loading ? 'Enviando...' : 'Enviar'}/>
            {success && <p>Mensagem enviada com sucesso!</p>}
            {error && <p>Ocorreu um erro ao enviar sua mensagem. Tente novamente.</p>}
        </FormWrapper>
    );
}