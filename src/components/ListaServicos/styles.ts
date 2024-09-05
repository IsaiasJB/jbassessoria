import {styled} from "@/styles";

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
    // transition: 'background-color 0.3s ease',
    // cursor: 'pointer',
    // '&:hover': {
    //     border: '2px solid #97D5EB', // Highlight quando hover
    // },
});

export const ServiceTitle = styled('p', {
    marginTop: '0.5rem',
    fontSize: '1rem',
    textAlign: 'center',
    color: '#000000',
});