import styled from "styled-components";

const Heading = styled.h1`
    color: ${props => props.theme.colors.secondary};
    font-size: ${props => props.theme.fontSizes.f48};
    letter-spacing: -1.44px;
    font-weight: bold;
`;

const TextSmall = styled.p`
    color: ${props => props.theme.colors.gray};
    font-size: ${props => props.theme.fontSizes.f14};
    letter-spacing: -0.28px;
    font-weight: ${props => props.theme.fontWeights.f500};
`;

const TextNormal = styled.p`
    color: ${props => props.theme.colors.gray};
    font-size: ${props => props.theme.fontSizes.f16};
    letter-spacing: -0.32px;
    font-weight: normal;
`;

const TextLarge = styled.p`
    font-size: ${props => props.theme.fontSizes.f18};
    color: ${props => props.theme.colors.darkest};
    letter-spacing: -0.36px;
`;

const TextSmallPrimary = styled(TextSmall)`
    color: ${props => props.theme.colors.primary};
`;

const TextNormalPrimary = styled(TextNormal)`
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
`;

export default {
    Heading,
    TextSmall,
    TextNormal,
    TextLarge,
    TextSmallPrimary,
    TextNormalPrimary
};