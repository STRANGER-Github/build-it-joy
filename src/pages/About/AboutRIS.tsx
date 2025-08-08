import Header from "@/components/Header"
import MainMenu, { MainMenuItem } from "@/components/MainMenu"

const aboutMenuItems: MainMenuItem[] = [
    { name: "About Rahul Education", href: "/about" },
    { name: "Our Management", href: "/about/management" },
    { name: "About SKLTCoA", href: "/about/skltcoa" },
    { name: "Our Principal", href: "/about/principal" },
    { name: "Vision and Mission", href: "/about/vision-mission" },
    { name: "College Brochure", href: "/about/brochure" },
]

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 pb-10">
            <div className="flex flex-col md:flex-row">
                <main className="flex-1 p-6 md:mr-64">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 tracking-wide">
                            ABOUT Rahul Education
                        </h1>

                        <div className="text-gray-800 text-base leading-relaxed space-y-6 text-justify">
                            <p>
                                <a href="#" className="underline text-current">Rahul Education</a>, The Parent Organization, Covering Five Registered Educational Societies, Is A Reputed Quality Education Provider. It Comprises Over 57+ Institutions, Spread Across Thane, Palghar And Pune Districts Of Maharashtra And Chaudhail District Of Uttar Pradesh.
                            </p>

                            <p>
                                Ever Since The Commencement Of Its First School In Bhayander, In The Year 1992, Rahul Education Has Diligently Followed The Path Of Delivering 360° Quality Education. Rahul Education Is Already Providing Education In All Streams Of Engineering, <a href="#" className="underline text-current">Polytechnic</a>, <a href="#" className="underline text-current">Architecture</a>, <a href="#" className="underline text-current">Design Studies</a>, Law, Degree Courses – <a href="#" className="underline text-current">SBMS</a>, <a href="#" className="underline text-current">BMM</a>, <a href="#" className="underline text-current">BA</a>, <a href="#" className="underline text-current">B.Com</a>, <a href="#" className="underline text-current">BAF</a>, <a href="#" className="underline text-current">B.Sc IT</a>, <a href="#" className="underline text-current">Aviation</a>, <a href="#" className="underline text-current">Hospitality Studies</a>, Actuarial Sciences, Computer Science, And Data Science/ <a href="#" className="underline text-current">M.Ed</a>, <a href="#" className="underline text-current">B.Ed</a>, <a href="#" className="underline text-current">D.T.Ed</a>, <a href="#" className="underline text-current">E.C.C.Ed</a>, <a href="#" className="underline text-current">Junior College (Arts, Commerce, And Science)</a>, <a href="#" className="underline text-current">IGCSE, ICSE, CBSE</a>, &amp; <a href="#" className="underline text-current">SSC Curriculum</a>.
                            </p>

                            <p>
                                As The Year 2018 Marked A Quarter Of A Century Since The Group's Inception, The Educational Organization Decided To Commemorate The Occasion By Establishing A <a href="#" className="underline text-current">Rahul Knowledge City</a> In The State Of Uttar Pradesh. The Underlying Goal Behind Such A Step Was To Elevate The Standard Of Education Within The Country And Spread Its Benefits To All. This Rahul Knowledge City Is Fully Equipped With State-Of-The-Art Facilities And All Modern Equipment, To Bring World-Class Education To The People Of Uttar Pradesh. This Has Also Enabled The Group To Fulfill The Lifelong Dream Of Its Founder, Shri Ramadhar J. Tiwari, To Have A Thriving Educational Institution, In His Native Place Of Mehuar Kalan.
                            </p>

                            <p>
                                Each Individual At <a href="#" className="underline text-current">Rahul Education</a> Works With The Single Vision Of Providing 'Education For All', And Achieving The Mission Of Bringing Progress Through Comprehensive Quality Education. Rahul Education Is Proud Of Its 70,000+ Students And Their Parents Who Boast About Its Commitment To Provide Quality Education From Pre-School To Doctoral Degree.
                            </p>

                        </div>
                    </div>
                </main>

                <MainMenu title="About" items={aboutMenuItems} />
            </div>

            <Header />
        </div>
    )
}

export default About
