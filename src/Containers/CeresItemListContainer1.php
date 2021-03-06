<?php

namespace Ceres\Containers;

use Ceres\Config\CeresConfig;
use Plenty\Modules\Webshop\ItemSearch\SearchPresets\TagItems;
use Plenty\Modules\Webshop\ItemSearch\Services\ItemSearchService;
use Plenty\Plugin\Templates\Twig;

class CeresItemListContainer1
{
    public function call(Twig $twig, $arg):string
    {
        return $twig->render('Ceres::Containers.ItemLists.ItemList1', ["item" => $arg[0]]);
    }
}
