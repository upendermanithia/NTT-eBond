import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
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
BusinessRule({
    $id: Now.ID['br1'],
    when: 'after',
    script: script`
             (function executeRule(current, previous /*null when async*/ ) {
                gs.info('Upender Kumar BR')
                 var apiUtilities = new DDApiUtilities();
                 apiUtilities.postData(current);
             })(current, previous);`,
    table: 'task',
    name: 'Validate NTT ebond',
    action: ['insert'],
    order: 100,
    active: true,
    add_message: false,
    abort_action: false,
    description:
        'This Business Rule is to validate the record against the rules created in eCase Configuration and create a request body base on eCase Field Attribute map  table data',
})
