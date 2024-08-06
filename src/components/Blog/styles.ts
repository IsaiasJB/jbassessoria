import { styled } from "@/styles";

export const BlogContainer = styled('div', {
    width: '100%',
    textAlign: 'center',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '24px',
});