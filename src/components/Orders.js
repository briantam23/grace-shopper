import React, {Fragment, Component} from 'react'
import { connect } from 'react-redux'
import { fetchOrders } from '../store/ordersReducer.js'
import { findOrders } from '../util';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Orders extends Component {
    render() {
        const { orders } = this.props;
        return (
            <Fragment>
                <div>
                    <h3>Your Orders</h3>
                    <span>Here you will find all the things that you have ordered from Wacko Dreamer</span>
                </div>
                <br />
            {
                orders.map(ord => (
                    <ListGroup key={ord.id}>
                        <Fragment>ORDER ID: {ord.id}</Fragment><br/>
                        <Fragment>Shipping Address: {ord.shippingAddress}</Fragment><br/>
                    {   
                        ord.line_items.map(lineItem => (
                            <ListGroupItem key={lineItem.id}>
                                <Fragment>ProductId: {lineItem.productId} Quantity: {lineItem.quantity} Price: ${lineItem.price}</Fragment>
                            </ListGroupItem>
                        ))
                    }
                        <Fragment>Total: ${ord.total}</Fragment><br/>
                    </ListGroup>
                ))
            }
            </Fragment>
        )
    }
}

const mapStateToProps = ({ auth, orders }) => {
    orders = findOrders(auth, orders, 'COMPLETED')
    return { orders }
}

export default connect(mapStateToProps)(Orders)