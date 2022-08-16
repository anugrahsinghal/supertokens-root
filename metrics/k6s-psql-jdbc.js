//   scenarios: (100.00%) 1 scenario, 20 max VUs, 2m50s max duration (incl. graceful stop):
//            * default: Up to 20 looping VUs for 2m20s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


// running (2m20.3s), 00/20 VUs, 1812 complete and 0 interrupted iterations
// default ✓ [======================================] 00/20 VUs  2m20s

//      ✓ status was 200

//      checks.........................: 100.00% ✓ 1812      ✗ 0   
//      data_received..................: 214 kB  1.5 kB/s
//      data_sent......................: 154 kB  1.1 kB/s
//      http_req_blocked...............: avg=8.46µs  min=2.21µs   med=4.36µs   max=636.44µs p(90)=5.93µs  p(95)=7.07µs  
//      http_req_connecting.......,.....: avg=2.34µs  min=0s       med=0s       max=518.34µs p(90)=0s      p(95)=0s      
//      http_req_duration..............: avg=1.01ms  min=507.49µs med=981.26µs max=24.6ms   p(90)=1.21ms  p(95)=1.29ms  
//        { expected_response:true }...: avg=1.01ms  min=507.49µs med=981.26µs max=24.6ms   p(90)=1.21ms  p(95)=1.29ms  
//      http_req_failed................: 0.00%   ✓ 0         ✗ 1812
//      http_req_receiving.............: avg=63.44µs min=21.08µs  med=60.07µs  max=204.6µs  p(90)=88.54µs p(95)=100.68µs
//      http_req_sending...............: avg=22.9µs  min=8.86µs   med=19.73µs  max=118.2µs  p(90)=35.24µs p(95)=42.77µs 
//      http_req_tls_handshaking.......: avg=0s      min=0s       med=0s       max=0s       p(90)=0s      p(95)=0s      
//      http_req_waiting...............: avg=928.5µs min=455.55µs med=893.85µs max=24.44ms  p(90)=1.12ms  p(95)=1.18ms  
//      http_reqs......................: 1812    12.917266/s
//      iteration_duration.............: avg=1s      min=1s       med=1s       max=1.02s    p(90)=1s      p(95)=1s      
//      iterations.....................: 1812    12.917266/s
//      vus............................: 1       min=1       max=20
//      vus_max........................: 20      min=20      max=20