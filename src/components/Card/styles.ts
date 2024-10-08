import { styled } from "@/styles";


export const CardContainer = styled('div', {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '300px',
    padding: '$3',
})

export const ImageContainer = styled('div', {
    width: '100%',
    position: 'relative',
    height: '150px',
    borderRadius: '8px',
});

export const CardContent = styled('div', {
    padding: '$2',
    display: 'flex',
    justifyContent:'space-between',
    textAlign: 'left',
    flexDirection: 'column',
});

export const CardTitle = styled('h2', {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '$4',
    margin: '$2 0',
    color: '#333',

});

export const CardDescription = styled('p', {
    fontSize: '$3',
    color: '#666',
    textAlign: 'left',
});

export const IconWrapper = styled('span', {
    marginRight: '$2',
    display: 'flex',
    alignItems: 'center',
    verticalAlign: 'middle',
    '& svg': {
        width: '25px',
        height: '25px',
    },
});

export const Tag = styled('span', {
    backgroundColor: '$primary',
    color: 'white',
    borderRadius: '4px',
    padding: '$1 $3',
    fontSize: '$1',
    alignSelf: 'flex-start',
    marginBottom: '8px',

});