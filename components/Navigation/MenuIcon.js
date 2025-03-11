import styled from "styled-components";
import Menu from "@/public/icons/Menu.svg";	


export default function MenuIcon({ onClick }) {
  return (
        <IconWrapper onClick={onClick}>
      <StyledMenu />
    </IconWrapper>
  );
}

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 35;
`;

const StyledMenu = styled(Menu)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    margin-right: 10px;
    width: 25px;
    height: 25px;
    fill: #000;
  }
`;

