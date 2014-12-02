Ext.define('TestMVC.controller.settings.CountryList', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            countryList: 'countrylist'
        },
        control: {
            /*'countriesList': {
                itemtap: 'onCountryListItemTap'
            }*/
        }
    },


    //***************************************************************************
    // LAUNCH: load the list
    //***************************************************************************
    launch: function() {
        console.log('load the country list');

        // build the array with the country data
        var myDataArray = [];
        myDataArray.push({countryId: 'IT', countryName: 'Italy'});
        myDataArray.push({countryId: 'FR', countryName: 'France'});
        myDataArray.push({countryId: 'CH', countryName: 'Switzerland'});
        myDataArray.push({countryId: 'ES', countryName: 'Spain'});

        // setup the country store - this will show the data in the country list because it has the store 'Countries' configured!
        var store = Ext.getStore('Countries');
        store.setData(myDataArray);
    }

});
