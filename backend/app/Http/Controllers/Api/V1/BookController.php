<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookRequest;
use App\Http\Resources\V1\BookCollection;
use App\Http\Resources\V1\BookResource;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index() {
        return new BookCollection(Book::all());
    }

    public function show(Book $book) {
        return new BookResource($book);
    }

    public function store(StoreBookRequest $request) {
        Book::create($request->validated());
        return response()->json("Book created.");
    }

    public function update(StoreBookRequest $request, Book $book) {
        $book->update($request->validated());
        return response()->json("Book updated.");
    }

    public function destroy(Book $book) {
        $book->delete();
        return response()->json("Book deleted.");
    }
}
