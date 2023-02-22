import styled from "styled-components";

const PaginationStyle = styled.div`
  .disabled {
    pointer-events: none;
    cursor: pointer;
  }
  .selected {
    background-color: ${props => props.theme.colors.primary75};
    border-radius: ${props => props.theme.padding * 4}px;
  }
  
  .pagination {

  }
  .pagination,
  .pagination li a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .pagination li {
    list-style: none;
    padding-top: 2px;
  }
  .pagination li a {
    text-decoration: none;
    color: ${props => props.theme.colors.gray};
    height: ${props => props.theme.padding * 5}px;
    width: ${props => props.theme.padding * 5}px;
    font-size: ${props => props.theme.fontSizes.f14};
  }
  .pagination li:first-child a {
    
  }
  .pagination li a:hover {
    background: ${props => props.theme.colors.primary75};
    border-radius: ${props => props.theme.padding * 4}px;
  }
  
  .pagination li:first-child a:hover, .pagination li:last-child a:hover {
    background: ${props => props.theme.colors.white};
    cursor: pointer;
  }
  .pagination li a:focus,
  .pagination li a:active {
    
  }
  .pagination li.icon a {
    min-width: 220px;
    position: relative;
  }
`;

export default PaginationStyle;
