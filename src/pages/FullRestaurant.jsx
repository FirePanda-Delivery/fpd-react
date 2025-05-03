import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const FullRestaurant = () => {
    const [restaurant, setRestaurant] = useState();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchRestaurant() {
            try {
                const {data} = await axios.get('http://fpd.midavon.ru/api/restaurant/' + id)
                setRestaurant(data)
            } catch (error) {
                alert('Ошибка при получении пиццы')
                navigate('/')
            }
        }

        fetchRestaurant()
    }, []);

    if (!restaurant) {
        return 'загрузка...'
    }

    return (
        <div className="container">
            <img src={restaurant.imageUrl}/>
            <h2>{restaurant.title}</h2>
            <h4>{restaurant.price}</h4>
        </div>
    )
}

export default FullRestaurant;