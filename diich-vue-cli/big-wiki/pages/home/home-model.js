const sliderApi = "/data/slider.json";  //轮播图数据
const basePicUrl = "http://resource.efeiyi.com/image/";  //图片存放地址
/**
 * params {}
 * url 请求地址
 * type 请求类型
 * data 请求类型
 * sCallback 请求成功回调
 * @param params
 */
var httpRequest = function (params) {
    if (!params.type) {
        params.type = "GET";
        params.data = null;
    }

    $.ajax({
        url: params.url,
        type: params.type,
        data: params.data,
        dataType: "text",
        success: function (res) {
            params.sCallback && params.sCallback(JSON.parse(res));
        },
        error: function (error) {
            console.log('error->', error)
        }
    })
}


/**
 * 获取轮播图数据
 */
var getSliderData = function (url, callback) {
    var params={
        url: url,
        sCallback: function (data) {
            var _data = data.data;
            var result = [];
            //临时记录项目、传承人目录
            var typeUrl = null;
            for (let i = 0; i < _data.length; i++) {

                //0是项目  1是传承人
                typeUrl = (_data[i].targetType == 0) ? basePicUrl + "project/" : basePicUrl + "master/";

                result.push({
                    "targetType": _data[i].targetType,
                    "name": _data[i].baseModel.contentFragmentList[0].content,
                    "imgUrl": typeUrl + _data[i].baseModel.contentFragmentList[1].resourceList[0].uri
                })
            }
            callback && callback(result);
        }
    }
    httpRequest(params);
}

