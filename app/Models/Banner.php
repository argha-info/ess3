<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Banner extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'banners';
    protected $fillable = [
        'bannerid',
        'title',
        'sub_title',
        'content',
        'banner_link_text',
        'banner_link',
        'banner',
        'status',
        'created_by',
        'created_at',
        'updated_at'
    ];
}
