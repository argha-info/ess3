<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactUsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contact_us', function (Blueprint $table) {
            $table->id();
            $table->text('location');
            $table->string('email');
            $table->string('company_phone');
            $table->string('support_phone');
            $table->text('weblink');
            $table->text('facebook_link');
            $table->text('instagram_link');
            $table->text('twitter_link');
            $table->text('linkedin_link');
            $table->text('youtube_link');
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
        Schema::dropIfExists('contact_us');
    }
}
