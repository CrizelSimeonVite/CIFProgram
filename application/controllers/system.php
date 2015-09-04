<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 9/1/2015
 * Time: 11:55 AM
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class System extends MY_Controller{
    public function index(){
        $this->load->library('table');
        $this->meta = 'home';

        $this->data['page_title'] = 'HOME Page';
        $this->data['site_url'] = site_url().'/';

        //$this->load->model('Common_model',"common");
        //$result = $this->common->retrieveAdministrator();
       //$this->data['admin_users']=$this->common->retrieveAdministrator();
        //json_encode($returnData);
       //$this->load->view('header_view',$this->data);
       //$this->display('_system/home_content',$this->data);
        $this->display('_system/home_content');
    }


}