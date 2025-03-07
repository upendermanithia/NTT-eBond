import { CrossScopePrivilege } from '@servicenow/sdk/core'

CrossScopePrivilege({
    $id: Now.ID['sp0'],
    operation: 'execute',
    status: 'allowed',
    target_name: 'ScopedGlideElement',
    target_scope: 'global',
    target_type: 'scriptable',
})
CrossScopePrivilege({
    $id: Now.ID['sp1'],
    operation: 'execute',
    status: 'allowed',
    target_name: 'GlideFilter.match',
    target_scope: 'global',
    target_type: 'scriptable',
})
