
import Header from "@/components/Header"
import AcademicsSidebar from "@/components/Sidebar/AcademicSidebar";

const Academics = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="flex flex-col md:flex-row">
        <main className="flex-1 p-6 md:mr-64">


          {/* Your main academic content goes here */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center tracking-wide">Academics</h1>
            <div className="text-center text-gray-700">
              <p className="text-lg leading-relaxed">
                Discover campus life, events, and the vibrant community at SKLTCOA.
              </p>
            </div>
          </div>


        </main>
        <AcademicsSidebar className="hidden md:block" />
      </div>

      <Header />
    </div>
  );
};

export default Academics;


