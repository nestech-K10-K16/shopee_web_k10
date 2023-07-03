import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LAYOUT_TYPE, appRoute } from './router'
import LayoutDefault from './Layouts/LayoutDefault'
import '../styles/index.css'

const MainRoute = () => {

    const getLayout = (layout) => {
        switch (layout) {
            case LAYOUT_TYPE.LAYOUT_DEFAULT:
                return LayoutDefault
            case LAYOUT_TYPE.LAYOUT_SIDE_BAR:
                return Fragment
            default:
                return LayoutDefault
        }
    }

    return (
        <BrowserRouter>
            <div className='container-main-router'>
                <Routes>
                    {appRoute.map((route) => {
                        const Component = route.component
                        const Layout = getLayout(route.layout)
                        return (
                            <Route
                                key={route.id}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default MainRoute