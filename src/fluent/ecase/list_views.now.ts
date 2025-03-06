import { default_view, List } from '@servicenow/sdk/core'
List({
    $id: Now.ID['lv05'],
    view: default_view,
    table: 'x_75746_ntt_ebond_u_ntt_ecase',
    columns: [
        'u_affected_ci',
        'u_case_number',
        'u_catalog_item',
        'u_description',
        'u_short_description',
        'u_state',
        'u_work_log',
    ],
})