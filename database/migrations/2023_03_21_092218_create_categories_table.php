<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->uuid('catid')->unique();
            $table->uuid('parent_id')->nullable();
            $table->char('category_name', 100);
            $table->text('category_description');
            $table->text('image')->nullable();
            $table->boolean('status')->default(1)->comment('0=Unpublished,1=Published');
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
        Schema::dropIfExists('categories');
    }
}
