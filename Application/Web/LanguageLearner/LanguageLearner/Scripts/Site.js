$(function () {
    var progressHeight = $("#scrollIndicator").height() || 0;
    $('#navbar').css({ top: progressHeight + "px" });
    closeNav();
    closeNavRight();

    if (!Date.now) {
        Date.now = function now() {
            return new Date().getTime();
        };
    }

    window.onscroll = function () { myFunction(); onScrolling(); };
    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var restPosition = winScroll / height;
        var scrolled = (restPosition * 100).toFixed(0);
        $("#myBar").attr("aria-valuenow", scrolled);
        $("#myBar").width(scrolled + "%");
        $("#myBar1").text(scrolled + "%");
    }

    var version = detectIE();
    var isIE = false;
    if (version === false) {
        isIE = false;
    } else if (version >= 12) {
        isIE = false;
    } else {
        isIE = true;
    }

    function detectIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        return false;
    }

    var prevScrollpos = window.pageYOffset;

    function onScrolling() {
        if (!isIE) {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                $("#navbar").slideDown("slow");
            } else {
                $("#navbar").slideUp("slow");
            }
            prevScrollpos = currentScrollPos;
        }
    }

    function openNav() {
        $("body").addClass('overflowClass');
        $("#mySidenav").css({ width: "300px" });
        $("body").css({ backgroundColor: "rgba(0,0,0,0.4)" });
        $('#mySidenav').removeClass('overflowClass');
        $("#myCanvasNav").css({ width: "100%", opacity: "0.8" });
    }

    function closeNav() {
        $("#mySidenav").css({ width: "0" });
        $("body").css({ backgroundColor: "white" });
        $('#mySidenav').addClass('overflowClass');
        $("body").removeClass('overflowClass');
        $("#myCanvasNav").css({ width: "0%", opacity: "0" });
    }

    function openNavRight() {
        var width = $("body").width() / 4;
        $('#mySidenavRight').css({ width: width + "px" });
        $('#mainRight').css({ marginRight: width + "px" });
    }

    function closeNavRight() {
        $('#mySidenavRight').css({ width: "0" });
        $('#mainRight').css({ marginRight: "0" });
    }

    $(".closeNavBar").on("click", function () {
        closeNav();
    });

    $(".openNavBar").on("click", function () {
        openNav();
    });

    $(".closeNavBarRight").on("click", function () {
        closeNavRight();
    });

    $(".openNavBarRight").on("click", function () {
        openNavRight();
    });

    var path = '';
    var indLi = 0;
    var isChangedModalProp = false;
    function createDropdownMenu(id, aria) {
        var items = $('#' + id).find('.ddItemCollect');
        if (!items || items.length <= 0) {
            return null;
        }
        var ul = $('<ul class="dropdown-menu menu-custom-fill" aria-labelledby="' + aria + '"></ul>');
        var li = $('<li class="dropdown-item item-custom-fill"></li>');
        var div = $('<div class="btn-group dropright item-custom-fill group-focus custom-list-group-item-action"></div>');
        var btn = $('<button class="btn btn-custom-fill p-3 m-0" type="button" ></button>');
        btn.on('click', function () {
            var indItem = $(this).parents('[aria-level]');
            var index = indItem.attr('aria-level');
            if (index >= 0) {
                var sibLi = indItem.parent().children('li:gt(' + index + ')');
                indLi -= sibLi.length;
                sibLi.remove();
            }
            var text = $(this).text();
            var id = $(this).attr('id');
            path += ' #' + id;
            indLi++;
            setBreadCrumbLocation(text, path, indLi);
        });
        div.append(btn);
        li.append(div);

        $(items).each(function () {
            var textForBreadCrumbItem = $(this).prop('tagName').toLowerCase() === 'input' ? $(this).val() : $(this).text();
            btn.text(textForBreadCrumbItem);
            ul.append(li.clone(true));
        });
        return ul;
    }

    var clear = true;

    $('#send_tool_to_other, #send_prop_to_other').on('change', function () {
        path = $('option:selected', this).attr('aria-labelledby');
        var send_select_option_index = $('#send_select_option_index');
        send_select_option_index.children(':gt(0)').remove();//.empty();
        //send_select_option_index.append($('<option value="" selected>Select</option>'));
        var items = $(path).find('.data').length;

        if (items) {
            var op;
            items++;
            for (var i = 0; i < items; i++) {
                op = $('<option value="' + i + '" aria-labelledby="' + path + '" >' + i + '</option>');
                send_select_option_index.append(op);
            }
        }
    });

    $('#merge_tool_to_other, #merge_prop_to_other').on('change', function () {
        path = $('option:selected', this).attr('aria-labelledby');
        var merge_select_option_index = $('#merge_select_option_index');
        merge_select_option_index.children(':gt(0)').remove();//.empty();
        //merge_select_option_index.append($('<option value="" selected>Select</option>'));
        var items = $(path).find('.data').length;

        if (items) {
            var op;
            items++;
            for (var i = 0; i < items; i++) {
                op = $('<option value="' + i + '" aria-labelledby="' + path + '" >' + i + '</option>');
                merge_select_option_index.append(op);
            }
        }
    });

    $('#clone_select_option_sub').on('change', function () {
        $('#clone_select_option_index').children(':gt(0)').remove();//.empty().append($('<option value="" selected>Select</option>'));
        path = $('option:selected', this).attr('aria-labelledby');
        var clone_select_option_index = $('#clone_select_option_index');
        clone_select_option_index.children(':gt(0)').remove();//.empty();
        //clone_select_option_index.append($('<option value="" selected>Select</option>'));
        var items = $(path).find('.data').length;

        if (items) {
            var op;
            items++;
            for (var i = 0; i < items; i++) {
                op = $('<option value="' + i + '" aria-labelledby="' + path + '" >' + i + '</option>');
                clone_select_option_index.append(op);
            }
        }
    });

    $('#clone_select_option').on('change', function () {
        $('#clone_select_option_sub').children(':gt(0)').remove();//.empty().append($('<option value="" selected>Select</option>'));
        $('#clone_select_option_index').children(':gt(0)').remove();//.empty().append($('<option value="" selected>Select</option>'));
        path = $('option:selected', this).attr('aria-labelledby');
        //indLi = 0;
        //var text = $(this).val();
        var clone_select_option_sub = $('#clone_select_option_sub');
        clone_select_option_sub.children(':gt(0)').remove();//.empty();
        //clone_select_option_sub.append($('<option value="" selected>Select</option>'));

        var op;
        var items;
        if ($('#clone_select_option_sub_div').is(':hidden')) {
            items = $('#' + path).find('.ddItemCollect');
            var clone_select_option_index = $('#clone_select_option_index');
            $(items).each(function (a) {
                op = $('<option value="' + a + '" aria-labelledby="' + $(this).attr('aria-labelledby') + '">' + a + '</option>');
                clone_select_option_index.append(op);
            });
        } else {
            items = $('#' + path).find('.ddItemCollect');

            $(items).each(function () {
                var textForBreadCrumbItem = $(this).prop('tagName').toLowerCase() === 'input' ? $(this).val() : $(this).text();
                op = $('<option value="' + textForBreadCrumbItem + '" aria-labelledby="' + $(this).attr('aria-labelledby') + '">' + textForBreadCrumbItem + '</option>');
                clone_select_option_sub.append(op);
            });
        }
        //}
        //if (clear) {
        //    setBreadCrumbLocation(text, path, indLi);
        //}
    });

    function setBreadCrumbLocation(text, path, li) {
        var ul = createDropdownMenu(path, 'clone_' + text + '_breadcrumb');
        var item = $('<li aria-level="' + li + '" class="btn-group border-0 breadcrumb-item"></li>');
        var btn = $('<button class="btn btn-custom-fill m-0 btn-link" style="padding-top: 0px; padding-bottom: 0px;" type="button">' + text + '</button>');
        btn.on('click', function () {
            var indItem = $(this).parents('[aria-level]');
            var index = indItem.attr('aria-level');
            if (index >= 0) {
                var sibLi = indItem.parent().children('li:gt(' + index + ')');
                indLi -= sibLi.length;
                sibLi.remove();
            }
        });
        item.append(btn);
        if (ul) {
            item.append($('<button class="btn dropdown-toggle btn-custom-auto m-0 btn-link" id="clone_' + text + '_breadcrumb" aria-expanded="false" aria-haspopup="true" style="padding-top: 0px; padding-bottom: 0px; opacity: 0.5;" type="button" data-toggle="dropdown"></button>'));
        }
        item.append(ul);
        $('#cloneBreadCrumb-ol').append(item);
        $('#cloneBreadCrumb-ol').show();
        $('#null_breadcrumb').hide();
    }

    var getSubMenu = $(".right [aria-labelledby]");
    var getAllButtons = $(".right button");
    var switchDeleteTabItems;
    var designerItem = $('#flow-diagram-designer-item').clone(true);
    designerItem.removeAttr('id');
    var designerItemButton = $('#designer-prop-more');
    $('#designer-prop-more').removeAttr('id');
    $('#flow-diagram-designer-item').empty();
    var curItemDesigner;

    $('.edit').on('click', function () {
        var val = $(this).parents('.data').children();
        $('#edit_textbox_name').val($(val[0]).text());
        $('#edit_textbox_type').val($(val[1]).text());
    });

    $('#edit-add-prop-checkbox-item-id, #modal_prop_item_chckbx').on('change', function () {
        if ($(this).val() === 'header') {
            if ($(this).is(':checked')) {
                $('#modal_prop_list_content :checkbox').prop('checked', true);
            } else {
                $('#modal_prop_list_content :checkbox').prop('checked', false);
            }
        } else {
            if ($('#modal_prop_list_content :checkbox:not(:checked)').length === 0) {
                $('#edit-add-prop-checkbox-item-id').prop('checked', true);
            } else {
                $('#edit-add-prop-checkbox-item-id').prop('checked', false);
            }
        }
        switchDeleteTabItems = $('#modal_prop_list_content :checkbox:checked');
        if (switchDeleteTabItems.length > 0) {
            $('#checkbox-header-control-div').slideDown();
            $('.divHeader').show();
            //$('.divItem').show();
            //$('.changeText').text('Reflect on selected items only : ');
        } //else if (isChangedModalProp) {
        //$('.divHeader').show();
        //$('.divItem').hide();
        //$('.changeText').text('Include changes : '); 
        //} 
        else {
            $('#checkbox-header-control-div').slideUp();
            $('.divHeader').hide();
        }
    });

    var modalBodyPropList = $('#modal_prop_list_content_div').clone(true);
    $('#modal_prop_list_content_div').remove();

    $('#add_prop_item_new').on('click', function () {
        var modal_data = modalBodyPropList.clone(true);
        var id = 'modal_prop_list_content_div' + Date.now();
        id = id.replace(/ /ig, '-');
        modal_data.attr('id', id);

        var chkbx = modal_data.find('#modal_prop_item_chckbx');
        chkbx.removeAttr('id').attr('aria-labelledby', '#' + id);
        //chkbx.on('change', function () {
        //    if ($('#modal_prop_list_content :checkbox:not(:checked)').length === 0) {
        //        $('#edit-add-prop-checkbox-item-id').prop('checked', true);
        //    } else {
        //        $('#edit-add-prop-checkbox-item-id').prop('checked', false);
        //    }
        //});
        //inr.append(chkbx);
        var textbox_inner = modal_data.find('#modal_prop_item_name').removeAttr('id');
        var select_opt_inner = modal_data.find('#modal_prop_item_type').removeAttr('id');

        textbox_inner.val($('#add_prop_edit_textbox_name').val());
        select_opt_inner.val($('#add_prop_edit_select_type').val());
        $('#modal_prop_list_content').append(modal_data);
        $('#add_prop_edit_textbox_name').val('');
        $('#add_prop_edit_select_type').val('');
        $('#edit-add-prop-checkbox-item-id').prop('checked', false);
        if ($('#modal_prop_list_content').children().length === 0) {
            $('#alert-for-no-child-element').show();
        } else {
            $('#alert-for-no-child-element').hide();
        }
    });

    $('#add_new_prop_to_toolbox').on('click', function () {
        $('#edit-add-prop-checkbox-item-id').prop('checked', false);
        $('#save_this_modal_footer').text('Done');
        $('#prop_nav_modal_add').show();
        $('#prop_nav_modal_edit').hide();
        $('#modal_prop_list_content').empty();
        if ($('#modal_prop_list_content').children().length === 0) {
            $('#alert-for-no-child-element').show();
        } else {
            $('#alert-for-no-child-element').hide();
        }
        $('#modal_prop_name_textbox').val($($(this).attr('aria-label')).text());
        var lengthCount = $('#propHolderSidenavbar').children().length;
        var pos_modal = lengthCount - 1;
        $('#position_modal_prop_count').empty();
        for (var i = 0; i < lengthCount; i++) {
            var op = $('<option value="' + i + '">' + i + '</option>');
            if (i === pos_modal) {
                op.attr('selected', '');
            }
            $('#position_modal_prop_count').append(op);
        }
        $('#nav-tab-prop a[href="#nav-edit-add"]').tab('show');
    });

    $('#switch-clone-tab-items, #switch-send-tab-items').on('click', function () {
        $('#nav-tab-prop a[href="' + $(this).attr('aria-flowto') + '"]').tab('show');
    });

    $('#switch-delete-tab-items').on('click', function () {
        isChangedModalProp = true;
        $('#checkbox-header-control-div').slideUp();
        $(switchDeleteTabItems.map(function () { return $(this).attr('aria-labelledby'); }).get().join(', ')).remove();
        $('#edit-add-prop-checkbox-item-id').prop('checked', false);
        //$('.changeText').text('Include changes : '); 
        $('.divHeader').hide();
        //$('.divItem').hide();
        if ($('#modal_prop_list_content').children().length === 0) {
            $('#alert-for-no-child-element').show();
        } else {
            $('#alert-for-no-child-element').hide();
        }
        //$('#nav-tab-prop a[href="' + $(this).attr('aria-flowto') + '"]').tab('show');
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var textForNavTab = $(this).text();
        if (textForNavTab === 'Edit') {
            textForNavTab = 'Update';
        }
        $('#save_this_modal_footer').text(textForNavTab);
        //$('#save_this_and_exit_modal_footer').text(textForNavTab + ' and Exit');
    });

    $('#send_select_option_index, #merge_select_option_index, #clone_select_option_index').on('change', function () {
        isChangedModalProp = true;
    });

    $('#save_this_modal_footer').on('click', function () {
        var curText = $('#save_this_modal_footer').text();
        var parentTagId = $('#nav-tab-content-prop').attr('aria-labelledby');
        var parentInnerId = $(parentTagId).attr('aria-describedby');
        var curElement = $(parentTagId).attr('aria-labelledby');
        var curElementItem = $(parentTagId).attr('aria-label');
        var curElementItemIndex = $(parentTagId).attr('aria-level');
        var parentForProp = $(parentTagId).attr('aria-controls');
        var itemIds;
        if (curText === 'Update') {
            if (curElementItem) {
                var lengthForProp = $('#modal_prop_list_content').children().length;
                var countSpan = $(curElementItem.replace('-', '-count-'));
                var selectedIndexModal = $('#position_modal_prop_count').val();
                $(curElementItem).text($('#modal_prop_name_textbox').val());
                if (parseInt(countSpan.text()) !== lengthForProp) {
                    var tabRole = $(curElement).find('[role="tablist"]');
                    var newItemToPropWindowTemp = $(tabRole.children()[0]).clone(true);
                    tabRole.empty();
                    $('#modal_prop_list_content').children().each(function () {
                        var newItemToPropWindow = newItemToPropWindowTemp.clone(true);
                        var itemFromModalText = $(this).find(':text').val();
                        var itemFromModalType = $(this).find('select').val();
                        var id = itemFromModalText + '-' +  itemFromModalType +'-' + Date.now();
                        newItemToPropWindow.find('.data .name').attr('id', id + '-Name').text(itemFromModalText);
                        newItemToPropWindow.find('.data .type').attr('id', id + '-Type').text(itemFromModalType);
                        newItemToPropWindow.find('.data .propMore').attr('id', id + '-More').attr('aria-labelledby', '#' + id + '-Name, #' + id + '-Type');
                        tabRole.append(newItemToPropWindow);
                    });
                    countSpan.text(lengthForProp);
                } else {
                    var newItemToPropWindow = $(curElement).find('[role="tab"]');
                    var innerSpanName= newItemToPropWindow.find('.data .name');
                    var innerSpanType =newItemToPropWindow.find('.data .type');
                    $('#modal_prop_list_content').children().each(function (a) {
                        $(innerSpanName[a]).text($(this).find(':text').val());
                        $(innerSpanType[a]).text($(this).find('select').val());
                    });
                }
                if (curElementItemIndex !== selectedIndexModal) {
                    var clonePropTag = $(curElement).parent();
                        clonePropTag.detach();
                        $(parentForProp).children(':eq(' + selectedIndexModal + ')').before(clonePropTag);
                }
            } else {
                itemIds = curElement.split(',');
                $(itemIds[0]).text($('#edit_textbox_name_prop').val());
                    $(itemIds[1]).text($('#edit_textbox_name_type').val());
            }
        } else if (curText === 'Delete') {
            if (curElementItem) {
                $(curElement).parent().remove();
            } else {
                $(curElement).parents('[role="tab"]').remove();
            }
        } else if (curText === 'Clone') {
            var clone_select_option_index = $('option:selected', $('#clone_select_option_index'));
            if (clone_select_option_index.text() !== '') {
                var tmpbtn;
                var ariaForClone = clone_select_option_index.attr('aria-labelledby');
                if (curElementItem) {
                    tmpbtn = designerItemButton.clone(true);
                    var itemToClone = $(ariaForClone).parent().clone(true);
                    var tabRole1 = itemToClone.find('[role="tablist"]');
                    var newItemToPropWindowTemp1 = $(tabRole1.children()[0]).clone(true);
                    tabRole1.empty();
                    $('#modal_prop_list_content').children().each(function () {
                        var newItemToPropWindow = newItemToPropWindowTemp1.clone(true);
                        var itemFromModalText = $(this).find(':text').val();
                        var itemFromModalType = $(this).find('select').val();
                        var id = itemFromModalText + '-' + itemFromModalType + '-' + Date.now();
                        newItemToPropWindow.find('.data .name').attr('id', id + '-Name').val(itemFromModalText);
                        newItemToPropWindow.find('.data .type').attr('id', id + '-Type').val(itemFromModalType);
                        newItemToPropWindow.find('.data .propMore').attr('id', id + '-More').attr('aria-labelledby', '#' + id + '-Name, #' + id + '-Type');
                        tabRole1.append(newItemToPropWindow);
                    });
                    if (parentInnerId === '*') {
                        $(parentForProp).children(':eq(' + clone_select_option_index.val() + ')').after(itemToClone);
                    } else {
                        $(parentForProp).children(':eq(' + clone_select_option_index.val() + ')').after($('<hr />'), itemToClone, $('<hr />'), tmpbtn);
                    }
                } else {
                    itemIds = curElement.split(',');
                    tmpbtn = $(ariaForClone).children('[role="tablist"]')[clone_select_option_index.val()].clone(true);
                    tmpbtn.find('.name').val($(itemIds[0]).val());
                    tmpbtn.find('.type').val($(itemIds[1]).val());
                    if (parentInnerId === '*') {
                        $(ariaForClone).parent().children(':eq(' + clone_select_option_index.val() + ')').before(tmpbtn);
                    } else {
                        $(ariaForClone).parent().children(':eq(' + clone_select_option_index.val() + ')').before($('<hr />'), tmpbtn, $('<hr />'), tmpbtn.children(':last'));
                    }
                }
            }
        } else if (curText === 'Merge') {
            var merge_select_option_index = $('#merge_select_option_index');
            if (merge_select_option_index.val() !== '') {
                
            }
        } else if (curText === 'Send') {
            var send_select_option_index = $('#send_select_option_index');
            if (send_select_option_index.val() !== '') {

            }
        } else if (curText === 'Done') {

        }
    });

    $('.propMore').on('click', function () {
        isChangedModalProp = false;
        $('#checkbox-header-control-div').slideUp();
        var ariaControls = $(this).attr('aria-controls');
        if (ariaControls === '#flow-diagram-designer') {
            $('#merge_tool_to_other-parent').show();
            $('#merge_prop_to_other-parent').hide();
            $('#send_tool_to_other-parent').show();
            $('#send_prop_to_other-parent').hide();
        } else {
            $('#merge_tool_to_other-parent').hide();
            $('#merge_prop_to_other-parent').show();
            $('#send_tool_to_other-parent').hide();
            $('#send_prop_to_other-parent').show();
        }
        $('.divHeader').hide();
        $('#send_select_option_index').children(':gt(0)').remove();
        $('#merge_select_option_index').children(':gt(0)').remove();
        $('#clone_select_option_index').children(':gt(0)').remove();
        $('#clone_select_option_sub').children(':gt(0)').remove();
        $('#edit-add-prop-checkbox-item-id').prop('checked', false);
        $('#save_this_modal_footer').text('Update');
        $('#prop_nav_modal_edit').show();
        $('#prop_nav_modal_add').hide();
        clear = false;
        path = '';
        indLi = 0;
        //$('#cloneBreadCrumb-ol').empty();
        //$('#cloneBreadCrumb-ol').hide();
        //$('#null_breadcrumb').show();
        $('#clone_select_option').val('');
        $('#merge_prop_to_other').val('');
        $('#send_prop_to_other').val('');
        clear = true;
        var selector = $(this).attr('aria-labelledby');
        $('#nav-tab-content-prop').attr('aria-labelledby', '#' + $(this).attr('id'));
        if ($(this).hasClass('Header')) {
            $('#clone_select_option_sub_div').hide();
            var lblAriaTag = $(this).attr('aria-label');
            var itemTag = $(lblAriaTag);
            //$('#nav-tab-content-prop').attr('aria-label', lblAriaTag);
            var itemText = itemTag.prop('tagName').toLowerCase() === 'input' ? itemTag.val() : itemTag.text();
            $('#modal_prop_name_textbox').val(itemText);
            var lengthCount = $(ariaControls).children($(this).attr('aria-describedby')).length - 1;
            var pos_modal = $(this).attr('aria-level');
            $('#position_modal_prop_count').empty();
            for (var i = 0; i < lengthCount; i++) {
                var op = $('<option value="' + i + '">' + i + '</option>');
                if (i === parseInt(pos_modal)) {
                    op.attr('selected', '');
                }
                $('#position_modal_prop_count').append(op);
            }

            $('#modal_prop_list_content').empty();
            $(selector).find('.data').each(function () {
                var modal_data = modalBodyPropList.clone(true);
                var id = 'modal_prop_list_content_div' + Date.now();
                id = id.replace(/ /ig, '-');

                modal_data.attr('id', id);
                modal_data.find('#modal_prop_item_chckbx').removeAttr('id').attr('aria-labelledby', '#' + id);
                var textbox_inner = modal_data.find('#modal_prop_item_name').removeAttr('id');
                var select_opt_inner = modal_data.find('#modal_prop_item_type').removeAttr('id');
                var itemInnerTag = $(this).find('.name');
                var itemInnerText = itemInnerTag.prop('tagName').toLowerCase() === 'input' ? itemInnerTag.val() : itemInnerTag.text();
                textbox_inner.val(itemInnerText);
                select_opt_inner.val($(this).find('.type').text());
                $('#modal_prop_list_content').append(modal_data);
            });
            if ($('#modal_prop_list_content').children().length === 0) {
                $('#alert-for-no-child-element').show();
            } else {
                $('#alert-for-no-child-element').hide();
            }
            $('.propHeader').show();
            $('#nav-tab-prop a[href="#nav-edit-add"]').tab('show');
            $('.propItem').hide();
        } else if ($(this).hasClass('Item')) {
            $('#clone_select_option_sub_div').show();
            var itemTagName = $(selector.split(',')[0]);
            var itemTagText = itemTagName.prop('tagName').toLowerCase() === 'input' ? itemTagName.val() : itemTagName.text();
            $('#edit_textbox_name_prop').val(itemTagText);
            $('#edit_textbox_name_type').val($(selector.split(',')[1]).text());
            $('.propItem').show();
            $('#nav-tab-prop a[href="#nav-edit"]').tab('show');
            $('.propHeader').hide();
        }
    });

    $('.addhere').on('click', function () {
        $('#addToDesignerModal :checkbox').prop('checked', false);
        curItemDesigner = $(this);
        $('#designer-add-modal-body .collapse').collapse('hide');
        $('#designer-add-modal-body .dropup').toggleClass(['dropup', 'dropdown']);
        if (curItemDesigner.hasClass('item')) {
            $('#designer-add-modal-done-single').text('Done');
            $('#designer-add-modal-done-multi').hide();
        } else {
            $('#designer-add-modal-done-single').text('Add as single section');
            $('#designer-add-modal-done-multi').show();
        }
    });

    $('.collapseProp').on('click', function () {
        $(this).parent().toggleClass(['dropdown', 'dropup']);
    });

    

    $('#designer-add-modal-done-single, #designer-add-modal-done-multi').on('click', function () {
        var isCheckedAll = $('#designer-add-modal-checkbox-item-select-all').is(':checked');
        var checkedHeaders = $('#designer-add-modal-body :checkbox[value="header"]:checked');
        var jsonObjectKeyValuePairs = {};
        var innerjsonObjectKeyValuePairs;
        checkedHeaders.each(function () {
            eval('innerjsonObjectKeyValuePairs = ' + $(this).attr('aria-controls'));
            eval('jsonObjectKeyValuePairs["' + innerjsonObjectKeyValuePairs + '"] = { ' + $('[name="' + $(this).attr('name') + '"][value="body"]').map(function () { return $(this).attr('aria-controls'); }).get().join(', ') + ' }');
        });
        if (!isCheckedAll) {
            var checkedItems = $('#designer-add-modal-body :checkbox:checked:not(' + checkedHeaders.map(function () { return '[name="' + $(this).attr('name') + '"]'; }).get().join(',') + ')');
            $(checkedItems).each(function () {
                eval('innerjsonObjectKeyValuePairs = ' + $('[name="' + $(this).attr('name') + '"][value="header"]').attr('aria-controls'));
                eval('jsonObjectKeyValuePairs["' + innerjsonObjectKeyValuePairs + '"] = { ' + $('[name="' + $(this).attr('name') + '"][value="body"]:checked').map(function () { return $(this).attr('aria-controls'); }).get().join(', ') + '}');
            });
        }

        var index = 0;
        propItems = jsonObjectKeyValuePairs;

        var designerItemSelector = designerItem;
        var designerItemButtonSelector = designerItemButton;
        var isexcludeParent = false;
        var isOneTimeExecute = false;
        var requireRefresh = true;
        if (curItemDesigner.hasClass('item')) {
            requireRefresh = false;
            isexcludeParent = true;
            designerItemButtonSelector = curItemDesigner;
        } else if ($(this).attr('id') === 'designer-add-modal-done-single') {
            isOneTimeExecute = true;
            designerItemButtonSelector = null;
        }
        var listofItems_propItems = [];
        for (var key in propItems) {
            var itemDataListDesign = addPropToWindow(designerItemSelector.clone(true), key, propItems[key], index, isexcludeParent);
            if (isOneTimeExecute === true) {
                isexcludeParent = true;
                isOneTimeExecute = false;
                curItemDesigner.after($('<hr />'), itemDataListDesign, $('<hr />'), designerItemButton.clone(true));
                curItemDesigner = itemDataListDesign.find('[role="tablist"]').children(':last');
                designerItemButtonSelector = curItemDesigner.clone(true);
            } else {
                listofItems_propItems.push($('<hr />'), itemDataListDesign, $('<hr />'), designerItemButtonSelector.clone(true));
            }
            index++;
        }
        curItemDesigner.after(listofItems_propItems);

        curItemDesigner = null;

        if (requireRefresh) {
            var ariaLevelRearrangeCount = 0;
            $('#merge_tool_to_other').children(':gt(0)').remove();//.empty().append($('<option value="" selected>Select</option>'));
            $('#send_tool_to_other').children(':gt(0)').remove();//.empty().append($('<option value="" selected>Select</option>'));
            $('#flow-diagram-designer [aria-level]').each(function () {
                $(this).attr('aria-level', ariaLevelRearrangeCount++);
                var itemTag = $($(this).attr('aria-label'));
                var itemText = itemTag.prop('tagName').toLowerCase() === 'input' ? itemTag.val() : itemTag.text();
                var ariaLabel = $(this).attr('aria-labelledby');
                $('#merge_tool_to_other').append($('<option value="' + itemText.replace(/ /ig, '-') + '" aria-labelledby="' + ariaLabel + '" >' + itemText + '</option>'));
                $('#send_tool_to_other').append($('<option value="' + itemText.replace(/ /ig, '-') + '" aria-labelledby="' + ariaLabel + '" >' + itemText + '</option>'));
            });
        }

        function addPropToWindow(designerItem, key, value, index, excludeParent = false) {
            var curDateTime = Date.now();
            var id = key + "-" + index + curDateTime;
            id = id.replace(/ /ig, '-');

            if (!excludeParent) {

                designerItem.find('#toggle-button-context-designer').attr('data-target', '#designer-' + id + '-list').attr('aria-controls', 'designer-' + id + '-list').removeAttr('id');

                designerItem.find('#designer-prop-name').val(key).attr('id', 'designer-' + id).addClass('ddItemCollect').attr('aria-labelledby', '#designer-' + id + '-list');

                designerItem.find('#designer-prop-more').attr('aria-labelledby', '#designer-' + id + '-list').attr('aria-label', '#designer-' + id);
                designerItem.find('#designer-prop-more').attr('aria-controls', '#flow-diagram-designer').attr('aria-describedby', 'div').attr('aria-level', index).attr('id', 'designer-prop-more' + id);
                designerItem.find('#collapseExample3').attr('id', 'designer-' + id + '-list');
            }
            var count = 0;
            var subList = designerItem.find('[role="tablist"]');
            var childSubListButton = subList.children(':first').clone(true);
            var childSubList = subList.children(':eq(1)').clone(true);

            subList.empty();
            for (var Key in value) {
                var innerItem = childSubList.clone(true);
                if (count > 0) {
                    subList.append($('<hr />'));
                } else {
                    subList.append(childSubListButton.clone(true));
                    subList.append($('<hr />'));
                }
                var subId = 'designer-' + id + '-list-' + Key + '-list-' + count;
                subId.replace(/ /ig, '-');
                innerItem.find('#designer-prop-item-name').val(Key).attr('id', subId + "-Name");
                innerItem.find('#designer-prop-item-type').text(value[Key]).attr('id', subId + "-Type");
                innerItem.find('#designer-prop-item-more').attr('aria-controls', '#flow-diagram-designer').attr('aria-describedby', 'div').attr('aria-labelledby', '#' + subId + "-Name, #" + subId + "-Type").attr('id', 'designer-prop-item-more' + subId);
                count++;
                subList.append(innerItem);
                subList.append($('<hr />'));
                subList.append(childSubListButton.clone(true));
            }

            childSubList.remove();

            if (excludeParent) {
                return subList.children().slice(2, -2);
            }
            return designerItem;
        }
    });

    $('#designer-add-modal-checkbox-item-select-all').on('change', function () {
        if ($(this).is(':checked')) {
            $('#designer-add-modal-body :checkbox').prop('checked', true);
        } else {
            $('#designer-add-modal-body :checkbox').prop('checked', false);
        }
    });

    $('#designer-add-modal-body :checkbox').on('change', function () {
        var cbxName = $('[name=' + $(this).attr('name') + ']');
        if ($(this).val() === 'header') {
            if ($(this).is(':checked')) {
                cbxName.filter('[value="body"]').prop('checked', true);
            } else {
                cbxName.filter('[value="body"]').prop('checked', false);
            }
        } else {
            if (cbxName.filter('[value="body"]:not(:checked)').length === 0) {
                cbxName.filter('[value="header"]:checkbox').prop('checked', true);
            } else {
                cbxName.filter('[value="header"]:checkbox').prop('checked', false);
            }
        }
        if ($('#designer-add-modal-body :checkbox:not(:checked)').length === 0) {
            $('#designer-add-modal-checkbox-item-select-all').prop('checked', true);
        } else {
            $('#designer-add-modal-checkbox-item-select-all').prop('checked', false);
        }
    });

    $(".dropdown-toggle,.right button").on("click", function (e) {
        if ($(this).hasClass("dropdown-toggle")) {
            var currentId = $(this).attr('id');
            var currentItem = $(this).parentsUntil('.dropdown-menu');
            var currentList = $("[aria-labelledby=" + currentId + "]");
            if (currentList.is(':hidden')) {
                currentItem.siblings().find('.dropdown-menu').fadeOut();
                currentList.fadeIn();
            }
            else {
                currentItem.find('.dropdown-menu').fadeOut();
            }
        } else {
            getSubMenu.fadeOut();
        }
    });

    $("body").on("click", function (e) {
        var eve = e || window.event;
        if (!$(eve.target).hasClass('propMore')) {
            $(".propMoreDropdown").fadeOut();
        }
        if (getAllButtons.index(eve.target) < 0) {
            getSubMenu.fadeOut();
        }
    });

    var flowIncluded = $('#flow-editor-tabs').outerHeight() || 0;
    $("#mainContent").css({ top: 2 * $("#navbar").outerHeight() - flowIncluded + progressHeight + "px" });
    $("#mainContent").fadeIn("slow");

    $('.addLanguage').on('click', function () {
        $('#addLanguageModal select').val('');
        if ($(this).hasClass('learner')) {
            $('#teacher-learner-modal-tab a[href="#nav-learner"]').tab('show');
        } else if ($(this).hasClass('teacher')) {
            $('#teacher-learner-modal-tab a[href="#nav-teacher"]').tab('show');
        }
    });

    $('#go-to-top').on('click', function () {
        $("html, body").scrollTop(0);
    });

});

