import Inventory from '../components/view/inventory'
import ItemDetails from '../components/view/ItemDetails'

export const routes = [
    {
        path:'',
        component:Inventory
    },

    {
        path:'/item/:id',
        component:ItemDetails
    }

]