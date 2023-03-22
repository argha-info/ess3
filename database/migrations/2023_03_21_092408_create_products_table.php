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
            $table->decimal('regular_price', 5, 2)->nullable();
            $table->decimal('discount_price', 5, 2)->nullable();
            $table->boolean('status')->dedault(0)->comment('0=Unpublished,1=Published');
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
