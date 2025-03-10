import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: '403c7c3f83486610621957d6feaad352',
    table: 'sysauto_script',
    data: {
        active: true,
        conditional: false,
        entered_time: '1970-01-01 00:00:00',
        name: 'Get INCs',
        offset_type: 0,
        run_as: '69413bf683846210621957d6feaad313',
        run_dayofmonth: 1,
        run_dayofweek: 1,
        run_start: '2025-03-09 16:50:09',
        run_time: '1970-01-01 08:00:00',
        run_type: 'daily',
        script: "var request = new sn_ws.RESTMessageV2('x_75746_ntt_ebond.API', 'Default GET');\nrequest.setRequestBody(\"{'sys_updated_by':'upender.kumar','sysparm_limit':10}\");\nrequest.setRequestHeader('Content-Type', 'application/json');\nvar response = request.execute();\nvar result=JSON.parse(response.getBody()).result;\nvar grLog=new GlideRecord('x_75746_ntt_ebond_ebond_log');\ngrLog.initialize();\ngrLog.payload=JSON.stringify(result);\ngrLog.insert();",
        sys_name: 'Get INCs',
        upgrade_safe: false,
    },
})
