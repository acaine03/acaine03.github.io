const photo1=require('../../img/updates.png')
const photo2=require('../../img/updates.png')
const photo3=require('../../img/updates.png')
const photo4=require('../../img/updates.png')

export default () => `
    <div class="right-side-content">
        <div class="about-us">
    
            <div class="about-us-heading">
                <h1>About Us</h1>
            </div>
            <div class="paragraph-1">

                <p>Perfectly Imperfect Counseling LLP provides a message to the world that being
                Imperfect means having room to progress in life's journey. Determination and resiliency
                are a couple of the resources needed to walk the paths we have chosen. To be Perfectly
                Imperfect means to be willing, motivated, determined and resilient throughout your
                life; even when it hurts to struggle. It is a message of empowerment and foresight
                that no matter what we go through, we are already Perfect in every way.
                </p>

            </div>

            <div class="safe-place">

                <h1>Welcome to our Safe Place</h1>

                <img src="${photo1}" class="photo1"><figcaption>Description</figcaption>
                <img src="${photo2}" class="photo2"><figcaption>Description</figcaption>
                <img src="${photo3}" class="photo3"><figcaption>Description</figcaption>
                <img src="${photo4}" class="photo4"><figcaption>Description</figcaption>
                
            </div>
            
        </div>
    </div>
`;