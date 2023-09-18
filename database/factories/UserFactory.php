<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
            /*
            id 1 2 3
            usernaem asdasd_dasf
            email erer@gmail.com
            secret_key 20 string
            verified 0 or 1
            picture  aaaa.jpg
            password in hash
            remember_token NULL or HhJyUg2fW4ZusHOTL2NOPe3uwWI10oOT6DNroXspFmybpphTxIpWxBgssRFC
            type_id 1 to 4 (random)
            describtion NULL or string
            fcm_token NULL or esxLSYrrY7Ysxjplqz0mjj:APA91bHbuYdafHyYzkkAKWO9qXVQIsA7gLs08MhK7KRGdJvRKGD7YS6m2mgfpf-gE57JB53UFg0vutblnv9J35RSjkJ91pjyH3eGSidl3dt1GbdIfAQYGbJCVWgNodAYEnybDV0peAV0
            active_status 0 or 1
            avatar ava.png
            dark_mode 0
            messenger_color #2180f3
            name (first name)
            $table->string('username');
            $table->string('email')->unique();
            $table->string('secret_key')->unique();
            $table->string('verified')->default(0);
            $table->string('picture');
            $table->string('password');
            $table->rememberToken();
            $table->string('messenger_color')->default('#2180f3');
            $table->boolean('dark_mode')->default(0);
            $table->string('avatar')->default(config('chatify.user_avatar.default'));
            $table->boolean('active_status')->default(0);
            //??//$table->bigInteger('user_id')->unsigned();
            //??//$table->foreign('user_id')->references('id')->on('users');
            $table->string('description')->nullable();
            $table->string('fcm_token')->nullable();
            $table->bigInteger('type_id')->unsigned();
        */
        return [
            //'name' => $this->faker->name(),
            //'email' => $this->faker->unique()->safeEmail(),
            //'email_verified_at' => now(),
            //'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            //'remember_token' => Str::random(10),

            //username asdasd_dasf
            'username' => $this->faker->name(),
            //email erer@gmail.com
            'email' => $this->faker->unique()->safeEmail(),
            //secret_key 20 string
            'secret_key' => $this->faker->regexify('[a-z0-9]{20}'),
            //verified 0 or 1
            'verified' => $this->faker->numberBetween(0, 1),
            //picture  aaaa.jpg
            'picture' => 'userOfDummyData.jpg',
            //password in hash
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            //remember_token NULL or HhJyUg2fW4ZusHOTL2NOPe3uwWI10oOT6DNroXspFmybpphTxIpWxBgssRFC
            'remember_token' => Str::random(10),
            // type_id 1 to 4 (random)
            'type_id' => $this->faker->numberBetween(1, 4),
            //description NULL or string
            'description' => $this->faker->sentence($this->faker->numberBetween(15, 20)),
            //fcm_token NULL or esxLSYrrY7Ysxjplqz0mjj:APA91bHbuYdafHyYzkkAKWO9qXVQIsA7gLs08MhK7KRGdJvRKGD7YS6m2mgfpf-gE57JB53UFg0vutblnv9J35RSjkJ91pjyH3eGSidl3dt1GbdIfAQYGbJCVWgNodAYEnybDV0peAV0
            //'fcm_token' => $this->faker->name(),
            //active_status 0 or 1
            'active_status' => $this->faker->numberBetween(0, 1),
            //avatar ava.png
            'avatar' => 'avatarOfDummyData.jpg',
            //dark_mode 0
            'dark_mode' => '0',
            //messenger_color #2180f3
            'messenger_color' => '#2180f3',
            //name (first name)done
            'name' => $this->faker->firstName(),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
