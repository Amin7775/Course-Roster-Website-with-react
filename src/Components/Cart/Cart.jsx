import PropTypes from 'prop-types';

const Cart = ({cartList,creditHour,totalPrice,remaining}) => {
    return (
        <div className="w-full border-2 bg-white h-auto p-4 m-1 rounded-lg">
            <div className="border-b-2 pb-4">
            <h1 className="text-base text-center font-bold text-[#2F80ED]">Credit Hour Remaining {remaining} hr</h1>
            </div>
            <div className="mt-4 mb-6 pb-4 border-b-2">
                <h1 className="text-lg font-bold">Course Name</h1>
                {
                    cartList.map((cart,idx)=> <p key={idx} className="text-[#1C1B1B99] font-medium">{idx+1}. {cart.course_name}</p>)
                }
            </div>
            <div className="border-b-2 pb-4">
                <h1 className="text-[#1C1B1BCC] text-base font-medium">Total Credit Hour : {creditHour} Hours</h1>
            </div>
            <div className="border-b-2 pb-4">
                <h1 className="text-[#1C1B1BCC] text-base font-semibold">Total Price : {totalPrice} USD</h1>
            </div>

        </div>
    );
};
Cart.propTypes = {
    cartList:PropTypes.array,
    creditHour:PropTypes.number,
    totalPrice:PropTypes.number,
    remaining:PropTypes.number
}

export default Cart;