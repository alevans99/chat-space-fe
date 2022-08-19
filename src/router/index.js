import Vue from 'vue'
import VueRouter from 'vue-router'
import MenuPage from '../components/pages/menu/MenuPage.vue'
import ChatPage from '../components/pages/chat/ChatPage.vue'
Vue.use(VueRouter)
const routes = [{ name: 'menu', path: '/', component: MenuPage }, { name: 'chat', path: '/chat/:room', component: ChatPage }]
const router = new VueRouter({ routes, mode: 'history' })
export default router
