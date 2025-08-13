import Header from "@/components/Header";
import MainMenu, { MainMenuItem } from "@/components/MainMenu";
import PrincipalIMG from "@/assets/arch-principal.jpg";

const aboutMenuItems: MainMenuItem[] = [
    { name: "About Rahul Education", href: "/about/rahul-education" },
    { name: "Our Management", href: "/about/management" },
    { name: "About SKLTCOA", href: "/about/skltcoa" },
    { name: "Our Principal", href: "/about/principal" },
    { name: "Vision and Mission", href: "/about/vision-mission" },
    { name: "College Brochure", href: "/about/brochure" },
];

const Principal = () => {
    return (
        <div className="min-h-screen bg-gray-50 pb-10">
            <div className="flex flex-col md:flex-row">
                {/* Main content area */}
                <main className="flex-1 p-6 md:p-10">
                    <div className="max-w-8xl mx-auto">
                        <h1 className="text-5xl font-bold text-gray-900 mb-12 tracking-wide">
                            OUR PRINCIPAL
                        </h1>

                        <div className="text-gray-800 text-sm sm:text-base md:text-lg lg:leading-[2] lg:text-xl space-y-8 text-justify">
                            {/* Two paragraphs with image beside them */}
                            <div className="flex flex-col md:flex-row gap-6 max-w-8xl">
                                {/* Image block */}
                                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                                    <img
                                        src={PrincipalIMG}
                                        alt="Principal of SKLTCOA"
                                        className="w-64 h-80 rounded-2xl object-cover shadow-sm"
                                    />
                                </div>
                                {/* Text block */}
                                <div className="flex-1 space-y-6 max-w-6xl">
                                    <p className="text-2xl">
                                        <b>Mrs. Rupali Gupte - Principal (Architecture)</b>
                                    </p>
                                    <p>
                                        In The Recent Few Decades, Architecture As A Profession Has Undergone Some Key Changes. With Technological Intervention In Every Sphere Of Life Today, Disciplines Like Art And Architecture Have Been Influenced The Most.
                                    </p>
                                    <p>
                                        As A Group Serving The Education Sector For Years Now, We Understand The Concern And Plan To Address It At The Earliest.
                                    </p>
                                </div>
                            </div>
                                    {/* <p className="text-2xl">
                                        <b>Mrs. Rupali Gupte</b>
                                    </p> */}

                            {/* Remaining paragraph */}
                            <p>
                                So, The Group Has Started Smt. K.L. Tiwari College Of Architecture That Will Offer Various Courses In Architecture To Aspiring Architects Across India. The Programme Is Tailored Accordingly To Suit Today’s Changing Needs Of The Profession. The Curriculum Of The Programme Is Such That It Allows The Young Architects-In-The-Making To Comprehend And Analyse The Changing Trends And Industrial Needs, And Accordingly Act And Make Choices. The Programme Enables Its Students To Grow Holistically And Develop A Thought Process That Encourages Them To Think Out-Of-The-Box. With The Programme We Wish To Create Young And Dynamic Workforce That Is Well Equipped To Face Professional Challenges And Come Out Victorious.
                            </p>
                        </div>

                    </div>
                    <br />
                    <hr />
                </main>

                {/* Sidebar menu */}
                <aside className="w-full md:w-64 lg:w-72 p-4">
                    <MainMenu title="About" items={aboutMenuItems} />
                </aside>
            </div>

            <Header />
        </div>
    );
};

export default Principal;
