import { styled } from "@/styles";

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
})

export const Content = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '2rem 9.375rem',

    flexDirection: 'column',
    width: '100%',
})

export const ContentTitle = styled('div', {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
})

export const Title = styled('h2', {
    fontSize: '$5',
    fontWeight: 'normal',
    margin: '$2 0',
    display: 'flex',
    alignItems: 'center',
});

export const ContentCard = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3rem',
    width: '100%',
})

