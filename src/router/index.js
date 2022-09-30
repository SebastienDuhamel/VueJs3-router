// ce fichier index.js et son dossier son a créer aprés avoir fait npm install vue-router@next dans le terminal

import { createRouter, createWebHistory} from "vue-router";
import HomeView from '@/views/HomeView.vue';
import NextView from '@/views/NextView';
import ProductView from '@/views/ProductView';
import NotFoundView from '@/views/NotFoundView'


//on cree un tableau de route

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta:{
            title:'Accueil'
        }
    },
    {
        path: '/next',
        name: 'Next,',
        component: NextView,
        meta:{
            title:'Next'
        }
    },
    {
        path: '/product/:designation', //le symbole : sert à dire qu'on attend un parametre ayant le nom name
        name: 'Product', //c'est le nom utilisé dans <router-link
        component: ProductView,
        props: true, //obligatoire si on veut passer des paramatres
        meta:{
            title:'Produit'
        }
    },
    {
        path: '/:patMatch(.*)',//regex pour dire qu'on peut tout les paths qui ne sont pas connus
        name: 'NotFound',
        component: NotFoundView,
        meta:{
            title:'404 not found'
        }
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

//definition des noms de pages dans navigateur
router.afterEach((to, from) => {
    console.log(from, to);
    document.title = to.meta.title;
});

export default router;