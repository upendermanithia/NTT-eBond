import '@servicenow/sdk/global'
import {
    ClientScript,
} from '@servicenow/sdk/core'
//creates a client script that pops up 'Table loaded successfully!!' message every time todo record is loaded
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