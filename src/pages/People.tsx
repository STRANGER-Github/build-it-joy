
import Header from "@/components/Header"
import PeopleSidebar from "@/components/Sidebar/PeopleSidebar";

const People = () => {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="flex flex-col md:flex-row">
                <main className="flex-1 p-6 md:mr-64">
                    {/* Your main academic content goes here */}
                </main>
                <PeopleSidebar className="hidden md:block" />
            </div>
            <Header />
        </div>
    );
};

export default People;


