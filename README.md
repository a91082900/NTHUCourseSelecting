# NTHUCourseSelecting

## Brief
本腳本皆作用於校務系統的「選上/剩餘名額/待亂數人數統計」頁面，利用使用者腳本(userscript)提供一些小功能，旨在幫助選課更加便利。

**New:** 新增適用於[課程表總錄](https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/JH/6/6.2/6.2.9/JH629001.php)的腳本。

## Features

### 課程中選率
 - 尚有名額課程以黃色標出，若待亂數人數小於剩餘名額則標成橘色
 ![course_selecting_1](https://github.com/a91082900/NTHUCourseSelecting/raw/master/course_selecting_1.png)
 - 將游標移至課程上會出現中選機率
 ![course_selecting_2](https://github.com/a91082900/NTHUCourseSelecting/raw/master/course_selecting_2.png)

### 課程時段篩選
 - 將所有欲篩選的時段輸入上方方框，並按「篩選時段」，會將所有不在輸入時段的課程隱藏
 ![course_selecting_3](https://github.com/a91082900/NTHUCourseSelecting/raw/master/course_selecting_3.png)
 - 清空方框再次按下按鈕，全部課程都會再次出現

## Install
1. 安裝腳本管理器，如 [Tampermonkey](https://www.tampermonkey.net/)
2. 從 GreasyFork 安裝腳本
  * https://greasyfork.org/zh-TW/scripts/422389-nthu-course-selecting-helper
  * https://greasyfork.org/zh-TW/scripts/431903-nthu-courses-selecting-helper-for-curriculum-list
3. Enjoy :)
