import React from 'react';
import './style.css';
  function Content() {
    return (
       <div>
         <section class="asd">
               <div id="header">
                  <div class="child">Haaba</div>
               </div>
               <div id="cont">

                  <div class="parent">
                     <div class="num">رقم الهاتف</div>
                     <div class="empty" >لون</div>
                  </div>

                  <div class="parent">
                     <div class="link"> البريد الاكتروني</div>
                     <div class="empty"></div>
                  </div>

                  <div class="parent">
                     <div class="adress"> عناويني</div>
                     <div class="btnn">
                        <a href="#top"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></a>
                        </div>
                  </div>
                  
                  <div class="parent">
                     <div class="setting">الاعدادات</div>
                     <div class="btnn">     <a href="#top"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></a></div>
                  </div>
               </div>
               <div class="vido">
                  <div class="myvedios">فيديوهاتي</div>
                  <div class="mybutt">
                     <button class="butt">اضافة فيديو</button>
                  </div>
               </div>
               
         
        </section>   

   </div>
    );
  }
  
  export default Content;