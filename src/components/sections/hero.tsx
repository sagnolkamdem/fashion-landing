import img from '../../assets/hero.png';

const Hero = () => {
    return ( 
        <div className="w-full relative">
            <img className='object-cover' src={img} alt="hero background" />
            <div className="absolute xl:bottom-28 md:bottom-20 sm:bottom-16 bottom-4 xl:right-48 lg:right-32 md:right-20 sm:right-16 right-1">
                <h4 className='uppercase text-text font-medium leading-7 lg:text-lg md:text-sm text-xs'>NEW TREND</h4>
                <h1 className='text-text uppercase lg:text-[80px] text-lg lg:leading-[120px] md:leading-10 sm:leading-5'>COLLUSION</h1>
                <h4 className='uppercase text-text font-medium leading-7 lg:text-lg md:text-sm text-xs'>An exclusive selection of this season's trends.</h4>
            
                <div className="flex gap-10 mt-6">
                    <a href='#' className='bg-text max-lg:text-sm uppercase hover:bg-gray-700 text-white inline-flex items-center justify-center py-1 px-7'>
                        Discover
                    </a>


                    <a href='#' className='bg-text max-lg:text-sm uppercase hover:bg-gray-700 text-white inline-flex items-center justify-center py-1 px-7'>
                        Shop now
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;