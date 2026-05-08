<?php

namespace App\Fieldtypes;

use Statamic\Fields\Fieldtype;

class AltchaFieldtype extends Fieldtype
{
    protected static $handle = 'altcha';

    protected $selectable = false;

    protected $categories = ['special'];

    protected function configFieldItems(): array
    {
        return [];
    }

    public function preProcess($data)
    {
        return null;
    }

    public function process($data)
    {
        return null;
    }

    public function augment($value)
    {
        return null;
    }

    public function rules(): array
    {
        return ['required', 'altcha'];
    }
}
