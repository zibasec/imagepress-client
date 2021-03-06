//
// DO NOT EDIT! GENERATED FILE!
//

const validateProps = require('./validate-props')

let fetch = null
const api = {}

module.exports = fn => {
  fetch = fn
  return api
}

const validators = {}

validators['baseline_complete'] = async ({ path, method, body, mock }) => {
  const props = {
    noop: { type: 'Boolean', default: false },
    status: { type: 'String', required: true },
    instanceId: { type: 'String', required: true },
    region: { type: 'String', required: true },
    id: { type: 'String', required: true } // baseline id
  }

  return validateProps(props, body, mock)
}

validators['baseline_launch'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: false, match: uuidRegex() },
    name: { type: 'String', required: false },
    cloudcredentialid: { type: 'String', required: true, match: uuidRegex() },
    reposList: { type: 'Array', default: [] },
    subnetId: { type: 'String', required: true },
    sourceid: { type: 'String', required: false, match: uuidRegex() },
    regions: { type: 'Array', required: true },
    assignIp: { type: 'Boolean', default: true },
    permissions: { type: 'Object', required: false, default: { private: true, accounts: [] } },
    deviceName: { type: 'String', default: '/dev/xvda' },
    tags: { type: 'Array', default: [] },
    runWorker: { type: 'Boolean', default: true },
    //
    // these next ones we aren't exposing to users "yet" but we might
    // later so making it easier for later implementation on the UI.
    //
    instanceType: { type: 'String', default: 't2.medium' },
    volumeSize: { type: 'Number', default: 50 },
    volumeType: { type: 'String', default: 'gp2' }
  }

  const r = validateProps(props, body, mock)

  if (mock || r.err) return r

  if (!r.data.id) {
    if (!r.data.sourceid) {
      return { err: { 'sourceid': 'String required' } }
    }
    if (!r.data.permissions) {
      return { err: { 'permissions': 'Object required' } }
    }
  }
  if (typeof r.data.permissions.private !== 'boolean') {
    return { err: { 'permissions.private': 'Boolean required' } }
  }

  if (!Array.isArray(r.data.permissions.accounts)) {
    return { err: { 'permissions.accounts': 'Array required' } }
  }

  if (r.data.permissions.accounts.length > 0) {
    r.data.permissions.accounts.map((account, i) => {
      if (typeof accounts !== 'string') {
        return { err: { [`permissions.accounts[${i}]`]: 'String required' } }
      }
    })
  }

  if (r.data.reposList.length > 0) {
    r.data.reposList.map((repo, index) => {
      if (!repo.scripts) {
        return { err: { [`reposList[${index}].scripts`]: 'Property required' } }
      }
      if (!repo.id) { // ref id of repo object
        return { err: { [`reposList[${index}].id`]: 'Property required' } }
      }

      if (!Array.isArray(repo.scripts)) {
        return { err: { [`reposList[${index}].scripts`]: 'Expected an array' } }
      }
      repo.scripts.map((script, sIndex) => {
        if (!script.path) {
          return { err: { [`reposList[${index}].scripts[${sIndex}.path]`]: 'Property required' } }
        }
        if (!script.exec) {
          return { err: { [`reposList[${index}].scripts[${sIndex}.exec]`]: 'Property required' } }
        }
      })
    })
  }
  return r
}

validators['baseline_list'] = async ({ path, method, body, mock }) => {
  return validateProps({}, body, mock)
}

validators['baseline_bake_status'] = async ({ path, method, body, mock }) => {
  const props = {
    imageId: { type: 'String', required: true },
    region: { type: 'String', required: true },
    id: { type: 'String', required: true },
    noop: { type: 'Boolean', required: false },
    instanceId: { type: 'String', required: false }
  }

  return validateProps(props, body, mock)
}

