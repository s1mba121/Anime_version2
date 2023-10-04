const btn_account = document.querySelector('.btn_account')
const btn_profile = document.querySelector('.btn_profile')
const btn_notification = document.querySelector('.btn_notification')
const btn_session = document.querySelector('.btn_session')
const first_block = document.querySelector('.first')
const second_block = document.querySelector('.second')

const bg = document.querySelector('.bg')
const logo = document.querySelector('.logo')
const change_avatar = document.querySelector('.change_avatar')
const change_bg = document.querySelector('.change_bg')
const del = document.querySelector('.delete')

const notification = document.querySelector('.notification_2')
// 1
btn_account.addEventListener('click', () => {
    // btn
    // remove
    btn_profile.classList.remove('clicked')
    btn_notification.classList.remove('clicked')
    btn_session.classList.remove('clicked')
    // add
    btn_account.classList.add('clicked')
    // pages
    // remove
    first_block.classList.remove('clicked_2')
    first_block.classList.remove('clicked_3')
    first_block.classList.remove('clicked_4')
    del.classList.remove('active')
    bg.classList.remove('active')
    logo.classList.remove('active')
    change_avatar.classList.remove('active')
    change_bg.classList.remove('active')
    // add
    first_block.classList.add('clicked_1')
    second_block.classList.add('clicked')

    notification.classList.add('active')
})
// 2
btn_profile.addEventListener('click', () => {
    // btn
    // remove
    btn_account.classList.remove('clicked')
    btn_notification.classList.remove('clicked')
    btn_session.classList.remove('clicked')
    // add
    btn_profile.classList.add('clicked')
    // pages
    // remove 
    second_block.classList.remove('clicked')
    first_block.classList.remove('clicked_1')
    first_block.classList.remove('clicked_3')
    first_block.classList.remove('clicked_4')
    // add
    first_block.classList.add('clicked_2')
    del.classList.add('active')
    bg.classList.add('active')
    logo.classList.add('active')
    change_avatar.classList.add('active')
    change_bg.classList.add('active')
    notification.classList.add('active')
})
// 3
btn_notification.addEventListener('click', () => {
    // btn
    // remove
    btn_account.classList.remove('clicked')
    btn_profile.classList.remove('clicked')
    btn_session.classList.remove('clicked')
    // add
    btn_notification.classList.add('clicked')
    // pages
    // remove
    second_block.classList.remove('clicked')
    first_block.classList.remove('clicked_1')
    first_block.classList.remove('clicked_2')
    first_block.classList.remove('clicked_4')
    notification.classList.remove('active')
    // add
    first_block.classList.add('clicked_3')
    del.classList.add('active')
    bg.classList.add('active')
    logo.classList.add('active')
    change_avatar.classList.add('active')
    change_bg.classList.add('active')


})
// 4
btn_session.addEventListener('click', () => {
    // btn
    // remove
    btn_account.classList.remove('clicked')
    btn_profile.classList.remove('clicked')
    btn_notification.classList.remove('clicked')
    // add
    btn_session.classList.add('clicked')
    // pages
    // remove
    second_block.classList.remove('clicked')
    first_block.classList.remove('clicked_1')
    first_block.classList.remove('clicked_2')
    first_block.classList.remove('clicked_3')
    // add
    first_block.classList.add('clicked_4')
    del.classList.add('active')
    bg.classList.add('active')
    logo.classList.add('active')
    change_avatar.classList.add('active')
    change_bg.classList.add('active')
    notification.classList.add('active')


})