import React from 'react';
import HomeCard from './HomeCard';
import homeData from './homeData';
import { HomePage, HomeWrapper } from './HomeStyled';

const Home = () => {

    // if mistakenly, body contains the overflow_hide class then remove it.
    document.body.classList.contains('overflow_hide') && document.body.classList.remove('overflow_hide');


    return (
        <>
            <HomePage>
                <div className="container">
                    <header id="header">
                        <h1><span>React</span> Projects</h1>
                        <a href="https://github.com/Muneesh1929?tab=repositories">
                        https://github.com/Muneesh1929?tab=repositories
                        </a>
                    </header>
                    <HomeWrapper>
                        {
                            homeData.map((currValue) => {
                                return (
                                    <HomeCard
                                        key={currValue.id}
                                        {...currValue}
                                    />
                                );
                            })
                        }
                    </HomeWrapper>
                    <footer id="footer">
                        <p>Built by | <a href="https://github.com/Muneesh1929?tab=repositories">Muneesh Sharma</a></p>
                    </footer>
                </div>
            </HomePage>
        </>
    );
};

export default Home;