$(document).ready(function () {
    $("#applicationForm").on("submit", function (event) {
        event.preventDefault();

        const formData = $(this).serialize();
        $.post("submit.php", formData, function (response) {
            $("#output").html(response).removeClass("hidden");
            $("#applicationForm")[0].reset();
        }).fail(function () {
            alert("Error submitting form. Please try again.");
        });
    });
});
