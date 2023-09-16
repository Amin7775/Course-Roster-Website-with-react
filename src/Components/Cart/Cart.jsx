

const Cart = () => {
    return (
        <div className="w-full border-2 bg-white h-auto p-4 m-1 rounded-lg">
            <div className="border-b-2 pb-4">
            <h1 className="text-base text-center font-bold text-[#2F80ED]">Credit Hour Remaining 7 hr</h1>
            </div>
            <div className="mt-4 mb-6 border-b-2">
                <h1 className="text-lg font-bold">Course Name</h1>
            </div>
            <div className="border-b-2 pb-4">
                <h1 className="text-[#1C1B1BCC] text-base font-medium">Total Credit Hour : 13 Hours</h1>
            </div>
            <div className="border-b-2 pb-4">
                <h1 className="text-[#1C1B1BCC] text-base font-semibold">Total Price : 48000 USD</h1>
            </div>

        </div>
    );
};

export default Cart;