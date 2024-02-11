import styled from 'styled-components';

export const ContactCard = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  text-align: center;
  justify-content: center;
`;

export const ButtonDelete = styled.button`
width: 80px;
padding: 0px;
margin-left: 20px;
height: 25px;
color: #black;
border: 1px solid #000000;
border-radius: 5px;
cursor: pointer;
transition: all 0.25s linear 0s;
&:hover,
&:focus {
  border: 1px solid #white; background: #ff0000;
  transform: scale(1.1);
`;
