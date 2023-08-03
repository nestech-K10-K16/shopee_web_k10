import React from 'react'
import CustomTable from '../CustomTable'
import "./style.css"

const DownloadsPanel = () => {
    return (
        <div id='container-DownloadsPanel'>
            <CustomTable isDownloadButton={true} />
            <div className='padding'></div>
        </div>
    )
}

export default DownloadsPanel