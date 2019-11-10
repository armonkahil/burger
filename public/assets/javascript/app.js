
$(document).ready(function () {
  $('#add').on('click', function () {
    event.preventDefault()
    const burger = $('#burgerName').val().trim()
    if (burger === '' || burger === undefined) {
      alert('Try Again')
    } else {
      $.ajax('/api/burgers/' + burger, {
        type: 'POST'
      }).then(function () {
      // Reload the page to get the updated list
        location.reload()
      })
    }
  })

  $('.devour').on('click', function () {
    var eaten = this.id
    console.log(eaten)
    $.ajax('/api/burgers/' + eaten, {
      type: 'PUT'
    }).then(function () {
      console.log('devouring burger')
      location.reload()
    })
  })
})
