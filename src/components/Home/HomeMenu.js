import React, {useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import LinkScroll from "./LinkScroll";
import {Link as ScrollLink} from "react-scroll";


const TopMenu = () => {
    const isHome = window.location.pathname === "/";

    return (
        <div className="menu-wrapper">
            <div className="container">
                <div className="top-menu">
                    <div className="user-menu">
                        <ul className="loggingButtons">
                            <button>
                                <Link to="/logowanie">Zaloguj</Link>
                            </button>
                            <button>
                                <Link to="/rejestracja">Załóż konto</Link>
                            </button>
                        </ul>
                    </div>

                    <nav className="navigation">
                        <ul className="navigation__list">
                            <li className="navigation__item">
                                <NavLink activeClassName="active" className="navigation__link" to="/">Start</NavLink>
                            </li>
                            {
                                isHome && <LinkScroll to='three-columns' text={"O co chodzi?"}/>
                            }
                            {
                                isHome && <LinkScroll to='about' text={"O nas"}/>
                            }
                            {
                                isHome && <LinkScroll to='whoDoWeHelp' text={"Fundacja i organizacje"}/>
                            }
                            {
                                !isHome && <LinkScroll to='survey-form' text={"Wypełnij formularz"}/>
                            }
                            <LinkScroll to='footer' text={"Kontakt"}/>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;