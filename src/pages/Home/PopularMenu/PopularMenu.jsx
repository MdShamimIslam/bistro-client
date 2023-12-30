import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import PopularItem from '../Home/Shared/PopularItem/PopularItem';

const PopularMenu = () => {
    const [menu,setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItem = data?.filter(item => item.category === 'popular');
            setMenu(popularItem);
        })
        
    },[])

    return (
        <div>
            <SectionTitle heading='from our menu' subHeading='Popular Items'></SectionTitle>
            
            <div className='grid md:grid-cols-2 gap-8 mb-16'>
                {
                    menu?.map(item => <PopularItem key={item._id} item={item}></PopularItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;