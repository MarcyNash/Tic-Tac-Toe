'use strict'

 const onGetGamesSuccess = (response) => {
   console.log('yaaaayyyyyyy we did it')
   console.log(response)
 }

 const onGetGamesFailure = (response) => {
   console.log('boooooo, we failed')
   console.log(response)
 }

 const onSearchGameSuccess = (response) => {
   console.log('yaaaayyyyyyy we did it')
   console.log(response)
 }

 const onSearchGameFailure = (response) => {
   console.log('boooooo, we failed')
   console.log(response)
 }

 const onDeleteGameSuccess = (response) => {
   console.log('yaaaayyyyyyy we did it')
   console.log(response)
 }

 const onDeleteGameFailure = (response) => {
   console.log('boooooo, we failed')
   console.log(response)
 }

 const onUpdateGameSuccess = (response) => {
   console.log('yaaaayyyyyyy we did it')
   console.log(response)
 }

 const onUpdateGameFailure = (response) => {
   console.log('boooooo, we failed')
   console.log(response)
 }

 const onCreateGameSuccess = (response) => {
   console.log('yaaaayyyyyyy we did it')
   console.log(response)
 }

 const onCreateGameFailure = (response) => {
   console.log('boooooo, we failed')
   console.log(response)
 }

 module.exports = {
   onGetGamesSuccess,
   onGetGamesFailure,
   onSearchGameSuccess,
   onSearchGameFailure,
   onDeleteGameSuccess,
   onDeleteGameFailure,
   onUpdateGameSuccess,
   onUpdateGameFailure,
   onCreateGameSuccess,
   onCreateGameFailure
 }
