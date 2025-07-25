
import Header from "@/components/Header"

const Life = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center tracking-wide">LIFE@SKLTCOA</h1>
          <div className="text-center text-gray-700">
            <p className="text-lg leading-relaxed">
              Discover campus life, events, and the vibrant community at SKLTCOA.
            </p>
          </div>
        </div>
      </main>
      <Header />
    </div>
  );
};

export default Life;


