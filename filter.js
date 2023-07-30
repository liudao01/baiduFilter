// ==UserScript==
// @name        百度首页自定义导航-> 取消默认推荐
// @namespace   Violentmonkey Scripts
// @match       https://www.baidu.com/
// @grant       none
// @version     1.1
// @author      liuml
// @license MIT
// @description 2023/7/28 14:32:53
// ==/UserScript==
// 等待页面节点加载完毕后执行代码
    document.addEventListener("DOMContentLoaded", function() {
      // 获取 s_content_2 节点
      const sContent2 = document.querySelector("#s_content_2");

      // 检查是否找到 s_content_2 节点
      if (sContent2) {
        // 将 s_content_2 节点的样式设置为隐藏
        sContent2.style.display = "none";
        console.log("已隐藏 s_content_2 节点");
      } else {
        console.log("未找到 s_content_2 节点");
      }
    });
// 等待页面加载完成后执行代码
window.onload = function() {
const searchButton = document.querySelector("#s_menu_mine");

  // 模拟点击搜索按钮
  if (searchButton) {
    searchButton.click();
    console.log("已模拟点击我的关注");
  } else {
    console.log("未找到我的关注元素");
  }

};
