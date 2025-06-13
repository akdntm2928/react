import styled from '@emotion/styled';
import { Button } from '../button';

const Container = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 1;
  `;

interface Props {
  readonly show: boolean;
  readonly onclick: () => void;
}

export const ShowToDoInputButton = ({ show, onclick }: Props) => {
  return (
    <Container>
      <Button
          label={show ? '닫기' : '할일 추가'}
          color={show ? undefined : '#304FFE'}
          onclick={onclick}
      />
    </Container>
  )
}