
import Header from "@/components/Header"
import AdmissionSidebar from "@/components/Sidebar/AdmissionSidebar";

const Admission = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="flex flex-col md:flex-row">
  <main className="flex-1 p-6 md:mr-64">
    {/* Your main academic content goes here */}
  </main>
  <AdmissionSidebar className="hidden md:block" />
</div>
      <Header />
    </div>
  );
};

export default Admission;


