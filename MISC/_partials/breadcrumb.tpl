{**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}



{*
     Styling and include to test out. It has to be added to custom.js and custom.css
*}

{* <script src="js/jquery-3.5.1.min.js"></script>
 *}{* <style>
    .dropdown:hover .dropdown-menu{
        display: block;
    }
    .dropdown-menu{
        margin-top: 0;
    }
</style> *}
{* {literal}
<script>
$(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });
});     
</script>
{/literal} *}



<nav class="breadcrumb-wrapper" style="overflow:visible;">
  <div class="container" >
    <ol class="breadcrumb shadow-box" data-depth="{$breadcrumb.count}" itemscope itemtype="http://schema.org/BreadcrumbList" style="border:none">
      {block name='breadcrumb'}
      {* TESTING OUT A LOOP *}
{*         {assign var='sub_categories' value=Category::getChildren((int)$category.id_parent, (int)$id_lang)}
 *}        {foreach from=$breadcrumb.links item=path name=breadcrumb}
          <div class = "dropdown show">
          {block name='breadcrumb_item'}
            <li class ="breadcrumb_item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
              {if !$smarty.foreach.breadcrumb.first}
                <span class="separator"><i class="material-icons">&#xE409;</i></span>
              {/if}


               {if !$smarty.foreach.breadcrumb.first && !$smarty.foreach.breadcrumb.last}
                 <a role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" itemprop="item" href="{$path.url}">
                                          {literal}
                                          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js">
                                              $("#dropdownMenuLink").removeAttr("data-toggle");
                                          </script>
                                          {/literal}
                  {if $smarty.foreach.breadcrumb.first}  
                    <i class="material-icons home">&#xE88A;</i>
                  {/if}
                    <span itemprop="name">{$path.title}</span>
                </a>
              {if !$smarty.foreach.breadcrumb.first && !$smarty.foreach.breadcrumb.last}
                  <div  class="dropdown-menu" style="position:relative; z-index:999;"aria-labelledby="dropdownMenuLink">
                          {assign var='sub_categories' value=Category::getChildren((int)$path.id, (int)$id_lang)}
                            {if isset($sub_categories)}
                              {foreach from=$sub_categories item=subcat name=subcat}
                                          <a class="dropdown-item" href="{$urls.base_url}{$subcat.link_rewrite}">{$subcat.name}</a>
                              {/foreach}
                            {/if}
                            
                        {debug}
                        
                  </div>
                  {/if}
                 {/if} 
               {else}
                <a itemprop="item" href="{$path.url}">
                  {if $smarty.foreach.breadcrumb.first}
                    <i class="material-icons home">&#xE88A;</i>
                  {/if}
                    <span itemprop="name">{$path.title}</span>
                </a>
              {/if} *}
              <meta itemprop="position" content="{$smarty.foreach.breadcrumb.iteration}">
            </li>

          </div>
          {/block}

        
        {/foreach}
      {/block}
    </ol>
  </div>
</nav>



