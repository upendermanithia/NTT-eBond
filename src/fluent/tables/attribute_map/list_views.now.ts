import { default_view, List } from '@servicenow/sdk/core'
List({
    $id: Now.ID['lv04'],
    view: default_view,
    table: 'x_75746_ntt_ebond_u_ecase_field_attribute_map',
    columns: ['u_rule', 'u_active', 'u_source', 'u_api_attribute'],
})
