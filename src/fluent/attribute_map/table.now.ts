import '@servicenow/sdk/global'
import {
    BooleanColumn,
    ReferenceColumn,
    StringColumn,
    Table,
    TableNameColumn,
    FieldNameColumn,
} from '@servicenow/sdk/core'

export const x_75746_ntt_ebond_u_ecase_field_attribute_map = Table({
    name: 'x_75746_ntt_ebond_u_ecase_field_attribute_map',
    label: 'eCase Field Attribute Maps',
    allow_web_service_access: true,
    allow_new_fields: true,
    allow_client_scripts: true,
    allow_ui_actions: true,
    extensible: false,
    schema: {
        u_source: FieldNameColumn({
            label: 'Source Attribute',
            maxLength: 80,
            dropdown: 'dropdown_with_none',
            mandatory: true,
            dependent_on_field: 'u_applies_to_table',
            dynamic_value_definitions: {
                type: 'dependent_field',
                column_name: 'u_applies_to_table',
            },
        }),
        u_rule: ReferenceColumn({
            label: 'Rule',
            attributes: {
                encode_utf8: false,
            },
            mandatory: true,
            read_only: true,
            maxLength: 32,
            referenceTable: 'x_75746_ntt_ebond_u_ecase_configuration',
        }),
        u_applies_to_table: TableNameColumn({
            label: 'Applies to table',
            attributes: {
                base_start: true,
                edge_encryption_enabled: true,
            },
            maxLength: 80,
        }),
        u_api_attribute: StringColumn({
            label: 'Target Attribute',
            maxLength: 40,
            mandatory: true,
        }),
        u_active: BooleanColumn({
            label: 'Active',
            active: true,
            mandatory: false,
            read_only: false,
            default: 'true',
            attributes: {},
        }),
    },
    index: [{ name: 'index', element: ['u_rule'], unique: false }],
})
