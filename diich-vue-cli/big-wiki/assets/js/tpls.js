/**
 * 头部导航
 * @type {{props: string[], template: string, data: wkHeader.data, methods: {}}}
 */
const wkHeader = {
    props: ['title'],
    template: `<header>
                  <div class="menu">
                    <a href="javascript:;" class="icon"></a>
                  </div>
                  <span>{{title}}</span>
              </header>`,
    data: function () {
        return {}
    },
    methods: {}
}


const wkFooter = {
    props:{
        index:{//索引
            type:Number,
            default:0
        }
    },
    template:`<footer>
                <a href="" class="link" v-for="item,index in footData"><i :class="item.icon"></i>
                    <div class="txt">{{item.name}}</div>
                </a>
            </footer>`,
    data:function () {
        return {
            footData:[
                {
                    name:"首页",
                    icon:"icon-home",
                    link:"/"
                },
                {
                    name:"资讯",
                    icon:"icon-news",
                    link:"/news"
                },
                {
                    name:"百科",
                    icon:"icon-cyclopedia",
                    link:"/cyclopedia"
                },
                {
                    name:"活动",
                    icon:"icon-activity",
                    link:"/activity"
                },
                {
                    name:"活化馆",
                    icon:"icon-activate",
                    link:"/activate"
                }
            ]
        }
    }
}


/**
 * 轮播图
 * @type swiper 数据
 * @type imgUrl 图片地址
 */
const wkSwiper = {
    props: {
        swiper: []
    },
    template: `<div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in swiper"><img :src="item.imgUrl" alt=""></div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>`
}


//项目 作品 轮播
const swiperLevel = {
    props:{
        data:[]
    },
    template:`<div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item,index in data">
                            <div class="img"><i class="flag">{{item.flag}}</i><img :src="item.imgUrl" alt=""></div>
                            <div class="desc">
                                <h3>{{item.name}}</h3>
                                <h4>#{{item.source}}</h4>
                                <div class="info">{{item.info}}</div>
                            </div>
                        </div>
                    </div>
                </div>`,
    mounted:function () {
        var swiper = new Swiper('.merge .swiper-container', {
            slidesPerView: 'auto'
        });
    }
}


/**
 * 五个分类图标
 * @type
 */
const wkCategory = {
    template: `<section class="links">
                    <a class="item" v-for="item in links" :href="item.link">
                        <img :src="item.imgUrl" alt="">
                        <div class="txt">{{item.name}}</div>
                    </a>
                </section>`,
    data: function () {
        return {
            links: [
                {name: '口头传说和表达', link: 'baidu1', imgUrl: '../../assets/images/home/category-icon-1.png'},
                {name: '社会风俗和礼仪、节庆', link: 'baidu2', imgUrl: '../../assets/images/home/category-icon-2.png'},
                {name: '表演艺术', link: 'baidu3', imgUrl: '../../assets/images/home/category-icon-3.png'},
                {name: '有关自然界 和宇宙的知识的知识的知识', link: 'baidu4', imgUrl: '../../assets/images/home/category-icon-4.png'},
                {name: '传统手工艺技能', link: 'baidu5', imgUrl: '../../assets/images/home/category-icon-5.png'}
            ]
        }
    }
}


/**
 * 搜索框
 * @type {{template: string, methods: {}}}
 */
const wkSearch = {
    template:`<section class="search"><input type="text" placeholder="请输入搜索关键词"></section>`,
    methods:{

    }
}


/**
 * 资讯列表
 * @type {{props: {data: Array}, template: string, methods: {}}}
 */
const newsItem = {
    props:{
        data:[]
    },
    template:`<section class="news-item">
                    <a class="link" href="" v-for="item in data">
                        <div class="desc">
                            <i class="icon-hot"></i>
                            <h3>{{item.name}}</h3>
                            <div class="info">
                                <span class="source">#{{item.source}}</span>
                                <span class="time">{{item.time}}</span>
                            </div>
                        </div>
                        <div class="img"><img :src="item.imgUrl" alt=""></div>
                    </a>
                </section>`,
    methods:{

    }
}


/**
 * 活动列表
 * @type {{props: {activity: Array}, template: string}}
 */
const wkActivity = {
    props:{
        activity:[]
    },
    template:`<section class="activity-item">
                    <a class="link" :href="item.link" v-for="item in activity">
                        <img :src="item.imgUrl" alt="">
                        <div class="desc">
                            <i class="icon-hot"></i>
                            <h3>{{item.name}}</h3>
                            <div class="info">
                                <span class="coord">#{{item.address}}</span>
                                <span class="time">{{item.time}}</span>
                            </div>
                        </div>
                    </a>
                </section>`,
}























