import { styled, keyframes } from 'styled-components';

export const Text = styled.div`
  text-align: center;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.5);
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 12px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid #010f3f;
  list-style: none;
`;
export const Item = styled.li`
  background-color: #ffffff;
  border: 3px solid #010f3f;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;
export const Button = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px 8px;
  border: 3px solid #010f3f;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #333;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-bottom: 20px;
  margin-left: 70px;

  animation: ${spin} 1s ease-in-out infinite;
`;
