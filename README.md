# hz-youtube-backend

### 1、项目简介
> 本项目主要参考 [youtubeclone-backend](https://github.com/manikandanraji/youtubeclone-backend)，采用的技术主要如下：
>
> + egg.js
> + typescript
> + sequelize
> + mysql
> + jwt

### 2、项目数据库设计



### 3、接口设计

#### 1、用户登录

##### 1.1 接口名称

> /api/v1/user/login   POST

##### 1.2 请求参数

```json
{
	"email": "xxx@163.com",
  "password": "123456"
}
```

##### 1.3 响应参数

```json
{
  "user": {
    "email": "xx@163.com",
    "token": "xxx",
    "name": "xxx",
    "channelDescription": "xxx",
    "avatar": null
  }
}
```

#### 2、用户注册

##### 2.1 接口名称

> /api/v1/user  POST

##### 2.2 请求参数

```json
{
	"name": "xx",
  "email": "xxx@163.com",
  "password": "123456"
}
```

##### 2.3 响应参数

```json
{
  "user": {
    "email": "xx@163.com",
    "token": "xxx",
    "name": "xxx",
    "channelDescription": "xxx",
    "avatar": null
  }
}
```

#### 3、获取当前登录用户的信息

##### 3.1 接口名称

> /api/v1/user  GET

##### 3.2 请求参数

> 请求头： **Authorization : Bearer xxxxx**

```json
{
  
}
```

##### 3.3 响应参数

```json
{
  "user": {
    "email": "xx@163.com",
    "token": "xxx",
    "name": "xxx",
    "channelDescription": "xxx",
    "avatar": null
  }
}
```

#### 4、获取用户的信息

> 根据user_id获取用户的资料信息

##### 4.1 接口名称

> /api/v1/user/:user_id  GET

##### 4.2 请求参数

```json
{
  
}
```

##### 4.3 响应参数

```json
{
  "user": {
    "email": "xx@163.com",
    "token": "xxx",
    "name": "xxx",
    "channelDescription": "xxx",
    "avatar": null
  }
}
```

#### 5、当前登录用户信息修改

##### 5.1 接口名称

> /api/v1/user  PUT

##### 5.2 请求参数

```json
{
    "email": "xx@163.com",
    "name": "xxx",
    "channelDescription": "xxx",
    "avatar": null
}
```

##### 5.3 响应参数

```json
{
  
}
```



#### 6、给当前登录用户添加订阅

##### 6.1 接口名称

> /api/v1/user/subscribe  POST

##### 6.2 请求参数

```json
{
  channel_id：'xxx'
}
```

##### 6.3 响应参数

```json
{
  
}
```

#### 7、给当前登录用户取消订阅

##### 7.1 接口名称

> /api/v1/user/subscribe  DELETE

##### 7.2 请求参数

```json
{
  channel_id：'xxx'
}
```

##### 7.3 响应参数

```json
{
  
}
```

#### 8、查询当前登录用户的订阅列表

##### 8.1 接口名称

> /api/v1/user/subscribe  GET

##### 8.2 请求参数

```json
{
}
```

##### 8.3 响应参数

```json
[
  {
    'user_id':'',
    'name':'',
    'avatar':''
  }
]
```

#### 9、上传视频

##### 9.1 接口名称

> /api/v1/user/video/upload POST

##### 9.2 请求参数

> multipart/*form*-data

```json
{
}
```

##### 9.3 响应参数

```json
{
  url:'视频地址',
  cover:'封面'
}
```

#### 10、存储视频

##### 10.1 接口名称

> /api/v1/user/video POST

##### 10.2 请求参数

```json
{
  video_id:'视频的远程地址',
  title:'视频标题',
  description:'视频的描述',
  cover:'视频的封面'
}
```

##### 10.3 响应参数

```json
{
  
}
```

#### 11、给视频添加评论

##### 11.1 接口名称

> /api/v1/video/comment  POST

##### 11.2 请求参数

```json
{
  video_id:'视频的远程地址',
  content:'评论的内容'
}
```

##### 11.3 响应参数

```json
{
  
}
```

#### 12、获取视频评论列表

##### 12.1 接口名称

> /api/v1/video/comment  GET

##### 12.2 请求参数

```json
{
  video_id:'视频的远程地址',
}
```

##### 12.3 响应参数

```json
[
  {
    content:'评论',
    user:{
      name:'用户姓名',
      avatar:'用户头像'
    }
  }
]
```

#### 13、视频点赞

##### 13.1 接口名称

> /api/v1/video/like  POST

##### 13.2 请求参数

```json
{
  video_id:'视频的远程地址',
  like:'1'
}
```

##### 13.3 响应参数

```json
{
  
}
```

#### 14、当前登录用户视频点赞列表

##### 14.1 接口名称

> /api/v1/video/like  GET

##### 14.2 请求参数

```json
{
  
}
```

##### 14.3 响应参数

```json
[
  {
    video_id:'视频的远程地址',
    title:'视频标题',
    description:'视频的描述',
    cover:'视频的封面'
  }
]
```

