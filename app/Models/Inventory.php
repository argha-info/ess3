<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Inventory extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'inventories';
    protected $fillable = [
        'product_id',
        'color_id',
        'size_id',
        'regular_price',
        'discount_price',
        'quantity',
        'status',
        'created_at',
        'updated_at'
    ];
}
