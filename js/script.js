let htmlTag=document.querySelector('html');
htmlTag.setAttribute('lang','ru');

let metaCod=document.createElement('meta');
metaCod.setAttribute('charset','UTF-8');
document.head.appendChild(metaCod);

let metaAd=document.createElement('meta');
metaAd.setAttribute('name','viewport');
metaAd.setAttribute('content','width=device-width, initial-scale=1.0');
document.head.appendChild(metaAd);

let link1Fonts=document.createElement('link');
link1Fonts.setAttribute('rel','preconnect');
link1Fonts.setAttribute('href','https://fonts.googleapis.com');
document.head.appendChild(link1Fonts);

let link2Fonts=document.createElement('link');
link2Fonts.setAttribute('rel','stylesheet');
link2Fonts.setAttribute('href','https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&family=Montserrat:wght@400;700&family=Open+Sans&display=swap');
document.head.appendChild(link2Fonts);


let title=document.createElement('title');
title.innerHTML='HW_JS_8';
document.head.appendChild(title);

let style=document.createElement('style');
style.innerHTML=`
                *{
                    margin:0;
                    padding:0;
                }
                .container{
                    width:1280px;
                    margin: 0 auto;
                }
                .main-title{
                    padding-top: 122px;
                    text-align:center;
                    font-family: 'Arvo';
                    font-weight: 400;
                    font-size: 36px;
                    line-height: 48px;
                    color: #212121;
                    margin-bottom: 10px;
                }
                .main-subtitle{
                    
                    font-family: 'Open Sans';
                    font-size: 14px;
                    line-height: 26px;
                    align-items: center;
                    text-align: center;
                    color: #9FA3A7;
                    margin-bottom: 55px;
                }
                .main_wrapper{
                    display:flex;
                    list-style:none;
                    justify-content:center;
                    width:800px;
                    margin: 0 auto;
                    margin-bottom: 139px;
                    height:480px;
                }
                .main_items{
                    width:50%;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                    border: 1px solid #E8E9ED;
                    
                }
                .main_items:last-child{
                    border-left:none;
                }
                .main_items_suptitle{
                    text-transform: uppercase;
                    padding-top: 81px;
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 12px;
                    line-height: 15px;
                   
                    letter-spacing: 2.4px;
                    color: #9FA3A7;
                    margin-bottom: 19px;

                }
                .main_items_title,
                .main_items_description{
                    max-width: 210px;
                    text-align:center;
                }
                .main_items_title{
                    font-family: 'Arvo';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 36px;
                    line-height: 46px;
                    color: #212121;
                    margin-bottom: 25px;
                  
                }
                .main_items_description{
                    font-family: 'Open Sans';
                    font-size: 12px;
                    line-height: 22px;
                    color: #9FA3A7;
                    margin-bottom: 64.5px;
                    
                }
                .main_items_link{
                    font-family: 'Montserrat';
                    font-weight: 700;
                    font-size: 12px;
                    line-height: 15px;
                    text-transform: uppercase;
                    text-decoration: none;
                    text-align: center;
                    letter-spacing: 2.4px;
                    padding: 15px 22px;
                    color: #212121;
                    border: 3px solid #FFC80A;
                    border-radius: 25px;
                    margin-bottom: 90.5px;
                }
                .radius_1{
                    border-radius: 5px 0 0 5px;
                }
                .radius_2{
                    border-radius:0 5px 5px 0;
                }
                .main_items:hover{
                    background-color:#8F75BE;
                }
                .main_items:hover .main_items_suptitle{
                    color:#FFC80A;
                }
                .main_items:hover .main_items_title,
                .main_items:hover .main_items_description,
                .main_items:hover .main_items_link{
                    color:#FFFFFF;
                }
                `;
document.head.appendChild(style);

let site=document.createElement('div');
site.classList.add('site');
document.body.appendChild(site);

let container=document.createElement('div');
container.classList.add('container');
site.appendChild(container);

let h1=document.createElement('h1');
h1.innerHTML='Choose Your Option';
h1.classList.add('main-title');
container.appendChild(h1);

let pMainSubtitle=document.createElement('p');
pMainSubtitle.innerHTML='But I must explain to you how all this mistaken idea of denouncing ';
pMainSubtitle.classList.add('main-subtitle');
container.appendChild(pMainSubtitle);

let ul=document.createElement('ul');
ul.classList.add('main_wrapper');
container.appendChild(ul);

let li=document.createElement('li');
li.classList.add('main_items');
li.classList.add('radius_1');
ul.appendChild(li);

let pUpText=document.createElement('p');
pUpText.innerHTML='FREELANCER';
pUpText.classList.add('main_items_suptitle');
li.appendChild(pUpText);

let h2=document.createElement('h2');
h2.innerHTML='Initially designed to';
h2.classList.add('main_items_title');
li.appendChild(h2);

let pDescr=document.createElement('p');
pDescr.innerHTML='But I must explain to you how all this mistaken idea of denouncing ';
pDescr.classList.add('main_items_description');
li.appendChild(pDescr);

let link=document.createElement('a');
link.setAttribute('href','#hash1');
link.innerHTML='START HERE';
link.classList.add('main_items_link');
li.appendChild(link);

let li2=li.cloneNode(true);
li2.classList.remove('radius_1');
li2.classList.add('radius_2');
ul.appendChild(li2);

let pUpTextClone=li2.querySelector('.main_items_suptitle');
pUpTextClone.innerHTML='STUDIO';
let linkClone=li2.querySelector('.main_items_link');
linkClone.setAttribute('href','#hash2');