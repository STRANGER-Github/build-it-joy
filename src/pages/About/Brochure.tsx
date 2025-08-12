import Header from "@/components/Header";
import MainMenu, { MainMenuItem } from "@/components/MainMenu";

const aboutMenuItems: MainMenuItem[] = [
    { name: "About Rahul Education", href: "/about/rahul-education" },
    { name: "Our Management", href: "/about/management" },
    { name: "About SKLTCOA", href: "/about/skltcoa" },
    { name: "Our Principal", href: "/about/principal" },
    { name: "Vision and Mission", href: "/about/vision-mission" },
    { name: "College Brochure", href: "/about/brochure" },
];

const Brochure = () => {
    return (
        <div className="min-h-screen bg-gray-50 pb-10">
            <div className="flex flex-col md:flex-row">
                {/* Main content */}
                <main className="flex-1 p-6 md:p-10">
                    <div className="max-w-8xl mx-auto">
                        <h1 className="text-5xl font-bold text-gray-900 mb-12 tracking-wide">
                            COLLEGE BROCHURE
                        </h1>

                        <iframe className="mx-auto"
                            src="https://drive.google.com/file/d/1qy4hhbNRu8m9yE0Nq8w7DcCtRe_sCHFF/preview"
                            width="50%"
                            height="800px"
                            allow="autoplay"
                            style={{ border: "none" }}
                            title="SKLTCOA Brochure PDF"
                        />
                    </div>
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

export default Brochure;
