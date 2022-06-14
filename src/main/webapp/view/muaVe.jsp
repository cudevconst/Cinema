<%--
  Created by IntelliJ IDEA.
  User: cuong
  Date: 6/14/2022
  Time: 8:17 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mua vé</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="static/css/muaVe.css">
  <link rel="stylesheet" href="static/css/home.css">
</head>
<body>
<div class="nav-bar">
  <a href="test">
    <div style="display: flex; align-items: center; justify-content: center;">
      <div class="logo-navBar"></div>
      <div class="text-logo">META</div>
    </div>
  </a>
  <div class="select-navBar">
    <select name="cars" id="cars">
      <option value="volvo">META BẮC GIANG</option>
      <option value="saab">META HÀ NỘI</option>
      <option value="opel">META THÁI NGUYÊN</option>
      <option value="audi">META BẮC NINH</option>
    </select>
  </div>
  <div class="menu-navBar">
    <ul>
      <a href="./lich_chieu_phim.html"><li>LỊCH CHIẾU PHIM THEO RẠP</li></a>
      <a href="./cinema.html"><li>PHIM</li></a>
      <a href="./thong_tin_rap.html"><li>RẠP</li></a>
      <a href="./price.html"><li>GIÁ VÉ</li></a>
    </ul>
  </div>
  <a href="./login.html">
    <div class="signIn-navBar"><i class="fa-solid fa-user"></i> Login</div>
  </a>
</div>
<div class="mua-ve">
  <div class="ghe-mua-ve">
    <div class="man-hinh-chieu"></div>
    <div class="list-ghe"></div>
<%--   <div class="kq">ket qua: </div>--%>
  </div>
  <div class="phim-mua-ve">

  </div>
</div>
<script src="static/js/muaVe.js"></script>
</body>
</html>
