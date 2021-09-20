import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';
import Bottom from './Bottom';



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

    cursor: pointer;
`;

const SidebarSub = styled.h1`
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 8.98932px;
    line-height: 11px;
    /* identical to box height */

    letter-spacing: -0.02em;

    cursor: pointer;

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
    margin-top: 1em;
    
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

    const scrollToView = (id) => {
        console.log(id)
        document.querySelector(`[id="#${id}"]`).scrollIntoView();
    }

    return (
        <div >
            <Navigation />
            <Container>
                {/* left sidebar */}
                <Sidebar>
                    <SidebarHeading onClick={() => scrollToView('privacy-notice-header')}>Gekch.io Privacy Policy</SidebarHeading>
                    <SidebarSub onClick={() => scrollToView('privacy-notice')}>Privacy Notice</SidebarSub>
                    <SidebarSub onClick={() => scrollToView('info-collection-notice')}>Information Collection, Use, and Sharing</SidebarSub>
                    <SidebarSub onClick={() => scrollToView('control-over-info')}>Your Access to and Control Over Information</SidebarSub>
                    <SidebarSub onClick={() => scrollToView('security')}>Security</SidebarSub>

                </Sidebar>

                <RightDiv>{/* main div */}
                    <HeroDiv id='#privacy-notice-header'>
                        Gekch.io Privacy Policy
                    </HeroDiv>
                    <MainDiv>
                        
                        <h2 id='#privacy-notice'>Privacy Notice</h2>
                        
                        <p>This privacy notice discloses the privacy practices for gekch.io. This privacy notice applies solely to information collected by this website. It will notify you of the following:</p>
                        <ol>
                        <li>What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.</li>
                        <li>What choices are available to you regarding the use of your data.</li>
                        <li>The security procedures in place to protect the misuse of your information.</li>
                        <li>How you can correct any inaccuracies in the information.</li>
                        </ol>
                        <h2 id='#info-collection-notice'>Information Collection, Use, and Sharing</h2>
                        <p>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you.</p>
                        <p>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill requests from you, and we will not sell your information to anyone.</p>
                        <h2 id='#control-over-info'>Your Access to and Control Over Information</h2>
                        <p>You may opt out of any future contacts from us at any time by terminating your account. You can do the following at any time by contacting us via the email address given on our website:</p>
                        <ul>
                        <li>See what data we have about you, if any.</li>
                        <li>Change/correct any data we have about you.</li>
                        <li>Express any concern you have about our use of your data.</li>
                        </ul>
                        <h2 id='#security'>Security</h2>
                        <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
                        <p>Wherever we collect information it is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for &ldquo;https&rdquo; at the beginning of the address of the Web page.</p>
                        <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only staff members who need the information to perform a specific job (for example, processing support tickets) are granted access to personally identifiable information.</p>
                        <p>If you have questions about this privacy policy contact us at support@gekch.io</p>
                    </MainDiv>
                </RightDiv>
            </Container>

            <Bottom />
        </div>
    );
}

export default PrivacyPage;