<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewarrivalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('newarrivals', function (Blueprint $table) {
            $table->id();
            $table->string('newarrivalsId');
            $table->string('title');
            $table->longText('content');
            $table->text('newarrivals_link');
            $table->text('newarrivals');
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
        Schema::dropIfExists('newarrivals');
    }
}
