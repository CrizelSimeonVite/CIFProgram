<?php
/**
 * Created by PhpStorm.
 * User: Crizel Simeon Vite
 * Date: 9/1/2015
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class MY_Controller extends CI_Controller{
    public      $tran_code      = '';
    public      $meta           = '',
                $url_control    = '',
                $jsfile         = '',
                $ptitle         = '',
                $userInfo       = '',
                $chklist        = false,
                $function_called= '',
                $segment_3='';
    private     $website_down      = false;

    public  function __construct()
    {
        parent::__construct();

        if ($this->website_down){
            $this->load->view('_system/website_down');
        }

        $this->userInfo = $this->session->userdata('appuser');

        if ($this->userInfo === NULL)
        {
            // DO NOT CONTINUE if not login, redirect to login page
            if($this->uri->segment(1)=='webservice'){
                redirect(site_url().'/webservice/currency','refresh');
            } else {
                //if ($this->uri->segment(1)<>'user') {
                    redirect(site_url().'/user/login','refresh');
               //}
            }
        } else {
            $this->url_control = site_url().'/'.strtolower($this->tran_code).'/';
        }

        $this->function_called = $this->uri->segment(2);
        $this->segment_3 = $this->uri->segment(3);

    }
    public function module()
    {
        /** user has access, fire up the actual function */
        $uri_segment2 = $this->uri->segment(2);
        if ($uri_segment2){
            $uri_function = $uri_segment2;
        } else {
            $uri_function = 'menu'; // this is a menu
        }
        /** call the actual function */
        $this->$uri_function();
        //var_dump($this->uri->segment(2));

    }
    public function display($content_file,$breadcumb_value='')
    {
        if (!$content_file) {return;}
        // trap no records list
        /*
        if ($this->chklist){
            if (@$this->data['list_data'] && count($this->data['list_data'])==0){// no records
                $content_file = 'others/norecords'; // display this page instead
            }
        }
        */
        // load first the common views
        $metadata['meta'] = $this->meta;
        $metadata['_css'] = base_url()._CSS;
        $metadata['_js'] = base_url()._JS;
        //$metadata['title'] = @$this->config->item('apptitle');

        if ($this->jsfile){
            $jsfiles = explode(',',$this->jsfile);
            foreach ($jsfiles as $js){
                if ($js){
                    $metadata['scripts'][] = base_url()."scripts/".$js.".js";}
            }
        } else {
            $metadata['scripts'] = '';
        }

        $breaddata['page_title'] = ($this->ptitle)?$this->ptitle:@$this->data['page_title'];
        $this->data['page_title'] = null;
        $this->data['url_control'] = site_url().'/';
        //$this->data['_images'] = base_url()._IMAGES;
        //$topdata['userInfo'] = $this->userInfo;  // send the user information for display

        /** NOW, load the views
         ****************************************************************************/

        /** load the page headers */
        $this->load->view('_system/header_view',$metadata);
        //$this->load->view('_system/toplink_view',$topdata);

        /** load the menus and other natigations */
        $this->load->view('_system/menu_view');
        $this->load->view('_system/header_menu');
        $this->load->view('_system/left_sidebar');
        //$this->load->view('_system/breadcrumb_view',$breaddata);

        /** load the actual content page */
        $this->load->view($content_file,$this->data);
        $this->load->view('_system/right_sidebar');
        /** load the footer and closing tags */
        $data['hostname']=$this->db->hostname;
        $this->load->view('_system/footer_view',$data);

    }



}