function onPage(jsonData, showBDD) {
    var leftSideBar = jsonData.LeftSideBar;
    var rightSideBar = jsonData.RightSideBar;
    var activity = jsonData.UserActivity;
    var toc = jsonData.TableOfContent;
    var breadcrumb = jsonData.Breadcrumb;

    var cssColor = ["red", "yellow", "orange", "green", "blue"];

    if (leftSideBar) {
        loadLeft(leftSideBar, breadcrumb.Items, cssColor, showBDD);
    } else if (breadcrumb) {
        loadBreadcrumb(breadcrumb.Items);
    }
    if (rightSideBar) {
        loadRight(rightSideBar);
    }
    if (activity) {
        loadActivity(activity, 'activity-body');
    }
    if (toc) {
        loadToc(toc);
    }

    if ($('#breadCrumbNavbar-ol').children().length === 0) {
        $('#null_breadCrumbNavbar').show();
        $('#breadCrumbNavbar-ol').hide();
    } else {
        $('#breadCrumbNavbar-ol').show();
        $('#null_breadCrumbNavbar').hide();
    }

}

function loadLeft(leftSideBar, breadcrumb, cssColor, showBDD) {
    var items = leftSideBar.Items;
    $(items).each(function (index, element) {
        var newListItem = $('<li class="button-view scroll btn btn-block border border-top-0 m-0 p-0 ' + cssColor[index] + '"></li>');
        if ($.type(this) === "string") {
            var itemContainer = $('<div class="btn-group dropright item-custom-fill"><button type="button" class="btn btn-custom-fill p-3 m-0">' + this + '</button></div>');
            newListItem.append(itemContainer);
            $('#sideBarList').append(newListItem);
        } else {
            var newDropdown = getDropdown(["Header_" + this.Key], this.Value, this.Key);
            var newBreadcrumb = newDropdown.clone();
            var multiList = [];
            var findingId = "Header_";
            if (showBDD) {
                $(breadcrumb).each(function (index) {
                    findingId += this;
                    var newItem = newBreadcrumb.find('[aria-labelledby="' + findingId + '"]').parent().clone();
                    newItem.find('[aria-labelledby]').attr('aria-labelledby', function () {
                        return $(this).attr('aria-labelledby') + "_" + index;
                    });
                    newItem.find('[id]').attr('id', function () {
                        return $(this).attr('id') + "_" + index;
                    });
                    newItem.children('button').addClass('btn-link').removeClass('p-3').removeClass('p-2').removeClass('btn-secondary').css({ "padding-top": "0", "padding-bottom": "0" });
                    newItem.removeClass('custom-list-group-item-action');
                    newItem.addClass('border-0');
                    if (newItem.length === 0) {
                        var item = $('<li class="btn-group item-custom-fill btn-block group-focus border-0"></li>');
                        var btn = $('<button class="btn btn-custom-fill m-0 btn-link" type="button" style="padding-top:0;padding-bottom:0"></button>');
                        btn.text(this.replace(/_/gi, ' '));
                        item.append(btn);
                        multiList.push(item);
                    }
                    else {
                        multiList.push(newItem);
                    }
                    findingId += "-";
                });
            } else {
                $(breadcrumb).each(function (index) {
                    var item = $('<li class="btn-group item-custom-fill btn-block group-focus border-0"></li>');
                    var btn = $('<a href="#"></a>');
                    btn.text(this.replace(/_/gi, ' '));
                    item.append(btn);
                    multiList.push(item);
                });
            }
            breadcrumb = [];
            $(multiList).each(function (index) {
                var item = $(this);
                item.attr('class', 'btn-group border-0 breadcrumb-item');
                if (index === multiList.length - 1) {
                    item.attr('aria-current', 'page');
                }
                $('#breadCrumbNavbar-ol').append(item);
            });
            newListItem.append(newDropdown);
            $('#sideBarList').append(newListItem);
        }
    });

    function getULElement(arrayList, dropdownName, extraStyle) {
        var ul = $('<ul class="dropright right item-custom-fill"></ul>');
        var li = $('<li class="btn-group item-custom-fill btn-block group-focus"></li>');
        var btn = $('<button type="button" class="btn btn-custom-fill m-0"></button>');
        var btnTgl = $('<button type="button" class="btn dropdown-toggle btn-custom-auto m-0 btn-secondary" style="opacity:0.5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>');
        var ariaUnder = $('<ul class="dropdown-menu menu-custom-fill" ></ul>');
        li.append(btn);
        li.append(btnTgl);
        li.append(ariaUnder);
        ul.append(li);
        btn.addClass('p-3');
        btnTgl.addClass('p-3');
        var id = arrayList.join('-').replace(" ", "_");
        li.addClass(extraStyle);
        btn.text(dropdownName);
        btnTgl.attr('id', id);
        ariaUnder.attr('aria-labelledby', id);
        ul.attr('id', id + '-ul');
        return [ul, ariaUnder];
    }

    function getDropdown(arrayList, dropdownItems, dropdownName) {
        var extraStyle = "";
        if (arrayList.length > 1) {
            extraStyle = "custom-list-group-item-action";
        }
        var ulList = getULElement(arrayList, dropdownName, extraStyle);
        var ul = ulList[0];
        var ariaUnder = ulList[1];
        for (var key in dropdownItems) {
            var dropdownItem = $('<li class="dropdown-item item-custom-fill"></li>');
            if ($.type(dropdownItems[key]) === "string") {
                var dropdownItemContainer = $('<div class="btn-group dropright item-custom-fill group-focus"></div>');
                dropdownItemContainer.addClass(extraStyle);
                dropdownItemContainer.append('<button type="button" class="btn btn-custom-fill p-3 m-0">' + dropdownItems[key] + '</button>');
                dropdownItem.append(dropdownItemContainer);
            } else if ($.type(dropdownItems[key]) === "object") {
                arrayList.push(key.replace(" ", "_"));
                dropdownItem.append(getDropdown(arrayList, dropdownItems[key], key));
                arrayList.pop();
            } else if ($.type(dropdownItems[key]) === "array") {
                arrayList.push(key.replace(" ", "_"));
                var ul_inner_List = getULElement(arrayList, key, extraStyle);
                arrayList.pop();
                var ul_inner = ul_inner_List[0];
                var ariaUnder_inner = ul_inner_List[1];
                $(dropdownItems[key]).each(function () {
                    var dropdownInnerItem = $('<li class="dropdown-item item-custom-fill"></li>');
                    var dropdownItemContainer = $('<div class="btn-group dropright item-custom-fill group-focus"></div>');
                    dropdownItemContainer.addClass(extraStyle);
                    dropdownItemContainer.append('<button type="button" class="btn btn-custom-fill p-3 m-0">' + this + '</button>');
                    dropdownInnerItem.append(dropdownItemContainer);
                    ariaUnder_inner.append(dropdownInnerItem);
                });
                dropdownItem.append(ul_inner);
            }
            ariaUnder.append(dropdownItem);
        }
        return ul;
    }
}

