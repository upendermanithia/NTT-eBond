import { default_view, List } from '@servicenow/sdk/core'
List({
    $id: Now.ID['lv09'],
    view: default_view,
    table: 'x_75746_ntt_ebond_u_ntt_ebonding_stage',
    columns: [
        'u_direction',
        'u_external_reference',
        'u_internal_reference',
        'u_payload',
    ],

})