<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomeaboutTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('homeabout', function (Blueprint $table) {
            $table->id();
            $table->string('homeaboutId');
            $table->string('title');
            $table->text('sub_title');
            $table->longText('content');
            $table->text('about_link');
            $table->text('homeabout');
            $table->boolean('status')->dedault(0)->comment('0=inactive,1=active');
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
        Schema::dropIfExists('homeabout');
    }
}
