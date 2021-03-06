const core = require('aws-sdk/lib/core');
const aws = require('aws-sdk');

const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const json = JSON.parse(input);

const credential = new aws.Credentials(json.credentials.accessKey, json.credentials.secretKey, json.credentials.sessionToken);

const serviceName = "execute-api";

const protocol = json.request.protocol;
const host = json.request.host;
const path = json.request.path;
const query = Object.keys(json.request).includes('query') ? json.request.query : '';

const options = {
    url: `${protocol}://${host}${path}${query}`,
    headers: json.request.headers,
    region: json.region,
    method: json.request.method,
    methodIndex: json.request.method.toLowerCase(),
    pathname: () => path,
    search: () => query.replace(/^\?/, '')
};
options.headers.host = host;
if (json.request.body) options.body = JSON.stringify(json.request.body)

const signer = new core.Signers.V4(options, serviceName);

const now = new Date();
signer.addAuthorization(credential, now);

console.log("Request Header:");
console.log(options.headers);
console.log("Request Body:")
console.log(options.body)