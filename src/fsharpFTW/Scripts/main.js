﻿var uri = 'api/cars';

$(function() {
    $.getJSON(uri)
        .done(function(data) {
            $.each(data, function(key, item) {
                $('<tr><td>' + item.id + '</td><td>' + item.make + '</td><td>' + item.model + '</td> <td> <button onClick="deleteCar(' + item.id + ')">Delete ' + item.make + ' ' + item.model + '</button></td> </tr>')
                    .appendTo($('#cars tbody'));
            });
        });
});

var deleteCar = function(id) {
    $.ajax({
        url: uri + '/' + id,
        type: 'DELETE'
    }).done(function(data) {
            location.reload();
        }
    );
};