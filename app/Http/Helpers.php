<?php
namespace App\Http;

use DB;
use Carbon;
use Auth;
class Helpers
{
    public static function createID($prefix=''){
        $generateID = $prefix.'-'.Carbon\Carbon::now()->format('Ymdhis').rand(10000, 99999); 
        return $generateID;

    }
}
