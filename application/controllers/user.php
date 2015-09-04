<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
 * Created by PhpStorm.
 * User: user
 * Date: 9/1/2015
 * Time: 11:55 AM
 */
class User extends CI_Controller {
    
    public      $tran_code = 'USER';
    private     $website_down    = FALSE;

	public function __construct()
    {
		parent::__construct();
        //$this->load->helper('form');
        $this->load->helper('url');

        if ($this->website_down){
            $this->load->view('_system/website_down');
            }
	  }
    
    public function login()
    {    

        $username		= $this->input->post('username');    
    	$password		= $this->input->post('password');

		if ( $username != '') {
            // User Validation for successful login

            if ($this->_logauthorize($username, $password))
            {
               redirect( site_url(),'refresh');
            }
		}

        $this->_browserCheck();
        $this->load->view('_system/login_content', $this->data);
		
	}

	public function logout()
	{
		$this->session->unset_userdata('appuser');
		$this->session->sess_destroy();

		$this->login();
	}
    
    private function _logauthorize($username, $password)
    {
        $authenticated = false;

        if ($username && $password) {
            $this->load->model('Common_model',"common");

            $userData = $this->common->checkLoginAccess($username, $password);

            if ($userData[0 ]->msg != ' ' ){    // invalid login
                $this->data['msg'] = $userData[0]->msg;
                $authenticated = false;
            } else {
                // Correct login, save the user data to session
    			$data['pass']       = trim($userData[0]->adminPass);
                $data['name']       = trim($userData[0]->adminName);

                $this->session->set_userdata('appuser', (object) $data);
                $data = null;
                $authenticated = true;
            }

        }

        return $authenticated;
        
    }

    private function _browserCheck()
    {
		$this->load->library('user_agent');
		$this->data['browser']['type']	 	= $this->agent->browser();
		$this->data['browser']['version'] 	= $this->agent->version();
		$browser_validation = FALSE;
		
        //echo $this->data['browser']['type'].'<br/>';
        
		switch ($this->data['browser']['type']):
			case('Internet Explorer'):
				if($this->data['browser']['version'] >= 9.0){
					$browser_validation = TRUE;
				}
			break;
			case('Firefox'):
					$browser_validation = TRUE;
			break;
			case('Safari'):
					$browser_validation = TRUE;
			break;			
            // testing purposes -- it will remove upon deploying to the Live Server
			case('Chrome'):
					$browser_validation = TRUE;
			break;			

		endswitch;

        if ($browser_validation)    // if browser is okay, no need to display the message
        {
            $this->data['browser'] = '';
        }		
        return;
        
    }

	
	// function to change user name and password
	public function userp(){		
		$this->load->helper('data');
		$this->load->model('Admin_model',"admin");
        $xmlString = str_replace('<admin>','<admin><row>',create_XMLstring('','admin','FLD_',FALSE));            
        $result = $this->admin->saveUserRoles('USER', str_replace('</admin>','</row></admin>',$xmlString), '', '');
		$errmsg = '';
		//printR();
        if(trim(@$result[0]->msg) != "") {
			$errmsg .= @$result[0]->msg;
		} else { $errmsg .= 'Password successfully changed. Please logout and re-login.'; }
		echo $errmsg;
	}
	
}