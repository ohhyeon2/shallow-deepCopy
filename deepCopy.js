// Shallow Copy Deep Copy
// test code 작성하기
// Map, Set, Date, RegExp등과 같은 자료형도 복사가 되어야해요

function shallowCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  return { ...obj };
}

const originalObj = { a: 1, b: 2, c: { d: 3 } };
const copyObj = shallowCopy(originalObj)

// 얕은 복사이기 때문에 중첩 객체 참조만 복사한다.
console.log(copyObj)
copyObj.a = 4;
copyObj.c.d = 2;
console.log(originalObj)



