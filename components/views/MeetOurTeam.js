const katelynnhs=require('../../img/katelynn.jpg')
const mareaynahs=require('../../img/mareayna.jpg')
const jenniferhs=require('../../img/jennifer.jpg')

export default () => `
    <div class="right-side-content">

        <div class="meet-our-team">
            
            <div class="mareayna" style="padding: 1em; max-width: 25%;">
            <img src="${mareaynahs}" class="mareayna-headshot"><figcaption><b>Mareayna (Marina)<br>MA-CMHC, PLPC, NCC<br>
            Trauma & EMDR Specialist</b></figcaption>
            
            <p>Mareayna is a Mental Health Therapist offering onsite and virtual counseling. 
            Her background includes working with ages seven and older on various levels. 
            She specializes in providing therapeutic guidance with trauma, PTSD, anxiety, grief, 
            and depression. She models her support using CBT - Cognitive Behavioral Therapy, 
            Motivational Interviewing, DBT- Dialectical Behavioral Therapy, Experiential Therapy, 
            Motivational Interviewing, and Person Centered Therapy. Mareayna believes that everyone 
            is a piece of our community and it is important to ensure we are all supported to better 
            our environment and lives.</p>

            <p>Life is challenging, those challenges create internal strength and resilience. 
            Together, we identify core issues, feelings, and resolve problems while developing 
            healthy coping skills. Increasing self-empowerment creates an opportunity for clients 
            to embrace their unique strength and power. Together the journey to develop your 
            inner-self will connect you to a new mindset of mental health, emotional stability, 
            and self-discovery.</p>

            <p>With motivation and determination, clients will begin the journey to their vision 
            of internal growth fully supported and excited! </p>

            <p>"Sentio Ergo Sum... is my favorite phrase. It means, 'I feel, therefore I am...'. 
            It gives us the control we need in our lives to determine how we want to live and what 
            we do with our emotions. It gives us an opportunity to feel what we need to feel and 
            then transition those feelings into ones that we can use to learn about ourselves. 
            "'I feel' means that 'I am the priority'. " - Mareayna </p>

            </div>
            
            <div class="katelynn" style="padding: 1em; max-width: 25%;">
            <img src="${katelynnhs}" class="katelynn-headshot"><figcaption><b>Katelynn (Kate-Lynn)</b></figcaption>
            </div>

            <div class="jennifer" style="padding: 1em; max-width: 25%;">
            <img src="${jenniferhs}" class="jennifer-headshot"><figcaption><b>Jennifer (Jennifer)</b></figcaption>
            </div>

        </div>

    </div>
`;