<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "roles" => RoleResource::collection($this->roles),
            "email" => $this->email,
            "photo" => $this->photo ? url("storage/" . $this->photo) : "https://ui-avatars.com/api/?name=" . urlencode($this->name),
            "created_at" => $this->created_at->format('d M Y H:i'),
        ];
    }
}
