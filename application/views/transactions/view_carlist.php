<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 9/1/2015
 */
?>
<div class="main">
    <?php echo  form_open($buttons['action'],'id="myForm"');?>
    <table class="form-table">
        <colgroup>
            <col class="colorized" style="width: 15%;"/>
            <col class="" style="width: 35%;" />
            <col class="colorized" style="width: 15%;"/>
            <col class="" style="width: 35%;" />
        </colgroup>
        <thead>
            <td colspan="4" style=" width: 100%";>* You can only move a car position in a range of 5. For testing only.</td>
        </thead>
        <tbody>
            <tr>
                <td colspan="2" align="center">CAR TO MOVE</td>
                <td colspan="2" align="center">CAR TO MOVE INFRONT</td>
            </tr>
            <tr>
                <td>Rank ID</td>
                <td><input type="text" id="FLD_rankMoveTo" name="FLD_rankMoveTo" maxlength="50px" class='validate[required]'/></td>
                <td>Rank ID</td>
                <td><input type="text" id="FLD_rankMoveFront" name="FLD_rankMoveFront" maxlength="50px" class='validate[required]'/></td>
            </tr>
            <tr>
                <td colspan="3"></td>
                <td><button id="btn_submit" type="submit">Update</button> </td>
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

