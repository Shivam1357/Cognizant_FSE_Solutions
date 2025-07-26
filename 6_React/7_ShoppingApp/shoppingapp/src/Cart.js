import React, { Component } from 'react'

export default class Cart extends Component {
  render() {


    return (
      <div>
        <table border={2} style={{borderColor:'green', padding:5, textAlign:'center'}}>
            <tr>
                <th>Name:</th>
                <th>Price:</th>
            </tr>
            {this.props.item.map((it) => 
                {
                    return (
                        <tr>
                            <td> {it.itemname} </td>
                            <td> {it.price} </td>
                        </tr>
                    )
                }
            )}
        </table>
      </div>
    )
  }
}
