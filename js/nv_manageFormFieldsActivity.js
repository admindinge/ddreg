    var FormFieldsDataMemberController = function () {
        var data, publicAPI, renderData;
        var visibleIds = [];
        var requireIds = [];

        publicAPI = {

            config: {
                fieldPrefix: '',
                elementsToHide: '',
                elementsToRequire: '',
                eventAfterFinished: '',
                excludedVisivilityIds: [],
                excludedRequirementIds: [],
            },


            setData: function (x) {
                data = x;
                this.config.fieldPrefix = data[0]['elements']['fieldPrefix'];
                this.config.elementsToHide = data[0]['elements']['elementsToHide'];
                this.config.elementsToRequire = data[0]['elements']['elementsToRequire'];
                this.config.eventAfterFinished = data[0]['elements']['eventAfterFinished'];
                this.config.excludedVisivilityIds = (((data[0]['elements']['excludedVisivilityIds'] || false).constructor.toString().indexOf("Array") > -1)
                                                      ? data[0]['elements']['excludedVisivilityIds']
                                                      : []);

                this.config.excludedRequirementIds = (((data[0]['elements']['excludedRequirementIds'] || false).constructor.toString().indexOf("Array") > -1)
                                                      ? data[0]['elements']['excludedRequirementIds']
                                                      : []);
            },

            getVisibleFieldsIds: function () {
                return visibleIds;
            },

            getRequiredFieldsIds: function () {
                return requireIds;
            },

            prepareDataByType: function (type) {
                var newData;

                if (typeof data === 'undefined' || typeof type === 'undefined') {
                    return;
                }

                function test(value) {

                    var visibleLength, currentType, multi;
                    multi = [];
                    visibleLength = value.visible.values.length;

                    // selected 'all' on visible
                    if (visibleLength === 1 && value.visible.values[0] === 'all' && value.visible.checked === false) {
                        return Number(value.id); //-- return value;
                    }

                    // selected 'all' on invisible
                    if (visibleLength === 1 && value.visible.values[0] === 'all' && value.visible.checked === true) {
                        return false;
                    }

                    // selected 'none' on invisible
                    if (visibleLength === 0 && value.visible.checked === true) {
                        return Number(value.id); //-- return value;
                    }

                    // if selected more then 0 and not 'all'
                    for (var i = 0; i < visibleLength; i++) {
                        currentType = Number(value.visible.values[i]);

                        if (type.indexOf(currentType) !== -1 && value.visible.checked === false) {
                            multi.push(Number(value.id)); //-- multi.push(value);
                        } else if (type.indexOf(currentType) === -1 && value.visible.checked === true) {
                            multi.push(Number(value.id)); //-- multi.push(value);
                        } else if (type.indexOf(currentType) !== -1 && value.visible.checked === true) {
                            return false;
                        }
                    }

                    if (multi.length)
                        return multi;

                    return false;
                }

                newData = data.map(function (currentValue) {
                    return {
                        fieldsIds: currentValue.fields.map(test),
                    }
                });

                visibleIds = [];

                for (var y = 0; y < newData.length; y++) {
                    for (var k = 0; k < newData[y].fieldsIds.length; k++) {
                        if (newData[y].fieldsIds[k]) {
                            visibleIds.push(newData[y].fieldsIds[k]);
                        }
                    }
                }

                var fieldPrefix    = this.config.fieldPrefix;
                var excludedFields = this.config.excludedVisivilityIds;

                $(this.config.elementsToHide).each(function () {

                    var ths = $(this);
                    var isExcluded = false;

                    excludedFields.forEach(function(id) {
                        if ($(ths).hasClass(fieldPrefix + id))
                            isExcluded = true;
                    });

                    if ( ! isExcluded)
                        $(this).hide();
                });


                for (var i = 0; i < visibleIds.length; i++) {
                    if ( ! ($.inArray(visibleIds[i], excludedFields) > -1 || $(visibleIds[i]).filter(excludedFields).length > 0 ))
                        $('.' + this.config.fieldPrefix + visibleIds[i]).show();
                }

            },


            prepareStarsByType: function (type, callback) {
                var newData;

                if (typeof data === 'undefined' || typeof type === 'undefined') {
                    return;
                }

                function test(value) {

                    var requireLength, currentType, multi;
                    multi = [];

                    requireLength = value.required.values.length;
                    // selected 'all' on required
                    if (requireLength === 1 && value.required.values[0] === 'all' && value.required.checked === false) {
                        return Number(value.id);
                    }

                    // selected 'all' on optional 
                    if (requireLength === 1 && value.required.values[0] === 'all' && value.required.checked === true) {
                        return false;
                    }

                    // selected 'none' on invisible
                    if (requireLength === 0 && value.required.checked === true) {
                        return Number(value.id);
                    }

                    // if selected more then 0 and not 'all'
                    for (var i = 0; i < requireLength; i++) {
                        currentType = Number(value.required.values[i]);

                        if (type.indexOf(currentType) !== -1 && value.required.checked === false) {
                            multi.push(Number(value.id));
                        } else if (type.indexOf(currentType) === -1 && value.required.checked === true) {
                            multi.push(Number(value.id));
                        } else if (type.indexOf(currentType) !== -1 && value.required.checked === true) {
                            return false;
                        }
                    }

                    if (multi.length) {
                        return multi;
                    }
                    return false;
                }


                newData = data.map(function (currentValue) {
                    return {
                        fieldsIds: currentValue.fields.map(test)
                    }
                });

                requireIds = [];

                for (var y = 0; y < newData.length; y++) {
                    for (var k = 0; k < newData[y].fieldsIds.length; k++) {
                        if (newData[y].fieldsIds[k]) {
                            requireIds.push(newData[y].fieldsIds[k]);
                        }
                    }
                }

                $(this.config.elementsToRequire).each(function () {
                    $(this).hide();
                });

                for (var i = 0; i < requireIds.length; i++) {
                    $('.' + this.config.fieldPrefix + requireIds[i] + ' .required').show();
                }

            }

        };

        return publicAPI;
    }


    var FormFieldsMemberController = {

        data: null,
        init: function (x) {

            var url, renderData;
            url = window.location.href;

            if (typeof x !== 'object') {
              try {
                  x = JSON.parse(x);
              } catch (e) {
                  console.warn(e);
                 return false;
              }
            }

            this.data = FormFieldsDataMemberController();

            (this.data).setData(x);
            (this.data).prepareDataByType(moduleGlobals["typ_uczestnictwa"]);
            (this.data).prepareStarsByType(moduleGlobals["typ_uczestnictwa"], null);

            return true;
        },

        reRender: function (type) {

            (this.data).prepareDataByType(type);
            (this.data).prepareStarsByType(type, null);

            // if (typeof event !== 'undefined')
            //     document.dispatchEvent(event);
        },

        getVisibleFieldsIds: function() {
            return (this.data).getVisibleFieldsIds();
        },

        getRequiredFieldsIds: function() {
            return (this.data).getRequiredFieldsIds();
        }

    }