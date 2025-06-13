import styled from '@emotion/styled';

const Container = styled.div`
  display:flex;
  flex-direaction: column;
  justify-content: center;
`;
const Label = styled.h1`
  margin-top:0px;
`

interface Props {
    readonly label:string;
}

export const Title = ({label}:Props) => {
    return (
        <Container>
            <Label>{label}</Label>
        </Container>
    )
}