<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 9/1/2015
 */
?>
<div class="divBox divMenu">
    <!--<div class="menuitem"><a href="<?php //echo site_url().'/transaction/menu/list';?>">Car List</a> </div>
    <div class="menuitem"><a href="<?php //echo site_url().'/transaction/menu/cars';?>">View Cars</a> </div> -->
    <div class="menuitem"><?php echo anchor('transaction/reference/list','Car List'); ?></div>
    <div class="menuitem"><?php echo anchor('transaction/reference/cars','Show Cars'); ?></div>
</div>
<div class="divBox divMain">