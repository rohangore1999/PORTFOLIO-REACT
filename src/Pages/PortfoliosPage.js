import React, { useState } from 'react'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from '../Components/Title'
import Button from '../Components/Button'

import portfolios from '../data/portfolios';
import Menu from '../Components/Menu'

// Spread operation to get all the category from portfolios data
// putting into the set as we dont want category to repeated as a button
const allButtons = ['ALL', ...new Set(portfolios.map((item)=> item.category))]

function PortfoliosPage() {
    const [menuItem, setMenuItems] = useState(portfolios);

    // by defalut for button we are passing all the category; after clicking it will get filtered
    const [button, setButtons] = useState(allButtons);

    const filter = (button) => {
        if (button === 'ALL'){
            setMenuItems(portfolios)
            return;
        }
        // when user click in Button.js (buttons) it will pass the button as a category; here aftr getting button it will filter out on category
        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData)
    }

    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'Portfolios'} />
            
            <InnerLayout>
                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />

            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage
