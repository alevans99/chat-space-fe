import Vue from 'vue'
import VueRouter from 'vue-router'
import MenuPage from '../components/Pages/Menu/MenuPage.vue'
Vue.use(VueRouter)
const routes = [{ path: '/', component: MenuPage }]
const router = new VueRouter({ routes })
export default router
