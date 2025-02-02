import { Routes, Route, Navigate } from 'react-router-dom';

//-------- importamos las vistas -------- 
import Chef from '../pages/chef';
import Waiter from '../pages/waiter';
import Admin from '../pages/admin';
import OrderReady from '../componentsWaiter/ListOrderReady';
import Order from '../componentsWaiter/Order';
import OrdersDelivered from '../componentsWaiter/OrdersDelivered';


// ROUTER
export const RouterByRoles = () => {
    
    const activeUser = JSON.parse(sessionStorage.getItem('user'));
    return (
        <>
            <Routes>
                {
                    activeUser.user.roles.admin ? (
                        <Route path='/admin' element={<Admin />} />
                    ) : null
                }
                {
                    activeUser.user.roles.waiter ? (
                        <Route path='/waiter' element={<Waiter  />}>
                            <Route index element={<Order/>}></Route>
                            <Route path='/waiter/ready' element={<OrderReady/>}></Route>
                            <Route path='/waiter/order' element={<Order/>}></Route>
                            <Route path='/waiter/delivered' element={<OrdersDelivered/>}></Route>
                        </Route> 
                    ) : null
                }
                {
                    activeUser.user.roles.chef ? (
                        <Route path='/chef' element={<Chef />}/>
                    ) : null
                }
                <Route path='*' element={<Navigate replace to={"/"} />}></Route>
            </Routes>
        </>
    );
};