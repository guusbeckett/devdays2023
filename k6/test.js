import http from 'k6/http';

export default function () {
  let res = http.get('http://my-website-service.default.svc.cluster.local');
}