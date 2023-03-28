import f1 from '../../assets/f1.png';
import f2 from '../../assets/f2.png';
import f3 from '../../assets/f3.png';
import f4 from '../../assets/f4.png';

import g1 from '../../assets/g1.png';
import g2 from '../../assets/g2.png';
import g3 from '../../assets/g3.png';
import g4 from '../../assets/g4.png';

import { FashionProps } from '../../interfaces/fashion.interface';
import FashionElt from '../fashionElt';

const Fashion = () => {

    let womensFashions: FashionProps[] = [
        {
            image: f1,
            name: 'GREEN MUSCLE FIT POLO SHIRT',
            description: 'IGURE',
            oldPrice: '$129.00',
            newPrice: '$129.00'
        },
        {
            image: f2,
            name: 'GREEN MUSCLE FIT POLO SHIRT',
            description: 'IGURE',
            oldPrice: '$129.00',
            newPrice: '$129.00'
        },
        {
            image: f3,
            name: 'GREEN MUSCLE FIT POLO SHIRT',
            description: 'IGURE',
            oldPrice: '$129.00',
            newPrice: '$129.00'
        },
        {
            image: f4,
            name: 'GREEN MUSCLE FIT POLO SHIRT',
            description: 'IGURE',
            oldPrice: '$129.00',
            newPrice: '$129.00'
        },
    ];

    let mensFashions: FashionProps[] = [
        {
            image: g1,
            name: 'GREEN MUSCLE FIT POLO SHIRT',
            description: 'IGURE',
            oldPrice: '$129.00',
            newPrice: '$129.00'
        },
        {
            image: g2,
            name: 'GREEN MUSCLE FIT POLO SHIRT',
            description: 'IGURE',
            oldPrice: '$129.00',
            newPrice: '$129.00'
        },
        {
            image: g3,
            name: 'GREEN MUSCLE FIT POLO SHIRT',
            description: 'IGURE',
            oldPrice: '$129.00',
            newPrice: '$129.00'
        },
        {
            image: g4,
            name: 'GREEN MUSCLE FIT POLO SHIRT',
            description: 'IGURE',
            oldPrice: '$129.00',
            newPrice: '$129.00'
        },
    ];

    return ( 
        <div className="bg-white">

            <div className="pb-24">
                <h2 className="text-xl font-bold text-center text-text mb-4">WOMEN’S FASHION</h2>
                <p className="text-sm text-text text-center mb-16">Shop our new arrivals from established brands</p>

                <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 max-w-fit mx-auto" role="list">
                    {
                        womensFashions && womensFashions.map((fashion) => (
                            <FashionElt props={fashion} key={fashion.image} />
                        ))
                    }
                </ul>
            </div>

            <div className="pb-24">
                <h2 className="text-xl font-bold text-center text-text mb-4">MEN’S FASHION</h2>
                <p className="text-sm text-text text-center mb-16">Shop our new arrivals from established brands</p>

                <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 max-w-fit mx-auto" role="list">
                    {
                        mensFashions && mensFashions.map((fashion) => (
                            <FashionElt props={fashion} key={fashion.image} />
                        ))
                    }
                </ul>
            </div>

        </div>
     );
}
 
export default Fashion;