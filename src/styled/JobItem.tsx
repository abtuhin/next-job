import styled from "styled-components";

const JobItem = styled.div`
    border: 1px ${props => props.theme.colors.gray200} solid;
    border-radius: ${props => props.theme.padding * 2}px;
    padding-left: ${props => props.theme.padding * 3}px;
    padding-right: ${props => props.theme.padding * 3}px;
    padding-top: ${props => props.theme.padding * 4}px;
    padding-bottom: ${props => props.theme.padding * 4}px;
    margin-top: ${props => props.theme.padding * 3}px;
    margin-bottom: ${props => props.theme.padding * 3}px;
    width: 824px;
`;

export default JobItem;