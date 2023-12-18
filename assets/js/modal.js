
$('.btn-open-modal').on('click', function () {
var strand = $(this).data('strand');
var title = getStrandTitle(strand);
$('#strandModalLabel').text(title);
showStrand(strand);
});

$('#strandModal').on('click', '[data-dismiss="modal"]', function () {
$('#strandModal').modal('hide');
});

function getStrandTitle(strand) {
if (strand === 'STEM') {
    return 'Science, Technology, Engineering, and Mathematics (STEM) Strand';
} else if (strand === 'HUMSS') {
    return 'Humanities and Social Sciences (HUMSS) Strand';
} else if (strand === 'ABM') {
    return 'Accountancy, Business, and Management (ABM) Strand';
} else {
    return 'Strand Details';
}
}


/*
document.addEventListener('click', function (event) {
const modal = document.getElementById('strandModal');
const closeButton = modal.querySelector('[data-dismiss="modal"]');

if (event.target === closeButton) {
    $(modal).modal('hide');
}
});*/

