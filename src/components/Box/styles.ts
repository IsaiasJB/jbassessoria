import { styled } from "@/styles";

export const BoxContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: '100%',
    gap: '20px',
    padding: '20px',
    // backgroundColor: 'red'
});

export const BoxTitle = styled('div', {
    color: '$primary',
    width: '80%',
    // backgroundColor: 'red'

});

export const BoxText = styled('div', {
    color: '$primary',

});

export const BoxImage = styled('div', {

});