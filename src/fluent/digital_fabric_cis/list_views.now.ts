import { default_view, List } from '@servicenow/sdk/core'
List({
    $id: Now.ID['lv01'],
    view: default_view,
    table: 'x_75746_ntt_ebond_u_digital_fabric_cis',
    columns: ['u_name', 'u_manufacturer'],
})