import React from 'react'
import { Body, Cell, Header, HeaderCell, HeaderRow, Row, Table } from '@table-library/react-table-library';
import { ODERS_TABLE_PANEL } from '../../constants/common';
import AppButton from '../Appbutton';
import { Link } from 'react-router-dom';
import { PATHNAME_LIST } from '../../router/router';
import "./style.css"

const CustomTable = ({ isDownloadButton = false }) => {

    const { HEADER, BODY } = ODERS_TABLE_PANEL
    const data = { nodes: [HEADER, BODY] };

    return <Table data={data}>{
        (tableList) => {
            const [HEADER, BODY] = tableList

            return (
                <>
                    <Header className='CustomTable-header'>
                        <HeaderRow>
                            {
                                HEADER.map((title) => {
                                    return <HeaderCell className='text-font-family_default text-heading5 text-color-black'>{title}</HeaderCell>
                                })
                            }
                        </HeaderRow>
                    </Header>
                    <Body className='CustomTable-body'>
                        {
                            BODY.map((item) => (
                                <Row className='CustomTable-body__row' key={item.id} item={item}>
                                    <Cell className='text-font-family_default text-heading5 text-color-dark-gray'>{item.id}</Cell>
                                    <Cell className='text-font-family_default text-heading5 text-color-dark-gray'>{item.name}</Cell>
                                    <Cell className='text-font-family_default text-heading5 text-color-dark-gray'>
                                        {item.deadline.toLocaleDateString(
                                            'en-US',
                                            {
                                                year: 'numeric',
                                                month: '2-digit',
                                                day: '2-digit',
                                            }
                                        )}
                                    </Cell>
                                    <Cell className='text-font-family_default text-heading5 text-color-dark-gray'>{item.type}</Cell>
                                    <Cell className='text-font-family_default text-heading5 text-color-dark-gray'>
                                        <div className='CustomTable-body__row__action'>
                                            <Link to={PATHNAME_LIST.ORDER_DETAIL} className='text-font-family_default text-body-large text-color-accent'>
                                                View Order
                                            </Link>
                                            {
                                                isDownloadButton ? <AppButton className='text-font-family_default text-body-large text-color-accent'>
                                                    Download
                                                </AppButton> : <></>
                                            }
                                        </div>
                                    </Cell>
                                </Row>
                            ))
                        }
                    </Body>
                </>
            )
        }

    }</Table>;
}

export default CustomTable