const getCheckedCheckboxesFor = (checkboxName) => {
    var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [];
    Array.prototype.forEach.call(checkboxes, function(el) {
        values.push(el.value);
    });
    // send checked values new page php
    window.location.href = "cal.html?data=" + values;

}