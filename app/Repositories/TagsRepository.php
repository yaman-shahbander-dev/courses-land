<?php

namespace App\Repositories;

use App\Interfaces\TagRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\Tag;

class TagsRepository implements TagRepositoryInterface
{
    public function dashboardAllTags()
    {
        $tags = Tag::all(['id', 'name', 'created_at']);

        return $tags;
    }

    public function checkTagExistance(Request $request)
    {
        $tagID = $request->tagID;

        $operation = $request->operation;

        $tag = Tag::find($tagID);

        if (empty($tag)) {
            return response()->json(['error' => 'Tag does not exist']);
        } elseif ($operation == 'delete') {
            $tag->delete();
            return response()->json(['success' => 'Tag deleted successfully']);
        } elseif ($operation == 'edit') {
            return response()->json(['success' => $tag]);
        }
    }

    public function UpdateTagInforamtion(Request $request)
    {
        $tagInfo = $request->all();

        $tagDB = Tag::find($tagInfo['tagID']);

        if (empty($tagDB)) {
            return response()->json(['error' => 'Tag does not exist']);
        } else {
            $tagDB->name = $tagInfo['name'];

            $tagDB->save();

            return response()->json(['success' => 'Tag updated successfully']);
        }
    }

    public function searchTag(Request $request)
    {
        $value = $request->value;

        $tags = Tag::where('name', 'like', '%' . $value . '%')->get();

        return response()->json(['success' => $tags]);
    }

    public function createTag(Request $request)
    {
        $name = $request->name;
        if (!empty(Tag::where('name', $name)->first())) {
            return response()->json(['error' => 'Tag already exists!']);
        } else {
            $tag = new Tag();
            $tag->name = $name;
            $tag->save();
            return response()->json(['success' => 'Tag has been created successfully!']);
        }
    }
}
