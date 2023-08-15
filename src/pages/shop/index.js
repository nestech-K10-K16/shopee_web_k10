import React, { useContext } from 'react'
import ListCard from '../../components/listcards'
import CardShop from '../../components/cardshop'
import { DUMMY_DATA_PRODUCTS } from '../../constants/common'
import { AppContext } from '../../context/AppContext'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import { PATHNAME_LIST } from '../../router/router'
import 'react-toastify/dist/ReactToastify.css';
import './style.css'

const shop = () => {

    const { ShoppingBag, setShoppingBag } = useContext(AppContext)

    const notifySuccess = () => {
        toast.success(
            <div className='toast-content'>
                <p className='text-font-family_default text-heading5 text-color-black'>The item added to your Shopping bag.</p>
                <Link className='text-font-family_default text-body-large text-color-accent' to={PATHNAME_LIST.CART}>VIEW CART</Link>
            </div>
            , {
                autoClose: 5000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
    };

    const notifyError = () => {
        toast.error('Already in shopping bag', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    const renderCardShop = () => {
        return <>
            {
                DUMMY_DATA_PRODUCTS.map((product) => {
                    return <CardShop
                        title={product.title}
                        onAddItem={() => {
                            if (ShoppingBag.some(e => product.id === e.id)) {
                                notifyError()
                                return;
                            }
                            setShoppingBag([...ShoppingBag, product])
                            notifySuccess()
                        }}
                    />

                })
            }
        </>
    }

    return (
        <div className='container-shop'>
            <ToastContainer />
            <ListCard
                layoutItemType='SHOP_SCREEN'
                showTitle={false}
                renderItem={renderCardShop()}
            />
        </div>
    )
}

export default shop