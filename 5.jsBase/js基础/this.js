function foo() {
    console.log(this)
  }
//   var a = 1
//   foo()
  
//   const obj = {
//     a: 2,
//     foo: foo
//   }
//   obj.foo()
  
//   const c = new foo()


//   function a() {
//     return () => {
//       return () => {
//         console.log(this)
//       }
//     }
//   }
//   console.log(a()()())