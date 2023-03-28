import img from '../../assets/hero.png';

const Hero = () => {
    return ( 
        <div className="w-full relative">
            <img className='object-cover' src={img} alt="hero background" />
            <div className="absolute bottom-28 right-48">
                <h4 className='uppercase text-text font-medium leading-7 text-lg'>NEW TREND</h4>
                <h1 className='text-text uppercase text-[80px] leading-[120px]'>COLLUSION</h1>
                <h4 className='uppercase text-text font-medium leading-7 text-lg'>An exclusive selection of this season's trends.</h4>
            
                <div className="flex gap-10 mt-6">
                    <a href='#' className='bg-text uppercase hover:bg-gray-700 text-white inline-flex items-center justify-center py-1 px-7'>
                        Discover
                    </a>


                    <a href='#' className='bg-text uppercase hover:bg-gray-700 text-white inline-flex items-center justify-center py-1 px-7'>
                        Shop now
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;