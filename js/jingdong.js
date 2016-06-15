$(function() {

    //bannner轮播
    function da(fff){
        // var bx=fff;
        var imgs4=$(".pic",fff);
        var dians=$(".circle",fff);
        var zuo=$(".zuo",fff)[0];
        var you=$(".you",fff)[0];
        var flag = true;
        var o = 0;
        var q = 0;
        var t=setInterval(a,2000)

            function a() {
                if (!flag) {
                    return;
                }
                flag = false;
                q = o + 1;
                if (q >= imgs4.length) {
                    q = 0;
                }
                for (var i = 0; i < imgs4.length; i++) {
                    dians[i].style.background = "#3e3e3e";
                    imgs4[i].style.opacity=0;
                }
                dians[q].style.background = "#b61b1f";
                imgs4[o].style.opacity =1;
                imgs4[q].style.opacity=0;
                imgs4[q].style.zIndex = 1;
                animate(imgs4[o], {
                    opacity: 0
                }, 800);
                animate(imgs4[q], {
                    opacity: 1
                }, 800, function() {
                    flag = true
                });
                o = q;
            }

            function b() {
                if (!flag) {
                    return;
                }
                flag = false;
                q = o - 1;
                if (q < 0) {
                    q = imgs4.length - 1;
                }
                for (var i = 0; i < imgs4.length; i++) {
                    dians[i].style.background = "#3e3e3e";
                    imgs4[i].style.opacity=0;
                }
                dians[q].style.background = "#b61b1f";
                imgs4[o].style.opacity =1;
                imgs4[q].style.opacity = 0;
                imgs4[q].style.zIndex = 1;
                animate(imgs4[o], {
                    opacity: 0
                }, 800);
                animate(imgs4[q], {
                    opacity: 1
                }, 800, function() {
                    flag = true
                });
                o = q;
            }

        fff.onmouseover = function() {
            clearInterval(t);
        }
        fff.onmouseout = function() {
            t=setInterval(a,2000);
        }
        zuo.onclick = function() {
            a();
        }
        you.onclick = function() {
            b();
        }

        for (var i = 0; i < dians.length; i++) {
            dians[i].index = i;
            dians[i].onmouseover = function() {
                for (var j = 0; j < dians.length; j++) {
                    dians[j].style.background = "#3e3e3e";
                    imgs4[o].style.opacity = 1;
                    imgs4[this.index].style.opacity=0;
                }
                dians[this.index].style.background = "#b61b1f";
                imgs4[this.index].style.zIndex =1;
                animate(imgs4[o], {opacity:0}, 800);
                animate(imgs4[this.index], {opacity:1}, 800);
                o = this.index;
                next = this.index;
            }
        }
    }
    var bx=$(".datu")[0]
    da(bx);
   



    function down(obj,drop){
        var fa=$(obj)[0];
        var drop=$(drop)[0];

        fa.onmouseover=function(){
            drop.style.display="block";
        }
        fa.onmouseout=function(){
            drop.style.display="none";
        }
    }
    down(".sl",".drop"); //送至北京下拉单
    down(".mjd",".mjd-down"); //我的京东下拉
    down(".pjd",".pjd-down"); //手机京东下拉单
    down(".fjd",".fjd-down"); //关注京东下拉单
    down(".cjd",".cjd-down"); //客户服务下拉单
    down(".website",".web"); //网站导航下拉单
    down(".h-right",".cardrop"); //购物车下拉单


    //导航侧滑单

    function ce(obj, d) {
        var il = $(obj)[0];
        var linedrop = $(d)[0]
        il.onmouseover = function() {
            linedrop.style.display = "block";
        }
        il.onmousemove = function() {
            linedrop.style.display = "block";
        }
        il.onmouseout = function() {
            linedrop.style.display = "none";
        }

    }
    ce(".item-line0", ".line1drop") //电器侧拉单
    ce(".item-line1", ".line2drop") //手机侧拉单
    ce(".item-line2", ".line3drop") //电脑侧拉单
    ce(".item-line3", ".line4drop") //家居侧拉单
    ce(".item-line4", ".line5drop") //男装侧拉单
    ce(".item-line5", ".line6drop") //化妆侧拉单
    ce(".item-line6", ".line7drop") //鞋靴侧拉单
    ce(".item-line0-1", ".line8drop") //运动侧拉单
    ce(".item-line7", ".line9drop") //汽车侧拉单
    ce(".item-line8", ".line10drop") //母婴侧拉单
    ce(".item-line9", ".line11drop") //食品侧拉单
    ce(".item-line0-2", ".line12drop") //营养侧拉单
    ce(".item-line10", ".line13drop") //图书侧拉单
    ce(".item-line11", ".line14drop") //彩票侧拉单
    ce(".item-line12", ".line15drop") //彩票侧拉单

       
   

    function sel(object){
        var lou = $(".lw",object);
        var bian=$(".lbc",object);
        var fse=$(".kk",object);
        var sf=$(".sf")[0];
        var tf=$(".trf")[0];
        var fo=$(".for")[0];
        var fi=$(".fi")[0];
        var si=$(".si")[0];
        var sev=$(".sev")[0];
        var ei=$(".ei")[0];
        var ni=$(".ni")[0];
        var ten=$(".ten")[0];
        for(var i=0;i<lou.length;i++){
            lou[i].index=i;
            fse[i].style.zIndex=0;
            fse[0].style.zIndex=1;
            sf.style.zIndex=1;
            tf.style.zIndex=1;
            fo.style.zIndex=1;
            fi.style.zIndex=1;
            si.style.zIndex=1;
            sev.style.zIndex=1;
            ei.style.zIndex=1;
            ni.style.zIndex=1;
            ten.style.zIndex=1;
            lou[i].onmouseover=function(){
                for(var j=0;j<fse.length;j++){
                    bian[j].style.display="none";
                    fse[j].style.zIndex=0;
                }
               bian[this.index].style.display="block";
               fse[this.index].style.zIndex=1;
            }
            lou[i].onmouseout=function(){
                for(var j=0;j<fse.length;j++){
                    bian[j].style.display="none";
                    fse[j].style.zIndex=0;
                }
               bian[this.index].style.display="block";
               fse[this.index].style.zIndex=1;
            }
        }

        for(var i=0;i<fse.length;i++){
            fse[i].index=i;
            fse[i].onmouseover=function(){
               bian[this.index].style.display="block";
               fse[this.index].style.zIndex=1;
            }
            fse[i].onmouseout=function(){
               bian[this.index].style.display="block";
               fse[this.index].style.zIndex=1; 
            }
        }
    }
    var tab=$(".ldo")
    for(var i=0;i<tab.length;i++){
        sel(tab[i])
    }
    

   
 
    //今日推荐
    var ul = $(".t-detail")[0];
    var lis = $(".td-1");
    var lef = $(".page-l")[0];
    var rig = $(".page-r")[0];
    var width = parseInt(getStyle(lis[0], "width"));
    var kg = true; //开关思想
    var t2 = setInterval(move, 1000)

        function move() {
            if (!kg) {
                return;
            }
            kg = false;
            var lif = getFirst(ul);
            animate(ul, {
                left: -width
            }, 300, function() {
                ul.appendChild(lif);
                ul.style.left = 0;
                kg = true;
            })
        }

        function move1() {
            if (!kg) {
                return;
            }
            kg= false;
            var lif = getFirst(ul);
            var lil = getLast(ul);
            insertBefore(lil, lif);
            ul.style.left = -width + "px";
            animate(ul, {
                left: 0
            }, 300, function() {
                kg = true;
            }); //动画效果

        }
    ul.onmouseover = function() {
        clearInterval(t2)
    }
    ul.onmouseout = function() {
        t2 = setInterval(move, 1000)
    }
    lef.onclick=function(){              
            move();
    }
    rig.onclick=function(){
            move1();
    }



    //一楼

    function lunbo(obj) {
        var imgs3 = $(".ypic", obj);
        var box3 = obj;
        var left = $(".ef-2-l", obj)[0];
        var right = $(".ef-2-r", obj)[0];
        var dian = $(".circle2", obj);
        var n = 0;
        var next = 0;
        var width = parseInt(getStyle(imgs3[0], "width"));
        var t3 = setInterval(move4, 2000);

        function move4() {
            next = n + 1;
            if (next >= imgs3.length) { //      
                next = 0;
            }
            for (var i = 0; i < imgs3.length; i++) {
                dian[i].style.background = "#000";
            }
            dian[next].style.background = "red";
            imgs3[next].style.left = width + "px";
            animate(imgs3[n], {
                left: -width
            }, 500);
            animate(imgs3[next], {
                left: 0
            }, 500);
            n = next;
        }

        function move5() {
            next = n - 1;
            if (next < 0) {
                next = imgs3.length - 1;
            }
            for (var i = 0; i < imgs3.length; i++) {
                dian[i].style.background = "#000";
            }
            dian[next].style.background = "red";
            imgs3[next].style.left = -width + "px";
            animate(imgs3[n], {
                left: width
            }, 500);
            animate(imgs3[next], {
                left: 0
            }, 500);
            n = next;
            
        }
        box3.onmouseover = function() {
            clearInterval(t3);
        }
        box3.onmouseout = function() {
            t3 = setInterval(move4, 2000);
        }

        left.onclick = function() {
            move4();
        }
        right.onclick = function() {
            move5();
        }

        for (var i = 0; i < dian.length; i++) {
            dian[i].index = i;
            dian[i].onmouseover = function() {
                if (this.index == n) {
                    return;
                } else if (this.index > n) {
                    for (var i = 0; i < imgs3.length; i++) {
                        dian[i].style.background = "#000";
                    }
                    dian[this.index].style.background = "red";
                    imgs3[this.index].style.left = width + "px";
                    animate(imgs3[n], {
                        left: -width
                    }, 500);
                    animate(imgs3[this.index], {
                        left: 0
                    }, 500);
                    n = this.index;
                } else if (this.index < n) {
                    for (var i = 0; i < imgs3.length; i++) {
                        dian[i].style.background = "#000";
                    }
                    dian[this.index].style.background = "red";
                    imgs3[this.index].style.left = -width + "px";
                    animate(imgs3[n], {
                        left: width
                    }, 500);
                    animate(imgs3[this.index], {
                        left: 0
                    }, 500);
                    n = this.index;

                }
            }
        }
    }
    var box3 = $(".ef-2-2");
    for (var i = 0; i < box3.length; i++) {
        lunbo(box3[i]);
    }


    //三楼 四楼 五楼

    function lunbo1(obj) {
        var pics = $(".ypic2", obj);
        var big = obj;
        var left = $(".ef-2-l", obj)[0];
        var right = $(".ef-2-r", obj)[0];
        var train = $(".circle3", obj);
        var n = 0;
        var next = 0;
        var width = parseInt(getStyle(pics[0], "width"));
        var t = setInterval(dong, 2000);

        function dong() {
            next = n + 1;
            if (next >= pics.length) {
                next = 0;
            }
            for (var i = 0; i < pics.length; i++) {
                train[i].style.background = "#000";
            }
            train[next].style.background = "red";
            pics[next].style.left = width + "px";
            animate(pics[n], {
                left: -width
            }, 500);
            animate(pics[next], {
                left: 0
            }, 500);
            n = next;
        }

        function dong2() {
            next = n - 1;
            if (next < 0) {
                next = pics.length - 1;
            }
            for (var i = 0; i < pics.length; i++) {
                train[i].style.background = "#000";
            }
            train[next].style.background = "red";
            pics[next].style.left = -width + "px";
            animate(pics[n], {
                left: width
            }, 500);
            animate(pics[next], {
                left: 0
            }, 500);
            n = next;
            // n=this.index;
        }
        big.onmouseover = function() {
            clearInterval(t);
        }
        big.onmouseout = function() {
            t = setInterval(dong, 2000);
        }

        left.onclick = function() {
            dong();
        }
        right.onclick = function() {
            dong2();
        }

        for (var i = 0; i < train.length; i++) {
            train[i].index = i;
            train[i].onmouseover = function() {
                if (this.index == n) {
                    return;
                } else if (this.index > n) {
                    for (var i = 0; i < pics.length; i++) {
                        train[i].style.background = "#000";
                    }
                    train[this.index].style.background = "red";
                    pics[this.index].style.left = width + "px";
                    animate(pics[n], {
                        left: -width
                    }, 500);
                    animate(pics[this.index], {
                        left: 0
                    }, 500);
                    n = this.index;
                } else if (this.index < n) {
                    for (var i = 0; i < pics.length; i++) {
                        train[i].style.background = "#000";
                    }
                    train[this.index].style.background = "red";
                    pics[this.index].style.left = -width + "px";
                    animate(pics[n], {
                        left: width
                    }, 500);
                    animate(pics[this.index], {
                        left: 0
                    }, 500);
                    n = this.index;

                }
            }
        }
    }
    var big = $(".tr-lun");
    for (var i = 0; i < big.length; i++) {
        lunbo1(big[i]);
    }


    // 二楼轮播

    function lunbo3(obj) {
        var tu = $(".sd-gun-k", obj);
        var hz = obj;
        var left = $(".ef-2-l", obj)[0];
        var right = $(".ef-2-r", obj)[0];
        var y = $(".circle2", obj);
        var n = 0;
        var next = 0;
        var width = parseInt(getStyle(tu[0], "width"));
        var t = setInterval(yidong, 2000);

        function yidong() {
            next = n + 1;
            if (next >= tu.length) {
                next = 0;
            }
            for (var i = 0; i < tu.length; i++) {
                y[i].style.background = "#3e3e3e";
            }
            y[next].style.background = "#C81623";
            tu[next].style.left = width + "px";
            animate(tu[n], {
                left: -width
            }, 500);
            animate(tu[next], {
                left: 0
            }, 500);
            n = next;
        }

        function yidong2() {
            next = n - 1;
            if (next < 0) {
                next = tu.length - 1;
            }
            for (var i = 0; i < tu.length; i++) {
                y[i].style.background = "#3e3e3e";
            }
            y[next].style.background = "#C81623";
            tu[next].style.left = -width + "px";
            animate(tu[n], {
                left: width
            }, 500);
            animate(tu[next], {
                left: 0
            }, 500);
            n = next;
            // n=this.index;
        }
        hz.onmouseover = function() {
            clearInterval(t);
        }
        hz.onmouseout = function() {
            t = setInterval(yidong, 2000);
        }

        left.onclick = function() {
            yidong();
        }
        right.onclick = function() {
            yidong2();
        }

        for (var i = 0; i < y.length; i++) {
            y[i].index = i;
            y[i].onmouseover = function() {
                if (this.index == n) {
                    return;
                } else if (this.index > n) {
                    for (var i = 0; i < tu.length; i++) {
                        y[i].style.background = "#000";
                    }
                    y[this.index].style.background = "red";
                    tu[this.index].style.left = width + "px";
                    animate(tu[n], {
                        left: -width
                    }, 500);
                    animate(tu[this.index], {
                        left: 0
                    }, 500);
                    n = this.index;
                } else if (this.index < n) {
                    for (var i = 0; i < tu.length; i++) {
                        y[i].style.background = "#000";
                    }
                    y[this.index].style.background = "red";
                    tu[this.index].style.left = -width + "px";
                    animate(tu[n], {
                        left: width
                    }, 500);
                    animate(tu[this.index], {
                        left: 0
                    }, 500);
                    n = this.index;

                }
            }
        }
    }
    var hz = $(".sd-gun");
    for (var i = 0; i < hz.length; i++) {
        lunbo3(hz[i]);
    }


    // 六楼 七楼 八楼 九楼 轮播

    function lunbo4(obj) {
        var draw = $(".ln-k", obj);
        var cas = obj;
        var left = $(".ef-2-l", obj)[0];
        var right = $(".ef-2-r", obj)[0];
        var cir = $(".circle2", obj);
        var n = 0;
        var next = 0;
        var width = parseInt(getStyle(draw[0], "width"));
        var t = setInterval(bud, 2000);

        function bud() {
            next = n + 1;
            if (next >= draw.length) {
                next = 0;
            }
            for (var i = 0; i < draw.length; i++) {
                cir[i].style.background = "#3e3e3e";
            }
            cir[next].style.background = "#C81623";
            draw[next].style.left = width + "px";
            animate(draw[n], {
                left: -width
            }, 500);
            animate(draw[next], {
                left: 0
            }, 500);
            n = next;
        }

        function bud2() {
            next = n - 1;
            if (next < 0) {
                next = draw.length - 1;
            }
            for (var i = 0; i < draw.length; i++) {
                cir[i].style.background = "#3e3e3e";
            }
            cir[next].style.background = "#C81623";
            draw[next].style.left = -width + "px";
            animate(draw[n], {
                left: width
            }, 500);
            animate(draw[next], {
                left: 0
            }, 500);
            n = next;
            // n=this.index;
        }
        cas.onmouseover = function() {
            clearInterval(t);
        }
        cas.onmouseout = function() {
            t = setInterval(bud, 2000);
        }

        left.onclick = function() {
            bud();
        }
        right.onclick = function() {
            bud2();
        }

        for (var i = 0; i < cir.length; i++) {
            cir[i].index = i;
            cir[i].onmouseover = function() {
                if (this.index == n) {
                    return;
                } else if (this.index > n) {
                    for (var i = 0; i < draw.length; i++) {
                        cir[i].style.background = "#000";
                    }
                    cir[this.index].style.background = "red";
                    draw[this.index].style.left = width + "px";
                    animate(draw[n], {
                        left: -width
                    }, 500);
                    animate(draw[this.index], {
                        left: 0
                    }, 500);
                    n = this.index;
                } else if (this.index < n) {
                    for (var i = 0; i < draw.length; i++) {
                        cir[i].style.background = "#000";
                    }
                    cir[this.index].style.background = "red";
                    draw[this.index].style.left = -width + "px";
                    animate(draw[n], {
                        left: width
                    }, 500);
                    animate(draw[this.index], {
                        left: 0
                    }, 500);
                    n = this.index;

                }
            }
        }
    }
    var cas = $(".liu-next2");
    for (var i = 0; i < cas.length; i++) {
        lunbo4(cas[i]);
    }


    //十楼

    function lunbo2(obj) {
        var dia = $(".ypic3", obj);
        var hezi = obj;
        var left = $(".sn-2-l", obj)[0];
        var right = $(".sn-2-r", obj)[0];
        var round = $(".circle3", obj);
        var n = 0;
        var next = 0;
        var width = parseInt(getStyle(dia[0], "width"));
        var t = setInterval(turn, 2000);

        function turn() {
            next = n + 1;
            if (next >= dia.length) {
                next = 0;
            }
            for (var i = 0; i < dia.length; i++) {
                round[i].style.background = "#000";
            }
            round[next].style.background = "red";
            dia[next].style.left = width + "px";
            animate(dia[n], {
                left: -width
            }, 500);
            animate(dia[next], {
                left: 0
            }, 500);
            n = next;
        }

        function turn2() {
            next = n - 1;
            if (next < 0) {
                next = dia.length - 1;
            }
            for (var i = 0; i < dia.length; i++) {
                round[i].style.background = "#000";
            }
            round[next].style.background = "red";
            dia[next].style.left = -width + "px";
            animate(dia[n], {
                left: width
            }, 500);
            animate(dia[next], {
                left: 0
            }, 500);
            n = next;
            // n=this.index;
        }
        hezi.onmouseover = function() {
            clearInterval(t);
        }
        hezi.onmouseout = function() {
            t = setInterval(turn, 2000);
        }

        left.onclick = function() {
            turn();
        }
        right.onclick = function() {
            turn2();
        }

        for (var i = 0; i < round.length; i++) {
            round[i].index = i;
            round[i].onmouseover = function() {
                if (this.index == n) {
                    return;
                } else if (this.index > n) {
                    for (var i = 0; i < dia.length; i++) {
                        round[i].style.background = "#000";
                    }
                    round[this.index].style.background = "red";
                    dia[this.index].style.left = width + "px";
                    animate(dia[n], {
                        left: -width
                    }, 500);
                    animate(dia[this.index], {
                        left: 0
                    }, 500);
                    n = this.index;
                } else if (this.index < n) {
                    for (var i = 0; i < dia.length; i++) {
                        round[i].style.background = "#000";
                    }
                    round[this.index].style.background = "red";
                    dia[this.index].style.left = -width + "px";
                    animate(dia[n], {
                        left: width
                    }, 500);
                    animate(dia[this.index], {
                        left: 0
                    }, 500);
                    n = this.index;

                }
            }
        }
    }
    var hezi = $(".sn");
    for (var i = 0; i < hezi.length; i++) {
        lunbo2(hezi[i]);
    }


    //十一楼

    function lunbo5(obj) {
        var roll = $(".ypic4", obj);
        var gaine = obj;
        var left = $(".ll-2-l", obj)[0];
        var right = $(".ll-2-r", obj)[0];
        var sp = $(".circle3", obj);
        var n = 0;
        var next = 0;
        var width = parseInt(getStyle(roll[0], "width"));
        var t = setInterval(wav, 2000);

        function wav() {
            next = n + 1;
            if (next >= roll.length) {
                next = 0;
            }
            for (var i = 0; i < roll.length; i++) {
                sp[i].style.background = "#000";
            }
            sp[next].style.background = "red";
            roll[next].style.left = width + "px";
            animate(roll[n], {
                left: -width
            }, 500);
            animate(roll[next], {
                left: 0
            }, 500);
            n = next;
        }

        function wav2() {
            next = n - 1;
            if (next < 0) {
                next = roll.length - 1;
            }
            for (var i = 0; i < roll.length; i++) {
                sp[i].style.background = "#000";
            }
            sp[next].style.background = "red";
            roll[next].style.left = -width + "px";
            animate(roll[n], {
                left: width
            }, 500);
            animate(roll[next], {
                left: 0
            }, 500);
            n = next;
            // n=this.index;
        }
        gaine.onmouseover = function() {
            clearInterval(t);
        }
        gaine.onmouseout = function() {
            t = setInterval(wav, 2000);
        }

        left.onclick = function() {
            wav();
        }
        right.onclick = function() {
            wav2();
        }

        for (var i = 0; i < sp.length; i++) {
            sp[i].index = i;
            sp[i].onmouseover = function() {
                if (this.index == n) {
                    return;
                } else if (this.index > n) {
                    for (var i = 0; i < roll.length; i++) {
                        sp[i].style.background = "#000";
                    }
                    sp[this.index].style.background = "red";
                    roll[this.index].style.left = width + "px";
                    animate(roll[n], {
                        left: -width
                    }, 500);
                    animate(roll[this.index], {
                        left: 0
                    }, 500);
                    n = this.index;
                } else if (this.index < n) {
                    for (var i = 0; i < roll.length; i++) {
                        sp[i].style.background = "#000";
                    }
                    sp[this.index].style.background = "red";
                    roll[this.index].style.left = -width + "px";
                    animate(roll[n], {
                        left: width
                    }, 500);
                    animate(roll[this.index], {
                        left: 0
                    }, 500);
                    n = this.index;

                }
            }
        }
    }
    var gaine = $(".lu");
    for (var i = 0; i < gaine.length; i++) {
        lunbo5(gaine[i]);
    }


    //热门晒单
    var ck=$(".changkuang")[0];
    var img=$(".shua01");
    // var h=parseInt(getStyle(img[0],"height"));
    var h=img[0].offsetHeight+10+"px";
    // console.log(h)
    var t=setInterval(smove,2000);
    function smove(){
        var first=getFirst(ck);
        // var last=getLast(ck);
        animate(ck,{top:h},300,function(){
            ck.appendChild(first);
            ck.style.top=0;
        })
    }
    

    //测滚动
    var floor=$(".ldo");
    var boxes=$(".floor-scroll")[0];
    var lies=$(".lies");
    var flag=true;   
    var flag1=true;
    var sign=true;

    var ch=document.documentElement.clientHeight;
    var bh=boxes.offsetHeight;
    boxes.style.top=(ch-bh)/2+"px"; //滚动条居中

    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    console.log(obj)

    for(var i=0;i<lies.length;i++){
        lies[i].index=i;
        lies[i].onclick=function(){
            sign=false;
            var top=floor[this.index].offsetTop;
            animate(obj,{scrollTop:top},300,function(){sign=true});
            for(var j=0;j<lies.length;j++){
                lies[j].classList.remove("active");
                lies[j].innerHTML=j+1+"F"
            }
            lies[this.index].classList.add("active");
            lies[this.index].style.fontSize = 12+"px";
            var aa=lies[this.index].getAttribute("name");
            lies[this.index].innerHTML=aa;
            
        }
        lies[i].onmouseover=function(){
            sign=false;
            for(var j=0;j<lies.length;j++){
                lies[j].style.background="#fff";
                lies[j].style.color="#666";
                lies[j].innerHTML=j+1+"F";
            }
             lies[this.index].style.background="#c81623";
             lies[this.index].style.color="#fff";
             var aa=lies[this.index].getAttribute("name");
             lies[this.index].innerHTML=aa;
            
        }

    }
    window.onscroll=function(){
        if(!sign){
            return;//侧栏不随着滚动色块
        }
        for(var i=0;i<lies.length;i++){
            if(obj.scrollTop>=floor[i].offsetTop-ch+100){//ch+scrolltop=offsetTop
                for(var j=0;j<lies.length;j++){
                    lies[j].style.background="#fff";
                    lies[j].style.color="#666";
                    lies[j].innerHTML=j+1+"F";
                }
                 lies[i].style.background="#c81623";
                 lies[i].style.color="#fff";
                 var aa=lies[i].getAttribute("name");
                 lies[i].innerHTML=aa;
            }
        }
        if(obj.scrollTop>=floor[0].offsetTop-ch+100){
            if(flag){
                    flag=false;
                    animate(boxes,{opacity:1},300,function(){
                        flag1=true;
                    })           
            }                       
        }else{
            if(flag1){
                    flag1=false;
                animate(boxes,{opacity:0},300,function(){
                    flag=true;
                })                      
           }
        } 

    }




    //底部工具
    // 购物车
    var toorCar=$(".toor-car")[0];
    var rtc=$(".rtc")[0];
    toorCar.onmouseover=function(){
        rtc.style.display="block";
    }
    toorCar.onmouseout=function(){
        rtc.style.display="none";
    }

    // 我的关注
    var toorLike=$(".toor-like")[0];
    var rtl=$(".rtl")[0];
    toorLike.onmouseover=function(){
        rtl.style.display="block";
    }
    toorLike.onmouseout=function(){
        rtl.style.display="none"
    }

    // 我的足迹
    var toorzj=$(".toor-zj")[0];
    var rtj=$(".rtj")[0];
    toorzj.onmouseover=function(){
        rtj.style.display="block";
    }
    toorzj.onmouseout=function(){
        rtj.style.display="none"
    }

    // 我的消息
    var toormes=$(".toor-mes")[0];
    var rtm=$(".rtm")[0];
    toormes.onmouseover=function(){
        rtm.style.display="block";
    }
    toormes.onmouseout=function(){
        rtm.style.display="none"
    }

    //top
    var bt=$(".bt")[0];
    var rbt=$(".rbt")[0];
    bt.onmouseover=function(){
        rbt.style.display="block";
    }
    bt.onmouseout=function(){
        rbt.style.display="none"
    }

     //ret
    var ret=$(".return")[0];
    var rbr=$(".rbr")[0];
    ret.onmouseover=function(){
        rbr.style.display="block";
    }
    ret.onmouseout=function(){
        rbr.style.display="none"
    }






})