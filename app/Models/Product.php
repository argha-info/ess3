<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'products';
    protected $fillable = [
        "product_name",
        "SKU",
        "short_description",
        "product_specification",
        "manufacturer_details",
        "regular_price",
        "discount_price",
        "status",
        "created_at",
        "updated_at"
    ];
}
