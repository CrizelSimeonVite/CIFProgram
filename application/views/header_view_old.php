<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 9/1/2015
 */
?>
<HTML>
<HEAD>
    <title>Header View</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <style>
    body {
        background-color: #2f2f2f;
        color: red;
    }
    .header {
        padding: 1.0121457489878542510121457489879%;
        background-color: #f1f1f1;
        border: 1px solid #e9e9e9;
    }

    .menuitem {
        margin: 4.310344827586206896551724137931%;
        margin-left: 0;
        margin-top: 0;
        padding: 4.310344827586206896551724137931%;
        border-bottom: 1px solid #e9e9e9;
        cursor: pointer;
    }

    .main {
        padding: 2.0661157024793388429752066115702%;
    }

    .right {
        padding: 4.310344827586206896551724137931%;
        background-color: #CDF0F6;
    }

    .footer {
        padding: 1.0121457489878542510121457489879%;
        text-align: center;
        background-color: #f1f1f1;
        border: 1px solid #e9e9e9;
        font-size: 0.625em;
    }
    .divContainer {
        width: 100%;
        background-color: #0000FF;
        margin-top: 100px;
    }
    .divWrapper{
        overflow: hidden;
    }
    .divFixedMenu{
        background-color: #0000FF;
        position:fixed;
        top: 0;
        margin:auto;
        left: 7.49999px;
        right: 7.7px;
        width: auto;

    }
    .divBox{
        margin-bottom: 2%;
        margin-right: 2%;
        float: left;
    }
    .divHeader{
        width: 100%;
    }
    .divMenu{
        width: 22%;
    }
    .divMain{
        width: 48%;
    }
    .divRight{
        width: 24%;
        float: right;
    }
    .divFooter{
        margin-bottom: -2%;
        width: 100%;
    }
    
    @media only screen and (max-width: 500px) {
        .divMenu {
            width: 100%;
        }

        .menuitem {
            margin: 1%;
            padding: 1%;
        }
        .divMain{
            width: 100%;
        }
        .main {
            padding: 1%;
        }
        .divRight{
            width: 100%;
        }
        .right {
            padding: 1%;
        }
        .divBox{
            margin-right: 0;
            float: left;
        }
        .divFixedMenu{
            position: fixed;
            width: 98.8%;
            background-color: #0000FF;
        }
    }

    /***********/
    a {

        color: #4C9CF1;
        text-decoration: none;
        font-weight: bold;

    }

    a:hover {

        color: #444;

    }

    img {

        width: 100%;

    }

    header {

        background: #fff;
        width: 100%;
        height: 76px;
        position: fixed;
        top: 0;
        left: 0;
        border-bottom: 4px solid #4C9CF1;
        z-index: 100;

    }

    #logo{

        margin: 20px;
        float: left;
        width: 200px;
        height: 40px;
        background: url(../img/logo.png) no-repeat center;
        display: block;

    }

    nav {
        float: right;
        padding: 20px;
    }

    #menu-icon {

        display: hidden;
        width: 40px;
        height: 40px;
        background: #4C8FEC url('./_css/_img/menu-icon.png') center;
    }

    a:hover#menu-icon {

        background-color: #444;
        border-radius: 4px 4px 0 0;

    }

    ul {

        list-style: none;

    }

    li {

        display: inline-block;
        float: left;
        padding: 10px

    }

    .current {

        color: #2262AD;

    }

    section {

        margin: 80px auto 40px;
        max-width: 980px;
        position: relative;
        padding: 20px

    }

    h1 {

        font-size: 2em;
        color: #2262AD;
        line-height: 1.15em;
        margin: 20px 0 ;

    }

    p {

        line-height: 1.45em;
        margin-bottom: 20px;

    }
    @media only screen and (max-width : 640px) {

        .divFixedMenu {
            background-color: #0000FF;
            position: fixed;
            top: 0;
            margin: auto;
            left: 7.49999px;
            right: 7.7px;
            width: auto;
        }
        header {

            position: absolute;

        }

        #menu-icon {

            display:inline-block;

        }

        nav ul, nav:active ul {

            display: none;
            position: absolute;
            padding: 20px;
            background: #fff;
            border: 5px solid #444;
            right: 20px;
            top: 60px;
            width: 50%;
            border-radius: 4px 0 4px 4px;

        }

        nav li {

            text-align: center;
            width: 100%;
            padding: 10px 0;
            margin: 0;

        }

        nav:hover ul {

            display: block;

        }
        .arrow-right {
            width: 0;
            height: 0;
            border-top: 60px solid transparent;
            border-bottom: 60px solid transparent;

            border-left: 60px solid green;
        }

    }
    </style>
</HEAD>
<body>
<div class="divFixedMenu">
    <nav>

        <a href="#" id="menu-icon"></a>

        <ul>

            <li><a href="#" class="current">Home</a></li>
            <li><a href="#">Vision</a></li>
            <li><a href="#">Mission</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Branch</a></li>
            <li><a href="#">Contact</a></li>

        </ul>

    </nav>
</div>
<div class="divContainer">
    <div class="divWrapper">
        <div class="divBox divHeader">
            <div class="header">
                <h1>Cagayan State University</h1>
                <h1>Online Management System</h1>
            </div>
        </div>
        <div class="divBox divMenu">
            <div class="menuitem">The Drive</div>
            <div class="menuitem">The Walk</div>
            <div class="menuitem">The Return</div>
            <div class="menuitem">The End</div>
        </div>
        <div class="divBox divMain">
            <div class="main">
                <h1>The Walk</h1>
                <p>The walk to the Pulpit Rock will take you approximately two hours, give or take an hour depending on the weather conditions and your physical shape.</p>
                <?php
                echo 'Admin ID: '.($admin_users[0]->id);
                echo 'Admin Name: '.($admin_users[0]->adminName);
                echo 'Admin Password: '.($admin_users[0]->adminPass);
                echo '<br>' ;
                echo 'this will serve as the homepage';
                echo '<br/>'._CSS.'<br/>';
                $CI = &get_instance();
                $CI->load->database();
                echo $CI->db->hostname;
                ?>
            </div>
        </div>
        <div class="divBox divRight">
            <div class="right">
                <h2>What?</h2>
                <p>The Pulpit Rock is a part of a mountain that looks like a pulpit.</p>
                <h2>Where?</h2>
                <p>The Pulpit Rock is in Norway</p>
                <h2>Price?</h2>
                <p>The walk is free!</p>
            </div>
        </div>
        <div class="divBox divFooter">
            <div class="footer">
                <p>This web page is a part of a demonstration of fluid web design made by www.w3schools.com. Resize the browser window to see the content response to the resizing.</p>
            </div>
        </div>

    </div>
</div>



</body>
</HTML>