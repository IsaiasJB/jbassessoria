import { styled } from "@/styles";

export const TestimonialsContainer = styled('div', {
    width: '100%',
    textAlign: 'center',

});

export const Title = styled('h2', {
    fontSize: '$5',
    fontWeight: 'normal',
    textAlign: 'left',
    marginBottom: '24px',
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
});