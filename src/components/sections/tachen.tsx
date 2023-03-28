import img from '../../assets/tachen.png';

const Tachen = () => {
    return ( 
        <div className="w-full relative">
            <img className='object-cover' src={img} alt="hero background" />
            <div className="absolute xl:bottom-28 md:bottom-20 bottom-16 xl:left-48 lg:left-32 md:left-20 left-16">
                <h4 className='uppercase text-text font-medium leading-7 lg:text-lg text-sm'>OWN THE DAY</h4>
                <h1 className='text-text uppercase lg:text-[80px] text-3xl lg:leading-[120px] md:leading-10 sm:leading-5'>TACHEN 19</h1>
            
                <div className="flex mt-6">
                    <a href='#' className='bg-text uppercase hover:bg-gray-700 text-white inline-flex max-lg:text-sm items-center justify-center py-1 px-7'>
                        Shop collection
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Tachen;