import {Suspense, lazy} from 'react';
import {Navigate} from 'react-router-dom';
import {RouteObject} from 'react-router';
import BaseLayout from "./layouts/BaseLayout";
import SidebarLayout from "./layouts/SidebarLayout";



const Loader = (Component:any) => (props:any) =>
    (
        <Suspense >

                    <Component {...props} />


        </Suspense>
    );


const LoginPage = Loader(lazy(() => import('./content/login')));

const MasterItemAdd = Loader(lazy(() => import('./content/masteritem/masteritemadd')));
const MasterItemHome = Loader(lazy(() => import('./content/masteritem/masteritemhome')));
const MasterItem = Loader(lazy(() => import('./content/masteritem')));

const MasterItemColorAdd = Loader(lazy(() => import('./content/masteritemcolor/masteritemcoloradd')));
const MasterItemColorHome = Loader(lazy(() => import('./content/masteritemcolor/masteritemcolorhome')));
const MasterItemColor = Loader(lazy(() => import('./content/masteritemcolor')));

const MasterItemGroupAdd = Loader(lazy(() => import('./content/masteritemgroup/masteritemgroupadd')));
const MasterItemGroupHome = Loader(lazy(() => import('./content/masteritemgroup/masteritemgrouphome')));
const MasterItemGroup = Loader(lazy(() => import('./content/masteritemgroup')));

const MasterItemVendorAdd = Loader(lazy(() => import('./content/masteritemvendor/masteritemvendoradd')));
const MasterItemVendorHome = Loader(lazy(() => import('./content/masteritemvendor/masteritemvendorhome')));
const MasterItemVendor = Loader(lazy(() => import('./content/masteritemvendor')));



const routes: RouteObject[] = [
    {
        path: '',
        element: <BaseLayout/>,
        children: [
            {
                path: '/',
                element: <LoginPage/>
            },
            {
                path: 'login',
                element: <LoginPage to="/" replace/>
            },

        ]
    },
    {
        path: 'masteritem',
        element: <SidebarLayout/>,
        children: [
            {
                path: '',
                element: <MasterItem />
            },
            {
                path: 'masteritemadd',
                element: <MasterItemAdd/>
            },
            {
                path: 'masteritemhome',
                element: <MasterItemHome/>
            }
        ]
    },
    {
        path: 'masteritemcolor',
        element: <SidebarLayout/>,
        children: [
            {
                path: '',
                element: <MasterItemColor/>
            },
            {
                path: 'masteritemcoloradd',
                element: <MasterItemColorAdd/>
            },
            {
                path: 'masteritemcolorhome',
                element: <MasterItemColorHome/>
            }
        ]
    },
    {
        path: 'masteritemgroup',
        element: <SidebarLayout/>,
        children: [
            {
                path: '',
                element: <MasterItemGroup/>
            },
            {
                path: 'masteritemgroupadd',
                element: <MasterItemGroupAdd/>
            },
            {
                path: 'masteritemgrouphome',
                element: <MasterItemGroupHome/>
            }
        ]
    },
    {
        path: 'masteritemvendor',
        element: <SidebarLayout/>,
        children: [
            {
                path: '',
                element: <MasterItemVendor/>
            },
            {
                path: 'masteritemvendoradd',
                element: <MasterItemVendorAdd/>
            },
            {
                path: 'masteritemvendorhome',
                element: <MasterItemVendorHome/>
            }
        ]
    },
];

export default routes;
