import React, {useCallback, useRef, useState} from "react";
import debounce from 'lodash.debounce'
import {setSearchValue} from "../../redux/slices/filterSlice";
import styles from "./Search.module.scss";
import {useDispatch} from "react-redux";


const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current.focus()
    }

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 500),
        []
    )

    const onChangeInput = event => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    return (
        <div className={styles.root}>
            <svg className={styles.icon} width="48" height="48" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M9.591 9.591a4 4 0 10-5.657-5.657 4 4 0 005.657 5.657zm1.06-6.717a5.502 5.502 0 01.915 6.57l2.732 2.733a1.5 1.5 0 11-2.121 2.12l-2.732-2.73a5.5 5.5 0 111.207-8.692z"
                      fill="#000"></path>
            </svg>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className={styles.input}
                type="text"
                placeholder="Поиск..."/>

            {value &&
                <svg onClick={onClickClear}
                     className={styles.clearIcon}
                     width="48"
                     height="48"
                     viewBox="0 0 16 16"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z"
                          fill="#000"></path>
                </svg>}
        </div>
    )
}

export default Search