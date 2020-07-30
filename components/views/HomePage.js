const aboutUsPage=require('../../img/aboutus.jpg')
const meetOurTeamPage=require('../../img/team.jpg')
const clientServicesPage=require('../../img/services.jpg')
const resourcesPage=require('../../img/resources.jpg')
const careerPage=require('../../img/career.jpg')
const contactUs=require('../../img/contact.jpg')

export default () => `
    <div class="right-side-content">
    
        <div class="home-nav">
          <a href="/AboutUs"><img src="${aboutUsPage}" class="aboutUs"><figcaption>About Us</figcaption></a>
          <a href="/MeetOurTeam"><img src="${meetOurTeamPage}" class="team"><figcaption>Meet Our Team</figcaption></a>
          <a href="/ClientServices"><img src="${clientServicesPage}" class="clientServices"><figcaption>Client Services</figcaption></a>
          <a href="/Resources"><img src="${resourcesPage}" class="resources"><figcaption>Resources</figcaption></a>
          <a href="/Career"><img src="${careerPage}" class="career"><figcaption>Career</figcaption></a>
          <a href="/ContactUs"><img src="${contactUs}" class="contactUs"><figcaption>Contact Us</figcaption></a>
        </div>
    </>
`;