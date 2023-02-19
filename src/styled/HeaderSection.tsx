import styled from "styled-components";

const HeaderSection = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.gray75};
    text-align: center;
    padding-top: ${props => props.theme.padding * 12.5}px;
    padding-bottom: ${props => props.theme.padding * 7.5}px;
`;

export default HeaderSection;