<template>
  <div style="height: 100%;">
    <div class="container-fluid" style="height: 100%;">
      <div class="row">
        <div class="col-sm-12 home_configure">
          <h3 class="text-primary">角色管理<small>&nbsp;&nbsp;分配角色的操作权限</small></h3>
          <div>
            <input type="button" value="GO!" class="btn btn-default">
            <input type="text" placeholder="请输入字段...">
          </div>
        </div>
      </div>
      <div class="row" style="margin-top: 20px; height: 50px;">
        <div class="col-sm-1">
          <router-link to="/cosplay/create" class="btn btn-success creaList">创建角色</router-link>
        </div>
        <div class="col-sm-4">
          <router-link to="/cosplay/list" class="btn btn-primary creaList">查看列表</router-link>
        </div>
      </div>
      <div class="row" style="height: 68%;">
        <div class="col-sm-12" style="box-shadow: 1px 1px 10px rgba(0,0,0,0.5); height: 100%; border-radius: 10px; overflow: auto;">
          <router-view></router-view>
        </div>
      </div>
      <div>
        <p class="text-right text-muted" style="margin-top: 10px;">2018 @ FeiYi All rights reserved</p>
      </div>


    </div>

  </div>
</template>

<style>
  .creaList{
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
  }
  .creaList.router-link-active{
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
    margin-top: -5px;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
  }

</style>

