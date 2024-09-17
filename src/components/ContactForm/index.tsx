import { FormWrapper, Input, Label, Textarea} from "./styles";
import {CaretDoubleRight} from "phosphor-react";
import React from "react";
import {Button} from "@/components/Button";

export function ContactForm() {
    return (
        <FormWrapper>
            <Label htmlFor="nome">Nome</Label>
            <Input type="text" id="nome" name="nome" />

            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" />

            <Label htmlFor="mensagem">Mensagem</Label>
            <Textarea id="mensagem" name="mensagem" />

            <Button type="submit" color="primary" size="small" icon={<CaretDoubleRight size={20}/>} iconPosition="right"
                    label="Enviar"/>
        </FormWrapper>
    );
}