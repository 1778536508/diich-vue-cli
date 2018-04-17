<template>
  <div class="row">
    <form action="" class="form-horizontal">
      <div class="container-fluid">
          <h3 class="text-primary">角色添加 <small>为保证数据安全请合理添加权限</small></h3>
          <small>角色标识案例: <code>ROLE_USER_ADD</code> 如有问题请联系技术</small>
          <div class="col-sm-12" style="border-bottom: 2px solid rgba(0,0,0,0.2); margin-top: 10px;margin-bottom: 20px;"></div>
      </div>
      <div class="container-fluid">
          <div class="row">
              <div class="col-sm-5">

                    <div class="form-group">
                        <label for="name" class="control-label col-sm-3">角色名称:</label>
                        <div class="col-sm-6">
                          <input type="text" class="form-control" id="name" placeholder="请输入角色名称">
                        </div>
                    </div>
                    <div class="form-group">

                        <div class="col-sm-6 col-sm-offset-3">
                          <button type="button" data-toggle="dropdown" class="btn btn-default dropdown-toggle" style="min-width: 120px;">
                            <b id="value_cos">角色属性</b>
                            <span class="caret"></span>
                          </button>
                          <ul class="dropdown-menu" role="menu" id="menu">
                            <li v-for="vm in content" :data-val="vm.name"><a href="javascript:;">{{vm.name}}</a></li>
                            <!--<li data-val="传承人"><a href="javascript:">传承人</a></li>-->
                            <!--<li data-val="机构"><a href="javascript:">机构</a></li>-->
                            <!--<li class="divider"></li>-->
                            <!--<li data-val="作品"><a href="javascript:">作品</a></li>-->
                          </ul>
                        </div>
                    </div>
                    <div>
                      <!--<button type="button" class="btn btn-success" @click="btnData()">获取数据</button>-->
                    </div>

              </div>
              <div class="col-sm-6">
                <ul id="treeDemo" class="ztree" style="margin: 0 auto;">

                </ul>
              </div>
              <div class="col-sm-12">
                <div style="border-top: 1px solid rgba(0,0,0,0.2);margin-top: 20px;padding-top: 10px; margin-bottom: 20px;" class="text-center">
                  <router-link to="/cosplay/list" tag="button" type="button" class="btn btn-primary">Cancel</router-link>
                  <button type="submit" class="btn btn-success">Submit</button>
                </div>
              </div>
          </div>

      </div>
    </form>
  </div>

</template>

