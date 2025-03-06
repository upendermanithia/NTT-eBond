import { BusinessRule } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'
BusinessRule({
    $id: Now.ID['br0'],
    when: 'display',
    script: script`
             (function executeRule(current, previous /*null when async*/) {
                          
                          	// Add your code here
                          	current.u_applies_to_table=current.u_rule.u_applies_to_table;
                          
                          })(current, previous);`,
    table: 'x_75746_ntt_ebond_u_ecase_field_attribute_map',
    name: 'Populate Apply to Table field',
    order: 100,
    abort_action: false,
})