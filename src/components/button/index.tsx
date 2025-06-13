import styled from '@emotion/styled';


interface Props {
    readonly label: string;
    readonly color?: string
    readonly onclick?: ()=>void;
}

export const Button = ({label, color = '#ff5722', onclick}:Props) => {
    return (
        <Container color={color} onClick={onclick}>{label}</Container>
    )
}

const Container = styled.button<{color: string}>`
  border:0;
  color:#ffffff;
  background-color:${(props)=>props.color};
  cursor :pointer;
  padding: 8px 16px;
  border-radius:4px;

  &:hover {
    background-color: #fff5722;
    opacity:0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;