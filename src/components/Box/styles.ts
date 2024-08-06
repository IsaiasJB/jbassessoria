import { styled } from "@/styles";

export const BoxContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: '100%',
    gap: '20px',
    padding: '20px',
});

export const BoxTitle = styled('h2', {
    fontSize: '$5',
    fontWeight: 'normal',
    display: 'flex',

});

export const BoxText = styled('div', {
    color: '$primary',

});

export const BoxImage = styled('div', {

});