{**
 * 2007-2019 PrestaShop and Contributors
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
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}

{if isset($zoneSidebarCart) && $zoneSidebarCart}
  <div class="st-menu-right st-effect-right">
    <div class="st-menu-close d-flex" data-close-st-menu><i class="material-icons">close</i></div>
    <div id="js-cart-sidebar" class="sidebar-cart cart-preview js-hidden"></div>
    <div class="st-menu-close cart-continue-shopping" data-close-st-menu><div class="text-center">
    <span class="btn btn-secondary">
      <i class="material-icons">&#xE5CB;</i> {l s='Continue shopping' d='Shop.Theme.Actions'}
    </span></div></div>
    <div id="js-currency-sidebar" class="sidebar-currency js-hidden"></div>
  </div>
{/if}
