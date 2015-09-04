<?php
/**
 * Created by PhpStorm.
 * User: Crizel Simeon Vite
 * Date: 9/1/2015
 */
class Common_model extends MY_model
{

    public function __construct()
    {
        parent::__construct();
        $this->load->helper('xml');
        $this->load->helper('string');
    }

    /*public  function retrieveAdministrator(){
        $sqlx = "select * from administrationUsers";
        $query = $this->db->query($sqlx);
        return $query->result();
    }*/

    function checkLoginAccess($loginName, $pass)
    {
        $sqlStr = "EXEC AdminCheckUser ?,?";
        $query = $this->db->query($sqlStr,
            array($loginName, $pass));
        return $query->result();

    }

    function carMovement($carmoveTo, $carMoveFront)
    {
        $sqlStr = "EXEC [dbo].[CarMovement] ?,?";
        $query = $this->db->query($sqlStr,
            array($carmoveTo, $carMoveFront));
        return $query->result();

    }
    function getColor()
    {
        $sqlStr = "EXEC [dbo].[getColor]";
        $query = $this->db->query($sqlStr);
        return $query->result();

    }
    function retrieveColor($color)
    {
        $sqlStr = "EXEC [dbo].[RetrieveColor] ?";
        $query = $this->db->query($sqlStr, $color);
        return $query->result();

    }
    /* function to create an array format for the references for the combo boxes */
    function get_combo($field_value, $field_display='')
    {
        $result = $this->getColor(); // get first the data
        if ($result){
            if (count($result)>1) {
                $combo_result[''] = '[ Select ] ';
            }
            foreach ($result as $row){
                $combo_result[$row->$field_value] = $row->code;
                if ($field_display){
                    $combo_result[$row->$field_value] .= ' - '.$row->$field_display;
                }
            }
        } else {$combo_result = array();}
        return $combo_result;

    }
}