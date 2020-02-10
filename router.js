import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import { API_URL } from "~/config/";
const PROXY = process.env.API_URL || API_URL
Vue.use(Router)

const Home = () => import('~/pages/index').then(m => m.default || m)
const Slug = () => import('~/pages/_slug').then(m => m.default || m)
const Oauth = () => import('~/pages/oauth/success').then(m => m.default || m)
const Wishlist = () => import('~/pages/wishlist').then(m => m.default || m)
const ApplyForVendor = () => import('~/pages/apply-for-vendor').then(m => m.default || m)
const Terms = () => import('~/pages/terms').then(m => m.default || m)
const Privacy = () => import('~/pages/privacy-policy').then(m => m.default || m)
const About = () => import('~/pages/about-us').then(m => m.default || m)
const OrderSuccess = () => import('~/pages/order-success').then(m => m.default || m)
const Cart = () => import('~/pages/cart').then(m => m.default || m)
const Checkout = () => import('~/pages/checkout/index').then(m => m.default || m)
const Payments = () => import('~/pages/checkout/payments').then(m => m.default || m)
const CAddress = () => import('~/pages/checkout/address').then(m => m.default || m)
const List = () => import('~/pages/checkout/list').then(m => m.default || m)
const Add = () => import('~/pages/checkout/add').then(m => m.default || m)
const Bag = () => import('~/pages/checkout/bag').then(m => m.default || m)
const PaymentMobile = () => import('~/pages/checkout/payment-mobile').then(m => m.default || m)
// const changeShippingAddress = () => import('~/pages/checkout/changeShippingAddress/index').then(m => m.default || m)
// const addShippingAddress = () => import('~/pages/checkout/changeShippingAddress/add').then(m => m.default || m)
const Login = () => import('~/pages/account/login').then(m => m.default || m)
const Signup = () => import('~/pages/account/signup').then(m => m.default || m)
const ForgotPassword = () => import('~/pages/account/forgot-password').then(m => m.default || m)
const ResetPassword = () => import('~/pages/account/reset-password/_token').then(m => m.default || m)
const VerifyToken = () => import('~/pages/account/verify/_token').then(m => m.default || m)
const MyOrders = () => import('~/pages/my/orders/index').then(m => m.default || m)
const MyOrderDetails = () => import('~/pages/my/orders/_id').then(m => m.default || m)
// const MyDisputes = () => import('~/pages/my/disputes/index').then(m => m.default || m)
// const MyDisputesDetails = () => import('~/pages/my/disputes/_id').then(m => m.default || m)
// const MyDisputeSingle = () => import('~/pages/my/disputes/detail').then(m => m.default || m)
const Account = () => import('~/pages/my/account').then(m => m.default || m)
const Profile = () => import('~/pages/my/profile').then(m => m.default || m)
const Address = () => import('~/pages/my/address').then(m => m.default || m)
const My = () => import('~/pages/my').then(m => m.default || m)
const ChangePassword = () => import('~/pages/my/change-password').then(m => m.default || m)
const Pages = () => import('~/pages/page/slug').then(m => m.default || m)
const DynamicPages = () => import('~/pages/page/dynamic').then(m => m.default || m)
// const Landing = () => import('~/pages/landing/slug').then(m => m.default || m)
const Categories = () => import('~/pages/c').then(m => m.default || m)
// const CategoryDetails = () => import('~/pages/c/_c').then(m => m.default || m)
const Search = () => import('~/pages/search').then(m => m.default || m)
// const SearchDetails = () => import('~/pages/search').then(m => m.default || m)
// const Brand = () => import('~/pages/b').then(m => m.default || m)
// const BrandDetails = () => import('~/pages/b/_c').then(m => m.default || m)
// const Vendor = () => import('~/pages/v').then(m => m.default || m)
// const VendorDetails = () => import('~/pages/v/_c').then(m => m.default || m)
const Contact = () => import('~/pages/contact-us').then(m => m.default || m)
const Test = () => import('~/pages/test').then(m => m.default || m)
// const Review = () => import('~/pages/review/_id').then(m => m.default || m)
const Help = () => import('~/pages/helpcenter/index').then(m => m.default || m)
const HelpSlug = () => import('~/pages/helpcenter/_id').then(m => m.default || m)
export async function createRouter() {
    let routes = []
    routes.push({ path: '/', component: Home })
    routes.push({ path: '/oauth/success', component: Oauth })
    routes.push({ path: '/order-success', component: OrderSuccess })
    routes.push({ path: '/wishlist', component: Wishlist })
    routes.push({ path: '/apply-for-vendor', component: ApplyForVendor })
    routes.push({ path: '/about-us', component: About })
    routes.push({ path: '/terms', component: Terms })
    routes.push({ path: '/privacy-policy', component: Privacy })
    routes.push({ path: '/cart', component: Cart })
    routes.push({ path: '/checkout', component: Checkout })
    // routes.push({ path: '/checkout/changeShippingAddress', component: changeShippingAddress })
    // routes.push({ path: '/checkout/changeShippingAddress/add', component: addShippingAddress })
    routes.push({ path: '/checkout/address', component: CAddress })
    routes.push({ path: '/checkout/list', component: List })
    routes.push({ path: '/checkout/add', component: Add })
    routes.push({ path: '/checkout/bag', component: Bag })
    routes.push({ path: '/checkout/payments', component: Payments })
    routes.push({ path: '/checkout/payment-mobile', component: PaymentMobile })
    routes.push({ path: '/account/login', component: Login })
    routes.push({ path: '/account/signup', component: Signup })
    routes.push({ path: '/account/forgot-password', component: ForgotPassword })
    routes.push({ path: '/account/reset-password/:token', component: ResetPassword })
    routes.push({ path: '/account/verify/:token', component: VerifyToken })
    routes.push({ path: '/my/orders', component: MyOrders })
    // routes.push({ path: '/my/disputes', component: MyDisputes })
    // routes.push({ path: '/my/disputes/detail/:detail_id', component: MyDisputeSingle })
    // routes.push({ path: '/my/disputes/:order_id', component: MyDisputesDetails })
    routes.push({ path: '/my/orders/:id', component: MyOrderDetails })
    routes.push({ path: '/my/account', component: Account })
    routes.push({ path: '/my/address', component: Address })
    routes.push({ path: '/my/change-password', component: ChangePassword })
    routes.push({ path: '/my/profile', component: Profile })
    routes.push({ path: '/my', component: My })
    // routes.push({ path: '/pgw/easypaisa', component: EasyPaisa })
    // routes.push({ path: '/men', component: Landing })
    // routes.push({ path: '/women', component: Landing })
    // routes.push({ path: '/kids', component: Landing })
    // routes.push({ path: '/home-living', component: Landing })
    routes.push({ path: '/test', component: Test })
    routes.push({ path: '/contact-us', component: Contact })
    // routes.push({ path: '/review/:id', component: Review })
    routes.push({ path: '/help-center', component: Help })
    routes.push({ path: '/help-center/:id', component: HelpSlug })
    routes.push({
        path: '/search',
        component: Search,
        children: [{
            path: ':q?',
            component: Search
        }]
    })
    // routes.push({
    //     path: '/b',
    //     component: Brand,
    //     children: [{
    //         path: ':c?',
    //         component: BrandDetails
    //     }]
    // })
    // routes.push({
    //     path: '/v',
    //     component: Vendor,
    //     children: [{
    //         path: ':c?',
    //         component: VendorDetails
    //     }]
    // })
    try {
        let router = await axios.get(PROXY + '/api/pages/router')
        for (let p of router.data.pages) {
            if (p.page_type == 'dynamic') {
                routes.push({ path: '/' + p.slug, component: DynamicPages })
            } else {
                routes.push({ path: '/' + p.slug, component: Pages })
            }
        }
        for (let c of router.data.categories) {
            routes.push({
                path: '/' + c.slug, component: Categories,
                //     children: [{
                //         path: ':c?',
                //         component: CategoryDetails
                // }]
            })
        };
    } catch (e) {
    }
    routes.push({ path: '/:slug', component: Slug })
    return new Router({
        mode: 'history',
        routes
    })
}
