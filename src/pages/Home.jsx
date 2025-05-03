import React, {useEffect, useRef} from "react";
import qs from "qs";
import {useDispatch, useSelector} from "react-redux"
import {Link, useNavigate} from "react-router-dom";

// import {Categories, Sort, RestaurantBlock, Skeleton, Pagination} from "./components";
import Categories from "../components/Categories";
import Sort, {sortList} from "../components/Sort";
import RestaurantBlock from "../components/RestaurantBlock";
import Skeleton from "../components/RestaurantBlock/Skeleton";
import Pagination from "../components/Pagination";
import {selectFilter, setCategoryId, setCurrentPage, setFilters} from "../redux/slices/filterSlice";
import {fetchRestaurants, selectRestaurantData} from "../redux/slices/restaurantSlice.js";
import Search from "../components/Search";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const {items, status} = useSelector(selectRestaurantData);
    const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter);
    const sortType = sort.sortProperty

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const onChangePage = number => {
        dispatch(setCurrentPage(number));
    }

    // Если изменили параметры и был первый рендер
    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sortType,
                categoryId,
                currentPage
            })
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, sortType, currentPage])


    // Если был первый рендер, то проверяем URL-параметры и сохраняем в редаксе
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sort = sortList.find(obj => obj.sortProperty === params.sortProperty);
            dispatch(
                setFilters({
                    ...params,
                    sort
                })
            );
            isSearch.current = true;
        }
    }, []);

    // Если был первый рендер, то запрашиваем пиццы
    useEffect(() => {
        window.scrollTo(0, 0);

        if (!isSearch.current) {
            getRestaurants();
        }
        isSearch.current = false;
    }, [categoryId, sortType, searchValue, currentPage]);

    const getRestaurants = async () => {
        const sortBy = sortType.replace('-', '')
        const order = sortType.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : ''
        const search = searchValue ? `&search=${searchValue}` : ''

        dispatch(fetchRestaurants({
            sortBy,
            order,
            category,
            search,
            currentPage
        }))

        window.scrollTo(0, 0);
    }

    const restaurants = items.map((obj) =>
        <Link key={obj.id} to={`/restaurant/${obj.id}`}>
            <RestaurantBlock  {...obj}/>
        </Link>);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)

    return (
        <div className="container">
            <div className="content__slider">
                <div className="slide">
                    <img className="slide-1" src="/img/main-bg-1.jpg"/>
                </div>
                <div className="slide">
                    <img className="slide-2" src="/img/main-bg-2.jpg"/>
                </div>
                <div className="slide">
                    <img className="slide-3" src="/img/main-bg-3.jpg"/>
                </div>
            </div>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onChangeCategory}/>
                <Sort/>
            </div>
                <Search/>
            <h2 className="content__title">В ВАШЕМ ГОРОДЕ</h2>
            {status === "error" ? (
                <div className={"content__error-info"}>
                    <h2>Произошла ошибка 😕</h2>
                    <p>Не удалось получить пиццы. Попробуйте повторить ошибку позже</p>
                </div>
            ) : (
                <div className="content__items">{status === 'loading' ? skeletons : restaurants}</div>)}

            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    )
}
export default Home;