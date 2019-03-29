import styled from 'styled-components';

const LayoutContainer = styled.div`
min-width: 320px;
width: 100%;
height: 100vh;

display: grid;
grid-template-areas: 'sider content';
grid-template-columns: auto 1fr;
`;

export default LayoutContainer;