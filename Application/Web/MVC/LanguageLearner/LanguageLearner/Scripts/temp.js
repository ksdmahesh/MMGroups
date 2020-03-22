//var clone = $('#Header_Teacher-ul').parent().clone(true);
    //var clonedId = clone.find('[id],[aria-labelledby]');
    //clonedId.each(function () {
    //    if ($(this).attr('id')) {
    //        $(this).attr('id', $(this).attr('id').replace('Header', 'BreadCrumbNavbar'));
    //    }
    //    else {
    //        $(this).attr('aria-labelledby', $(this).attr('aria-labelledby').replace('Header', 'BreadCrumbNavbar'));
    //    }
    //});
    //var clonedAria = clone.find('[aria-labelledby]');
    //clonedAria.each(function () {
    //    $(this).attr('aria-labelledby', $(this).attr('aria-labelledby').replace('Header', 'BreadCrumbNavbar'));
    //});
    //var xcount = 0;
    //clone.find('[id$="-ul"]').each(function () {
    //    var item = $(this);
    //    var list = $("[aria-labelledby=" + item.attr('id') + "]");
    //    list.attr('id', list.attr('id') + xcount);
    //    item.attr('id', list.attr('id') + xcount);
    //    xcount++;
    //    var li = $("<li class='breadcrumb-item'></li>").append($(this).html());
    //    $('#breadCrumbNavbar-ol').append(li);
    //});
    //var acc = document.getElementsByClassName("accordion");
    //var i;

    //for (i = 0; i < acc.length; i++) {
    //    acc[i].addEventListener("click", function () {
    //        /* Toggle between adding and removing the "active" class,
    //        to highlight the button that controls the panel */
    //        this.classList.toggle("active");

    //        /* Toggle between hiding and showing the active panel */
    //        var panel = this.nextElementSibling;
    //        if (panel.style.display === "block") {
    //            panel.style.display = "none";
    //        } else {
    //            panel.style.display = "block";
    //        }
    //    });
    //}

    //var acc = document.getElementsByClassName("accordion");
    //var i;

    //for (i = 0; i < acc.length; i++) {
    //    acc[i].addEventListener("click", function () {
    //        this.classList.toggle("active");
    //        var panel = this.nextElementSibling;
    //        if (panel.style.maxHeight) {
    //            panel.style.maxHeight = null;
    //        } else {
    //            panel.style.maxHeight = panel.scrollHeight + "px";
    //        }
    //    });
    //}

//var scrolled = (($(document).scrollTop() + $(window).height()) / $(document).height() * 100).toFixed(0);


// Test values; Uncomment to check result …

        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

        // Edge 12 (Spartan)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

        // Edge 13
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';




//document.getElementById("mySidenav").style.width = "300px";
        //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        //bodyScrollShow("hidden");
        //document.getElementById("myCanvasNav").style.width = "100%";
        //document.getElementById("myCanvasNav").style.opacity = "0.8";





//document.getElementById("mySidenav").style.width = "0";
        //document.body.style.backgroundColor = "white";
        //bodyScrollShow("auto");
        //document.getElementById("myCanvasNav").style.width = "0%";
        //document.getElementById("myCanvasNav").style.opacity = "0";


//document.getElementById("mySidenavRight").style.width = width + "px";
        //document.getElementById("mainRight").style.marginRight = width + "px";
        //$('#mySidenavRight').removeClass('overflowClass');
        //var width = $("body").width() / 4;
        //document.getElementById("mySidenavRight").style.width = width + "px";
        //document.getElementById("mainRight").style.marginRight = width + "px";
        //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        //document.getElementById("mySidenavRight").style.overflowY = "auto";
        //bodyScrollShow("hidden");
        //document.getElementById("myCanvasNavRight").style.width = "100%";
        //document.getElementById("myCanvasNavRight").style.opacity = "0.8";
        //document.getElementById("main");





function bodyScrollShow(val) {
    if (val === "auto") {
        if (document.getElementById("mySidenavRight").style.overflowY === "hidden" && document.getElementById("mySidenav").style.overflowY === "hidden") {
            $("body").css({ "overflow": val });
        }
    } else {
        $("body").css({ "overflow": val });
    }
}


function isInt(value) {
    var x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
}


function stopEvent(e) {
    var eve = e || window.event;
    if (eve.stopPropagation) eve.stopPropagation();
    if (eve.preventDefault) eve.preventDefault();
    eve.cancelBubble = true;
    eve.returnValue = false;
    return false;
}


//document.getElementById("mySidenavRight").style.width = "0";
        //document.getElementById("mainRight").style.marginRight = "0";
        //$('#mySidenavRight').addClass('overflowClass');
        //document.getElementById("mySidenavRight").style.width = "0";
        //document.getElementById("mainRight").style.marginRight = "0";
        //document.body.style.backgroundColor = "white";
        //document.getElementById("mySidenavRight").style.overflowY = "hidden";
        //bodyScrollShow("auto");
        //document.getElementById("myCanvasNavRight").style.width = "0%";
        //document.getElementById("myCanvasNavRight").style.opacity = "0";




//$($('#nav-tab-prop').children()[0]).removeClass('active')[0]).addClass('active');
            //$($('#nav-tab-content-prop').children().removeClass('active show')[0]).addClass('active show');
            //$($('#nav-tab-prop').children().removeClass('active')[1]).addClass('active');
            //$($('#nav-tab-content-prop').children().removeClass('active show')[1]).addClass('active show');


//$('.propMore').on('click', function () {
    //    getSubMenu.fadeOut();
    //    var currentId = $(this).attr('id'); 
    //    var currentList = $("[aria-labelledby=" + currentId + "]");
    //    var allList = $('.propMoreDropdown').not(currentList);
    //    if (currentList.is(':hidden')) {
    //        allList.fadeOut();
    //        currentList.fadeIn();
    //    }
    //    else {
    //        currentList.fadeOut();
    //    }
    //});




//if (arrayList.length == 1) {
        //    btn.addClass('p-3');
        //    btnTgl.addClass('p-3');
        //} else {
        //    btn.addClass('p-3');
        //    btnTgl.addClass('p-3');
        //}






//propItem.find('#more').attr('id', 'prop_' + id + 'dropdown_toggle');
        //propItem.find('[aria-labelledby="more"]').attr('aria-labelledby', 'prop_' + id + 'dropdown_toggle').addClass('propMoreDropdown');



//innerItem.find('#propMore').attr('id', subId);
            //innerItem.find('[aria-labelledby="propMore"]').attr('aria-labelledby', subId).addClass('propMoreDropdown');



//$("#mySidenav, #mySidenavRight").on('transitionend webkitTransitionEnd mozTransitionEnd oTransitionEnd', function () {
    //    if ($(this).width() == 0) {
    //        $(this).hide();
    //    } 
    //});