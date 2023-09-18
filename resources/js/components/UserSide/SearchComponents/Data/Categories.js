import React, { useState, useEffect } from "react";
import Category from "../../ReusableComponents/Category";
import axios from "axios";

const Categories = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getSearchedCategories', {
            params : {
                value : props.value
            }
        })
            .then((res) => setCategories(res.data))
    }, []);

    const style = {
        paddingLeft: '100px',
        paddingRight: '100px',
        width: '50%',
        margin: '0 auto',
     };

    return ( <Category category={categories} catStyle={style} /> );
}

export default Categories;
