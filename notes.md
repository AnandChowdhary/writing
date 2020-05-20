# Notes

## ElasticSearch error

After setting up a new ElasticSearch instance on AWS, you might see the security exception "no permissions for [indices:data/write/index] and User [name=arn:aws:iam::USER_ID:user/USER_NAME".

```
⚠  warning   ElasticSearch: Unable to save record, trying again: {"name":"ResponseError","meta":{"body":{"error":{"root_cause":[{"type":"security_exception","reason":"no permissions for [indices:data/write/index] and User [name=arn:aws:iam::USER_ID:user/USER_NAME, backend_roles=[], requestedTenant=null]"}],"type":"security_exception","reason":"no permissions for [indices:data/write/index] and User [name=arn:aws:iam::USER_ID:user/USER_NAME, backend_roles=[], requestedTenant=null]"},"status":403},"statusCode":403,"headers":{"date":"Wed, 20 May 2020 21:18:11 GMT","content-type":"application/json; charset=UTF-8","content-length":"427","connection":"keep-alive","access-control-allow-origin":"*"},"warnings":null,"meta":{"context":null,"request":{"params":{"method":"POST","path":"/staart-instances/_doc","body":"{\"name\":\"ara\",\"version\":\"2.19.0\",\"repository\":\"git@github.com:staart/api.git\",\"author\":\"Anand Chowdhary <mail@anandchowdhary.com>\",\"staart-version\":\"1.3.157\"}","querystring":"","headers":{"User-Agent":"elasticsearch-js/7.6.1 (darwin 19.4.0-x64; Node.js v14.0.0)","Content-Type":"application/json","Content-Length":"158"},"timeout":30000},"options":{"warnings":null},"id":1},"name":"elasticsearch-js","connection":{"url":"https://AWS_ELASTICSEARCH_DOMAIN.eu-central-1.es.amazonaws.com/","id":"https://AWS_ELASTICSEARCH_DOMAIN.eu-central-1.es.amazonaws.com/","headers":{},"deadCount":0,"resurrectTimeout":0,"_openRequests":0,"status":"alive","roles":{"master":true,"data":true,"ingest":true,"ml":false}},"attempts":0,"aborted":false}}}
ResponseError: security_exception
    at IncomingMessage.<anonymous> (/Users/anandchowdhary/Projects/o15y/ara/node_modules/@elastic/elasticsearch/lib/Transport.js:296:25)
    at IncomingMessage.emit (events.js:327:22)
    at IncomingMessage.EventEmitter.emit (domain.js:485:12)
    at endReadableNT (_stream_readable.js:1218:12)
    at processTicksAndRejections (internal/process/task_queues.js:84:21) {
  meta: {
    body: { error: [Object], status: 403 },
    statusCode: 403,
    headers: {
      date: 'Wed, 20 May 2020 21:18:11 GMT',
      'content-type': 'application/json; charset=UTF-8',
      'content-length': '427',
      connection: 'keep-alive',
      'access-control-allow-origin': '*'
    },
    warnings: null,
    meta: {
      context: null,
      request: [Object],
      name: 'elasticsearch-js',
      connection: [Object],
      attempts: 0,
      aborted: false
    }
  }
}
```

### Fix

1. Go to Kibana → Security → Role Mappings
2. Edit the "all_access" role
3. Add the full user (arn:aws:iam::USER_ID:user/USER_NAME) and Submit
