<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
 * Created by PhpStorm.
 * User: user
 * Date: 9/1/2015
 * Time: 11:55 AM
 */

class Web_error_controller extends MY_Controller {
    
   	public function index()
	{
        $this->display('_system/failure_view');
	}
    

}