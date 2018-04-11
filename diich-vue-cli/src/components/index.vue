<template>
  <div class="box container-fluid" id="home">
    <div class="row row_box">
      <div class="col-sm-2 text-white">
        <div class="row">
          <i class="fa fa-bank i"></i>
          <span class="span">大数据管理平台</span>
        </div>
        <div class="row row_logo">
          <em class="em_logo_img  fa-spin">
            <em class="logo_img">
              <img src="../assets/images/admin.jpeg" alt="">
            </em>
          </em>
          <span class="font_admin">admin</span>
        </div>
        <div class="row" style="margin-top: 50px;"><h3>LIST ndyname</h3></div>




        <div class="row row_list">
          <div class="list_yun col-sm-12" code-id="1">
            <i class="fa fa-file-text-o"></i>
            <span>运营管理模块</span>
            <em class="fa fa-chevron-down"></em>
          </div>
          <ul class="list_ulList col-sm-12">
            <li><a href="javascript:;" class="text-white">轮播图管理</a></li>
            <li><a href="javascript:;" class="text-white">精选产品配置</a></li>
            <li><a href="javascript:;" class="text-white">资讯管理</a></li>
            <li><a href="javascript:;" class="text-white">首页项目配置</a></li>
            <li><a href="javascript:;" class="text-white">首页机构配置</a></li>
            <li><a href="javascript:;" class="text-white">首页咨询额皮质</a></li>
            <li><a href="javascript:;" class="text-white">精选项目配置</a></li>
            <li><a href="javascript:;" class="text-white">精选传承人配置</a></li>
          </ul>
        </div>
        <div class="row row_list">
          <div class="list_yun col-sm-12" code-id="1">
            <i class="fa fa-folder-open"></i>
            <span>项目管理</span>
            <em class="fa fa-chevron-down"></em>
          </div>
          <ul class="list_ulList col-sm-12">
            <li><a href="javascript:;" class="text-white">作品管理</a></li>
            <li><a href="javascript:;" class="text-white">项目管理</a></li>
            <li><a href="javascript:;" class="text-white">机构管理</a></li>
            <li><a href="javascript:;" class="text-white">传承人管理</a></li>
            <li><a href="javascript:;" class="text-white">词条认领管理</a></li>
          </ul>
        </div>
        <div class="row row_list">
          <div class="list_yun col-sm-12" code-id="1">
            <i class="fa fa-list"></i>
            <span>分类表单管理</span>
            <em class="fa fa-chevron-down"></em>
          </div>
          <ul class="list_ulList col-sm-12">
            <li><a href="javascript:;" class="text-white">表单管理</a></li>
            <li><a href="javascript:;" class="text-white">分类管理</a></li>
            <li><a href="javascript:;" class="text-white">属性管理</a></li>
          </ul>
        </div>
        <div class="row row_list">
          <div class="list_yun col-sm-12" code-id="1">
            <i class="fa fa-user"></i>
            <span>用户管理</span>
            <em class="fa fa-chevron-down"></em>
          </div>
          <ul class="list_ulList col-sm-12">
            <li><router-link to="/cosplay" class="text-white">角色管理</router-link></li>
            <li><router-link to="/news" class="text-white">用户管理</router-link></li>
          </ul>
        </div>

      </div>
      <div class="col-sm-10" style="background: rgba(247,247,247,1);">
        <div class="row">
          <div class="col-sm-12">
            <div class="row box9_12">
              <div class="col-sm-10">
                <i class="fa fa-bars" style="color: rgba(92,115,141,1); cursor: pointer; font-size: 30px"></i>
              </div>
              <div class="col-sm-2">
                <em><img src="../assets/images/admin.jpeg" alt=""></em>
                <span>
                    <a href="javascript:;"  style="color: rgba(92,115,141,1); cursor: pointer;">admin</a>
                    <i class="fa fa-sort-desc" style="color: rgba(92,115,141,1); cursor: pointer;"></i>
                </span>
              </div>
            </div>
          </div>
        </div>


        <router-view></router-view>



      </div>
    </div>
  </div>
</template>

<script>

  $(function () {
    $(".list_yun").click(function () {
      $(this).parent().siblings('.row_list').children('.list_ulList').slideUp();
      $(this).parent().siblings('.row_list').children('.list_yun').attr('code-id',"1");
      $(this).parent().siblings('.row_list').children('.list_yun').children('em').css({
        "transform":"rotate(0deg)",
        "transition":"all .5s"
      });
      if($(this).attr("code-id") == 1){
        $(this).next().slideDown();
        $(this).children('em').css({
          "transform":"rotate(-180deg)",
          "transition":"all .5s"
        })
        $(this).attr("code-id","2");
      }else{
        $(this).next().slideUp();
        $(this).children('em').css({
          "transform":"rotate(0deg)",
          "transition":"all .5s"
        })
        $(this).attr("code-id","1");
      }
    })
    $(".list_ulList").on("click","li",function () {
      $(this).addClass("active").siblings().removeClass("active");
    })
  })



export default {
  name: 'IndexLink',
  data () {
    return {
      msg: 'hello world ndyname'
    }
  }
}
</script>

<style scoped>

</style>

