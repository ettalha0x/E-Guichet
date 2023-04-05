<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Courses;

class CoursesFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Courses::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'Course' => $this->faker->regexify('[A-Za-z0-9]{400}'),
            'Semester' => $this->faker->regexify('[A-Za-z0-9]{400}'),
            'Module_1' => $this->faker->regexify('[A-Za-z0-9]{400}'),
            'Module_2' => $this->faker->regexify('[A-Za-z0-9]{400}'),
            'Module_3' => $this->faker->regexify('[A-Za-z0-9]{400}'),
            'Module_4' => $this->faker->regexify('[A-Za-z0-9]{400}'),
            'Module_5' => $this->faker->regexify('[A-Za-z0-9]{400}'),
            'Module_6' => $this->faker->regexify('[A-Za-z0-9]{400}'),
            'Module_7' => $this->faker->regexify('[A-Za-z0-9]{400}'),
        ];
    }
}
