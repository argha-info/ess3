<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TypeWiseProduct extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = "type_wise_products";
    protected $fillable = [
        "product_type_id",
        "product_id",
        'status',
        "created_at",
        "updated_at"
    ];
}
