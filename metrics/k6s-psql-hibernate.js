//   scenarios: (100.00%) 1 scenario, 20 max VUs, 2m50s max duration (incl. graceful stop):
//            * default: Up to 20 looping VUs for 2m20s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


// running (2m20.4s), 00/20 VUs, 1810 complete and 0 interrupted iterations
// default ✓ [======================================] 00/20 VUs  2m20s

//      ✓ status was 200

//      checks.........................: 100.00% ✓ 1810     ✗ 0   
//      data_received..................: 214 kB  1.5 kB/s
//      data_sent......................: 154 kB  1.1 kB/s
//      http_req_blocked...............: avg=8.13µs  min=2.11µs   med=4.12µs  max=397.79µs p(90)=5.76µs  p(95)=6.8µs  
//      http_req_connecting............: avg=2.29µs  min=0s       med=0s      max=303.73µs p(90)=0s      p(95)=0s     
//      http_req_duration..............: avg=1.75ms  min=812.58µs med=1.56ms  max=42.45ms  p(90)=2.41ms  p(95)=2.8ms  
//        { expected_response:true }...: avg=1.75ms  min=812.58µs med=1.56ms  max=42.45ms  p(90)=2.41ms  p(95)=2.8ms  
//      http_req_failed................: 0.00%   ✓ 0        ✗ 1810
//      http_req_receiving.............: avg=54.41µs min=12.4µs   med=51.59µs max=548.56µs p(90)=76.23µs p(95)=86.97µs
//      http_req_sending...............: avg=19.49µs min=7.09µs   med=16.63µs max=96.87µs  p(90)=29.21µs p(95)=36.32µs
//      http_req_tls_handshaking.......: avg=0s      min=0s       med=0s      max=0s       p(90)=0s      p(95)=0s     
//      http_req_waiting...............: avg=1.68ms  min=770.59µs med=1.49ms  max=42.25ms  p(90)=2.33ms  p(95)=2.7ms  
//      http_reqs......................: 1810    12.89336/s
//      iteration_duration.............: avg=1s      min=1s       med=1s      max=1.04s    p(90)=1s      p(95)=1s     

//      iterations.....................: 1810    12.89336/s
//      vus............................: 1       min=1      max=20
//      vus_max........................: 20      min=20     max=20