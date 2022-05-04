// main2.js
var devWidth;
var limitsize=768;

window.addEventListener('load',function(){
    devWidth = document.querySelector("body").offsetWidth;

    window.addEventListener('resize',function(){
        devWidth = document.querySelector("body").offsetWidth;

    });

    //햄버거 버튼 클릭
    var mobBtn = document.querySelector('div.mobBtn');
    var mob = document.querySelector('.mob');
    var mobClose = document.querySelector('.mobBtn_close');
    var body = document.querySelector("body");
    var bg = document.querySelector(".bg");

    mobBtn.addEventListener("click",function(){
        mob.classList.add("on");
        mobClose.classList.add("on");
        body.classList.add("on");
        bg.classList.add("on");
        //this.style.display = "none"
        mobBtn.style.display = "none"
    });

    //모바일 닫기 버튼 클릭
    mobClose.addEventListener("click",function(){
        mob.classList.remove("on");
        mobClose.classList.remove("on");
        body.classList.remove("on");
        bg.classList.remove("on");
        mobBtn.style.display = "block"
    });

    /* 주메뉴 */
    var gnbMenu = document.querySelectorAll(".gnb>ul>li");
    var headerWrap = document.querySelector(".header_wrap");
    var formSrch = document.querySelector("form.srch");
    var srchOpen = document.querySelector(".srch_open");
    var topMenuDD = document.querySelectorAll("dl.topMenu > dd");
    var subMenu = document.querySelectorAll(".gnb>ul>li>ul");
    
    
    for(var i=0;i<gnbMenu.length;i++){
        gnbMenu[i].addEventListener("mouseover" , function(){
            if(devWidth<limitsize) return false;
    
            if(formSrch.offsetWidth > 0 && formSrch.offsetHeight > 0){
                formSrch.classList.remove("on");
                srchOpen.classList.remove("on");
            }
    
            if(topMenuDD[4].classList.contains("on")){
                topMenuDD[4].classList.remove("on");
            }

            headerWrap.classList.add("on");

            subMenu.forEach(function(item){
                item.classList.add("on");
            })

        });//mouseover

        gnbMenu[i].addEventListener("mouseout" , function(){
            if(devWidth<limitsize) return false;
    
            headerWrap.classList.remove("on");

            subMenu.forEach(function(item){
                item.classList.remove("on");
            })

        });//mouseout
    }//for

    /* 로그인 이미지 */
    var appear="";
    for(var i=0;i<57;i++){
        if(i<10){
            appear += "<img src='images/appear/appear_0000"+i+".png' alt='로그인버튼"+i+"' />";
        }else{
            appear += "<img src='images/appear/appear_000"+i+".png' alt='로그인버튼"+i+"' />";
        }
        
    }
    document.querySelector("a.appear").innerHTML = appear;

    var loop="";
    for(var i=0;i<82;i++){
        if(i<10){
            loop += "<img src='images/loop/loop_0000"+i+".png' alt='로그인버튼"+i+"' />";
        }else{
            loop += "<img src='images/loop/loop_000"+i+".png' alt='로그인버튼"+i+"' />";
        }
        
    }
    document.querySelector("a.loop").innerHTML = loop;

    /* 로그인 애니메이션*/
    var appearImg = document.querySelectorAll(".appear>img")
    for(var k=0;k<57;k++){
        appearImg[k].style.animation ="ani 2.75s linear "+(k*0.05)+"s 1 normal";
    } 

    var loopImg = document.querySelectorAll(".loop>img");
    for(var j=0;j<82;j++){
        loopImg[j].style.animation = "ani 4.1s linear "+(2.85+0.05*j)+"s infinite normal";
    }

    /* 퀵메뉴 이미지 */
    var quick1=""
    for(var i=0;i<20;i++){
        if(i<10){
            quick1 += "<img src='images/quick01/quick01_0000"+i+".png' alt='쿠폰혜택안내"+i+"' />";
        }else{
            quick1 += "<img src='images/quick01/quick01_000"+i+".png' alt='쿠폰혜택안내"+i+"' />";
        }
        
    }
    document.querySelector("span.quick1").innerHTML = quick1;

    var quick2="";
    for(var i=0;i<20;i++){
        if(i<10){
            quick2 += "<img src='images/quick02/quick02_0000"+i+".png' alt='쿠폰혜택안내"+i+"' />";
        }else{
            quick2 += "<img src='images/quick02/quick02_000"+i+".png' alt='쿠폰혜택안내"+i+"' />";
        }
        
    }
    document.querySelector("span.quick2").innerHTML = quick2;

    var quick3="";
    for(var i=0;i<20;i++){
        if(i<10){
            quick3 += "<img src='images/quick03/quick03_0000"+i+".png' alt='쿠폰혜택안내"+i+"' />";
        }else{
            quick3 += "<img src='images/quick03/quick03_000"+i+".png' alt='쿠폰혜택안내"+i+"' />";
        }
        
    }
    document.querySelector("span.quick3").innerHTML = quick3;


    var quick4="";
    for(var i=0;i<20;i++){
        if(i<10){
            quick4 += "<img src='images/quick04/quick04_0000"+i+".png' alt='쿠폰혜택안내"+i+"' />";
        }else{
            quick4 += "<img src='images/quick04/quick04_000"+i+".png' alt='쿠폰혜택안내"+i+"' />";
        }
        
    }
    document.querySelector("span.quick4").innerHTML = quick4;

    //마우스를 올렸을 때
    var content1Li = document.querySelectorAll(".content1 ul li");
    content1Li.forEach(function(item){
        item.addEventListener("mouseover",function(){
            for(var k=0;k<20;k++){
              var imgLi = this.children[0].children[0].children;
              imgLi[k].style.animation = "ani 1s linear "+0.05*k+"s 1 normal";
            }
        });
    });

    //마우스를 뗏을때
    content1Li.forEach(function(item){
        item.addEventListener("mouseout",function(){
            for(var k=0;k<20;k++){
              var imgLi = this.children[0].children[0].children;
              imgLi[k].style.animation = "none";
            }
        });
    });

    /* 검색열기 */
    srchOpen.addEventListener("click",function(){
        this.classList.toggle("on");
        formSrch.classList.toggle("on");

        if(this.classList.contains("on")){
            this.children[0].setAttribute("title","검색창 닫기");
        }else{
            this.children[0].setAttribute("title","검색창 열기");   
        }    
    });

    /* 고객센터 */
    topMenuDD[4].addEventListener("click",function(){
        this.classList.toggle("on");
        if(this.classList.contains("on")){
            this.children[0].setAttribute("title","고객센터 닫기");
        }else{
            this.children[0].setAttribute("title","고객센터 열기");   
        }    
    });
    
    /* 모바일 고객센터 */
    var mobTopMenu = document.querySelectorAll(".mob_topMenu > dd")
    mobTopMenu[4].addEventListener("click",function(){
        this.classList.toggle("on");
        if(this.classList.contains("on")){
            this.children[0].setAttribute("title","고객센터 닫기");
        }else{
            this.children[0].setAttribute("title","고객센터 열기");   
        }    
    });

    /* 모바일 주메뉴 */
    var mobGnbLi = document.querySelectorAll(".mob_gnb > ul > li");
    for(i=0;i<mobGnbLi.length;i++){
        mobGnbLi[i].addEventListener("click",function(){
            //siblings()
            mobGnbLi.forEach(function(item){
                item.classList.remove("on");
            });
            this.classList.toggle("on");  
        });
    }

    /* 배너 */

    var bnnNum=0;
    var lastNum = document.querySelectorAll(".banner_frame>section").length-1;
    var banner_w = document.querySelector("body>section").offsetWidth;

    window.addEventListener("resize",function(){
        banner_w = document.querySelector("body>section").offsetWidth;
    });

    var next = document.querySelector(".next");
    var prev = document.querySelector(".prev");
    var bannFrame = document.querySelector(".banner_frame");
    var bnnSection =document.querySelectorAll(".banner_frame>section")
    var arrowA = document.querySelectorAll(".arrow > a");
    var rollingBtn = document.querySelectorAll(".rolling a");
    var banner_rollA = document.querySelector(".banner_roll a");
    
    
    //배너-다음
    next.addEventListener("click",function(){
        bnnNum++;
        if(bnnNum>lastNum) bnnNum=0;
        bannFrame.style.left = bnnNum*-banner_w + "px";

        if(bnnSection[bnnNum].classList.contains("white")){
            arrowA.forEach(function(item){
                item.classList.add("white")
            });
            rollingBtn.forEach(function(item){
                item.classList.add("white")
            });

        }else{
            arrowA.forEach(function(item){
                item.classList.remove("white")
            });
            rollingBtn.forEach(function(item){
                item.classList.remove("white")
            });
        }
        banner_rollA.forEach(function(item){
            item.classList.remove("on")
        });
        banner_rollA[bnnNum].classList.add("on")
    });

     //이전
     prev.addEventListener("click",function(){
        bnnNum--;
        if(bnnNum<0) bnnNum=0;
        
        bannFrame.style.left = bnnNum*-banner_w + "px";

        if(bnnSection[bnnNum].classList.contains("white")){
            arrowA.forEach(function(item){
                item.classList.add("white")
            });
            rollingBtn.forEach(function(item){
                item.classList.add("white")
            });

        }else{
            arrowA.forEach(function(item){
                item.classList.remove("white")
            });
            rollingBtn.forEach(function(item){
                item.classList.remove("white")
            });

        }
        banner_rollA.forEach(function(item){
            item.classList.remove("on")
        });
        banner_rollA[bnnNum].classList.add("on")
    });
    
    /* 오토배너 */
    function autoBanner(){
        bnnNum++;
        if(bnnNum>lastNum) bnnNum=0;
        bannFrame.style.left = bnnNum*-banner_w + "px";

        if(bnnSection[bnnNum].classList.contains("white")){
            arrowA.forEach(function(item){
                item.classList.add("white")
            });
            rollingBtn.forEach(function(item){
                item.classList.add("white")
            });

        }else{
            arrowA.forEach(function(item){
                item.classList.remove("white")
            });
            rollingBtn.forEach(function(item){
                item.classList.remove("white")
            });
        }
        banner_rollA.forEach(function(item){
            item.classList.remove("on")
        });
        banner_rollA[bnnNum].classList.add("on")

    }
    var autoBann = setInterval(autoBanner,5000);

    /* 재생멈춤 */
    var flag=true;
    var play = document.querySelector("a.play");
    play.addEventListener("click",function(){
        if(flag){
            //멈춰라
            clearInterval(autoBann);
            this.classList.add("pause");
            flag=false;
        }else{
            //재생
            autoBann = setInterval(autoBanner,5000);
            this.classList.remove("pause");
            flag=true;
        }

    });


   /* 롤링 클릭 */
   var banner_roll = document.querySelectorAll(".banner_roll li")
   banner_roll.forEach(function(item){
       item.addEventListener("click",rollAction);
   });

   function rollAction(item){
       curRoll = item.currentTarget; 
       parentRoll = curRoll.parentElement;
       childRoll = parentRoll.children;
       bnnNum= Array.from(childRoll).indexOf(curRoll);

       bannFrame.style.left = bnnNum*-banner_w + "px";

    if(bnnSection[bnnNum].classList.contains("white")){
        arrowA.forEach(function(item){
            item.classList.add("white")
        });
        rollingBtn.forEach(function(item){
            item.classList.add("white")
        });

    }else{
        arrowA.forEach(function(item){
            item.classList.remove("white")
        });
        rollingBtn.forEach(function(item){
            item.classList.remove("white")
        });
    }
    banner_rollA.forEach(function(item){
        item.classList.remove("on")
    });
    banner_rollA[bnnNum].classList.add("on")

   }

   //content3
   var all = document.querySelectorAll(".content3_inner > div > ul > li");

   for(var i=0;i<all.length;i++){
        all[i].addEventListener("mouseover",function(){
            this.classList.add("on")
        });

        all[i].addEventListener("mouseout",function(){
            this.classList.remove("on")
        });

   }

   //content3 버전2
   /*
    var all = document.querySelectorAll(".content3_inner > div > ul > li");

    all.forEach(function(item){
        item.addEventListener("mouseover",function(){
            this.classList.add("on")
        });
        item.addEventListener("mouseout",function(){
            this.classList.remove("on")
        });
    });
   
   */

   //대분류
   var group = document.querySelectorAll(".content3_inner > ul > li > a");
   var all = document.querySelectorAll(".content3_inner > div > ul > li");
   var ent = document.querySelectorAll(".content3_inner > div > ul > li.ent");
   var shop = document.querySelectorAll(".content3_inner > div > ul > li.shop");
   var diner = document.querySelectorAll(".content3_inner > div > ul > li.diner");
   var box = document.querySelectorAll(".content3_inner > div > ul > li.box");

   for(var k=0;k<group.length;k++){
        group[k].addEventListener("click",function(event){
            event.preventDefault();

            group.forEach(function(idx){
                idx.classList.remove("on");
            });
            this.classList.add("on");

            var className = this.parentElement.getAttribute("class");

            all.forEach(function(item){
                item.style.display = "none"
            });
            switch(className){
                case "all":
                    all.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
                case "ent":
                    ent.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
                case "shop":
                    shop.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
                case "diner":
                    diner.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
                case "box":
                    box.forEach(function(item){
                        item.style.display = "block"
                    });
                    break;
                default:
                    break;
                
            };
        });
            
    }

     //패밀리 사이트

     var familySite = document.querySelector(".family_site");

     familySite.addEventListener("click",function(event){
         event.preventDefault();

         this.classList.toggle("on");

         if(this.classList.contains("on")){
            this.children[0].setAttribute("title","닫기");
        }else{
            this.children[0].setAttribute("title","열기");   
        }    

     });
     

    /* 스크롤 이벤트 */

    var btnTop = document.querySelector("div.top");
    var doughnut_Left_L = document.querySelector(".doughnut_Left_L")
    var doughnut_Left_s = document.querySelector(".doughnut_Left_s")
    var combine_Left = document.querySelector(".combine_Left")
    var doughnut_Center_M = document.querySelector(".doughnut_Center_M")
    var doughnut_Center_s = document.querySelector(".doughnut_Center_s")
    var doughnut_right_M = document.querySelector(".doughnut_right_M")
    var doughnut_right_s = document.querySelector(".doughnut_right_s")
    var combine_right = document.querySelector(".combine_right")

    window.addEventListener("scroll",function(){
        var scroll = document.querySelector("html").scrollTop;

        if(scroll < 100){
            btnTop.classList.remove("on", "ab");
        }

        if(scroll >= 100 && scroll < 2800){
            btnTop.classList.remove("ab");
            btnTop.classList.add("on");
        }

        if(scroll >= 2800){
            btnTop.classList.add("ab");
        }

        //도넛
        // doughnut_Left_L.style.top = 71+scroll*0.5 + "px"
        // doughnut_Left_s.style.top = 796+scroll*1.1 + "px"
        // combine_Left.style.top = 1726-scroll*0.1 + "px"

        // doughnut_Center_M.style.top = 722+scroll*0.1 + "px"
        // doughnut_Center_s.style.top = 991+scroll*1.1 + "px"

        // doughnut_right_M.style.top = 900+scroll*0.2 + "px"
        // doughnut_right_s.style.top = 365+scroll*0.5 + "px"
        // combine_right.style.top = -300+scroll*0.8 + 'px'

       
        doughnut_Left_L.style.top = 71+scroll*0.5 + "px"
        doughnut_Left_s.style.top = 170+scroll*0.5 + "px"
        combine_Left.style.top = 1710-scroll*0.2 + "px"

        doughnut_Center_M.style.top = 722+scroll*0.2 + "px"
        doughnut_Center_s.style.top = 1400-scroll*0.4 + "px"

        doughnut_right_M.style.top = 900+scroll*0.2 + "px"
        doughnut_right_s.style.top = 365+scroll*0.5 + "px"
        combine_right.style.top = -300+scroll*0.8 + 'px'


    });

    btnTop.addEventListener('click',function(event){
        event.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });


    //자바스크립트 추가사항
    //box.style.backgroundColor = "red" >>"background-color": "red"
    // box.style.cssText = "color:#000;background-color: red"
    //element.textContent = "Text" >> $("").text("")

    
});