let counter = 0, velocityBox

function waitForIt() {
    setTimeout(function() {
        counter++
        velocityBox = document.querySelector('button[title="Velocity"]')
        if(!velocityBox && counter < 200) waitForIt()
        else {
            setTimeout(function() {
                document.querySelector('button[title="Velocity"]').click();
                setTimeout(function() {
                    document.querySelector('.velocity_update').querySelector('input').value = 9001;
                    setTimeout(function() {
                        document.querySelector('.velocity_update').querySelector('button.apply').click()
                        console.log('done')
                    }, 10)
                }, 10)
            }, 10)
        }
    }, 200)
}

window.onload = function() {
    waitForIt()
}