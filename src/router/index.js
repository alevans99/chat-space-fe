import Vue from 'vue'
import VueRouter from 'vue-router'
import MenuPage from '../components/pages/menu/MenuPage.vue'
import ChatPage from '../components/pages/chat/ChatPage.vue'
Vue.use(VueRouter)
const routes = [{ path: '/', component: MenuPage }, { path: '/chat', component: ChatPage }]
const router = new VueRouter({ routes, mode: 'history' })
export default router
