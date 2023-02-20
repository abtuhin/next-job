import styled from "styled-components";

const SelectFilter = styled.select`
    width: 294px;
    height: 44px;
    border: 1px ${props => props.theme.colors.grayAccent} solid;
    border-radius: ${props => props.theme.padding}px;
    padding-left: ${props => props.theme.padding}px;;
    padding-right: ${props => props.theme.padding}px;
    margin-right: ${props => props.theme.padding * 2}px;
    margin-left: ${props => props.theme.padding * 2}px;
    margin-bottom: ${props => props.theme.padding}px;
    color: ${props => props.theme.colors.gray}px;
    -webkit-appearance: none;
    appearance: none;

    background-image: url('/caret-down.svg');
    background-repeat: no-repeat;
    background-position-y: 50%;
    background-position-x: 96%;
    background-size: 12px;

    &:hover {
        border: 1px ${props => props.theme.colors.primary} solid;
    }

    &:focus {
        outline: none;
    }
`;

export default SelectFilter;