import styled from "styled-components";
import X from "@/public/icons/X.svg";

export default function CloseIcon({ onClick }) {
    return (
    <IconWrapper onClick={onClick}>
      <StyledCloseIcon />
    </IconWrapper>
  );
}

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 35;
`;

const StyledCloseIcon = styled(X)`
    display: flex;
    margin-right: 10px;
    width: 22px;
    height: 22px;
    fill: #000;
`;