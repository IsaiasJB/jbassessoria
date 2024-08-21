import {styled} from "@/styles";

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