<script>
  import axios from 'axios'
  import ztree from '../../assets/zTreeBootstrap/jquery.ztree.core'
  import excheck from '../../assets/zTreeBootstrap/jquery.ztree.excheck'
  import exedit from '../../assets/zTreeBootstrap/jquery.ztree.exedit'


  export default {
    name:'focusimg',
    data () {                             //数据
      return {                              //将数据返回
          content:[
            {name:"项目"},
            {name:"传承人"},
            {name:"机构"},
            {name:"作品"}
          ],
          zNodes:[
            {id:1, pId:0, name:"后台资源", open:true},
            {id:101, pId:1, name:"项目"},
//              {id:201, pId:101, name:"项目1"},
//              {id:202, pId:101, name:"项目2"},
//              {id:203, pId:101, name:"项目3"},
//              {id:204, pId:101, name:"项目4"},
            {id:102, pId:1, name:"传承人"},
//              {id:301, pId:102, name:"传承人1"},
//              {id:302, pId:102, name:"传承人2"},
//              {id:303, pId:102, name:"传承人3"},
//              {id:304, pId:102, name:"传承人4"},
            {id:103, pId:1, name:"作品"},
//              {id:401, pId:103, name:"作品1"},
//              {id:402, pId:103, name:"作品2"},
//              {id:403, pId:103, name:"作品3"},
//              {id:404, pId:103, name:"作品4"},
            {id:104, pId:1, name:"机构"}
//              {id:501, pId:104, name:"机构1"},
//              {id:502, pId:104, name:"机构2"},
//              {id:503, pId:104, name:"机构3"},
//              {id:504, pId:104, name:"机构4"}
          ],
          dataAll:{},
          nowIndex: 1
      }
    },
    methods:{
      btnData(){
          axios({
              method:"GET",
              url:"http://localhost:3000/"
          }).then(req =>{

            var _this = this;

            const obj = eval('('+ req.data +')');
            this.dataAll = obj;

            this.dataAll.forEach(function (val, index) {
               if(val.data_type == 0){
//                 console.log("项目",val.cn_name);
                    _this.zNodes.push(
                      {id:200+index+1, pId:101, name:val.cn_name}
                    )
               }
              if(val.data_type == 1){
//                console.log("传承人",val.cn_name);
                    _this.zNodes.push(
                      {id:300+index+1, pId:102, name:val.cn_name}
                    )
              }
              if(val.data_type == 2){
//                console.log("作品",val.cn_name);
                    _this.zNodes.push(
                      {id:400+index+1, pId:103, name:val.cn_name}
                    )
              }
              if(val.data_type == 3){
//                console.log("机构",val.cn_name);
                    _this.zNodes.push(
                      {id:500+index+1, pId:104, name:val.cn_name}
                    )
              }
            })
            console.log(this.zNodes);
          }).catch(res =>{
            console.log('请求失败！')
          })
        }
    },
    mounted:function(){

      //获取全局的this指向
      var _this = this;
      _this.btnData();

      //第三方插件
      var setting = {
        view: {
          addHoverDom: addHoverDom,
          removeHoverDom: removeHoverDom,
          selectedMulti: false
        },
        check: {
          enable: true
        },
        data: {
          simpleData: {
            enable: true
          }
        },
        edit: {
          enable: true
        }
      };

//      var zNodes =[
//        {id:1, pId:0, name:"后台资源", open:true},
//        {id:101, pId:1, name:"项目"},
//        {id:201, pId:101, name:"项目1"},
//        {id:202, pId:101, name:"项目2"},
//        {id:203, pId:101, name:"项目3"},
//        {id:204, pId:101, name:"项目4"},
//        {id:102, pId:1, name:"传承人"},
//        {id:301, pId:102, name:"传承人1"},
//        {id:302, pId:102, name:"传承人2"},
//        {id:303, pId:102, name:"传承人3"},
//        {id:304, pId:102, name:"传承人4"},
//        {id:103, pId:1, name:"作品"},
//        {id:401, pId:103, name:"作品1"},
//        {id:402, pId:103, name:"作品2"},
//        {id:403, pId:103, name:"作品3"},
//        {id:404, pId:103, name:"作品4"},
//        {id:104, pId:1, name:"机构"},
//        {id:501, pId:104, name:"机构1"},
//        {id:502, pId:104, name:"机构2"},
//        {id:503, pId:104, name:"机构3"},
//        {id:504, pId:104, name:"机构4"}
//
//      ];

      //获取Vue.data.zNodes下的数
      var znodes = _this.zNodes;

      //执行
//      console.log("调用的方法");
      window.onload = function () {
//        console.log("调用的方法");
//        console.log(111)
                           //选择容器      对象参数    数据
        $.fn.zTree.init($("#treeDemo"), setting, znodes);
      };


      var newCount = 1;
      function addHoverDom(treeId, treeNode) {
        var sObj = $("#" + treeNode.tId + "_span");
        if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
        var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
          + "' title='add node' onfocus='this.blur();'></span>";
        sObj.after(addStr);
        var btn = $("#addBtn_"+treeNode.tId);
        if (btn) btn.bind("click", function(){
          var zTree = $.fn.zTree.getZTreeObj("treeDemo");
          zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"new node" + (newCount++)});
          return false;
        });
      };
      function removeHoverDom(treeId, treeNode) {
        $("#addBtn_"+treeNode.tId).unbind().remove();
      };




      //下拉列表 添加标题
      $("#menu").on("click","li",function () {
        $("#value_cos").text($(this).attr("data-val"));
      })
    }
  }


</script>

