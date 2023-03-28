const Header = () => {
    return ( 
        <div className="w-full py-5 px-56 bg-white">

            <nav className="flex justify-between items-center w-full">

                <div className="">
                    <a href="/" className="font-bold text-[28px] leading-[42px] text-text">YOUR LOGO</a>
                </div>

                <div className="flex gap-6">
                    <a href="/" className="text-lg text-text">Home</a>
                    <a href="#" className="text-lg text-text">SHOP</a>
                    <a href="#" className="text-lg text-text">LOOKBOOK</a>
                    <a href="#" className="text-lg text-text">FEATURES</a>
                    <a href="#" className="text-lg text-text">PAGES</a>
                    <a href="#" className="text-lg text-text">BLOG</a>
                </div>

                <div className="space-x-6">
                    <button type="button" className="text-text">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-text">
                            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                        </svg>
                    </button>

                    <button type="button" className="text-text">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-text">
                            <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
                        </svg>
                    </button>

                    <button type="button" className="text-text">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-text">
                            <path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path>
                            <circle cx="10.5" cy="19.5" r="1.5"></circle>
                            <circle cx="16.5" cy="19.5" r="1.5"></circle>
                        </svg>
                    </button>
                </div>

            </nav>
            
        </div>
     );
}
 
export default Header;