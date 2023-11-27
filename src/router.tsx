import {Suspense, lazy} from 'react';
import {Navigate} from 'react-router-dom';
import {RouteObject} from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
    (
        <Suspense fallback={<SuspenseLoader/>}>

                    <Component {...props} />


        </Suspense>
    );


const LoginPage = Loader(lazy(() => import('src/content/login')));

const MasterItemAdd = Loader(lazy(() => import('src/content/masteritem/masteritemadd')));
const MasterItemHome = Loader(lazy(() => import('src/content/masteritem/masteritemhome')));

const MasterItemColorAdd = Loader(lazy(() => import('src/content/masteritemcolor/masteritemcoloradd')));
const MasterItemColorHome = Loader(lazy(() => import('src/content/masteritemcolor/masteritemcolorhome')));

const MasterItemGroupAdd = Loader(lazy(() => import('src/content/masteritemgroup/masteritemgroupadd')));
const MasterItemGroupHome = Loader(lazy(() => import('src/content/masteritemgroup/masteritemgrouphome')));

const MasterItemVendorAdd = Loader(lazy(() => import('src/content/masteritemvendor/masteritemvendoradd')));
const MasterItemVendorHome = Loader(lazy(() => import('src/content/masteritemvendor/masteritemvendorhome')));



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
                element: <Navigate to="masteritem" replace/>
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
                element: <Navigate to="masteritemcolor" replace/>
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
                element: <Navigate to="masteritemgroup" replace/>
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
                element: <Navigate to="masteritemvendor" replace/>
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
