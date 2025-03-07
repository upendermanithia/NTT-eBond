import { default_view, List } from '@servicenow/sdk/core'

List({
    $id: Now.ID['lv02'],
    view: default_view,
    table: 'x_75746_ntt_ebond_u_ecase_configuration',
    columns: [
        'u_action',
        'u_applies_to_table',
        'u_condition',
        'u_message_type',
        'u_direction',
        'u_template',
        'u_rest_message',
        'u_soap_message',
        'u_active',
    ],
})
List({
    $id: Now.ID['lv03'],
    view: 'sys_ref_list' as any /*Generated*/,
    table: 'x_75746_ntt_ebond_u_ecase_configuration',
    columns: ['sys_id'],
})
