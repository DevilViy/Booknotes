// 将文本中的每个字符转换成二进制
const textToBinary = text =>
  Array.from(text).map(char => char.charCodeAt(0).toString(2));

// 遍历二进制字符串，并将每个 1 转换成零宽字符空间，将 0 转换为零宽非连接字符。一旦我们转换了字母，我们在移动到下一个字符前插入一个零宽链接字符。
const binaryToZeroWidth = binary =>
  binary
    .map(
      b =>
        Array.from(b)
          .map(num => {
            if (num === "1") {
              // zero-width space
              return "​";
            } else {
              // zero-width non-joiner
              return "‌";
            }
          })
          .join("") // zero-width no-break space
    )
    .join("‍"); // zero-width joiner

// 此时encodeText中包含的就是一串不可见的加密文本了
const encodedText = text => {
  const binaryText = textToBinary(text);
  return binaryToZeroWidth(binaryText);
};

// 将加密的文本转回成二进制数组
const zeroWidthToBinary = encoded =>
  encoded
    .split("‍") // zero-width joiner
    .map(b =>
      Array.from(b)
        .map(z => (z === "​" ? "1" : "0")) // // zero-width space
        .join("")
    );

// 最后一步只需要将二进制文本转回十进制，再使用 String.fromCodePoint 就可以得到原文本了
const binaryToText = string =>
  string.map(b => String.fromCodePoint(parseInt(b, 2))).join("");

// 此时decodedText就是解密的文本
const decodedText = encoded => {
  const binaryString = zeroWidthToBinary(encoded);
  return binaryToText(binaryString);
};

// const name = document.getElementById("name").value;
const head = "复制这段文字，";
const end = "粘贴到下面输入框";
const encoded = value => {
  const encodedStr = encodedText(value);
  changeText(encodedStr);
};

const changeText = text => {
  document.getElementById("encoded-text").innerText = head + text + end;
};

const showText = text => {
  document.getElementById("show-text").innerText = "待加密文字是：" + text;
};

const decoded = value => {
  const encodedStr = value.replace(/[^​‌‍﻿]/g, "");
  if (!encodedStr) {
    showText("");
    return;
  }
  const str = decodedText(encodedStr);
  showText(str);
};

changeText("");

showText("");
