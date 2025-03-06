import { default_view, List } from '@servicenow/sdk/core'
List({
    $id: Now.ID['lv01'],
    view: default_view,
    table: 'x_75746_ntt_ebond_u_digital_fabric_cis',
    columns: ['u_name', 'u_manufacturer'],
})
List({
    $id: Now.ID['lv02'],
    view: default_view,
    table: 'x_75746_ntt_ebond_u_ecase_configuration',
    columns: ['u_action', 'u_active', 'u_applies_to_table', 'u_condition', 'u_direction', 'u_template'],
})
List({
    $id: Now.ID['lv03'],
    view: 'sys_ref_list' as any /*Generated*/,
    table: 'x_75746_ntt_ebond_u_ecase_configuration',
    columns: ['sys_id'],
})
List({
    $id: Now.ID['lv04'],
    view: default_view,
    table: 'x_75746_ntt_ebond_u_ecase_field_attribute_map',
    columns: ['u_rule', 'u_active', 'u_source', 'u_api_attribute', 'u_target'],
})
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
