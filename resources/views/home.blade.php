@extends('layouts.app')

@section('titulo')
    Hola {{ auth()->user()->username }}
@endsection

@section('contenido')
    <x-listar-post :posts="$posts" />
@endsection
