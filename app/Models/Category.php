<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'categories';
    protected $fillable = [
        "catid",
        "parent_id",
        "category_name",
        "category_description",
        "image",
        "status",
        "created_by",
        "created_at",
        "updated_at"
    ];

    public function products()
    {
        return $this->belongsToMany(\App\Models\Product::class,'product_categories', 'category_id', 'product_id');
    }
}
