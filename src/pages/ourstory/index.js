import React from 'react'
import { IMG_ourstory_item1 } from '../../assets'
import "./style.css"

const OurStory = () => {
    return (
        <div id='container-OurStory'>
            <p className='text-font-family_default text-heading1 text-color-black'>About</p>
            <p className='text-font-family_default text-heading3 text-color-black'>Who we are and why we do what we do!</p>
            <div className='container-OurStory__about-text text-font-family_default text-heading5 text-color-black'>
                Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis.
            </div>
            <div className='container-OurStory__top-trens'>
                <p className='text-font-family_default text-heading2 text-color-black'>Top trends</p>
                <img src={IMG_ourstory_item1} />
                <div className='text-font-family_default text-heading5 text-color-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
                </div>
                <ul>
                    <li className='text-font-family_default text-heading5 text-color-black'>consectetur adipiscing elit. Aliquam placerat</li>
                    <li className='text-font-family_default text-heading5 text-color-black'>Lorem ipsum dolor sit amet consectetur </li>
                </ul>
            </div>
            <div className='container-OurStory__produce'>
                <p className='text-font-family_default text-heading2 text-color-black'>Top trends</p>
                <img src={IMG_ourstory_item1} />
                <div className='text-font-family_default text-heading5 text-color-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
                </div>
            </div>
        </div>
    )
}

export default OurStory