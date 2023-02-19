import styled from "styled-components";

const SelectFilter = styled.select`
    width: 294px;
    height: 44px;
    border: 1px ${props => props.theme.colors.grayAccent} solid;
    border-radius: ${props => props.theme.padding}px;
    padding-left: ${props => props.theme.padding}px;;
    padding-right: ${props => props.theme.padding}px;
    color: ${props => props.theme.colors.gray}px;
    -webkit-appearance: none;
    appearance: none;
    
    &:hover {
        border: 1px ${props => props.theme.colors.primary} solid;
    }

    &:focus {
        outline: none;
    }

    &option {
        color: red;
    }
`;

export default SelectFilter;