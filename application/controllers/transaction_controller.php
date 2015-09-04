<?php
/**
 * Created by PhpStorm.
 * User: Crizel Simeon Vite
 * Date: 9/1/2015
 * Time: 11:55 AM
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Transaction_controller extends MY_Controller{
    public $tran_code = 'TRANSACTION';
    public function __construct()
    {
        parent::__construct();
        $this->load->model('Common_model',"common");


    }
    public function reference(){
        //$this->meta = 'form';
        //$this->load->helper('form');
        $this->load->library('table');
        $this->load->helper('form');

        $segment_3= $this->uri->segment(3,'');
        if ($segment_3 === FALSE)
        {
            return;
        }

        $this->data['buttons'] = array( 'action'=>$this->url_control.'lists/'.$segment_3);

        $menu = $this->uri->segment(3);

        $menu_page = '';
        switch ($menu) {
            case 'cars':
                $this->data['color_ref'] = $this->common->get_combo('code','descr');
                $this->display('transactions/view_carscolor',$this->data);
            break;
            case 'list':
                $this->display('transactions/view_carlist',$this->data);
                break;
            default:
                $this->display('dsfsf');
        }

    }
    public function lists(){
        $carMoveTo    = $this->input->post('FLD_rankMoveTo');
        $carMoveFront = $this->input->post('FLD_rankMoveFront');
        $color = $this->input->post('FLD_color');

        $this->load->helper('form');
        $this->load->model('Common_model',"common");

        $segment_3 = $this->uri->segment(3);

        switch($segment_3){
            case 'cars':
                $this->data['list_data']=$this->common->retrieveColor($color);
                $this->display('transactions/view_cars_color',$this->data);
                break;
            case 'list':
                $this->data['list_data']=$this->common->carMovement($carMoveTo,$carMoveFront);
                $this->display('transactions/view_car_list',$this->data);
                break;
            default:
                $this->display('sfasfsda');
        }

    }

}