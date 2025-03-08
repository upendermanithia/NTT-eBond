import { ApplicationMenu, Record } from '@servicenow/sdk/core'

export const AppMenu = ApplicationMenu({
    $id: Now.ID['am01'],
    category: 'e0355b31ef303000a61d5a3615c0fb78',
    title: 'NTT eBond',
    active: true,
    order: 100,
})
Record({
    $id: Now.ID['mo01'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: AppMenu.$id,
        link_type: 'LIST',
        mobile_title: 'eBond Configuration',
        mobile_view_name: 'Mobile',
        name: 'x_75746_ntt_ebond_u_ecase_configuration',
        override_menu_roles: false,
        require_confirmation: true,
        sys_domain: 'global',
        sys_domain_path: '/',
        sys_name: 'eBond Configuration',
        title: 'eBond Configuration',
        uncancelable: false,
    },
})
Record({
    $id: Now.ID['mo02'],
    table: 'sys_app_module',
    data: {
        active: true,
        application: AppMenu.$id,
        link_type: 'NEW',
        mobile_title: 'eBond Configuration',
        mobile_view_name: 'Mobile',
        name: 'x_75746_ntt_ebond_u_ecase_configuration',
        override_menu_roles: false,
        require_confirmation: true,
        sys_domain: 'global',
        sys_domain_path: '/',
        sys_name: 'New eBond Configuration',
        title: 'New eBond Configuration',
        uncancelable: false,
    },
})
