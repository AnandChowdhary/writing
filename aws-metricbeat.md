Make sure the file name is "metricbeat-oss" instead of "metricbeat"

```
curl -L -O https://artifacts.elastic.co/downloads/beats/metricbeat/metricbeat-oss-7.1.1-amd64.deb
sudo dpkg -i metricbeat-oss-7.6.0-amd64.deb
```

Add the following to `/etc/metricbeat/metricbeat.yml`:

```yaml
output.elasticsearch:
  hosts: ["<es_url>:443"]
  username: "your-user"
  password: "your-password"
setup.kibana:
  host: "<es_url>:443"
```

Make sure `host` in `setup.kibana` is not the Kibana URL, but the ES URL (https://discuss.elastic.co/t/metricbeat-failed-to-parse-json-response-invalid-character-looking-for-beginning-of-value-error/199248)

Then add:

- `setup.ilm.enabled: false` (https://discuss.opendistrocommunity.dev/t/unable-to-use-beats-on-1-0-0/1049)
