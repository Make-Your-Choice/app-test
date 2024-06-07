'use client';

import { useState, useEffect, useMemo } from 'react'
import Card from './card'

import styleCard from "../styles/card.module.css"
import styleTitle from "../styles/title.module.css"
import styleButton from "../styles/button.module.css";
import styleBase from "../styles/base.module.css";
import classNames from 'classnames';

export default function FetchData() {
    const [cards, setCards] = useState(null)
    const [isLoadingCards, setLoadingCards] = useState(true)

    const [categories, setCategories] = useState(null)
    const [isLoadingCategories, setLoadingCategories] = useState(true)

    const [filterValue, setFilterValue] = useState<Number>(-1);
    const [filteredData, setfilteredData] = useState(null)

    useEffect(() => {
        fetch("https://api.test.cyberia.studio/api/v1/projects")
            .then((res) => res.json())
            .then((cards) => {
                setCards(cards.items)
                setLoadingCards(false)
                setfilteredData(cards.items)
            })
            .catch((e) => console.error(e))
    }, [])

    useEffect(() => {
        fetch("https://api.test.cyberia.studio/api/v1/project-categories")
            .then((res) => res.json())
            .then((categories) => {
                setCategories(categories.items)
                setLoadingCategories(false)
            })
            .catch((e) => console.error(e))
    }, [])



    //--------------все бы хорошо, но не работает-----------------------------------
    // let filteredData = cards.filter((item) => {
    //     return {
    //         ...item,
    //         categories: item.categories.filter((subItem) =>
    //             subItem.name === filterValue)
    //     }
    // const filteredChilds = datum.children.filter((child) => child.title.toLowerCase().includes(searchString.toLowerCase()));
    // return filteredChilds.length > 0;
    // });
    // ----------------------------------------------------------



    const handleFilterChange = (e: Event, categoryId: Number) => {
        if (categoryId !== filterValue || categoryId === -1) {
            // e.currentTarget.classList.add(styleButton.button_item_clicked);
            console.log(categoryId);
            setFilterValue(categoryId);

            setfilteredData(cards.filter((item: { categories: any[]; }) => {
                const categories = item.categories.filter((subItem) =>
                    parseInt(subItem.id) === categoryId);
                return categories.length > 0;
            }))
            console.log(filteredData)
        } else {
            // e.currentTarget.classList.remove(styleButton.button_item_clicked);
            setFilterValue(-1)
            setfilteredData(cards)
        }




        // ----------как их блин сбросить нормально
        // console.log(categoryId);

        // setfilteredData(cards.filter((item) => {
        //     const subItems = item.categories.filter((subItem) =>
        //         parseInt(subItem.id) === categoryId);
        //     return subItems.length > 0;
        // }))
        // setFilterValue(categoryId);
        // console.log(filterValue);
        // console.log(filteredData)

    };

    // const filteredData = !filterValue ? cards : cards.items.filter(item =>
    //     item.categories.filter((category: string) =>
    //         category.name.toLowerCase().includes(filterValue.toLowerCase())))

    if (isLoadingCards || isLoadingCategories)
        return <p className={styleTitle.title_padding}>Загрузка...</p>
    if (!cards || !categories)
        return <p className={styleTitle.title_padding}>Нет данных для отображения</p>

    return (
        <>
            <p className={styleTitle.title_text}>Кейсы</p>
            <div className={styleButton.button_container}>
                {categories.map((category: JSX.IntrinsicAttributes & { [x: string]: any; }) => (
                    <button className={
                        classNames(
                            styleBase.general_text,
                            styleButton.button_item)}
                        key={category.id}
                        onClick={(e) => { handleFilterChange(e, category.id); }}
                    >{category.name}</button>
                ))}
            </div>
            <div className={styleCard.card_list}>
                {filteredData.map((card: JSX.IntrinsicAttributes & { [x: string]: any; }) => (
                    <Card key={card.id} {...card}></Card>
                ))}
            </div>
        </>
    )
}