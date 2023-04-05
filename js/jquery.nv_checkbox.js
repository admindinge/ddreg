/**
 * jQuery custom checkbox
 * @version 1.1
 * Copyright (c) 2011 Netventure Sp. z o.o.
 *
 **/

$.fn.nv_uncheck = function (type) {
  var $this = $(this);
  var id = $this.prop('id');

  $this.prop('checked', false);
  $("label[for='" + id + "']").removeClass('nv_' + type + '_on');
  $("label[for='" + id + "']").addClass('nv_' + type + '_off');
};

$.fn.nv_checkbox = function () {

  function Init() {
    if ($this.prop('checked') == true) {
      if ($('label[for="' + id + '"]').length > 0) {
        $('label[for="' + id + '"]').removeClass('nv_checkbox_off');
        $('label[for="' + id + '"]').addClass('nv_checkbox_on');
      } else if ($this.parent("label").length > 0) {
        $this.parent("label").removeClass('nv_checkbox_off');
        $this.parent("label").addClass('nv_checkbox_on');
      }
    } else {
      if ($('label[for="' + id + '"]').length > 0) {
        $('label[for="' + id + '"]').removeClass('nv_checkbox_on');
        $('label[for="' + id + '"]').addClass('nv_checkbox_off');
      } else if ($this.parent("label").length > 0) {
        $this.parent("label").addClass('nv_checkbox_off');
        $this.parent("label").removeClass('nv_checkbox_on');
      }
    }

    if ($this.prop('disabled') == true) {
      if ($('label[for="' + id + '"]').length > 0) {
        $('label[for="' + id + '"]').addClass('nv_checkbox_disabled');
      } else if ($this.parent("label").length > 0) {
        $this.parent("label").addClass('nv_checkbox_disabled');
      }
    }
    else {
      if ($('label[for="' + id + '"]').length > 0) {
        $('label[for="' + id + '"]').removeClass('nv_checkbox_disabled');
      } else if ($this.parent("label").length > 0) {
        $this.parent("label").removeClass('nv_checkbox_disabled');
      }
    }
  }


  function turnOff() {
    $($this).prop('checked', false);
    if ($('label[for="' + id + '"]').length > 0) {
      $('label[for="' + id + '"]').removeClass('nv_checkbox_on');
      $('label[for="' + id + '"]').addClass('nv_checkbox_off');
    } else if ($this.parent("label").length > 0) {
      $this.parent("label").removeClass('nv_checkbox_on');
      $this.parent("label").addClass('nv_checkbox_off');
    }
  }

  function turnOn() {
    $($this).prop('checked', true);
    if ($('label[for="' + id + '"]').length > 0) {
      $('label[for=\'' + id + '\']').removeClass('nv_checkbox_off');
      $('label[for=\'' + id + '\']').addClass('nv_checkbox_on');
    } else if ($this.parent("label").length > 0) {
      $this.parent("label").removeClass('nv_checkbox_off');
      $this.parent("label").addClass('nv_checkbox_on');
    }
  }

  function labelClicked() {
    if ($this.prop('checked') == true) {
      turnOn();
    } else {
      turnOff();
    }
  }


  var $this = $(this);
  var id = $this.prop('id');
  var label = $('label[for="' + id + '"]');
  var name = $($this).prop('name');
  $this.css({'position': 'absolute', 'left': '-9999px'});
  //$this.hide();

  Init();
  $this.on("click", function () {
    if ($(this).prop('disabled') == true || $(this).prop('readonly') == true) {
      return false;
    }
    labelClicked();
  });
};

$.fn.nv_radiobutton = function () {

  function Init(handle) {
    if (handle.prop('checked') == true) {
      if ($('label[for="' + id + '"]').length > 0) {
        $('label[for="' + id + '"]').removeClass('nv_radio_off');
        $('label[for="' + id + '"]').addClass('nv_radio_on');
      } else if (handle.parent("label").length > 0) {
        handle.parent("label").removeClass('nv_radio_off');
        handle.parent("label").addClass('nv_radio_on');
      }

    } else {
      if ($('label[for="' + id + '"]').length > 0) {
        $('label[for="' + id + '"]').removeClass('nv_radio_on');
        $('label[for="' + id + '"]').addClass('nv_radio_off');
      } else if (handle.parent("label").length > 0) {
        handle.parent("label").removeClass('nv_radio_on');
        handle.parent("label").addClass('nv_radio_off');
      }
    }

  }

  function clearAll() {
    $('input[type="radio"][name="' + name + '"]').each(function () {     
      $(this).prop('checked', false);
      if ($('label[for="' + ($(this).prop('id')) + '"]').length > 0) {
        $('label[for="' + ($(this).prop('id')) + '"]').removeClass('nv_radio_on');
        $('label[for="' + ($(this).prop('id')) + '"]').addClass('nv_radio_off');
      } else if ($(this).parent('label').length > 0) {
        $(this).parent('label').removeClass('nv_radio_on');
        $(this).parent('label').addClass('nv_radio_off');
      }
    });
  }

  function labelClicked() {
    if ($this.prop('checked') === false) {
      clearAll();
      turnOn();
    }
  }

  function turnOn() {
    $($this).prop('checked', true);
    if ($('label[for="' + id + '"]').length > 0) {
      $('label[for="' + id + '"]').removeClass('nv_radio_off');
      $('label[for="' + id + '"]').addClass('nv_radio_on');

    } else if ($($this).parent('label')) {
      $($this).parent('label').removeClass('nv_radio_off');
      $($this).parent('label').addClass('nv_radio_on');
    }
  }

  var $this = $(this);
  var id = $this.prop('id');
  var label = $('label[for="' + id + '"]');
  var name = $($this).prop('name');
    $this.css({'position': 'absolute', 'left': '-9999px'});
  // $this.hide();

  Init($this);
  label.on("click", function () {
    if ($this.prop('disabled') == true) {
      return false;
    }
    labelClicked()
  });

  $this.parent('label').on("click", function () {
    if ($this.prop('disabled') == true) {
      return false;
    }
    labelClicked()
  })
};
