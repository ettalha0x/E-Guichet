<?php

namespace Database\Factories\Models;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Models\Demande_correction_de_donnees;

class DemandeCorrectionDeDonneesFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = DemandeCorrectionDeDonnees::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'nom_tudiant' => $this->faker->word,
            'prenom_tudiant' => $this->faker->word,
            'cne_tudiant' => $this->faker->word,
            'cni_tudiant' => $this->faker->word,
            'appoge' => $this->faker->word,
            'type_email' => $this->faker->randomElement(["Demande de correction de donnees"]),
        ];
    }
}
