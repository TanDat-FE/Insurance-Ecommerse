import Header from '../components/Header';

function Home() {
    return (
        <div className="w-full max-w-[1280px] mx-auto">
            <Header />

            <div 
                className="relative overflow-hidden"
                style={{
                    background: 'linear-gradient(to bottom, #ffffff, #eaf6ff)', 
                    borderRadius: '0 0 50% 50% / 5%', 
                }}
            >
                <section className="text-center py-16 px-4 md:px-8">
                    <h1 className="text-5xl font-bold">Protect your property</h1>
                    <p className="mt-2 text-black">Unlock savings with one search.</p>

                    <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-2">
    <input
        type="text"
        placeholder="Zipcode"
        className="border border-gray-300 rounded px-4 py-2 w-[110px]"
    />
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Get a quote now
    </button>
</div>


                    <p className="mt-6 text-gray-600">Explore our homeowners insurance products</p>
                </section>
            </div>
        </div>
    );
}

export default Home;
