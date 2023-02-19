import styled from "styled-components";

const JobContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.white};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default JobContainer;