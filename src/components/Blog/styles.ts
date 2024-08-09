import { styled } from "@/styles";

export const BlogContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
});

export const BlogTitle = styled('h2', {
    fontSize: '$5',
    fontWeight: 'normal',
    margin: '$2 0',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    marginBottom: '24px',
});

export const BlogWrapper = styled('div', {
    '@desktop' : {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        gap: '24px',
    },

    '@tablet' : {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
    },

    '@mobile' : {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '24px',
    },
});