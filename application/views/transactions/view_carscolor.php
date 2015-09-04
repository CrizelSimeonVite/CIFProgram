<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 9/1/2015
 * Time: 10:32 AM
 */
?>

<?php
/*echo $info_url;
echo '<br/>'.$url_control;

$xmlDoc='<data><row><id>101</id><name>Crizel Simeon Vite</name></row></data>';

$data = new SimpleXMLElement($xmlDoc);
//var_dump($data);
foreach($data as $row=>$value){
    Echo $value->id;
    Echo $value->name;
}*/
?>
<div class="main">
    <?php echo  form_open($buttons['action'],'id="myForm"');?>
    <table class="form-table">
        <colgroup>
            <col class="colorized" style="width: 10%;"/>
            <col class="" style="width: 35%;" /
        </colgroup>
        <thead>
        <td colspan="2" style=" width: 100%";>* Filter record by color</td>
        </thead>
        <tbody>

        <tr>
            <td>Car Color</td>
            <td> <?php
                $color_ref[''] = '[ Please Select ]';
                echo form_dropdown('FLD_color',
                    $color_ref,
                    '',
                    'id="FLD_color" style="width: 200px;" class="validate[required]"');
                ?></td>
        </tr>
        <tr>
            <td></td>
            <td><button id="btn_submit" type="submit">Update</button></td>
        </tr>
        </tbody>
    </table>
    </form>
</div>
<script>
    $(function(){
        $("#btn_submit").click(function(){
            form = $("#myForm");
            if (!jQuery(form).validationEngine('validate')){ return false; }
        });
    });
</script>