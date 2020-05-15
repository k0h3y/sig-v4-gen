
## About
CLI tool to generate AWS Signature V4.

## How to use
```sh
## installation
$ git clone THIS_REPOSITORY
$ cd REPO_TOP_DIR
$ npm install
$ npm link

## use
$ cat requestParams/postRequest.sample.json | sig-v4-gen

Request Header:
{
  'Content-Type': 'application/json',
  host: 'example.com',
  'X-Amz-Date': '20200308T072639Z',
  'x-amz-security-token': 'IQoJb3JpZ2luX2VjENz//////////wEaDmFwLW5vcnRoZWFzdC0xIkcwRQIgTXHYaHeLiEC23xSiNwEPfpOraopF6itXd/EAbKpMascCIQCgItPKgQi5SJ69JBIPSSD+nVPOfrktwMy5PXODBIAVdyqlBAi2//////////8BEAAaDDY5ODY2MTM5Nzc0NiIMH2sjPOXDl73Jl/2jKvkDs5kD3Au9VT82BSgCZn+j2Zq2P8bLmdBbwyfebkWoDT7k15J3D2ST4m1aZVaN7uyXZEkxArWqghuaBROgotLtOf/ay2WMsjRaaK/RP+WBfHzzII2LD5SvQZgHQLJC4GQfxpY26KyzPuTEqv6TNHdbH7oxbvSn3qBu5c+mlnyAtfHcIX9Z/csiYfixe1amqnZmr5AHZ+783pEfqAcDlC1Vbs0jHN53mfgwQ8jw/KsPhyiMaKg/l5mtlMWvljKz855T/r4k3DqFu8Ek+ZC/3RYg1ljNbgd9TLeIrdYi5QiRXMkAYovp+L0ZaRyruc2pyH5gO+RdNsoP8WMJWGtbQnB1T+++1umvmCA8IH3rc2S9qIImi32HdFPM3jVxgyVzh+wBYH1T0QnpQxVR+K7tZeVNbk+ukT8mtN8obQMC6siYl6kJDjn1+pAHVUwI2vz+xM7o7jqTvHcACW5iAWpEs1P4jscNJzwmc+WBxKVj8UgiyEGH7UM3xg665LqiyQquXCglLJv3T/tnkd++igt+QUuaVeAKxf84S59XtoRQy8N8Exc29n9JyOfcHSBU/BUIUODXv+bdRCsbmCm+kRhMKA8L5cayHvisQmrNv8C/lUcrjPwDldbXznLZzDY6wHvaWOIk5RGAHLvoDNYZF+8fcSf4OIxPaxuVwWzUgDCO5pHzBTrLAtxQnEU2NaV3XecRqSG6Cw+rnZ7OLfKM9FV2oSsoF/X8N2/wQbbEzpaEEP39ZNUjTC5Rw74nIJynfdToYRaRMrgXGnwPQS32w73QIaMBdQjTQiAfYHwiN/+AmKT/IP9YYg8YRq/NSvQcGuyYlXTVU19peiuUWBxs9Uy6uCC0tHBloUL0kFgLPh09Yg9FpTVOhRIS9YKFpjx2O4tMQhImvfKep2uimVDkZPtTRUjUPo1SelcD9P0t6XLvM9LpTlT1zNx/DcrkacbJT4Z2LaDDXGVWf+l6QnGv4EN92buxgt11LJD5Mkiby5tiRcIqrL22cMML/ysjtE74LTybdDG0j1jSa5w8vtKq/omNqGezrC6r0BmXUkFeuNkrPTOzvrAFHAMS/123EXAMPLESESSIONTOKENREQUIREDWHENIAMISISSUEDBY+AWSSTS=',
  Authorization: 'AWS4-HMAC-SHA256 Credential=AKIAI44QH8DHBEXAMPLE/20200308/ap-northeast-1/execute-api/aws4_request, SignedHeaders=host;x-amz-date;x-amz-security-token, Signature=e57cefdaed11f69b35eb9a9a1b526da67f22bcca415686ea7644836957590f8b'
}
Request Body:
{"message":"Hello, World!"}
```
