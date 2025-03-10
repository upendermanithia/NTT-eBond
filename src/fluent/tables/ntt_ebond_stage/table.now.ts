import '@servicenow/sdk/global'
import {
    ChoiceColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core'

export const x_75746_ntt_ebond_u_ntt_ebonding_stage = Table({
    name: 'x_75746_ntt_ebond_u_ntt_ebonding_stage',
    label: 'NTT eBonding Staging',
    allow_web_service_access: true,
    allow_new_fields: true,
    allow_client_scripts: true,
    allow_ui_actions: true,
    extensible: false,
    schema: {
        u_payload: StringColumn({
            label: 'Payload',
            maxLength: 8000,
            mandatory: true,
        }),
        u_external_reference: StringColumn({
            label: 'External reference',
            maxLength: 500,
            mandatory: true,
        }),
        u_internal_reference: StringColumn({
            label: 'Internal reference',
            maxLength: 500,
            mandatory: true,
        }),
        u_direction: ChoiceColumn({
            label: 'Direction',
            active: true,
            mandatory: true,
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
    }
})