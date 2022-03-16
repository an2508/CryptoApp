import React from "react"
import { ReactDOM } from "react"
import './Table.css';
// import { useDispatch, useSelector } from 'react-redux'; //av
// import getCurrencies from '../../redux/action/actions'  //av

const Table = ({ currencies }) => {
    // const dispatch = useDispatch();
    // dispatch(getCurrencies())
    // console.log(currencies, 'currencies')
    return (
        <div className="table-container">
            <table className="table" >
                <thead className="table__head">
                    <tr key={1}>
                        <th>Market</th>
                        <th>Coin</th>
                        <th>Last Price</th>
                        <th>Chart</th>
                        <th>24h change(low)</th>
                        <th>24h change(high)</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    {currencies?.map((currency, index) => {
                        if (index < 8) {
                            return <tr key={index} >
                                <td className="first">
                                    {currency.symbol.toUpperCase()}
                                </td>
                                <td>
                                    {currency.name}
                                </td>
                                <td>
                                    {currency.current_price}USD
                                </td>
                                <td>
                                    {currency.price_change_percentage_24h}
                                </td>
                                <td>{currency.low_24h}</td>
                                <td>{currency.high_24h}</td>
                            </tr>
                        };
                        return <></>
                    })

                    }

                </tbody>
            </table>
        </div>
    )
}
export default Table