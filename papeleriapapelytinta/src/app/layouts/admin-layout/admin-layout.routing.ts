import { EditarAdminComponent } from './../../vistasadmin/admin/editar-admin/editar-admin.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';

import { NotificationsComponent } from '../../notifications/notifications.component';


import { ClientesComponent } from '../../vistasadmin/clientes/clientes.component';
import { VentasComponent } from '../../vistasadmin/ventas/ventas.component';
import { ProductosComponent } from '../../vistasadmin/productos/productos.component';
import { ProveedoresComponent } from '../../vistasadmin/proveedores/proveedores.component';
import { AdminComponent } from '../../vistasadmin/admin/admin.component';
import { CategoriasComponent } from '../../vistasadmin/categorias/categorias.component';
import { InventarioComponent } from '../../vistasadmin/inventario/inventario.component';




export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'admin', component: AdminComponent},
    {path: 'proveedores',component: ProveedoresComponent},
    {path: 'productos',component: ProductosComponent},
    {path: 'ventas',component: VentasComponent},
    {path: 'inventario', component: InventarioComponent},
    {path: 'clientes',component: ClientesComponent},
    {path: 'categorias',component: CategoriasComponent},
    {path: 'editaradmin/:id', component: EditarAdminComponent}

]