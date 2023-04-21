<?php

namespace Database\Factories\Models;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Models\Document;

class DocumentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Document::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'prenom' => $this->faker->word,
            'cne' => $this->faker->randomNumber(),
            'cni' => $this->faker->randomNumber(),
            'appoge' => $this->faker->word,
            'scolarite' => $this->faker->boolean,
            'relevedenote' => $this->faker->boolean,
        ];
    }
}
