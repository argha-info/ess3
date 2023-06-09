<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductGallery extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'product_galleries';
    protected $fillable = [
        'product_id',
        'inventory_id',
        'image',
        'thumbnail',
        'display_order',
        'status',
        'created_at',
        'updated_at'
    ];
}
