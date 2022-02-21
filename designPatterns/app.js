
                             ///////////             DESIGN PATTERNS  //////////


                             ////////// MODULE PATTERN ///////

// const UICntrl = (function(){
// let text = 'hello world';

// const changeText = function(){

//     let element = document.querySelector('h1');
//     element.textContent = text;
// }
// return{
//     callChange: function(){
// changeText()
// console.log(text)
//     }
// }
// })()

// UICntrl.callChange();

                             
                                  //////            REVEALING MODULE PATTERNS       /////////

//      const itemCntrl = (function(){
//          let _data = [];

//          function Add(item){
// _data.push(item);
// console.log('item added....')
//          }
//          function Get(id){
//            return _data.find(item => {
//            return    item.id === id
//             });
//                      }

// return {
//     add : Add,
//     get : Get                                             ////    MAPPING SAME NAMES IS REVEALING PATTERNS
// }

//      })()                    
     
//      itemCntrl.add({id:561,name:'srikanth'});
     

                                                        ///// SINGLETON PATTERN ////  


    const Singleton = (function(){

let instance;

function createInstance(){
    const object = new Object('single instance created...');
    return object;
}
return {
getInstance : function () {
    if(!instance){
        instance = createInstance();
    }
    return instance;
}
}
    })()

    Singleton.getInstance();             ///      always returns same instance //////

    