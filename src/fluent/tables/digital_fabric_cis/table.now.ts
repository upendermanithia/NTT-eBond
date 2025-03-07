import '@servicenow/sdk/global'
import {
    StringColumn,
    Table,
} from '@servicenow/sdk/core'
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