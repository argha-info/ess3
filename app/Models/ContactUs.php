<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class ContactUs extends Model
{
    use HasFactory;
    protected $table = 'contact_us';
    protected $fillable = [
        "location",
        "email",
        "company_phone",
        "support_phone",
        "support_phone",
        "weblink",
        "facebook_link",
        "instagram_link",
        "twitter_link",
        "linkedin_link",
        "youtube_link",
        "created_at",
        "updated_at"
    ];
}
