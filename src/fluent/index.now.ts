import '@servicenow/sdk/global'
import {
    BooleanColumn,
    ChoiceColumn,
    ConditionsColumn,
    GenericColumn,
    ReferenceColumn,
    StringColumn,
    Table,
    TableNameColumn,
    FieldNameColumn,
    ClientScript,
} from '@servicenow/sdk/core'
import {} from '../server/script.js'

//creates a client script that pops up 'Table loaded successfully!!' message every time todo record is loaded
export const x_75746_ntt_ebond_u_digital_fabric_cis = Table({
    name: 'x_75746_ntt_ebond_u_digital_fabric_cis',
    label: 'Digital Fabric CIs',
    allow_client_scripts: true,
    allow_new_fields: true,
    allow_ui_actions: true,
    allow_web_service_access: true,
    schema: {
        u_name: StringColumn({
            label: 'Name',
            active: true,
            mandatory: false,
            read_only: false,
        }),
        u_manufacturer: StringColumn({
            label: 'Manufacturer',
            active: true,
            mandatory: false,
            read_only: false,
        }),
    },
})
export const x_75746_ntt_ebond_u_ntt_ecase = Table({
    name: 'x_75746_ntt_ebond_u_ntt_ecase',
    label: 'NTT eCase',
    allow_client_scripts: true,
    allow_new_fields: true,
    allow_ui_actions: true,
    allow_web_service_access: true,
    schema: {
        u_case_number: StringColumn({
            label: 'Case number',
            active: true,
            mandatory: false,
            read_only: true,
            use_dynamic_default: true,
            dynamic_default_value: 'fdcb83a85f220100a9ad2572f2b4773c',
            default: 'javascript:getNextObjNumberPadded();',
        }),
        u_state: ChoiceColumn({
            label: 'State',
            active: true,
            mandatory: false,
            read_only: false,
            maxLength: 40,
            dropdown: 'none',
            choices: {
                Unsubmitted: {
                    label: 'Unsubmitted',
                    sequence: 0,
                    inactive_on_update: false,
                },
                New: {
                    label: 'New',
                    sequence: 1,
                    inactive_on_update: false,
                },
                In_progress: {
                    label: 'In progress',
                    sequence: 2,
                    inactive_on_update: false,
                },
                Awaiting_info: {
                    label: 'Awaiting info',
                    sequence: 3,
                    inactive_on_update: false,
                },
                Closed: {
                    label: 'Closed',
                    sequence: 5,
                    inactive_on_update: false,
                },
                Resolved: {
                    label: 'Resolved',
                    sequence: 4,
                    inactive_on_update: false,
                },
                Cancelled: {
                    label: 'Cancelled',
                    sequence: 6,
                    inactive_on_update: false,
                },
            },
            default: 'Unsubmitted',
            attributes: {},
        }),
        u_short_description: StringColumn({
            label: 'Short description',
            active: true,
            mandatory: false,
            read_only: false,
            maxLength: 100,
        }),
        u_description: StringColumn({
            label: 'Description',
            active: true,
            mandatory: false,
            read_only: false,
            maxLength: 5000,
        }),
        u_affected_ci: ReferenceColumn({
            label: 'Affected CI',
            active: true,
            mandatory: false,
            read_only: false,
            referenceTable: 'x_75746_ntt_ebond_u_digital_fabric_cis',
            attributes: {
                edge_encryption_enabled: true,
                encode_utf8: false,
            },
            maxLength: 32,
        }),
        u_catalog_item: ReferenceColumn({
            label: 'Catalog item',
            active: true,
            mandatory: false,
            read_only: false,
            referenceTable: 'x_75746_ntt_ebond_u_digital_fabric_cis',
            attributes: {
                edge_encryption_enabled: true,
                encode_utf8: false,
            },
            maxLength: 32,
        }),
        u_work_log: GenericColumn({
            label: 'Work log',
            maxLength: 4000,
            column_type: 'journal',
        }),
    },
    index: [
        { name: 'index', element: ['u_affected_ci'], unique: false },
        { name: 'index2', element: ['u_catalog_item'], unique: false },
    ],
})
export const x_75746_ntt_ebond_u_ecase_configuration = Table({
    name: 'x_75746_ntt_ebond_u_ecase_configuration',
    label: 'eCase Configuration',
    allow_client_scripts: true,
    allow_new_fields: true,
    allow_ui_actions: true,
    allow_web_service_access: true,
    schema: {
        u_direction: ChoiceColumn({
            label: 'Direction',
            active: true,
            mandatory: false,
            read_only: false,
            maxLength: 40,
            dropdown: 'none',
            choices: {
                Inbound: {
                    label: 'Inbound',
                    sequence: 0,
                    inactive_on_update: false,
                },
                Outbound: {
                    label: 'Outbound',
                    sequence: 1,
                    inactive_on_update: false,
                },
            },
            attributes: {
                edge_encryption_enabled: true,
            },
        }),
        u_action: ChoiceColumn({
            label: 'Action',
            active: true,
            mandatory: false,
            read_only: false,
            maxLength: 40,
            dropdown: 'none',
            choices: {
                Create: {
                    label: 'Create',
                    sequence: 0,
                    inactive_on_update: false,
                },
                Update: {
                    label: 'Update',
                    sequence: 1,
                    inactive_on_update: false,
                },
                In_progress: {
                    label: 'In progress',
                    sequence: 2,
                    inactive_on_update: false,
                },
                Resolved: {
                    label: 'Resolved',
                    sequence: 3,
                    inactive_on_update: false,
                },
                Awaiting_info: {
                    label: 'Awaiting info',
                    sequence: 4,
                    inactive_on_update: false,
                },
                Cancelled: {
                    label: 'Cancelled',
                    sequence: 5,
                    inactive_on_update: false,
                },
                Closed: {
                    label: 'Closed',
                    sequence: 6,
                    inactive_on_update: false,
                },
            },
            attributes: {
                edge_encryption_enabled: true,
            },
        }),
        u_active: BooleanColumn({
            label: 'Active',
            active: true,
            mandatory: false,
            read_only: false,
            default: 'true',
            attributes: {
                edge_encryption_enabled: true,
            },
        }),
        u_condition: ConditionsColumn({
            label: 'Condition',
            active: true,
            mandatory: false,
            read_only: false,
            attributes: {},
            dependent_on_field: 'u_applies_to_table',
            dynamic_value_definitions: {
                type: 'dependent_field',
                column_name: 'u_applies_to_table',
            },
        }),
        u_applies_to_table: TableNameColumn({
            label: 'Applies to table',
            active: true,
            mandatory: false,
            read_only: false,
            attributes: {
                base_start: true,
                edge_encryption_enabled: true,
            },
            maxLength: 80,
        }),
        u_template: ReferenceColumn({
            label: 'Template',
            active: true,
            mandatory: false,
            read_only: false,
            referenceTable: 'sys_template',
            attributes: {
                edge_encryption_enabled: true,
                encode_utf8: false,
            },
            maxLength: 32,
        }),
        u_message_type: ChoiceColumn({
            label: 'Message Type',
            maxLength: 40,
            dropdown: 'dropdown_with_none',
            choices: {
                'REST Message': {
                    label: 'REST Message',
                    sequence: 1,
                    inactive_on_update: false,
                },
                'SOAP Message': {
                    label: 'SOAP Message',
                    sequence: 1,
                    inactive_on_update: false,
                },
            },
        }),
        u_soap_message: ReferenceColumn({
            label: 'SOAP Message',
            maxLength: 32,
            referenceTable: 'sys_soap_message_function',
            attributes: {},
        }),
        u_rest_message: ReferenceColumn({
            label: 'REST Message',
            maxLength: 32,
            referenceTable: 'sys_rest_message_fn',
            attributes: {},
        }),
    },
    index: [
        { name: 'index', element: ['u_rest_message'], unique: false },
        { name: 'index2', element: ['u_soap_message'], unique: false },
        { name: 'index3', element: ['u_template'], unique: false },
    ],
})
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

ClientScript({
    $id: Now.ID['cs01'],
    script: script`
             function onLoad() {
                             //Type appropriate comment here, and begin script below
                             g_form.setDisplay('u_applies_to_table',false)
                             
                          }`,
    table: 'x_75746_ntt_ebond_u_ecase_field_attribute_map',
    name: 'Hide Apply to Table field',
    type: 'onLoad',
    ui_type: 'all',
})
