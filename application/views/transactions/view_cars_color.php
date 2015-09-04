<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 9/1/2015
 * Time: 2:57 PM
 */
?>
<div class="main">
    <?php
    $msg = trim(@$list_data[0]->msg);
    if(!empty($msg)){
    ?>
        <div style="width: auto; border: 1px solid #FF0000; padding-left: 15px; color: #FFF; background-color: red" ><h2><?php echo '--  SQL MSG : '.$msg;?></h2></div>
    <?php }else{?>
        <table id="list-grid" class="form-table">
            <thead>
            <tr>
                <th>RANK</th>
                <th>DESCRIPTION</th>
                <th>BRAND</th>
                <th>COLOR</th>
            </tr>
            </thead>
                <?php //var_dump($list_data); ?>
                <?php foreach(@$list_data as $key=>$value):?>
                <tr>
                    <td><?php echo $value->rankFromId;?></td>
                    <td><?php echo $value->carDesc;?></td>
                    <td><?php echo $value->carBrand;?></td>
                    <td><?php echo $value->carColor;?></td>
                </tr>
                <?php  endforeach; ?>
            </tbody>
        </table>
    <?php }  ?>
</div>

