import axios from 'axios'


//constants
const GOT_ORDERS = 'GOT ORDERS'
const UPDATED_ORDER = 'UPDATED_ORDER'
const CREATED_LINEITEM = 'CREATED_LINEITEM'
const UPDATED_LINEITEM = 'UPDATED_LINEITEM'
const DELETED_LINEITEM = 'DELETED_LINEITEM'

//action creators

const gotOrders = (orders) => ({
    type: GOT_ORDERS,
    orders
})

const updatedOrder = (order) => ({
    type: UPDATED_ORDER,
    order
})

const createdLineItem = (orderId, lineItem) => ({
    type: CREATED_LINEITEM,
    orderId,
    lineItem
})

const updatedLineItem = (orderId, lineItem) => ({
    type: UPDATED_LINEITEM,
    orderId,
    lineItem
})

const deletedLineItem  = (orderId, lineItem) => ({
    type: DELETED__LINEITEM,
    orderId,
    lineItem
})

//thunks
// 1. fetch orders
// 2. update order
// 3. create line item
// 4. update line item
// 5. delete line item


export const fetchOrders = (order, isGuest, status, history) => {
    let userId = 'null';
    if(order) userId = order.customerId;
    return (dispatch) => (
        axios.get(`api/orders/users/${userId}/${isGuest}`)
            .then(res => {
                if(status === 'CREATED') history.push(`/user/${ order.customerId }/checkout`);
                if(status === 'COMPLETED') history.push(`/user/${ order.customerId }/orders/${ order.id }`);
                dispatch(gotOrders(res.data))
            })
    )
}

export const updateOrder = (order, auth, history) => {
    console.log('thunk: ', order)
    let userId = null;
    return (dispatch) => (
        axios.put(`/api/users/${userId}/orders/${order.id}`, order)
            .then(order => {
                history.push(`/user/${auth.id}/orders`);
                dispatch(updatedOrder(order.data));
            })
    )
}

export const createLineItem = (order, lineItem, product, quantity) => {
    let userId = null;
    if(!quantity) quantity = 1;
    product = { ...product, quantity };
    return (dispatch) => (
        axios.post(`/api/users/${userId}/orders/${order.id}/lineItems`, product)
            .then(() => dispatch(fetchOrders()))
            // .then(res => dispatch(createdLineItem(orderId,res.data)))
    )
}

export const updateLineItem = (order, lineItem, change, quantity) => {
    let userId;
    if(change === 'increment' && !quantity) change = 1;
    else if(change === 'decrement' && !quantity) change = - 1;
    else change = quantity;
    lineItem = { ...lineItem, quantity: lineItem.quantity + change };
    return (dispatch) => (
        axios.put(`api/users/${userId}/orders/${order.id}/lineItems/${lineItem.id}`, lineItem)
            .then(() => dispatch(fetchOrders()))
            // .then(res => dispatch(updatedLineItem(orderId,res.data)))
    )
}

export const deleteLineItem = (order, lineItem) => {
    let userId;
    return (dispatch) => (
        axios.delete(`api/users/${userId}/orders/${order.id}/lineItems/${lineItem.id}`)
            .then(() => dispatch(fetchOrders()))
            // .then(() => dispatch(deletedLineItem(orderId,lineItemId)))
    )
}


// reducer


const orderReducer = (state = [], action) => {
    switch(action.type){
        case GOT_ORDERS:
             return action.orders

        case UPDATED_ORDER:
            const filteredState = state.filter(order => order.id !== action.order.id)
            return [...filteredState, action.order]

        case CREATED_LINEITEM:
            let newState = state.map(order => {
                if(order.id == action.orderId){
                    order.lineItem.push(action.lineItem)
                }
                return order
            })
            return newState

        case UPDATED_LINEITEM:
            newState = state.map(order => {
                if(order.id == action.orderId){
                    order.lineItem.map(lineItem => {
                        if(lineItem.id === action.lineItem.id){
                            lineItem = action.lineItem
                        }
                        return lineItem
                    })
                }
                return order
            })
            return newState

        case DELETED_LINEITEM:
            newState = state.map(order => {
                if(order.id == action.orderId){
                    order.lineItem.filter(lineItem => lineItem.id !== action.lineItemId)
                }
                return order
            })
            return newState

        default:
            return state
    }
}



export default orderReducer

