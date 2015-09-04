<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 9/1/2015
 */

class MY_model extends  CI_Model
{
    public $checkId='';
    public function __construct(){
        parent::__construct();
        $this->checkId = '213141';
    }
}