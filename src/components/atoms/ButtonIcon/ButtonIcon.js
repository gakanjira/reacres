import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50%;
  border: none;
  background-color: ${({ active }) => (active ? '#fff' : 'transparent')};
`;

export default ButtonIcon;