validators['baseline_distribute'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['baseline_distro_status'] = async ({ path, method, body, mock }) => {
  const props = {
    imageIds: { type: 'Array', required: true },
    regions: { type: 'Array', required: true },
    count: { type: 'Number', required: false },
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['baseline_delete'] = async ({ path, method, body, mock }) => {
  if (!method === 'DELETE') {
    return { err: { method: 'Must be DELETE' } }
  }

  const props = {}

  if (path.includes('copy')) {
    props.region = { type: 'String', required: true }
    props.imageId = { type: 'String', required: true }
  } else if (path.includes('copies')) {
    // expects [{ region, imageId }, ...]
    props.copies = { type: 'Array', required: true }
  } else {
    props.id = { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['baseline_delete'] = async ({ path, method, body, mock }) => {
  if (!method === 'DELETE') {
    return { err: { method: 'Must be DELETE' } }
  }

  const props = {}

  if (path.includes('copy')) {
    props.region = { type: 'String', required: true }
    props.imageId = { type: 'String', required: true }
  } else if (path.includes('copies')) {
    // expects [{ region, imageId }, ...]
    props.copies = { type: 'Array', required: true }
  } else {
    props.id = { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['baseline_delete'] = async ({ path, method, body, mock }) => {
  if (!method === 'DELETE') {
    return { err: { method: 'Must be DELETE' } }
  }

  const props = {}

  if (path.includes('copy')) {
    props.region = { type: 'String', required: true }
    props.imageId = { type: 'String', required: true }
  } else if (path.includes('copies')) {
    // expects [{ region, imageId }, ...]
    props.copies = { type: 'Array', required: true }
  } else {
    props.id = { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['credentials_delete'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['credentials_list'] = async ({ path, method, body, mock }) => {
  return validateProps({}, body, mock)
}

validators['credentials_save'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: false },
    type: { type: 'String', match: /aws|git/ },
    name: { type: 'String', required: true }
  }

  if (path.includes('/aws')) {
    props.eid = { type: 'String', required: true }
    props.arn = { type: 'String', required: true }

    props['trust-policy'] = {
      type: 'String',
      required: true
    }

    props['access-policy'] = {
      type: 'String',
      required: true
    }
  }

  if (path.includes('/git_key')) {
    props.key = { type: 'String', required: true }
  } else if (path.includes('/git')) {
    props.username = { type: 'String', required: false }
    props.password = { type: 'String', required: false }
  }

  return validateProps(props, body, mock)
}

validators['credentials_save'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: false },
    type: { type: 'String', match: /aws|git/ },
    name: { type: 'String', required: true }
  }

  if (path.includes('/aws')) {
    props.eid = { type: 'String', required: true }
    props.arn = { type: 'String', required: true }

    props['trust-policy'] = {
      type: 'String',
      required: true
    }

    props['access-policy'] = {
      type: 'String',
      required: true
    }
  }

  if (path.includes('/git_key')) {
    props.key = { type: 'String', required: true }
  } else if (path.includes('/git')) {
    props.username = { type: 'String', required: false }
    props.password = { type: 'String', required: false }
  }

  return validateProps(props, body, mock)
}

validators['credentials_save'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: false },
    type: { type: 'String', match: /aws|git/ },
    name: { type: 'String', required: true }
  }

  if (path.includes('/aws')) {
    props.eid = { type: 'String', required: true }
    props.arn = { type: 'String', required: true }

    props['trust-policy'] = {
      type: 'String',
      required: true
    }

    props['access-policy'] = {
      type: 'String',
      required: true
    }
  }

  if (path.includes('/git_key')) {
    props.key = { type: 'String', required: true }
  } else if (path.includes('/git')) {
    props.username = { type: 'String', required: false }
    props.password = { type: 'String', required: false }
  }

  return validateProps(props, body, mock)
}

validators['credentials_verify'] = async ({ path, method, body, mock }) => {
  const props = {
    public: { type: 'String', required: true },
    private: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['repo_download'] = async ({ path, method, body, mock }) => {
  if (!method === 'GET') {
    return { err: { method: 'Must be GET' } }
  }

  const props = {
    isTarball: { type: 'Boolean', default: false },
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['repo_upload'] = async ({ path, method, body, mock }) => {
  const match = new RegExp([
    'ap-south-1', 'eu-west-3', 'eu-west-2',
    'eu-west-1', 'ap-northeast-2', 'ap-northeast-1',
    'sa-east-1', 'ca-central-1', 'ap-southeast-1',
    'ap-southeast-2', 'eu-central-1', 'us-east-1',
    'us-east-2', 'us-west-1', 'us-west-2'
  ].join('|'))

  const props = {
    repoUrl: { type: 'String', required: true },
    id: { type: 'String', required: true, match: uuidRegex() }, // repo ref id
    region: { type: 'String', required: true, match },
    tarArchive: { type: 'String', required: true },
    zipArchive: { type: 'String', required: true },
    branch: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['repo_list'] = async ({ path, method, body, mock }) => {
  return validateProps({}, body, mock)
}

validators['repo'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: false },
    status: { type: 'String', required: false },
    sync: { type: 'Boolean', default: false },
    name: { type: 'String', required: false },
    url: { type: 'String', required: false },
    cloudcredentialid: { type: 'String', required: false },
    region: { type: 'String', required: false },
    subnetId: { type: 'String', required: false },
    assignIp: { type: 'Boolean', default: false },
    gitcredentialid: { type: 'String', required: false },
    token: { type: 'String', required: false },
    fileList: { type: 'Array', required: false, default: [] },
    branch: { type: 'String', required: false }
  }

  if (method === 'GET') {
    props.id.required = true
  }

  const r = validateProps(props, body, mock)
  if (mock) return r

  if (!r.data.id) {
    r.data.sync = true
    const requiredProps = [
      'token',
      'cloudcredentialid',
      'name',
      'branch',
      'assignIp',
      'subnetId'
    ]
    requiredProps.map(prop => {
      if (!r.data[prop]) {
        const err = {}
        err[prop] = 'property required'
        return { err }
      }
    })
  }
  return r
}

validators['repo'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: false },
    status: { type: 'String', required: false },
    sync: { type: 'Boolean', default: false },
    name: { type: 'String', required: false },
    url: { type: 'String', required: false },
    cloudcredentialid: { type: 'String', required: false },
    region: { type: 'String', required: false },
    subnetId: { type: 'String', required: false },
    assignIp: { type: 'Boolean', default: false },
    gitcredentialid: { type: 'String', required: false },
    token: { type: 'String', required: false },
    fileList: { type: 'Array', required: false, default: [] },
    branch: { type: 'String', required: false }
  }

  if (method === 'GET') {
    props.id.required = true
  }

  const r = validateProps(props, body, mock)
  if (mock) return r

  if (!r.data.id) {
    r.data.sync = true
    const requiredProps = [
      'token',
      'cloudcredentialid',
      'name',
      'branch',
      'assignIp',
      'subnetId'
    ]
    requiredProps.map(prop => {
      if (!r.data[prop]) {
        const err = {}
        err[prop] = 'property required'
        return { err }
      }
    })
  }
  return r
}

validators['repo_delete'] = async ({ path, method, body, mock }) => {
  if (!method === 'DELETE') {
    return { err: { method: 'Must be DELETE' } }
  }

  const props = {
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['sources_list'] = async ({ path, method, body, mock }) => {
  return validateProps({}, body, mock)
}

validators['source_get'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['source_delete'] = async ({ path, method, body, mock }) => {
  const props = {
    id: {
      type: 'String',
      required: true,
      match: uuidRegex()
    }
  }

  return validateProps(props, body, mock)
}

validators['source_update'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: true },
    name: { type: 'String', required: false },
    description: { type: 'String', required: false }
  }

  return validateProps(props, body, mock)
}

validators['source_import'] = async ({ path, method, body, mock }) => {
  const props = {
    name: { type: 'String', required: true },
    cloudcredentialid: { type: 'String', required: true, match: uuidRegex() },
    imageId: { type: 'String' },
    provider: { type: 'String', default: 'aws', match: /^aws$/ }
  }

  props.region = { type: 'String', default: 'us-east-1' }
  props.imageId = { ...props.imageId, required: true }

  const r = validateProps(props, body, mock)

  if (mock || r.err) return r

  return r
}

validators['image_verify'] = async ({ path, method, body, mock }) => {
  const props = {
    imageId: { type: 'String', required: true },
    region: { type: 'String', required: true },
    id: { type: 'String', required: true, match: uuidRegex() } // credential id
  }

  return validateProps(props, body, mock)
}

validators['organization_set'] = async ({ path, method, body, mock }) => {
  const props = {
    resetUser: { type: 'Boolean', required: false },
    id: { type: 'String', required: false }
  }

  if (method === 'POST') {
    props.label = { type: 'String', required: true }
  }

  if (method === 'PUT') {
    props.id.required = true
    props.label = { type: 'String', required: false }
  }

  const r = validateProps(props, body, mock)

  if (r.resetUser && r.id) {
    return { err: { mutuallyExclusive: 'resetUser and id' } }
  }
  return r
}

validators['organization_get'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['organization_delete'] = async ({ path, method, body, mock }) => {
  const props = {}

  return validateProps(props, body, mock)
}

validators['organization_set'] = async ({ path, method, body, mock }) => {
  const props = {
    resetUser: { type: 'Boolean', required: false },
    id: { type: 'String', required: false }
  }

  if (method === 'POST') {
    props.label = { type: 'String', required: true }
  }

  if (method === 'PUT') {
    props.id.required = true
    props.label = { type: 'String', required: false }
  }

  const r = validateProps(props, body, mock)

  if (r.resetUser && r.id) {
    return { err: { mutuallyExclusive: 'resetUser and id' } }
  }
  return r
}

validators['organization_leave'] = async ({ path, method, body, mock }) => {
  const props = {}

  return validateProps(props, body, mock)
}

validators['api_key_create'] = async ({ path, method, body, mock }) => {
  const props = {
    label: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['api_key_delete'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['api_keys_list'] = async ({ path, method, body, mock }) => {
  const props = {}

  return validateProps(props, body, mock)
}

validators['api_key_get'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['users_list'] = async ({ path, method, body, mock }) => {
  const props = {}

  return validateProps(props, body, mock)
}

validators['user_role'] = async ({ path, method, body, mock }) => {
  if (method !== 'POST') {
    return { err: { method: `Expected POST, received ${method}` } }
  }

  const props = {
    id: { type: 'String', required: true }, // userid of user being modified
    roleid: { type: 'Number', required: true }
  }

  return validateProps(props, body, mock)
}

validators['invite_send'] = async ({ path, method, body, mock }) => {
  const props = {
    email: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['invite_accept'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['invites_list'] = async ({ path, method, body, mock }) => {
  const props = {
    mine: { type: 'Boolean', default: false }
  }
  return validateProps(props, body, mock)
}

validators['invite_cancel'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['invite_get'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['invite_decline'] = async ({ path, method, body, mock }) => {
  const props = {
    inviteid: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['email_logger'] = async ({ path, method, body, mock }) => {
  const props = {}

  return validateProps(props, body, mock)
}

api.imagepress = {
  'v0': {}
}

api.imagepress.v0.postBaselineComplete = async body => {
  const path = 'v0/baseline/complete'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postBaselineLaunch = async body => {
  const path = 'v0/baseline/launch'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBaselineList = async body => {
  const path = 'v0/baseline/list'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBaselineBakeStatus = async body => {
  const path = 'v0/baseline/bake/status'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postBaselineDistribute = async body => {
  const path = 'v0/baseline/distribute'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBaselineDistributeStatus = async body => {
  const path = 'v0/baseline/distribute/status'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteBaselineDeleteCopy = async body => {
  const path = 'v0/baseline/delete/copy'

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteBaselineDeleteCopies = async body => {
  const path = 'v0/baseline/delete/copies'

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteBaselineDelete = async body => {
  const path = 'v0/baseline/delete'

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteCredentials = async body => {
  const path = 'v0/credentials'

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getCredentials = async body => {
  const path = 'v0/credentials'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postCredentialsAws = async body => {
  const path = 'v0/credentials/aws'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postCredentialsGit = async body => {
  const path = 'v0/credentials/git'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postCredentialsGit_key = async body => {
  const path = 'v0/credentials/git_key'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postCredentialsVerify = async body => {
  const path = 'v0/credentials/verify'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getRepoDownload = async body => {
  const path = 'v0/repo/download'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postRepoUpload = async body => {
  const path = 'v0/repo/upload'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getRepoList = async body => {
  const path = 'v0/repo/list'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getRepo = async body => {
  const path = 'v0/repo'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postRepo = async body => {
  const path = 'v0/repo'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteRepo = async body => {
  const path = 'v0/repo'

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getSources = async body => {
  const path = 'v0/sources'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getSource = async body => {
  const path = 'v0/source'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteSource = async body => {
  const path = 'v0/source'

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.putSource = async body => {
  const path = 'v0/source'

  // Request
  const params = {
    method: 'PUT',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postSource = async body => {
  const path = 'v0/source'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getImageVerify = async body => {
  const path = 'v0/image/verify'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postOrganization = async body => {
  const path = 'v0/organization'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getOrganization = async body => {
  const path = 'v0/organization'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteOrganization = async body => {
  const path = 'v0/organization'

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.putOrganization = async body => {
  const path = 'v0/organization'

  // Request
  const params = {
    method: 'PUT',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postOrganizationLeave = async body => {
  const path = 'v0/organization/leave'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postApi_keyCreate = async body => {
  const path = 'v0/api_key/create'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteApi_keyDelete = async body => {
  const path = 'v0/api_key/delete'

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getApi_keys = async body => {
  const path = 'v0/api_keys'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getApi_key = async body => {
  const path = 'v0/api_key'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getUsers = async body => {
  const path = 'v0/users'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postUserRole = async body => {
  const path = 'v0/user/role'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postInvite = async body => {
  const path = 'v0/invite'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postInviteAccept = async body => {
  const path = 'v0/invite/accept'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getInvites = async body => {
  const path = 'v0/invites'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteInvite = async body => {
  const path = 'v0/invite'

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getInvite = async body => {
  const path = 'v0/invite'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteInviteDecline = async body => {
  const path = 'v0/invite/decline'

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postPrivateEmailLog = async body => {
  const path = 'v0/private/email/log'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}