function loadRight(rightSideBar) {
    var propItems = rightSideBar.Items;
    var propItem = $('#toolbox-item').clone();
    var propItemTool = $('#designer-add-modal-body-div');
    $('#designer-add-modal-body-div').remove();
    $('#toolbox-item').remove();
    var index = 0;
    for (var key in propItems) {
        propItem.removeAttr('id');
        propItemTool.removeAttr('id');
        var addPropListItems = addPropToWindow(propItemTool.clone(true), propItem.clone(), key, propItems[key], index);
        $('#propHolderSidenavbar').append(addPropListItems[0]);
        $('#designer-add-modal-body').append(addPropListItems[1]);
        index++;
    }

    function addPropToWindow(propItemTool, propItem, key, value, index, len) {
        var curDateTime = Date.now();
        var id = key + "-" + index + curDateTime;
        id = id.replace(/ /ig, '-');
        var chckbxName = 'designer-add-prop-checkbox-item-id' + id + '-list';
        $('#merge_prop_to_other').append($('<option value="' + key.replace(/ /ig, '-') + '" aria-labelledby="#' + 'prop-' + id + '-list' + '" >' + key + '</option>'));
        $('#send_prop_to_other').append($('<option value="' + key.replace(/ /ig, '-') + '" aria-labelledby="#' + 'prop-' + id + '-list' + '" >' + key + '</option>'));

        propItemTool.find('#designer-add-modal-body-li-toggle-button-context').attr('data-target', '#designer-' + id + '-list').attr('aria-controls', 'designer-' + id + '-list').removeAttr('id');
        propItemTool.find('#designer-add-modal-body-li-prop-name').text(key).attr('id', 'designer-' + id).addClass('ddItemCollect');
        propItemTool.find('#collapseExample1').attr('id', 'designer-' + id + '-list');
        propItemTool.find('#designer-add-prop-checkbox-item-id').attr('id', chckbxName).attr('name', chckbxName).attr('aria-controls', '\"' + key + '\"');
        var subListTool = propItemTool.find('[role="tablist"]');
        var childSubListTool = subListTool.children();

        propItem.find('#toggle-button-context').attr('data-target', '#prop-' + id + '-list').attr('aria-controls', 'prop-' + id + '-list').removeAttr('id');
        propItem.find('#propName').text(key).attr('id', 'prop-' + id).addClass('ddItemCollect').attr('aria-labelledby', '#prop-' + id + '-list');
        propItem.find('#more').attr('aria-labelledby', '#prop-' + id + '-list').attr('aria-label', '#prop-' + id);
        propItem.find('#more').attr('aria-controls', '#propHolderSidenavbar').attr('aria-describedby', '*').attr('aria-level', index).attr('id', 'more-' + id);
        propItem.find('#collapseExample').attr('id', 'prop-' + id + '-list');
        var count = 0;
        var subList = propItem.find('[role="tablist"]');
        var childSubList = subList.children();
        for (var Key in value) {
            var innerItem = childSubList.clone();
            var subId = 'prop-' + id + '-list-' + Key + '-list-' + count;
            subId.replace(/ /ig, '-');
            innerItem.find('#propItemName').text(Key).attr('id', subId + "-Name");
            innerItem.find('#propItemType').text(value[Key]).attr('id', subId + "-Type");
            innerItem.find('#propMore').attr('aria-describedby', '*').attr('aria-controls', '#propHolderSidenavbar').attr('aria-labelledby', '#' + subId + "-Name, #" + subId + "-Type").attr('id', 'propMore' + subId);
            count++;
            subList.append(innerItem);

            var innerItem1 = childSubListTool.clone();
            var subId1 = 'designer-' + id + '-list-' + Key + '-list-' + count;
            subId1.replace(/ /ig, '-');
            innerItem1.find('#designer-add-prop-checkbox-item-id-inner').attr('name', chckbxName).attr('aria-controls', ' \"' + Key + '\" : \"' + value[Key] + '\" ').removeAttr('id');
            innerItem1.find('#designer-add-modal-body-innerlist-li-item-name').text(Key).attr('id', subId1 + "-Name");
            innerItem1.find('#designer-add-modal-body-innerlist-li-item-type').text(value[Key]).attr('id', subId1 + "-Type");
            subListTool.append(innerItem1);
        }
        propItem.find('#propCount').text(count).attr('id', 'prop-count-' + id);
        childSubList.remove();

        propItemTool.find('#designer-add-modal-body-li-prop-count').text(count).attr('id', 'designer-count-' + id);
        childSubListTool.remove();
        return [propItem, propItemTool];
    }
}

