import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
    display: flex;
`;

const Sidebar = styled.div`
    background: #A8A7A7;
    width: 300px;
    height: 100vh;

    padding-top: 120px;
    padding-left: 33px;

    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14.562px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: -0.02em;

    color: #FFFFFF;

`;

const SidebarHeading = styled.h1`

    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14.562px;
    line-height: 17px;
`;

const SidebarSub = styled.h1`
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 8.98932px;
    line-height: 11px;
    /* identical to box height */

    letter-spacing: -0.02em;

    color: #FFFFFF;

`;


const HeroDiv = styled.div`
    display: flex;
    background: #BEDFF1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #635E5E;
    font-family: "Work Sans", sans-serif;
    font-size: 48px;
    font-style: italic;
    font-weight: 600;
    line-height: 56px;
    letter-spacing: -0.02em;
    height: 148px;
    text-align: center;
    align-items: center;
    justify-content: center;
    
`;

const RightDiv = styled.div`
    background: #fff;

`;

const Header = styled.h1`
    color: #000000;
    font-family: Work Sans, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.02em;
`;

const MainDiv = styled.div`
    padding-top: 65px;
    padding-left: 54px;
    padding-right: 54px;
`;

const Footer = styled.div`
`;

function PrivacyPage(props) {
    return (
        <div >
            <Container>
                {/* left sidebar */}
                <Sidebar>
                    <SidebarHeading>HEADER</SidebarHeading>
                    <SidebarSub>Subheading</SidebarSub>

                </Sidebar>

                <RightDiv>{/* main div */}
                    <HeroDiv>
                        {/* big hero thing */}
                        Privacy Policy
                    </HeroDiv>
                    <MainDiv>
                        {/* privacy policy text */}
                        <Header>Header</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac sapien non purus vehicula varius quis sit amet augue. Nulla porttitor mi id feugiat feugiat. Donec porta accumsan accumsan. Proin auctor eros ac nibh blandit, vel dapibus nibh commodo.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <p>
                        Nunc finibus malesuada facilisis. Phasellus elementum, massa nec sagittis viverra, risus augue dictum ante, vitae consequat massa dui eu massa. 
                        </p>

                        <Header>Header</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac sapien non purus vehicula varius quis sit amet augue. Nulla porttitor mi id feugiat feugiat. Donec porta accumsan accumsan. Proin auctor eros ac nibh blandit, vel dapibus nibh commodo.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <p>
                        Nunc finibus malesuada facilisis. Phasellus elementum, massa nec sagittis viverra, risus augue dictum ante, vitae consequat massa dui eu massa. 
                        </p>

                        <Header>Header</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac sapien non purus vehicula varius quis sit amet augue. Nulla porttitor mi id feugiat feugiat. Donec porta accumsan accumsan. Proin auctor eros ac nibh blandit, vel dapibus nibh commodo.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <p>
                        Nunc finibus malesuada facilisis. Phasellus elementum, massa nec sagittis viverra, risus augue dictum ante, vitae consequat massa dui eu massa. 
                        </p>

                        <Header>Header</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac sapien non purus vehicula varius quis sit amet augue. Nulla porttitor mi id feugiat feugiat. Donec porta accumsan accumsan. Proin auctor eros ac nibh blandit, vel dapibus nibh commodo.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <p>
                        Nunc finibus malesuada facilisis. Phasellus elementum, massa nec sagittis viverra, risus augue dictum ante, vitae consequat massa dui eu massa. 
                        </p>

                        <Header>Header</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac sapien non purus vehicula varius quis sit amet augue. Nulla porttitor mi id feugiat feugiat. Donec porta accumsan accumsan. Proin auctor eros ac nibh blandit, vel dapibus nibh commodo.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <p>
                        Nunc finibus malesuada facilisis. Phasellus elementum, massa nec sagittis viverra, risus augue dictum ante, vitae consequat massa dui eu massa. 
                        </p>

                        <Header>Header</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac sapien non purus vehicula varius quis sit amet augue. Nulla porttitor mi id feugiat feugiat. Donec porta accumsan accumsan. Proin auctor eros ac nibh blandit, vel dapibus nibh commodo.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <p>
                        Nunc finibus malesuada facilisis. Phasellus elementum, massa nec sagittis viverra, risus augue dictum ante, vitae consequat massa dui eu massa. 
                        </p>
                    </MainDiv>
                </RightDiv>
            </Container>
        </div>
    );
}

export default PrivacyPage;