<style>

  .ztree * {padding:0; margin:0; font-size:14px; font-family: Verdana, Arial, Helvetica, AppleGothic, sans-serif}
  .ztree {margin:0; padding:5px; color:#333}
  .ztree li{padding:0; margin:0; list-style:none; line-height:17px; text-align:left; white-space:nowrap; outline:0}
  .ztree li ul{ margin:0; padding:0 0 0 18px}
  /*.ztree li ul.line{ background:url() 0 0 repeat-y;}*/

  .ztree li a {padding-right:3px; margin:0; cursor:pointer; height:21px; color:#333; background-color: transparent; text-decoration:none; vertical-align:top; display: inline-block}
  .ztree li a:hover {text-decoration:underline}
  .ztree li a.curSelectedNode {padding-top:0px; background-color:#e5e5e5; color:black; height:21px; opacity:0.8;}
  .ztree li a.curSelectedNode_Edit {padding-top:0px; background-color:#e5e5e5; color:black; height:21px; border:1px #666 solid; opacity:0.8;}
  .ztree li a.tmpTargetNode_inner {padding-top:0px; background-color:#aaa; color:white; height:21px; border:1px #666 solid;
    opacity:0.8; filter:alpha(opacity=80)}
  .ztree li a.tmpTargetNode_prev {}
  .ztree li a.tmpTargetNode_next {}
  .ztree li a input.rename {height:14px; width:80px; padding:0; margin:0;
    font-size:12px; border:1px #585956 solid; *border:0px}
  .ztree li span {line-height:21px; margin-right:2px}
  .ztree li span.button {line-height:0; margin:0; padding: 0; width:21px; height:21px; display: inline-block; vertical-align:middle;
    border:0 none; cursor: pointer;outline:none;
    background-color:transparent; background-repeat:no-repeat; background-attachment: scroll;
    background-image:url("../../assets/images/bootstrap.png"); *background-image:url("../../assets/images/bootstrap.png")}

  .ztree li span.button.chk {width:13px; height:13px; margin:0 2px; cursor: auto}
  .ztree li span.button.chk.checkbox_false_full {background-position: -5px -5px;}
  .ztree li span.button.chk.checkbox_false_full_focus {background-position: -5px -26px;}
  .ztree li span.button.chk.checkbox_false_part {background-position: -5px -48px;}
  .ztree li span.button.chk.checkbox_false_part_focus {background-position: -5px -68px;}
  .ztree li span.button.chk.checkbox_false_disable {background-position: -5px -89px;}
  .ztree li span.button.chk.checkbox_true_full {background-position: -26px -5px;}
  .ztree li span.button.chk.checkbox_true_full_focus {background-position: -26px -26px;}
  .ztree li span.button.chk.checkbox_true_part {background-position: -26px -48px;}
  .ztree li span.button.chk.checkbox_true_part_focus {background-position: -26px -68px;}
  .ztree li span.button.chk.checkbox_true_disable {background-position: -26px -89px;}
  .ztree li span.button.chk.radio_false_full {background-position: -47px -5px;}
  .ztree li span.button.chk.radio_false_full_focus {background-position: -47px -26px;}
  .ztree li span.button.chk.radio_false_part {background-position: -47px -47px;}
  .ztree li span.button.chk.radio_false_part_focus {background-position: -47px -68px;}
  .ztree li span.button.chk.radio_false_disable {background-position: -47px -89px;}
  .ztree li span.button.chk.radio_true_full {background-position: -68px -5px;}
  .ztree li span.button.chk.radio_true_full_focus {background-position: -68px -26px;}
  .ztree li span.button.chk.radio_true_part {background-position: -68px -47px;}
  .ztree li span.button.chk.radio_true_part_focus {background-position: -68px -68px;}
  .ztree li span.button.chk.radio_true_disable {background-position: -68px -89px;}

  .ztree li span.button.switch {width:21px; height:21px}
  .ztree li span.button.root_open{background-position:-105px -63px}
  .ztree li span.button.root_close{background-position:-126px -63px}
  .ztree li span.button.roots_open{background-position: -105px 0;}
  .ztree li span.button.roots_close{background-position: -126px 0;}
  .ztree li span.button.center_open{background-position: -105px -21px;}
  .ztree li span.button.center_close{background-position: -126px -21px;}
  .ztree li span.button.bottom_open{background-position: -105px -42px;}
  .ztree li span.button.bottom_close{background-position: -126px -42px;}
  .ztree li span.button.noline_open{background-position: -105px -84px;}
  .ztree li span.button.noline_close{background-position: -126px -84px;}
  .ztree li span.button.root_docu{ background:none;}
  .ztree li span.button.roots_docu{background-position: -84px 0;}
  .ztree li span.button.center_docu{background-position: -84px -21px;}
  .ztree li span.button.bottom_docu{background-position: -84px -42px;}
  .ztree li span.button.noline_docu{ background:none;}

  .ztree li span.button.ico_open{margin-right:2px; background-position: -147px -21px; vertical-align:top; *vertical-align:middle}
  .ztree li span.button.ico_close{margin-right:2px; margin-right:2px; background-position: -147px 0; vertical-align:top; *vertical-align:middle}
  .ztree li span.button.ico_docu{margin-right:2px; background-position: -147px -43px; vertical-align:top; *vertical-align:middle}
  .ztree li span.button.edit {margin-left:2px; margin-right: -1px; background-position: -189px -21px; vertical-align:top; *vertical-align:middle}
  .ztree li span.button.edit:hover {
    background-position: -168px -21px;
  }
  .ztree li span.button.remove {margin-left:2px; margin-right: -1px; background-position: -189px -42px; vertical-align:top; *vertical-align:middle}
  .ztree li span.button.remove:hover {
    background-position: -168px -42px;
  }
  .ztree li span.button.add {margin-left:2px; margin-right: -1px; background-position: -189px 0; vertical-align:top; *vertical-align:middle}
  .ztree li span.button.add:hover {
    background-position: -168px 0;
  }
  /*.ztree li span.button.ico_loading{margin-right:2px; background:url(../assets/images/loading.png) no-repeat scroll 0 0 transparent; vertical-align:top; *vertical-align:middle}*/

  ul.tmpTargetzTree {background-color:#FFE6B0; opacity:0.8; filter:alpha(opacity=80)}

  span.tmpzTreeMove_arrow {width:16px; height:21px; display: inline-block; padding:0; margin:2px 0 0 1px; border:0 none; position:absolute;
    background-color:transparent; background-repeat:no-repeat; background-attachment: scroll;
    background-position:-168px -84px; background-image:url("../../assets/images/bootstrap.png"); *background-image:url("../../assets/images/bootstrap.png")}

  ul.ztree.zTreeDragUL {margin:0; padding:0; position:absolute; width:auto; height:auto;overflow:hidden; background-color:#cfcfcf; border:1px #00B83F dotted; opacity:0.8; filter:alpha(opacity=80)}
  .ztreeMask {z-index:10000; background-color:#cfcfcf; opacity:0.0; filter:alpha(opacity=0); position:absolute}

  .node_name{
    font-weight: bold;
  }
</style>