function loadActivity(activity, parentId) {
    var itemIndex = 0;
    var card = $('<div class="card text-center"></div>');
    var cardHeader = $('<div class="card-header"></div>');
    var cardBody = $('<div class="card-body"></div>');
    var navUl = $('<ul class="nav nav-tabs card-header-tabs"></ul>');
    var tabContent = $('<div class="tab-content"></div>');
    cardHeader.append(navUl);
    cardBody.append(tabContent);
    card.append(cardHeader);
    card.append(cardBody);
    $('#' + parentId).append(card);
    for (var key in activity.Activity) {
        var navLi = $('<li class="nav-item"></li>');
        var navA = $('<a class="nav-link" data-toggle="tab" role="tab" aria-selected="true"></a>');
        var itemId = 'nav-tab-activity-' + key;
        navA.attr('id', itemId);
        var itemControl = 'nav-tab-activity-content-' + key;
        navA.attr('href', '#' + itemControl);
        navA.attr('aria-controls', itemControl);
        navA.text(key);
        navLi.append(navA);
        navUl.append(navLi);

        var content = $('<div class="tab-pane fade" role="tabpanel" style="background-color:transparent"></div>');
        var contentHolder = $('<div class="card-deck-wrapper text-center"></div>');
        if (itemIndex === 0) {
            content.addClass('show active');
            navA.addClass('active');
        }
        content.attr('id', itemControl);
        content.attr('aria-labelledby', itemId);
        content.append(contentHolder);
        tabContent.append(content);
        var currentValue = activity.Activity[key];
        if (key === 'News') {
            var filterTag = $('<div class="input-group justify-content-end"><div class="input-group-prepend"><span class="input-group-text" id="inputGroup-sizing-sm">Show </span></div></div>');
            var selectFilterTag = $('<select class="form-control" id="position_modal_prop_count" aria-label="Small" aria-describedby="inputGroup-sizing-sm"><option value="">All </option></select>');
            filterTag.append(selectFilterTag);
            $(activity.TeachersList).each(function () {
                selectFilterTag.append($('<option value="' + this + '">' + this + ' </option>'));
            });
            contentHolder.append(filterTag);
        }
        for (var innerItems in currentValue) {
            contentHolder.append($('<hr />'));
            contentHolder.append(getCards(innerItems, currentValue[innerItems]));
        }
        contentHolder.append($('<hr />'));
        itemIndex++;
    }

    function getCards(header, body, footer = 'readMore') {
        var card = $('<div class="card text-center"></div>');
        var cardHeader = $('<div class="card-header btn-group d-flex justify-content-between"><h5 class="card-title m-0">' + header + '</h5><i class="material-icons float-right m-0" >edit</i></div>');
        var cardBody = $('<div class="card-body"></div>');
        var bodyTitle = $('<h5 class="card-title"></h5>');
        if (!body) {
            body = "no content to show";
        } else {
            if (body.length > 100) {
                body = body.substring(0, body.indexOf(' ', 500)) + '.........';
            }
        }
        var content = $('<p class="card-text">' + body + '</p>');
        var cardFooter = $('<div class="card-footer text-muted"></div>');
        if (footer === 'readMore') {
            cardFooter.append($('<a href="#" class="btn btn-primary">Open this...</a>'));
        } else {
            cardFooter.append(footer);
        }
        card.append(cardHeader);

        cardBody.append(bodyTitle);
        cardBody.append(content);
        card.append(cardBody);

        card.append(cardFooter);

        return card;
    }

}

