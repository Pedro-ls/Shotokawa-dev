import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
    background-color: #1D1D1D;
    width: 50px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.3rem;
    gap: 1rem;
    padding-top: 1rem;
    position: fixed;
    z-index: 1;
    transition: width 0.3s ease-out;

    &:hover {
        width: 250px;
        font-size: 1rem;

        & > div:first-of-type {
            width: 100px;
            height: 100px;
        }

        & > span { display: inherit; }

        & > ul:first-of-type {
            flex-direction: row;
            width: 50%;
        }

        & > ul > li:first-child { display: none; }

        & > ul:first-of-type > li:last-child { display: none; }

        & > input { display: inherit !important; }

        & > div { display: inherit !important; }

        & > ul:last-of-type { display: flex; }
    }
`;

export const Line = styled.hr`
    width: 80%;
    opacity: 0.1;
    border-radius: 5px;
`;

export const NavbarTitle = styled.span`
    color: var(--primary-color);
    cursor: pointer;
    transition: font-size 0.3s ease-out;
`;

export const NavbarProfile = styled.div`
    width: 30px;
    height: 30px;
    font-family: var(--secondary-font);
    border-radius: 50%;
    border: 1px solid var(--primary-color);
    cursor: pointer;
    transition: width 0.3s ease-out, height 0.3s ease-out;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const EditProfile = styled.div`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    align-self: stretch;
    font-size: 0.7rem;
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid var(--primary-color);
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.6);
`;

export const ProfileName = styled.span`
    display: none;
    font-family: Open Sans, sans-serif;
    font-height: 900;
`;

export const NavBarContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    padding: 0;
    width: 100%;
`;

export const NavItem = styled.li`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;

    &:hover {
        background-color: var(--primary-color);
    }
`;