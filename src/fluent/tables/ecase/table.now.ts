import '@servicenow/sdk/global'
import { ChoiceColumn, GenericColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

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