function loadToc(toc) {
    var div = $('<div class="list-group list-group-flush"></div>');
    $('#sideBarList').append(div);
    var btn;
    $(toc.ContentList).each(function () {
        if (this.Value) {
            if (this.Key === 'Heading') {
                btn = $('<button type="button" class="btn list-group-item list-group-item-dark list-group-item-action m-0 font-weight-bold d-flex justify-content-start">' + this.Value + '</button>');
            } else {
                btn = $('<button type="button" class="btn list-group-item list-group-item-secondary list-group-item-action m-0 font-italic d-flex justify-content-start">' + this.Value + '</button>');
            }
            div.append(btn);
        }
    });
}

function loadBreadcrumb(breadcrumb) {
    var multiList = [];
    $(breadcrumb).each(function (index) {
        var item = $('<li class="btn-group item-custom-fill btn-block group-focus border-0"></li>');
        var btn = $('<a href="#"></a>');
        btn.text(this.replace(/_/gi, ' '));
        item.append(btn);
        multiList.push(item);
    });

    $(multiList).each(function (index) {
        var item = $(this);
        item.attr('class', 'btn-group border-0 breadcrumb-item');
        if (index === multiList.length - 1) {
            item.attr('aria-current', 'page');
        }
        $('#breadCrumbNavbar-ol').append(item);
    });
}