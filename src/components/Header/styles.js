import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;

  border-bottom: 2px solid rgba(255, 255, 255, 0.1);

  a.logo {
    display: flex;
    align-items: flex-end;
    color: ${props => props.theme.secondary};

    svg {
      color: ${props => props.theme.primary};
      font-size: 40px;
      margin-right: 10px;
    }
  }

  button#toggle {
    background: 0;
    border: 0;
    font-size: 20px;
    color: ${props => props.theme.secondary};
  }
`;
