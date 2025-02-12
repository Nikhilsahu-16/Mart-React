import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { source: "https://tse4.mm.bing.net/th?id=OIP.6b_BciyVJSM1SPhCFADXBwHaE8&pid=Api&P=0&h=180", name: "Veg Pizza", para: "A delicious vegetarian pizza with fresh toppings.", price: 250 },
            { source: "https://tse2.mm.bing.net/th?id=OIP.h2N28xbviNPp8j7-ETAZcQHaE8&pid=Api&P=0&h=180", name: "Chicken Wings", para: "Crispy and flavorful chicken wings served with sauce.", price: 300 },
            { source: "https://tse2.mm.bing.net/th?id=OIP._QdjPTQbUpXN0mdW4MvXkwHaE8&pid=Api&P=0&h=180", name: "Spaghetti Pasta", para: "Delicious spaghetti served with a rich sauce.", price: 150 },
            { source: "https://tse2.mm.bing.net/th?id=OIP.wSMH81P0r1d2xFagucH5cAHaE7&pid=Api&P=0&h=180", name: "Cheeseburger", para: "A classic cheeseburger with fresh veggies and cheese.", price: 110 },
        ],
        nonVeg: [
            { source: "https://tse1.mm.bing.net/th?id=OIP.B_DXQHqRUfhm60iGmXTLUwHaE8&pid=Api&P=0&h=180", name: "Chicken", para: "A delicious Chicken with fresh toppings.", price: 430 },
            { source: "https://tse3.mm.bing.net/th?id=OIP.lEzRybhAQtUHeNyzYCLxVgHaE8&pid=Api&P=0&h=180", name: "Mutton", para: "Crispy and flavorful Mutton served with sauce.", price: 300 },
            { source: "https://tse4.mm.bing.net/th?id=OIP.B77swl8SF_XoOvh5OwyBOQHaEK&pid=Api&P=0&h=180", name: "Fish", para: "Delicious Fish served with a rich marinara sauce.", price: 190 },
            { source: "https://tse4.mm.bing.net/th?id=OIP.V9eo018VsxGdWtrZ1dUuJgHaE8&pid=Api&P=0&h=180", name: "Prawns", para: "A classic Prwan with fresh veggies and cheese.", price: 200 },

        ],
        dessert: [
            { source: "https://up.yimg.com/ib/th?id=OIP.q-0VwJ7Mu-NZHxUfLjs3FwHaE1&pid=Api&rs=1&c=1&qlt=95&w=190&h=124", name: "Apple Pie", para: "A delicious Apple Pie with fresh toppings.", price: 70 },
            { source: "https://i.ndtvimg.com/i/2015-09/almond-kulfi-625_625x350_61443596643.jpg", name: "Almond Malai Kulfi", para: "Crispy and flavorful Almond Malai Kulfi.", price: 300 },
            { source: "https://i.ndtvimg.com/i/2015-09/lemon-tart-625_625x350_61443595187.jpg", name: " Lemon Tart", para: "Delicious  Lemon Tart.", price: 190 },
            { source: "https://i.ndtvimg.com/i/2015-09/pistachio-phirni-625_625x350_81443596823.jpg", name: "Pistachio Phirni", para: "A classic Pistachio Phirni with fresh Icecream and cheeries.", price: 200 },
        ],
        featured: [
            { source: "https://tse4.mm.bing.net/th?id=OIP.6b_BciyVJSM1SPhCFADXBwHaE8&pid=Api&P=0&h=180", name: "Veg Pizza", para: "A delicious vegetarian pizza with fresh toppings.", price: 250 },
            { source: "https://tse2.mm.bing.net/th?id=OIP.wSMH81P0r1d2xFagucH5cAHaE7&pid=Api&P=0&h=180", name: "Cheese Burger", para: "A classic cheeseburger with fresh veggies and cheese.", price: 110 },
            { source: "https://tse2.mm.bing.net/th?id=OIP._QdjPTQbUpXN0mdW4MvXkwHaE8&pid=Api&P=0&h=180", name: "Spaghetti Pasta", para: "Delicious spaghetti served with a rich sauce.", price: 150 }
        ],
        view: [
            { source: "https://tse4.mm.bing.net/th?id=OIP.6b_BciyVJSM1SPhCFADXBwHaE8&pid=Api&P=0&h=180", name: "Vegetarian", link: "veg-items" },
            { source: "https://tse2.mm.bing.net/th?id=OIP.wSMH81P0r1d2xFagucH5cAHaE7&pid=Api&P=0&h=180", name: "Non-Vegetarian", link: "non-veg-items" },
            { source: "https://tse2.mm.bing.net/th?id=OIP._QdjPTQbUpXN0mdW4MvXkwHaE8&pid=Api&P=0&h=180", name: "Desserts", link: "dessert" }
        ]
    },
    reducers: {}
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) =>
        {
            const item = state.find(item => item.name === action.payload.name);
            if (item)
            {
                item.quantity += 1;
            } else
            {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        increment: (state, action) =>
        {
            const item = state.find(item => item.name === action.payload.name);
            if (item)
            {
                item.quantity += 1;
            }
        },
        decrement: (state, action) =>
        {
            const item = state.find(item => item.name === action.payload.name);
            if (item && item.quantity > 1)
            {
                item.quantity -= 1;
            } else
            {
                return state.filter(item => item.name !== action.payload.name);
            }
        },
        remove: (state, action) =>
        {
            return state.filter(item => item.name !== action.payload.name);

        },
        clearCart: () => []
    }
})
const orderSlice = createSlice({
    name: 'order',
    initialState: [],
    reducers: {
        completePurchase: (state, action) =>
        {
            state.push(action.payload);
        }
    }
})
let authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: localStorage.getItem("username") ? true : false,
        user: localStorage.getItem("username") || "",
    },
    reducers: {
        login: (state, action) =>
        {
            state.isAuthenticated = true;
            state.user = action.payload;
            localStorage.setItem("username", action.payload);
        },
        logout: (state) =>
        {
            state.isAuthenticated = false;
            state.user = "";
            localStorage.removeItem("username");
        }
    }
})
const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        order: orderSlice.reducer,
        auth: authSlice.reducer
    }
})
export const { addToCart, increment, decrement, remove, clearCart } = cartSlice.actions;
export const { completePurchase } = orderSlice.actions;
export const { login, logout } = authSlice.actions;
export default store;