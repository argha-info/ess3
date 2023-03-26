<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('product_name');
            $table->string('SKU')->unique();
            $table->text('short_description');
            $table->longText('product_specification');
            $table->longText('manufacturer_details');
            $table->string('regular_price')->nullable();
            $table->string('discount_price')->nullable();
            $table->text('image')->nullable();
            $table->boolean('status')->dedault(0)->comment('0=Unpublished,1=Published');
            $table->uuid('created_by')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
