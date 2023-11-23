import { useState } from 'react';

import {
    Line,
    NavbarWrapper,
    NavbarTitle,
    NavbarProfile,
    NavBarContainer,
    NavItem,
    ProfileName,
    EditProfile,
} from './styles';

import { Input, InputSearch } from '../input/Input.js';

import {
    MagnifyingGlass,
    Bell,
    HouseLine,
    CalendarBlank,
    DotsThree,
    Pencil,
} from '@phosphor-icons/react';

import Menu from './menu';
import { useComicsContext } from '../../context/comics';
import { Link } from 'react-router-dom';

import { EditModalProfile } from '../modals';
const Navbar = ({ accountName, accountProfile }) => {
    const [isHovered, setIsHovered] = useState(false);

    const [openModalProfile, setOpenModalProfile] = useState(false);
    const { setIsSearching, setSearch } = useComicsContext();
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <NavbarWrapper>
            <NavbarTitle>Shotokawa</NavbarTitle>
            <Line />
            <NavbarProfile
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    backgroundImage: `url(${accountProfile})`,
                }}
                onClick={() => {
                    setOpenModalProfile(true);
                }}
            >
                <EditProfile
                    style={{
                        display: isHovered ? 'flex' : 'none',
                    }}
                >
                    <span>Editar</span>
                    <Pencil size={20} />
                </EditProfile>
            </NavbarProfile>
            <EditModalProfile
                open={openModalProfile}
                setCloseModal={() => {
                    setOpenModalProfile(false);
                }}
            />
            <ProfileName>{accountName}</ProfileName>
            <Line />
            <InputSearch
                style={{ display: 'none' }}
                onChange={(evt) => {
                    if (evt.target.value != '') {
                        setSearch(evt.target.value);
                        setIsSearching(true);
                    } else {
                        setIsSearching(false);
                    }
                }}
            >
                <Input type="text" placeholder="Buscar" />
                <MagnifyingGlass
                    size={20}
                    style={{
                        color: '#ACACAC',
                        position: 'absolute',
                        right: '20px',
                        cursor: 'pointer',
                    }}
                />
            </InputSearch>
            <NavBarContainer>
                <NavItem>
                    <MagnifyingGlass size={20} />
                </NavItem>
                <NavItem>
                    <Bell size={20} />
                </NavItem>
                <NavItem>
                    <Link to={'/home'}>
                        <HouseLine color={'white'} size={20} />
                    </Link>
                </NavItem>
                <NavItem>
                    <CalendarBlank size={20} />
                </NavItem>
                <NavItem>
                    <DotsThree size={20} />
                </NavItem>
            </NavBarContainer>
            <Menu />
        </NavbarWrapper>
    );
};

export default Navbar;
