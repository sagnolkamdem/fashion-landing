import a1 from '../../assets/avone-1.png';
import a2 from '../../assets/avone-2.png';
import a3 from '../../assets/avone-3.png';

const Avone = () => {
    return ( 
        <div className="bg-white lg:pb-28 pb-8 relative">
            <h2 className="text-xl font-bold text-center text-text mb-4">AVONE STYLES</h2>
            <p className="text-sm text-text text-center mb-14">Choose Your Favorite Color</p>

            <div className="grid max-xl:px-10 max-sm:p-4 lg:grid-cols-2 max-w-fit lg:h-[620px] gap-7 mx-auto">
                <div className="flex max-lg:hidden items-end max-w-[552px]">
                    <img className='w-full h-[552px]' src={a1} alt="background image" />
                </div>
                <div className="max-w-[552px] relative">
                    <img src={a2} alt="background image" />
                    <div className="flex max-md:hidden z-10 bg-white items-end justify-end absolute bottom-0 -right-10 pt-5 pl-6">
                        <img className='' src={a3} alt="background image" />
                    </div>
                    <div className='absolute z-20 bottom-10 lg:right-56 right-28 pb-1 border-b border-text whitespace-nowrap'>
                        <a href='#' className='text-text text-sm'>SHOW WOMEN’S DRESS</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Avone;