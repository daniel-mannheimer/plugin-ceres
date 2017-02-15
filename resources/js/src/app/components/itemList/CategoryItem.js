Vue.component("category-item", {

    template: "#vue-category-item",

    props: [
        "decimalCount",
        "itemData",
        "imageUrlAccessor"
    ],

    data: function()
    {
        return {
            recommendedRetailPrice: 0,
            variationRetailPrice  : 0
        };
    },

    created: function()
    {
        this.recommendedRetailPrice = this.itemData.calculatedPrices.rrp.price;
        this.variationRetailPrice = this.itemData.calculatedPrices.default.price;
    },

    computed:
    {
        /**
         * returns itemData.item.storeSpecial
         */
        storeSpecial: function()
        {
            return this.itemData.item.storeSpecial;
        },

        /**
         * returns itemData.texts[0]
         */
        texts: function()
        {
            return this.itemData.texts[0];
        },

        /**
         * returns all urlPreviews in an array
         */
        imageUrls: function()
        {
            var urls = [];

            for (var i in this.itemData.images.all)
            {
                var imgInformation = this.itemData.images.all[i];

                urls.push(imgInformation.urlMiddle);
            }

            return urls;
        }
    }
});
