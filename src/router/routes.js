export default [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/components/Home.vue'),
        children: [
            {
                path: '/about',
                name: 'About',
                component: () => import(/* webpackChunkName: "about" */ '@/components/About.vue')
            },
            {
                path: '/contact',
                name: 'Contact',
                component: () => import(/* webpackChunkName: "contact" */ '@/components/Contact.vue')
            }
        ]
    }
]