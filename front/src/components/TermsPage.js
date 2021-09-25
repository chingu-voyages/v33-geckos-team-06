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

function TermsPage(props) {
    return (
        <div >
            <Navigation />
            <Container>
                {/* left sidebar */}
                <Sidebar>
                    <SidebarHeading>HEADER</SidebarHeading>
                    <SidebarSub>Subheading</SidebarSub>

                </Sidebar>

                <RightDiv>{/* main div */}
                    <HeroDiv>
                        {/* big hero thing */}
                        Terms of Service
                    </HeroDiv>
                    <MainDiv>
                    <div>
                        <h1>Gekch.io Terms of Service</h1>
                        <h2>Terms of Service</h2>
                        <h3>1. Service</h3>
                        <p><span style={{color: '#222222'}}><strong>Summary</strong></span><span style={{color: '#222222'}}> This agreement concerns gekch.io. You agree to these Terms of Service by using the service.</span></p>
                        <p><span style={{color: '#222222'}}>gekch.io is a , desktop applwebsiteication, and digital software and media distribution platform owned and operated by gekch.io. (“gekch.io” or “Service”). By registering an account and using the Service, you agree to be bound by the terms of this Agreement.</span></p>
                        <h3>2. Users and Publishers</h3>
                        <p><span style={{color: '#222222'}}><strong>Summary</strong></span><span style={{color: '#222222'}}> If you download projects, you’re a User. If you upload projects, you’re a Publisher. Users must be 13 or older. Publishers must be at least 18 or have the legal right to enter into this agreement.</span></p>
                        <ol>
                            <li><span style={{color: '#222222'}}><strong>Users.</strong></span><span style={{color: '#222222'}}> If you register an account to download, or play games or other content from gekch.io, you agree to be bound to the terms of this Agreement as a platform user (“User”). Users affirm that they are over the age of 13, as the Service is not intended for children under 13.</span></li>
                            <li><span style={{color: '#222222'}}><strong>Publishers.</strong></span><span style={{color: '#222222'}}> If you register an account to distribute, or publish games or other content on gekch.io, you agree to be bound to the terms of this Agreement as a platform publisher (“Publisher”). Publishers affirm that they are either more than 18 years of age, or possess legal parental or guardian consent, and are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations and warranties set forth in this Agreement.</span></li>
                        </ol>
                        <h3>3. Acceptable Use</h3>
                        <p><span style={{color: '#222222'}}><strong>Summary</strong></span><span style={{color: '#222222'}}> Be kind and considerate to each other! If you abuse the intended use of the platform we may terminate your account, effectively removing you as a user within the community.</span></p>
                        <p><span style={{color: '#222222'}}>gekch.io aims to create a safe environment for users of the site and service. This requires a community that is built on goodwill and responsible behavior by its members. The posting of content or other actions that, in the Company’s sole discretion, degrades the experience of others may result in account termination without prior notice. Prohibited actions include but are not limited to:</span></p>
                        <ul>
                            <li><span style={{color: '#222222'}}>Uploading viruses or malicious code or acting in any manner to restrict or inhibit any other user from using and enjoying the Service;</span></li>
                            <li><span style={{color: '#222222'}}>Spamming or sending repeated messages, junk email, contests, surveys or any unsolicited messages;</span></li>
                            <li><span style={{color: '#222222'}}>Posting unlawful, misleading, malicious, or discriminatory content;</span></li>
                            <li><span style={{color: '#222222'}}>Bullying, intimidating, harassing, defaming, threatening others, or violating the legal rights (such as rights of privacy and publicity) of others;</span></li>
                            <li><span style={{color: '#222222'}}>Posting content that promotes or participates in racial intolerance, sexism, hate crimes, hate speech, or intolerance to any group of individuals;</span></li>
                            <li><span style={{color: '#222222'}}>Soliciting, harvesting or collecting information about others;</span></li>
                            <li><span style={{color: '#222222'}}>Violating copyright, trademark or other intellectual property or other legal rights of others by posting content without permission to distribute such content;</span></li>
                            <li><span style={{color: '#222222'}}>Hacking, maliciously manipulating, or misrepresenting gekch.io’s interface in any way;</span></li>
                            <li><span style={{color: '#222222'}}>Creating a false identity for the purpose or effect of misleading others; or</span></li>
                            <li><span style={{color: '#222222'}}>Violating any applicable laws or regulations.</span></li>
                        </ul>
                        <h3>4. Publisher Content</h3>
                        <p><span style={{color: '#222222'}}><strong>Summary</strong></span><span style={{color: '#222222'}}> You allow us to promote your game with screenshots, cover-images, videos, and other promotional material you have provided. You affirm that you have the right to upload your content, and that gekch.io and its users can use and/or your content without violating anybody else’s rights.</span></p>
                        <p><span style={{color: '#222222'}}>Publishers are solely responsible for the content they upload and distribute on gekch.io. Publishers affirm, represent, and warrant that they own or have the rights, licenses, permissions and consents necessary to publish, duplicate, and distribute the submitted content. By submitting content to the Service for distribution, Publishers also grant a license to the Company for all patent, trademark, trade secret, copyright or other proprietary rights in and to the Content for publication on the Service, pursuant to this Agreement. The Company does not endorse copyright infringing activities or other intellectual property infringing activities and violations of may result in the removal of content if the Company is notified of such violations. Removal and termination of accounts may occur without prior notice.</span></p>
                        <p><span style={{color: '#222222'}}>Publishers retain all ownership rights to the submitted content, and by submitting content to the Service, Publishers hereby grant the following:</span></p>
                        <ul>
                            <li><span style={{color: '#222222'}}>To the Company, a worldwide, non-exclusive, royalty-free, sublicensable and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the content in connection with the Service, including without limitation for promoting, redistributing in any and all media formats. If you choose to remove your content from the Service, this license shall terminate within a commercially reasonable time after you remove your content from the Service.</span></li>
                            <li><span style={{color: '#222222'}}>To Users, a non-exclusive, perpetual license to access the content and to use, reproduce, distribute, display and perform such content as permitted through the functionality of the Service. Users shall retain a license to this content even after the content is removed from the Service.</span></li>
                        </ul>
                        <h3>5. User Generated Content</h3>
                        <p><span style={{color: '#222222'}}><strong>Summary</strong></span><span style={{color: '#222222'}}> You agree to let us display content you have uploaded to your profile, written in a comment, left in a review, etc. If you terminate your account you can request to have your content deleted.</span></p>
                        <p><span style={{color: '#222222'}}>gekch.io provides interfaces and tools for Users to generate content and make it available to other users, including ratings, reviews, profile images, banners, and others (“User Generated Content” or “UGC”). By uploading or creating such UGC, you grant to Company the worldwide, non-exclusive, perpetual, royalty free license to use, reproduce, create derivative works, display, perform and distribute for the UGC.</span></p>
                        <h3>6. Digital Millennium Copyright Act</h3>
                        <p><span style={{color: '#222222'}}><strong>Summary</strong></span><span style={{color: '#222222'}}> If you believe one of the Publishers has violated your copyright, please let us know about your complaint with the required information so we can address the complaint. If you think a complaint was filed in error, you can also contact us to address your concerns.</span></p>
                        <p><span style={{color: '#222222'}}>Copyright owners or authorized agents who believe that any content on the Service infringes upon their copyrights may submit a notification pursuant to the Digital Millennium Copyright Act (“DMCA”) by providing us with the following information in writing (for further detail, please see 17 U.S.C. 512©(3)):</span></p>
                        <ul>
                            <li><span style={{color: '#222222'}}>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</span></li>
                            <li><span style={{color: '#222222'}}>Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a representative list of such works at that site.</span></li>
                            <li><span style={{color: '#222222'}}>Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit the service provider to locate the material.</span></li>
                            <li><span style={{color: '#222222'}}>Information reasonably sufficient to permit the service provider to contact the complaining party, such as an address, telephone number, and, if available, an electronic mail address at which the complaining party may be contacted.</span></li>
                            <li><span style={{color: '#222222'}}>A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</span></li>
                            <li><span style={{color: '#222222'}}>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed</span></li>
                        </ul>
                        <p><span style={{color: '#222222'}}>DMCA notices may be directed to </span><a href="https://itch.io/support" target="_blank" rel="noopener">support@gekch.io</a><span style={{color: '#222222'}}>. You acknowledge that failure to comply with the requirements of this section may invalidate your DMCA notice.</span></p>
                        <h4>Counter Notice</h4>
                        <p><span style={{color: '#222222'}}>If you believe your removed content does not infringe, or if you have authorization from the copyright holder, the holder’s agent, or pursuant to law, you may send a counter-notice containing the following information:</span></p>
                        <ul>
                            <li><span style={{color: '#222222'}}>Your physical or electronic signature;</span></li>
                            <li><span style={{color: '#222222'}}>Identification of the Content that has been removed or to which access has been disabled and the location at which the Content appeared before it was removed or disabled;</span></li>
                            <li><span style={{color: '#222222'}}>A statement that you have a good faith belief that the Content was removed or disabled as a result of mistake or a misidentification of the Content; and</span></li>
                            <li><span style={{color: '#222222'}}>Your name, address, telephone number, and e-mail address, a statement that you consent to the jurisdiction of the federal court in San Francisco, California, and a statement that you will accept service of process from the person who provided notification of the alleged infringement.</span></li>
                        </ul>
                        <p><span style={{color: '#222222'}}>If a counter-notice is received, Company may send a copy to the original complaining party informing them the content may be replaced or removed in 10 business days. Unless the copyright holder files an action seeking a court order against the Publisher or User, the removed content may be replaced in 10 to 14 business days or after receipt of the counter-notice, at Company’s sole discretion.</span></p>
                        <h3>7. Warranty Disclaimer</h3>
                        <p><span style={{color: '#222222'}}>YOU AGREE THAT USE OF THE SERVICE SHALL BE AT YOUR OWN RISK. THE COMPANY, ITS OFFICERS, DIRECTORS, EMPLOYEES AND AGENTS (“AFFILIATES”) DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND THE USE THEREOF TO THE FULLEST EXTENT PERMITTED BY LAW. COMPANY MAKES NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICE, THE SITE’S CONTENT, OR THE CONTENT OF ANY PUBLISHER LINKED TO THIS SITE AND ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (A) ERRORS, MISTAKES OR INACCURACIES OF CONTENT, (B) PERSONAL INJURY OR PROPERTY DAMAGE OF ANY NATURE WHATSOEVER RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, © ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVICES, SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (D) ANY INTERRUPTION OR CESSATION OF ACCESS TO OUR SERVICES, (E) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY, AND/OR (F) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. THE COMPANY DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES OR ANY HYPERLINKED SERVICES OR FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND THE COMPANY WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</span></p>
                        <h3>8. Limitation of Liability</h3>
                        <p><span style={{color: '#222222'}}>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEITHER COMPANY OR ITS AFFILIATES SHALL BE LIABLE IN ANY WAY FOR YOUR LOSS OR DAMAGE OF ANY KIND RESULTING FROM THE USE OR INABILITY TO USE THE SERVICE, YOUR ACCOUNT, OR YOUR PURCHASED/SUBMITTED CONTENT, INCLUDING BUT NOT LIMITED TO, LOSS OF GOODWILL, WORK STOPPAGE, COMPUTER FAILURE OR MALFUNCTION, OR ANY AND ALL OTHER COMMERCIAL DAMAGES OR LOSSES. IN NO EVENT WILL THE COMPANY OR ITS AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE OR EXEMPLARY DAMAGES, OR OTHER DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH GEKCH.IO, THE SERVICES, OR THE CONTENT, EVEN IN THE EVENT OF THE COMPANY’S OR ITS AFFILIATES’ FAULT, TORT (EXCLUDING NEGLIGENCE), STRICT LIABILITY, OR BREACH OF COMPANY’S WARRANTY AND EVEN IF IT HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THESE LIMITATIONS AND LIABILITY EXCLUSIONS APPLY EVEN IF ANY REMEDY FAILS TO PROVIDE ADEQUATE RECOMPENSE. AS SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH STATES OR JURISDICTIONS, EACH OF THE COMPANY AND ITS AFFILIATES’ LIABILITY SHALL BE LIMITED TO THE FULL EXTENT PERMITTED BY LAW.</span></p>
                        <h3>9. Term and Termination.</h3>
                        <p><span style={{color: '#222222'}}><strong>Summary</strong></span><span style={{color: '#222222'}}> Users can terminate their account at any time, but are not entitled to a refund of any kind because of such termination. Publishers can terminate at any time as well, and gekch.io will comply with removing submitted content and winding up outstanding payments. Certain sections of the Terms of Service relating to how the agreement is interpreted and administered will still apply, even if you terminate your account.</span></p>
                        <ul>
                            <li><span style={{color: '#222222'}}><strong>Term.</strong></span><span style={{color: '#222222'}}> The term of this Agreement commences on the date you first register an account and will continue in effect unless otherwise terminated in accordance with this Agreement.</span></li>
                            <li><span style={{color: '#222222'}}><strong>Termination by Users.</strong></span><span style={{color: '#222222'}}> Users may terminate their account at any time. You may cease to use your account, or if you so choose, may request that the Company terminate your access to your account. User accounts may not be transferred, sold, or assigned to a third party, and such actions may result in account termination. User account termination does not entitle the user to a refund.</span></li>
                            <li><span style={{color: '#222222'}}><strong>Termination by Publishers.</strong></span><span style={{color: '#222222'}}> Publishers may terminate their account at any time. Publishers may request the removal of content and final payment of outstanding Transaction balances, and the Company will comply within a commercially reasonable time. The Company may retain a percentage of the outstanding Transaction balance at Company’s sole discretion in case of refunds, fees, or other payment issues.</span></li>
                            <li><span style={{color: '#222222'}}><strong>Survival.</strong></span><span style={{color: '#222222'}}> Sections 4, 5, 8, 9, 11, 12, 14, 11, 12, and 14 will survive any expiration or termination of this Agreement.</span></li>
                        </ul>
                        <h3>10. Governing Law/Jurisdiction</h3>
                        <p><span style={{color: '#222222'}}><strong>Summary</strong></span><span style={{color: '#222222'}}> This agreement is under California law, and all disputes are to be addressed in San Francisco, California.</span></p>
                        <p><span style={{color: '#222222'}}>The internal laws of the State of California shall govern this Agreement without giving effect to the choice of law rules thereof. Each party irrevocably and unconditionally submits to non-exclusive jurisdiction of the state and federal courts in the city of San Francisco, California, and the appropriate courts of appeal from such courts for any other matter concerning this Agreement. You agree that the Service shall be deemed solely based in California, is a passive website, and does not give rise to personal jurisdiction over Company, either specific or general, in jurisdictions other than California.</span></p>
                        <h3>11. Class Action Waiver</h3>
                        <p><span style={{color: '#222222'}}><strong>Summary</strong></span><span style={{color: '#222222'}}> No dispute related to these Terms of Service may be consolidated into a class action.</span></p>
                        <p><span style={{color: '#222222'}}>YOU AND COMPANY AGREE NOT TO BRING OR PARTICIPATE IN A CLASS, COLLECTIVE, OR REPRESENTATIVE ACTION, PRIVATE ATTORNEY GENERAL ACTION OR COLLECTIVE ARBITRATION, EVEN IF ARBITRATION PROCEDURES OR RULES WOULD OTHERWISE ALLOW ONE. You and Company also agree not to seek to combine any action with any other action without the consent of all parties to this Agreement and all other actions.</span></p>
                        <p><span style={{color: '#222222'}}>If the agreement in this Section not to bring or participate in a class, collective or representative action, private attorney general action or collective arbitration should be found illegal or unenforceable, you and Company agree that it shall not be severable, that this entire Section shall be unenforceable and any claim or dispute would be resolved in court and not in a class or collective action.</span></p>
                        <h3>12. Indemnity</h3>
                        <p><span style={{color: '#222222'}}><strong>Summary</strong></span><span style={{color: '#222222'}}> You agree to pay for any of gekch.io’s damages and costs if your game or actions causes damage to a third party.</span></p>
                        <p><span style={{color: '#222222'}}>To the extent permitted by applicable law, you agree to defend, indemnify and hold harmless Company and its Affiliates, from and against all claims, damages, obligations, losses, liabilities, costs, debt, or expenses (including but not limited to attorneys’ fees) arising from: (a) your use and access of the service; (b) your violation of any term of this Agreement; © your violation of any third party right, including without limitation any copyright, trademark, property or privacy right; (d) any claim that your submitted content caused damage to a third party.</span></p>
                        <h3>13. Assignment</h3>
                        <p><span style={{color: '#222222'}}><strong>Summary</strong></span><span style={{color: '#222222'}}> You are not allowed to assign this agreement, but gekch.io can assign this agreement.</span></p>
                        <p><span style={{color: '#222222'}}>This Agreement, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Company without restriction.</span></p>
                        <h3>14. Miscellaneous</h3>
                        <p><span style={{color: '#222222'}}>These Terms of Service, together with the </span><a href="https://gekchio.web.app/privacy" target="_blank" rel="noopener">Privacy Policy</a><span style={{color: '#222222'}}> and any other legal notices published by Company on the Service, shall constitute the entire agreement between you and Company concerning the Service. If any provision of this Agreement is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of these Terms of Service, which shall remain in full force and effect. No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term, and Company’s failure to assert any right or provision under this Agreement shall not constitute a waiver of such right or provision. Company reserves the right to modify and amend these Terms of Service at any time and without notice, and it is your responsibility to review these Terms of Service for any changes. Your use of the Service following any amendment of these Terms of Service will signify your assent to and acceptance of its revised terms. Headings and the simplified description of sections are provided for convenience and shall not affect the interpretation of this Agreement. YOU AND COMPANY AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE SERVICES MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.</span></p>
                        </div>

                    </MainDiv>
                </RightDiv>
            </Container>

            <Bottom />
        </div>
    );
}

export default TermsPage;