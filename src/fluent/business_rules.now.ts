import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'

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
