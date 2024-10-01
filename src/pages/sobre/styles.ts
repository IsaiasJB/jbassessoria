import {styled} from "@/styles";
import * as Dialog from "@radix-ui/react-dialog";

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '100%',
})

export const Content = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '2rem 9.375rem',
    flexDirection: 'column',
    width: '100%',

    '@tablet': {
        padding: '2rem 5rem',
    },

    '@mobile': {
        padding: '2rem 3rem',
    }
})

export const ContentTitle = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '0',


    // '@desktop' : {
    //     display: 'flex',
    //     alignItems: 'center',
    //     width: '100%',
    //     justifyContent: 'space-between',
    // },
    //
    // '@tablet' : {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     width: '100%',
    //     justifyContent: 'center',
    // },
    // '@mobile' : {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     width: '100%',
    //     justifyContent: 'center',
    // },
})

export const TitleContent = styled('div', {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
})

export const Title = styled('h2', {
    fontSize: '28px',
    fontWeight: 'normal',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',


    '@tablet': {
        fontSize: '$5',
        textAlign: 'center',
    },
    '@mobile': {
        fontSize: '$4',
        textAlign: 'center',
    },
});

export const ContentCard = styled('div', {
    '@desktop': {
        display: 'flex',
        justifyContent: 'space-around',
        gap: '3rem',
        width: '100%',
    },

    '@tablet': {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        width: '100%',
    },

    '@mobile': {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '3rem',
        width: '100%',
    },

})

export const SobreWrapper = styled('div', {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',

    '@mobile': {
        flexDirection: 'column',
        gap: '1rem'
    }

});

export const SobreItem = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});
export const SobreBox = styled('div', {
    width: '300px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$primary',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
        border: '2px solid #97D5EB',
    },
});

export const SobreTitle = styled('p', {
    marginTop: '0.5rem',
    fontSize: '1.4rem',
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

export const SobreList = styled('ul', {
    listStyleType: 'disc',
    paddingLeft: '1.5rem',
    color: '$secondary',
    textAlign: 'justify',
    lineHeight: '30px'

});

export const SobreListItem = styled('li', {
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