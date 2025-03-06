import '@servicenow/sdk/global'
import {
    BooleanColumn,
    ChoiceColumn,
    ConditionsColumn,
    ReferenceColumn,
    Table,
    TableNameColumn,
} from '@servicenow/sdk/core'
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