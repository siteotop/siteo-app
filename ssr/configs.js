module.exports= {
    // token for API
  public_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1YzBlNmZmZTAxN2UxIiwiYXVkIjoiY29yZV9zZXJ2ZXJfYXBwIiwic3ViIjoiIiwiaXNzIjoiYXV0aC12MS4wIiwidHQiOjEsImlwIjoiMTI3LjAuMC4xIn0.HCQ4RoOOXEo9-IjYJmESLgWy-aDMwsUbHRbo2VMOHuY',

  // example  https://api.siteo.top/api/v1
  api_url: 'https://api.siteo.top/api/v1',
  // siteo id for example 152710249031417
  siteo_id: '152774684316952',
  path:"",
  ssr: true,
  // website host https://siteo.top
  host: process.env.NODE_ENV =='production'? "https://siteo.top":'http://localhost:8080',
  lang: 'en',
  // host static curent or
  host_static: process.env.NODE_ENV =='production'? "https://siteo.top/dist/":'/',
}
