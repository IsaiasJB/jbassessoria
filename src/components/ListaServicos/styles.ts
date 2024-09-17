import {styled} from "@/styles";
import  * as Dialog from "@radix-ui/react-dialog"

export const Container = styled('div', {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
});


export const ServicesWrapper = styled('div', {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',

    '@mobile': {
        flexDirection: 'column',
        gap: '1rem'
    }

});

export const ServiceItem = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});
export const ServiceBox = styled('div', {
    width: '80px',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$primary',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
        border: '2px solid #97D5EB',
    },
});

export const ServiceTitle = styled('p', {
    marginTop: '0.5rem',
    fontSize: '1rem',
    textAlign: 'center',
    color: '#000000',
});

export const DialogOverlay = styled(Dialog.Overlay, {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    inset: 0,
});

export const DialogContent = styled(Dialog.Content, {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '$primary',
    padding: '2rem',
    borderRadius: '8px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    minHeight: '300px',
    overflowY: 'auto',

    '@tablet': {
        width: '90%',
        maxWidth: '500px',
        maxHeight: '80vh',
    },

    '@mobile': {
        width: '90%',
        maxWidth: '500px',
        maxHeight: '80vh',
    }
});

export const DialogTitle = styled(Dialog.Title, {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '$highlight',
});

export const ServiceList = styled('ul', {
    listStyleType: 'disc',
    paddingLeft: '1.5rem',
    color: '$secondary',

});

export const ServiceListItem = styled('li', {
    fontSize: '1rem',
    marginBottom: '1rem',
});

export const DialogClose = styled(Dialog.Close, {
    marginTop: '1rem',
    backgroundColor: '#97D5EB',
    padding: '0.5rem 1rem',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '1rem',
});