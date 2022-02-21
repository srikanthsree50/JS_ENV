
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


//     const Singleton = (function(){

// let instance;

// function createInstance(){
//     const object = new Object('single instance created...');
//     return object;
// }
// return {
// getInstance : function () {
//     if(!instance){
//         instance = createInstance();
//     }
//     return instance;
// }
// }
//     })()

//     Singleton.getInstance();             ///      always returns same instance //////


    

                             ///////         FACTORY PATTERN /////////


//         function MemberFactory() {
// this.createMember = function(name,type){
// let member;

// if(type === 'simple'){
// member = new SimpleMembership(name);
// }

// else if(type === 'standard'){
//     member = new StandardMembership(name);
//     }

// else if(type === 'super'){
//     member = new SuperMembership(name);
//     }


//     member.type = type;

//     member.define = function(){
//         console.log(`${this.name} ${this.type} : ${this.cost}`)
//     }
//     return member;

// } 
//         } 


// const SimpleMembership = function(name){
//     this.name = name;
//     this.cost = '$5'
// }

// const StandardMembership = function(name){
//     this.name = name;
//     this.cost = '$50'
// }

// const SuperMembership = function(name){
//     this.name = name;
//     this.cost = '$500'
// }
// const members = [];
// const factory = new MemberFactory();
// members.push(factory.createMember('srikanth','super'));

// console.log(members);