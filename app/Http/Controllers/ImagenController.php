<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Imagick\Driver;

class ImagenController extends Controller
{
    //
    public function store(Request $request)
    {
        // $input = $request->all();
        $image = $request->file("file");

        $name_image = Str::uuid() . "." . $image->extension();

        $server_image = ImageManager::imagick()->read($image);
        $server_image->resize(1000, 1000);

        $imagePath = public_path('uploads') . '/' . $name_image;
        $server_image->save($imagePath);

        return response()->json(['imagen' => $name_image]);
    }
}
