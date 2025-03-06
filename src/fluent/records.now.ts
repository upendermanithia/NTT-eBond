import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'
//new table
export default Record({
    $id: Now.ID['DDRecordUtilities'],
    table: 'sys_script_include',
    data: {
        access: 'package_private',
        active: true,
        api_name: 'x_75746_ntt_ebond.DDRecordUtilities',
        client_callable: false,
        mobile_callable: false,
        name: 'DDRecordUtilities',
        sandbox_callable: false,
        script: 'var DDRecordUtilities = Class.create();\nDDRecordUtilities.prototype = {\n    initialize: function() {\n    },\n\tgetParentTableFields:function(tableName){\n\t\treturn "name="+tableName;\n\t},\n    type: \'DDRecordUtilities\'\n};',
        sys_name: 'DDRecordUtilities',
    },
})
Record({
    $id: Now.ID['DDApiUtilities'],
    table: 'sys_script_include',
    data: {
        access: 'package_private',
        active: true,
        api_name: 'x_75746_ntt_ebond.DDApiUtilities',
        client_callable: false,
        mobile_callable: false,
        name: 'DDApiUtilities',
        sandbox_callable: false,
        script: "var DDApiUtilities = Class.create();\nDDApiUtilities.prototype = {\n    initialize: function() {},\n    postData: function(glideRecord) {\n        var ecaseConfig = new GlideRecord('x_75746_ntt_ebond_u_ecase_configuration');\n        ecaseConfig.addQuery('u_applies_to_table', glideRecord.getValue('sys_class_name'));\n        ecaseConfig.addQuery('u_active', true);\n        ecaseConfig.query();\n        while (ecaseConfig.next()) {\n            var glideFilter = new GlideFilter(ecaseConfig.getValue('u_condition'), 'filterCondition');\n            var requestBody = {};\n            if (glideFilter.match(glideRecord, true)) {\n                var glideFields = new GlideRecord('x_75746_ntt_ebond_u_ecase_field_attribute_map');\n                glideFields.addQuery('u_rule', ecaseConfig.getUniqueValue());\n                glideFields.addQuery('u_active', 'true');\n                glideFields.query();\n                while (glideFields.next()) {\n                    requestBody[glideFields.getValue('u_api_attribute')] = glideRecord.getValue(glideFields.getValue('u_source'));\n                }\n                if (Object.keys(requestBody).length>0) {\n\t\t\t\t\tgs.info('Request Body:'+JSON.stringify(requestBody));\n                    /*var request = sn_ws.RESTMessageV2();\n                    request.setHttpMethod('post');\n                    request.setEndpoint('');\n                    request.setBasicAuth('<username>', '<password>');\n                    request.setRequestHeader('Content-Type', 'application/json');\n                    request.setRequestBody(JSON.stringify(requestBody));\n                    var response = request.execute();*/\n                }\n\n            }\n\n\n        }\n    },\n    type: 'DDApiUtilities'\n};",
        sys_name: 'DDApiUtilities',
    },
})
Record({
    $id: Now.ID['sr0'],
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_75746_ntt_ebond_u_ecase_configuration',
        basic_query_from: 'x_75746_ntt_ebond_u_ecase_field_attribute_map',
        name: 'Field Map',
        query_with:
            "(function refineQuery(current, parent) {\n\n\t// Add your code here, such as current.addQuery(field, value);\ncurrent.addQuery('u_rule',parent.sys_id)\n})(current, parent);",
        simple_reference: false,
        sys_name: 'Field Map',
    },
})
Record({
    $id: Now.ID['us0'],
    table: 'sys_ui_section',
    data: {
        name: 'x_75746_ntt_ebond_u_ecase_configuration',
        caption: '',
        view: '',
        table: 'x_75746_ntt_ebond_u_ecase_configuration',
    },
})
export const section = Record({
    $id: Now.ID['sc0'],
    table: 'sys_ui_section',
    data: {
        name: 'x_75746_ntt_ebond_u_ecase_field_attribute_map',
        caption: '',
        view: 'Default view',
        table: 'x_75746_ntt_ebond_u_ecase_field_attribute_map',
    },
})
