import styled from "styled-components";

const Heading = styled.h1`
    color: ${props => props.theme.colors.secondary};
    font-size: ${props => props.theme.fontSizes.f48};
`;

const TextSmall = styled.p`
    color: ${props => props.theme.colors.gray};
    font-size: ${props => props.theme.fontSizes.f14};
`;

const TextNormal = styled.p`
    color: ${props => props.theme.colors.gray};
    font-size: ${props => props.theme.fontSizes.f16};
`;

const TextLarge = styled.p`
    font-size: ${props => props.theme.fontSizes.f18};
    color: ${props => props.theme.colors.darkest};
`;

const TextSmallPrimary = styled(TextSmall)`
    color: ${props => props.theme.colors.primary};
`;

const TextNormalPrimary = styled(TextNormal)`
    color: ${props => props.theme.colors.primary};
`;

export default {
    Heading,
    TextSmall,
    TextNormal,
    TextLarge,
    TextSmallPrimary,
    TextNormalPrimary
};