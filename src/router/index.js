import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LAYOUT_TYPE, appRoute } from './router'
import LayoutDefault from './Layouts/LayoutDefault'
import LayoutSidebar from './Layouts/LayoutSidebar'
import LayoutSidebarBlog from './Layouts/LayoutSidebarBlog'
import '../styles/index.css'
import { AppProvider } from '../context/AppContext'

const MainRoute = () => {

    const getLayout = (layout) => {
        switch (layout) {
            case LAYOUT_TYPE.LAYOUT_DEFAULT:
                return LayoutDefault
            case LAYOUT_TYPE.LAYOUT_SIDE_BAR:
                return LayoutSidebar
            case LAYOUT_TYPE.LAYOUT_SIDE_BAR_BLOG:
                return LayoutSidebarBlog
            default:
                return LayoutDefault
        }
    }

    return (
        <AppProvider>
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
        </AppProvider>
    )
}

export default MainRoute