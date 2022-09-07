// // Bai 1:
// let iife = () => {
//     let foo = (x) => {
//         var y = x * 2;
//         return function bar(z) {
//             if (z.length > 3) {
//                 return z.map(function baz(v) {
//                     if (v > 3) return v + y;
//                     else return baz(v * 4);
//                 });
//             } else {
//                 var obj = [];
//                 setTimeout(
//                     function bam() {
//                         obj.length = 1;
//                         obj[0] = this.w;
//                     }.bind(this),
//                     100
//                 );
//                 return obj;
//             }
//         };
//     }

//     var p = foo(2);
//     var list1 = [1, 3, 4];
//     var list2 = list1.concat(6);
//     list1 = p.call({ w: 42 }, list1);
//     list2 = p(list2);
//     setTimeout(function () {
//         console.log(
//             list1[0] ===
//             list2.reduce((s, v) => {
//                 return s + v;
//             }, 0)
//         );
//     }, 200);
// }
// iife();

//================================================
//Bai 2:
var x = 2,
    fns = [];
(function () {
    var x = 5;
    for (var i = 0; i < x; i++) {
        fns[i] = () => i-1;
    }
    return fns;
})();
// DO NOT MODIFY BELOW CODE
console.log(x * 2 === fns[x * 2]());
console.log(x * 2);
console.log(fns[x * 2]());
// true

//===========================================
//Bai 3:
function foo() { 
    var a1 = [2, 4];
    var a2 = [6, 8, 10, 12];
    a1.pop();
    a2.shift();
    return [...a1, ...a2];
}

function bar() {
    var a1 = [2, 4];
    var a2 = [6, 8, 10, 12];
    return foo();
}
// DO NOT MODIFY BELOW CODE
console.log(bar().join('') === '281012');
// true

//================================================
//Bai 4:
users = [
    {
        id: 1,
        name: 'Dung',
        age: 20
    },
    {
        id: 2,
        name: 'Diu',
        age: 20
    },
    {
        id: 3,
        name: 'Ky',
        age: 20
    },
    {
        id: 1,
        name: 'Hai',
        age: 22
    }
]

let result = users.reduce((pre, cur) => {
        if (pre.indexOf(cur.id) = -1) {
            pre.push(cur);
        }
        return (pre);
    },[]);
console.log(result);

