<template>
  <div>

    <table class="table table-hover table-striped" style="border: 1px solid #ddd;border-right: 1px solid #ddd; margin-top: 20px;">
      <thead>
      <tr class="whit text-white">
        <th><input type="checkbox" v-on:click="checkBox()">&nbsp;全选</th>
        <th>序号</th>
        <th>角色名称</th>
        <th>创建时间</th>
        <th>状态</th>
        <th>Action</th>
        <th>Remove</th>
      </tr>
      </thead>
      <tbody class="font-w">


      <tr v-for="(val,index) in users">
        <td><input type="checkbox" :checked="val.Check" v-model="val.Check"></td>
        <td>{{index+1}}</td>
        <td>{{val.name}}</td>
        <td>{{val.date}}</td>
        <td>{{val.state}}</td>
        <td><a href="javascript:;" class="btn btn-success">编辑</a></td>
        <td><a href="javascript:;" class="btn btn-danger" @click="userIndex = index" data-toggle="modal" data-target="#del">删除</a></td>
      </tr>
      <tr>
        <td colspan="7" class="text-right">
          <button class="btn btn-danger text-right">删除选项</button>
          <button type="button" class="btn btn-danger" style="outline: none; border: none;" @click="userIndex = -1"  data-toggle="modal" data-target="#del">删除全部</button>
        </td>
      </tr>



      </tbody>

    </table>
    <div class="row paging clearfix" >
      <div class="clearfix">
        <p class="text-success" style="margin-left: 15px">共<code>1</code>页</p>
        <p class="text-success" style="margin-left: 10px;"><code>10</code>条</p>
      </div>
      <div>
        <div class="container-fluid">
          <ul class="pagination" id="pagination">
            <li><a href="javascript:;">&laquo;</a></li>
            <li class="active pag_li"><a href="#">1</a></li>
            <li class="pag_li"><a href="javascript:;">2</a></li>
            <li class="pag_li"><a href="javascript:;">3</a></li>
            <li class="pag_li"><a href="javascript:;">4</a></li>
            <li class="pag_li"><a href="javascript:;">5</a></li>
            <li><a href="javascript:;">&raquo;</a></li>
          </ul>
        </div>
      </div>

    </div>

    <!--模态框-->
    <div class="modal" id="del">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
            <h4 class="modal-title">
              <b class="text-danger">小心操作，后果自负！</b>
            </h4>
          </div>
          <div class="modal-body">
              <div v-show="userIndex != -1">
                <p>
                  <label class="col-sm-2">角 色:</label>
                  <code>{{users[userIndex] ? users[userIndex].name : ""}}</code>
                </p>
                <p>
                  <label class="col-sm-2">创建时间:</label>
                  <code>{{users[userIndex] ? users[userIndex].date : ""}}</code>
                </p>
                <p>
                  <label class="col-sm-2">状 态:</label>
                  <code>{{users[userIndex] ? users[userIndex].state : ""}}</code>
                </p>
              </div>
              <div v-show="userIndex == -1">
                <p class="text-danger">有必要做的这么绝吗？ 全删了啊！！</p>
              </div>
              <div class="text-center">
                <button type="button" class="btn btn-success" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-danger" @click="deleteUser()" data-dismiss="modal">确认删除</button>
              </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>


  export default {
    name: 'list',
    data () {                             //数据
      return {                              //将数据返回
        users: [
          {name:"运营",date:"2017-12-12 16:44:51",state:"启用",Check:false},
          {name:"管理员",date:"2018-1-2 10:43:1",state:"未启用",Check:false},
          {name:"管理员",date:"2018-1-16 12:04:51",state:"未启用",Check:false},
          {name:"管理员",date:"2018-1-24 9:44:00",state:"启用",Check:false},
          {name:"运营",date:"2018-1-30 16:44:51",state:"启用",Check:false},
          {name:"运营",date:"2018-2-2 16:44:51",state:"未启用",Check:false},
          {name:"管理员",date:"2018-2-23 16:44:51",state:"启用",Check:false},
          {name:"运营",date:"2018-3-1 16:44:51",state:"未启用",Check:false},
          {name:"管理员",date:"2018-3-3 16:44:51",state:"启用",Check:false},
          {name:"运营",date:"2018-3-9 16:44:51",state:"启用",Check:false}
        ],
        chck:false,
        userIndex: -1
      }
    },
    mounted: function () {                   //jq写在这路
      $(function () {
        $("#plaim").on("click","strong",function () {
          $(this).addClass("init").siblings("strong").removeClass("init");
        })
        $("#pagination").on("click",".pag_li",function () {
          $(this).addClass("active").siblings(".pag_li").removeClass("active");
        })
      })
    },
    methods:{                                 //Vue方法写在这里
      checkBox(){
        var _this = this;
        this.chck = !this.chck;
          this.users.forEach(function (v) {
            if(_this.chck == true){
              v.Check = true
            }else{
              v.Check = false
            }
          })
      },
      deleteUser(){
        if(this.userIndex == -1){
          this.users = {};
        }else{
          this.users.splice(this.userIndex,1);
        }

      }

    }
  }




</script>

<style>
  .whit {
    background-color: #2d3f53;
    color: #fff;
  }
  .paging{
    height: 50px;
  }
  .paging > div:nth-of-type(1){
    float: left;
  }
  .paging > div:nth-of-type(2){
    float: right;
  }
  .paging > div:nth-of-type(1) > p{
    float: left;
  }
  .paging > div:nth-of-type(2) span{
    margin-top: 2px;
  }
  .paging > div:nth-of-type(2) span:nth-of-type(1){
    float: left;
    margin-right: 5px;

  }
  .paging > div:nth-of-type(2) span:nth-of-type(2){
    float: right;
    margin-left: 5px;
    margin-right: 15px;
  }
  .paging > div:nth-of-type(2) strong.init{
    box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
    margin-top: -5px;
    transition: all .2s;
    background: #5cb85c;
    border: none;
  }

</style>
