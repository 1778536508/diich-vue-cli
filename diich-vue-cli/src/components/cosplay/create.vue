<template>
  <div class="row">
    <div class="container-fluid">
        <h3 class="text-primary">角色添加 <small>为保证数据安全请合理添加权限</small></h3>
        <small>角色标识案例: <code>ROLE_USER_ADD</code> 如有问题请联系技术</small>
        <div class="col-sm-12" style="border-bottom: 2px solid rgba(0,0,0,0.2); margin-top: 10px;margin-bottom: 20px;"></div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-5">
              <form action="" class="form-horizontal">
                  <div class="form-group">
                      <label for="name" class="control-label col-sm-3">角色名称:</label>
                      <div class="col-sm-6">
                        <input type="text" class="form-control" id="name" placeholder="请输入角色名称">
                      </div>
                  </div>
                  <div class="form-group">
                      <label for="attribute" class="control-label col-sm-3">角色属性:</label>
                      <div class="col-sm-6">
                        <input type="text" class="form-control" id="attribute" placeholder="请输入角色属性">
                      </div>
                  </div>
              </form>
            </div>
            <div class="col-sm-6">
              <ul id="treeDemo" class="ztree" style="margin: 0 auto;"></ul>
            </div>
        </div>
    </div>

  </div>

</template>

<script>

  import ztree from '../../assets/zTreeBootstrap/jquery.ztree.core'
  import excheck from '../../assets/zTreeBootstrap/jquery.ztree.excheck'
  import exedit from '../../assets/zTreeBootstrap/jquery.ztree.exedit'


  export default {
    name:'focusimg',
    mounted:function(){

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

      var zNodes =[
        {id:1, pId:0, name:"后台资源", open:true},
        {id:101, pId:1, name:"项目"},
        {id:201, pId:101, name:"项目1"},
        {id:202, pId:101, name:"项目2"},
        {id:203, pId:101, name:"项目3"},
        {id:204, pId:101, name:"项目4"},
        {id:102, pId:1, name:"传承人"},
        {id:301, pId:102, name:"传承人1"},
        {id:302, pId:102, name:"传承人2"},
        {id:303, pId:102, name:"传承人3"},
        {id:304, pId:102, name:"传承人4"},
        {id:103, pId:1, name:"作品"},
        {id:401, pId:103, name:"作品1"},
        {id:402, pId:103, name:"作品2"},
        {id:403, pId:103, name:"作品3"},
        {id:404, pId:103, name:"作品4"},
        {id:104, pId:1, name:"机构"},
        {id:501, pId:104, name:"机构1"},
        {id:502, pId:104, name:"机构2"},
        {id:503, pId:104, name:"机构3"},
        {id:504, pId:104, name:"机构4"}

        // {id:2, pId:0, name:"[excheck] 复/单选框功能 演示", open:false},
        // {id:201, pId:2, name:"Checkbox 勾选操作"},
        // {id:206, pId:2, name:"Checkbox nocheck 演示"},
        // {id:207, pId:2, name:"Checkbox chkDisabled 演示"},
        // {id:208, pId:2, name:"Checkbox halfCheck 演示"},
        // {id:202, pId:2, name:"Checkbox 勾选统计"},
        // {id:203, pId:2, name:"用 zTree 方法 勾选 Checkbox"},
        // {id:204, pId:2, name:"Radio 勾选操作"},
        // {id:209, pId:2, name:"Radio nocheck 演示"},
        // {id:210, pId:2, name:"Radio chkDisabled 演示"},
        // {id:211, pId:2, name:"Radio halfCheck 演示"},
        // {id:205, pId:2, name:"用 zTree 方法 勾选 Radio"},

        // {id:3, pId:0, name:"[exedit] 编辑功能 演示", open:false},
        // {id:301, pId:3, name:"拖拽 节点 基本控制"},
        // {id:302, pId:3, name:"拖拽 节点 高级控制"},
        // {id:303, pId:3, name:"用 zTree 方法 移动 / 复制 节点"},
        // {id:304, pId:3, name:"基本 增 / 删 / 改 节点"},
        // {id:305, pId:3, name:"高级 增 / 删 / 改 节点"},
        // {id:306, pId:3, name:"用 zTree 方法 增 / 删 / 改 节点"},
        // {id:307, pId:3, name:"异步加载 & 编辑功能 共存"},
        // {id:308, pId:3, name:"多棵树之间 的 数据交互"},

        // {id:4, pId:0, name:"大数据量 演示", open:false},
        // {id:401, pId:4, name:"一次性加载大数据量"},
        // {id:402, pId:4, name:"分批异步加载大数据量"},
        // {id:403, pId:4, name:"分批异步加载大数据量"},

        // {id:5, pId:0, name:"组合功能 演示", open:false},
        // {id:501, pId:5, name:"冻结根节点"},
        // {id:502, pId:5, name:"单击展开/折叠节点"},
        // {id:503, pId:5, name:"保持展开单一路径"},
        // {id:504, pId:5, name:"添加 自定义控件"},
        // {id:505, pId:5, name:"checkbox / radio 共存"},
        // {id:506, pId:5, name:"左侧菜单"},
        // {id:507, pId:5, name:"下拉菜单"},
        // {id:509, pId:5, name:"带 checkbox 的多选下拉菜单"},
        // {id:510, pId:5, name:"带 radio 的单选下拉菜单"},
        // {id:508, pId:5, name:"右键菜单 的 实现"},
        // {id:511, pId:5, name:"与其他 DOM 拖拽互动"},
        // {id:512, pId:5, name:"异步加载模式下全部展开"},

        // {id:6, pId:0, name:"其他扩展功能 演示", open:false},
        // {id:601, pId:6, name:"隐藏普通节点"},
        // {id:602, pId:6, name:"配合 checkbox 的隐藏"},
        // {id:603, pId:6, name:"配合 radio 的隐藏"}
      ];

      $(document).ready(function(){
        $.fn.zTree.init($("#treeDemo"), setting, zNodes);
      });

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



