import { styled } from "@/styles";

export const TestimonialsContainer = styled('div', {
    width: '100%',
    textAlign: 'center',
    marginBottom: '40px',

});

export const Title = styled('h2', {
    fontSize: '$5',
    fontWeight: 'normal',
    textAlign: 'left',
    marginBottom: '24px',
    position: 'relative',
    paddingBottom: '0.5rem',

    '&::after': {
        content: '',
        position: 'absolute',
        left: 0,
        bottom: -12,
        width: '117px', // Largura da linha
        height: '2px', // Altura da linha
        backgroundColor: '$highlight',
    },

    '@tablet': {
        '&::after': {
            content: '',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '117px', // Largura da linha
            height: '2px', // Altura da linha
            backgroundColor: '$highlight',
        },

    },
    '@mobile': {
        fontSize: '$5',
        '&::after': {
            content: '',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100px', // Largura da linha
            height: '2px', // Altura da linha
            backgroundColor: '$highlight',
        },
    },
});

export const TestimonialWrapper = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

});

export const Testimonial = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
    textAlign: 'center',
});

export const Avatar = styled('img', {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '10px',
});

export const Name = styled('h4', {
    margin: '10px 0 5px 0',
    color: '$primary',
});

export const Position = styled('p', {
    margin: '0 0 10px 0',
    color: '$primary',
    fontSize: '14px',
});

export const Quote = styled('p', {
    backgroundColor: '$primary',
    color: '$highlight',
    padding: '20px',
    borderRadius: '10px',
    width: '600px',
    textAlign: 'center',

    '@tablet': {
        width: '400px',
    },
    '@mobile': {
        width: '200px',
    },
});