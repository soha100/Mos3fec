
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Mos3efk/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Mos3efk/doctor/dashboard",
    "route": "/Mos3efk"
  },
  {
    "renderMode": 2,
    "route": "/Mos3efk/auth"
  },
  {
    "renderMode": 2,
    "route": "/Mos3efk/auth/auth"
  },
  {
    "renderMode": 2,
    "route": "/Mos3efk/doctor"
  },
  {
    "renderMode": 2,
    "route": "/Mos3efk/doctor/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/Mos3efk/doctor/dashboard/comments"
  },
  {
    "renderMode": 2,
    "route": "/Mos3efk/doctor/dashboard/appointment"
  },
  {
    "renderMode": 2,
    "route": "/Mos3efk/doctor/dashboard/doctor-profile"
  },
  {
    "renderMode": 2,
    "route": "/Mos3efk/user"
  }
],
  assets: {
    'index.csr.html': {size: 26233, hash: 'a0abc1d7977a5800c20cd10765136bce6cd89ce49b4e3eac7b7deb879555b4f3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17296, hash: '42336781bca5756668abc92ab8df242cc18e2242e0339ca81f1ec61b3af16e2e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'auth/auth/index.html': {size: 36528, hash: '7d4b27f1de3a8e56e0bbfbfe0c5b2bbde070042d1dc22c1be92d7f9b30d02da8', text: () => import('./assets-chunks/auth_auth_index_html.mjs').then(m => m.default)},
    'doctor/index.html': {size: 40875, hash: '0fb4018bbc6e8fc49b37bb6d9541d70ab2db2063536245e8323cb7cb2726d36e', text: () => import('./assets-chunks/doctor_index_html.mjs').then(m => m.default)},
    'doctor/dashboard/index.html': {size: 55040, hash: '6789e1669112bd4948e826f53b1f4e387f4eda3351f42c52b555a7f9e712c077', text: () => import('./assets-chunks/doctor_dashboard_index_html.mjs').then(m => m.default)},
    'doctor/dashboard/doctor-profile/index.html': {size: 43954, hash: 'b2782c07ca71578574e554cc196cd325323db3ed3509e1f8af1f3565de851abb', text: () => import('./assets-chunks/doctor_dashboard_doctor-profile_index_html.mjs').then(m => m.default)},
    'doctor/dashboard/comments/index.html': {size: 62602, hash: '9c544068b835a173605d46d3b198f8797865dc2cad5171321fa5869bb9b8c68e', text: () => import('./assets-chunks/doctor_dashboard_comments_index_html.mjs').then(m => m.default)},
    'doctor/dashboard/appointment/index.html': {size: 52478, hash: 'bedcc54f99798342e70a0f825f64a98f8ea05a2f4185c0a571cfd300fabda160', text: () => import('./assets-chunks/doctor_dashboard_appointment_index_html.mjs').then(m => m.default)},
    'user/index.html': {size: 26682, hash: '698af4e15003d2e6b529364d4cee007fc8f97a0d90f62259298faa5a46a29f28', text: () => import('./assets-chunks/user_index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 26696, hash: 'a448c461beba25ff6cfcdf57b22f5af04e8381842b23706b1545a5d2348f3712', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'styles-EIOKHKFH.css': {size: 134353, hash: 'MW0Qwm0KpGg', text: () => import('./assets-chunks/styles-EIOKHKFH_css.mjs').then(m => m.default)}
  },
};
