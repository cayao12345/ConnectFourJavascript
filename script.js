document.addEventListener("DOMContentLoaded", () => {

    let allCircle = document.querySelectorAll("td")
    let currentPlayer;


    let clickCircle = (ev) => {

        let data = ev.currentTarget;
        let classlist = [...data.classList]

        if (!classlist.includes("potted")) {

            let currentIndex = ev.currentTarget.index

            allCircle.forEach((data, index) => {

                if (index === currentIndex) {
                    let currentClassList = [...data.classList]
                    if (!currentClassList.includes('potted')) {
                        if (allCircle[currentIndex + 7]) {
                            let nextPotted = [...allCircle[currentIndex + 7].classList]

                            if (nextPotted.includes("potted")) {
                                data.classList.add('potted')

                                let currentPlayer = document.querySelector('#currentPlayer')

                                if (parseInt(currentPlayer.innerHTML) === 1) {
                                    currentPlayer.innerHTML = '2'
                                    data.classList.add('player1')
                                    console.log('ayeee')
                                } else if (parseInt(currentPlayer.innerHTML) === 2) {
                                    currentPlayer.innerHTML = '1'
                                    data.classList.add('player2')
                                }
                                checkingWinner()

                            }

                        } else {
                            data.classList.add('potted')
                            let currentPlayer = document.querySelector('#currentPlayer')

                            if (parseInt(currentPlayer.innerHTML) === 1) {
                                currentPlayer.innerHTML = '2'
                                data.classList.add('player1')
                            } else if (parseInt(currentPlayer.innerHTML) === 2) {
                                currentPlayer.innerHTML = '1'
                                data.classList.add('player2')

                            }
                            checkingWinner()

                        }
                    }

                    currentIndex += 7
                }


            })
        }


    }


    allCircle.forEach((data, index) => {

        currentPlayer = 1

        data.addEventListener('click', clickCircle)
        data.index = index
    })





    function checkingWinner() {
        let allCircleLength = allCircle.length


        
        for (let i = 0; i < allCircleLength; i++) {

            //this will check for the vertical

            let firstVertical1 = [...allCircle[i].classList]
            let secondVertical1 = ( i + 7 ) < allCircleLength ? [... allCircle[i + 7].classList ] : []
            let thirdVertical1 = ( i + 7 + 7 ) < allCircleLength ? [... allCircle[i + 7 + 7].classList ] : []
            let fourthVertical1 = ( i + 7 + 7 + 7 ) < allCircleLength ? [... allCircle[i + 7 + 7 + 7].classList ] : []

            let firstVertical2 = [...allCircle[i].classList]
            let secondVertical2 = ( i - 7 ) > 0 ? [... allCircle[i - 7].classList ] : []
            let thirdVertical2 = ( i +  7 ) < allCircleLength ? [... allCircle[i + 7].classList ] : []
            let fourthVertical2 = ( i  + 7 + 7 ) < allCircleLength ? [... allCircle[i  + 7 + 7].classList ] : []
            
            let firstVertical3 = [...allCircle[i].classList]
            let secondVertical3 = ( (i - 7) - 7 ) > 0 ? [... allCircle[(i - 7 ) - 7].classList ] : []
            let thirdVertical3 = ( i -  7 ) > 0 ? [... allCircle[i - 7].classList ] : []
            let fourthVertical3 = ( i + 7 ) < allCircleLength ? [... allCircle[i + 7].classList ] : []
            


            if( firstVertical1.includes('player1') && 
            secondVertical1.includes('player1') && 
            thirdVertical1.includes('player1') && 
            fourthVertical1.includes('player1') || 
            firstVertical2.includes('player1') && 
            secondVertical2.includes('player1') && 
            thirdVertical2.includes('player1') && 
            fourthVertical2.includes('player1') ||
            firstVertical3.includes('player1') && 
            secondVertical3.includes('player1') && 
            thirdVertical3.includes('player1') && 
            fourthVertical3.includes('player1')
            ){
                allCircle.forEach((data) => {
                    data.removeEventListener('click', clickCircle)
                })
                alert(' Player 1 Wins Refresh the page ')
                break;
            }


            if( firstVertical1.includes('player2') && 
            secondVertical1.includes('player2') && 
            thirdVertical1.includes('player2') && 
            fourthVertical1.includes('player2') || 
            firstVertical2.includes('player2') && 
            secondVertical2.includes('player2') && 
            thirdVertical2.includes('player2') && 
            fourthVertical2.includes('player2') ||
            firstVertical3.includes('player2') && 
            secondVertical3.includes('player2') && 
            thirdVertical3.includes('player2') && 
            fourthVertical3.includes('player2')
            ){
                allCircle.forEach((data) => {
                    data.removeEventListener('click', clickCircle)
                })
                alert(' Player 2 Wins Refresh the page ')
                break;
            }




            let classList = allCircle[i].getAttribute('class');


            //this will check for horizontal
            if (classList) {
                let classListString = classList.toString().split(" ");
                if (!classListString.includes("last")) {

                    let firstHorizontal = [...allCircle[i].classList]
                    let secondHorizontal = [...allCircle[i + 1].classList]
                    let thirdHorizontal = [...allCircle[i + 2].classList]
                    let fourthHorizontal = [...allCircle[i + 3].classList]

                    if (firstHorizontal.includes('player1') && secondHorizontal.includes('player1') &&
                        thirdHorizontal.includes('player1') && fourthHorizontal.includes('player1')) {
                        allCircle.forEach((data) => {
                            data.removeEventListener('click', clickCircle)
                        })
                        alert(' Player 1 Wins Refresh the page ')
                    }

                    if (firstHorizontal.includes('player2') && secondHorizontal.includes('player2') &&
                        thirdHorizontal.includes('player2') && fourthHorizontal.includes('player2')) {
                        allCircle.forEach((data) => {
                            data.removeEventListener('click', clickCircle)
                        })
                        alert(' Player 2 Wins Refresh the page ')
                    }
                }

                //this is for the diagonal 
                if (i === 3 || i === 10 || i === 17 || i === 24 || i === 31 || i === 38) {

                    if (i > (allCircleLength - 1) / 2) {

                        let firstDiagonal1 = [...allCircle[i].classList]
                        let secondDiagonal1 = (i - 6) > 0 ? [...allCircle[i - 6].classList] : []
                        let thirdDiagonal1 = (i - 6) - 6 > 0 ? [...allCircle[(i - 6) - 6].classList] : []
                        let fourthDiagonal1 = (((i - 6) - 6) - 6) > 0 ? [...allCircle[((i - 6) - 6) - 6].classList] : []

                        let firstDiagonal2 = [...allCircle[i].classList]
                        let secondDiagonal2 = (i + 6) < allCircleLength ? [...allCircle[i + 6].classList] : []
                        let thirdDiagonal2 = i - 6 > 0 ? [...allCircle[i - 6].classList] : []
                        let fourthDiagonal2 = ((i - 6) - 6) > 0 ? [...allCircle[(i - 6) - 6].classList] : []

                        let firstDiagonal3 = [...allCircle[i].classList]
                        let secondDiagonal3 = (i - 6) > 0 ? [...allCircle[i - 6].classList] : []
                        let thirdDiagonal3 = (i + 6) < allCircleLength ? [...allCircle[i + 6].classList] : []
                        let fourthDiagonal3 = (i + 6 + 6) < allCircleLength ? [...allCircle[(i + 6) + 6].classList] : []

                        let firstDiagonal4 = [...allCircle[i].classList]
                        let secondDiagonal4 = (i - 8) > 0 ? [...allCircle[i - 8].classList] : []
                        let thirdDiagonal4 = ((i - 8) - 8) > 0 ? [...allCircle[(i - 8) - 8].classList] : []
                        let fourthDiagonal4 = (((i - 8) - 8) - 8) > 0 ? [...allCircle[((i - 8) - 8) - 8].classList] : []

                        let firstDiagonal5 = [...allCircle[i].classList]
                        let secondDiagonal5 = (i + 8) < allCircleLength ? [...allCircle[i + 8].classList] : []
                        let thirdDiagonal5 = (i - 8) > 0 ? [...allCircle[i - 8].classList] : []
                        let fourthDiagonal5 = ((i - 8) - 8) > 0 ? [...allCircle[(i - 8) - 8].classList] : []

                        let firstDiagonal6 = [...allCircle[i].classList]
                        let secondDiagonal6 = (i - 8) > 0 ? [...allCircle[i - 8].classList] : []
                        let thirdDiagonal6 = (i + 8) < allCircleLength ? [...allCircle[i + 8].classList] : []
                        let fourthDiagonal6 = (i + 8 + 8) < allCircleLength ? [...allCircle[(i + 8) + 8].classList] : []



                        if ((firstDiagonal1.includes('player1') &&
                                secondDiagonal1.includes('player1') &&
                                thirdDiagonal1.includes('player1') &&
                                fourthDiagonal1.includes('player1')
                            ) || (
                                firstDiagonal2.includes('player1') &&
                                secondDiagonal2.includes('player1') &&
                                thirdDiagonal2.includes('player1') &&
                                fourthDiagonal2.includes('player1')
                            ) || (
                                firstDiagonal3.includes('player1') &&
                                secondDiagonal3.includes('player1') &&
                                thirdDiagonal3.includes('player1') &&
                                fourthDiagonal3.includes('player1')


                            ) || (
                                firstDiagonal4.includes('player1') &&
                                secondDiagonal4.includes('player1') &&
                                thirdDiagonal4.includes('player1') &&
                                fourthDiagonal4.includes('player1')
                            ) ||
                            (
                                firstDiagonal5.includes('player1') &&
                                secondDiagonal5.includes('player1') &&
                                thirdDiagonal5.includes('player1') &&
                                fourthDiagonal5.includes('player1')
                            ) ||
                            firstDiagonal6.includes('player1') &&
                            secondDiagonal6.includes('player1') &&
                            thirdDiagonal6.includes('player1') &&
                            fourthDiagonal6.includes('player1')


                        ) {

                            allCircle.forEach((data) => {
                                data.removeEventListener('click', clickCircle)
                            })
                            alert(' Player 1 Wins Refresh the page ')

                        }



                        if ((firstDiagonal1.includes('player2') &&
                        secondDiagonal1.includes('player2') &&
                        thirdDiagonal1.includes('player2') &&
                        fourthDiagonal1.includes('player2')
                    ) || (
                        firstDiagonal2.includes('player2') &&
                        secondDiagonal2.includes('player2') &&
                        thirdDiagonal2.includes('player2') &&
                        fourthDiagonal2.includes('player2')
                    ) || (
                        firstDiagonal3.includes('player2') &&
                        secondDiagonal3.includes('player2') &&
                        thirdDiagonal3.includes('player2') &&
                        fourthDiagonal3.includes('player2')


                    ) || (
                        firstDiagonal4.includes('player2') &&
                        secondDiagonal4.includes('player2') &&
                        thirdDiagonal4.includes('player2') &&
                        fourthDiagonal4.includes('player2')
                    ) ||
                    (
                        firstDiagonal5.includes('player2') &&
                        secondDiagonal5.includes('player2') &&
                        thirdDiagonal5.includes('player2') &&
                        fourthDiagonal5.includes('player2')
                    ) ||
                    firstDiagonal6.includes('player2') &&
                    secondDiagonal6.includes('player2') &&
                    thirdDiagonal6.includes('player2') &&
                    fourthDiagonal6.includes('player2')


                ) {

                    allCircle.forEach((data) => {
                        data.removeEventListener('click', clickCircle)
                    })
                    alert(' Player 2 Wins Refresh the page ')

                }






                    } else {



                        let firstDiagonal1 = [...allCircle[i].classList]
                        let secondDiagonal1 = (i + 6) < allCircleLength ? [...allCircle[i + 6].classList] : []
                        let thirdDiagonal1 = (i + 6) + 6 < allCircleLength ? [...allCircle[(i + 6) + 6].classList] : []
                        let fourthDiagonal1 = (((i + 6) + 6) + 6) < allCircleLength ? [...allCircle[((i + 6) + 6) + 6].classList] : []

                        let firstDiagonal2 = [...allCircle[i].classList]
                        let secondDiagonal2 = (i - 6) > 0 ? [...allCircle[i - 6].classList] : []
                        let thirdDiagonal2 = i + 6 < allCircleLength ? [...allCircle[i + 6].classList] : []
                        let fourthDiagonal2 = ((i + 6) + 6) < allCircleLength ? [...allCircle[(i + 6) + 6].classList] : []

                        let firstDiagonal3 = [...allCircle[i].classList]
                        let secondDiagonal3 = (i + 6) < allCircleLength ? [...allCircle[i + 6].classList] : []
                        let thirdDiagonal3 = (i - 6) > 0 ? [...allCircle[i - 6].classList] : []
                        let fourthDiagonal3 = (i - 6 - 6) > 0 ? [...allCircle[(i - 6) - 6].classList] : []



                        let firstDiagonal4 = [...allCircle[i].classList]
                        let secondDiagonal4 = (i + 8) < allCircleLength ? [...allCircle[i + 8].classList] : []
                        let thirdDiagonal4 = ((i + 8) + 8) < allCircleLength ? [...allCircle[(i + 8) + 8].classList] : []
                        let fourthDiagonal4 = (((i + 8) + 8) + 8) < allCircleLength ? [...allCircle[((i + 8) + 8) + 8].classList] : []

                        let firstDiagonal5 = [...allCircle[i].classList]
                        let secondDiagonal5 = (i - 8) > 0 ? [...allCircle[i - 8].classList] : []
                        let thirdDiagonal5 = (i + 8) < allCircleLength ? [...allCircle[i + 8].classList] : []
                        let fourthDiagonal5 = ((i + 8) + 8) < allCircleLength ? [...allCircle[(i + 8) + 8].classList] : []

                        let firstDiagonal6 = [...allCircle[i].classList]
                        let secondDiagonal6 = (i + 8) < allCircleLength ? [...allCircle[i + 8].classList] : []
                        let thirdDiagonal6 = (i - 8) > 0 ? [...allCircle[i - 8].classList] : []
                        let fourthDiagonal6 = (i - 8 - 8) > 0 ? [...allCircle[(i - 8) - 8].classList] : []



                        if ((firstDiagonal1.includes('player1') &&
                                secondDiagonal1.includes('player1') &&
                                thirdDiagonal1.includes('player1') &&
                                fourthDiagonal1.includes('player1')
                            ) || (
                                firstDiagonal2.includes('player1') &&
                                secondDiagonal2.includes('player1') &&
                                thirdDiagonal2.includes('player1') &&
                                fourthDiagonal2.includes('player1')
                            ) || (
                                firstDiagonal3.includes('player1') &&
                                secondDiagonal3.includes('player1') &&
                                thirdDiagonal3.includes('player1') &&
                                fourthDiagonal3.includes('player1')


                            ) || (
                                firstDiagonal4.includes('player1') &&
                                secondDiagonal4.includes('player1') &&
                                thirdDiagonal4.includes('player1') &&
                                fourthDiagonal4.includes('player1')
                            ) ||
                            (
                                firstDiagonal5.includes('player1') &&
                                secondDiagonal5.includes('player1') &&
                                thirdDiagonal5.includes('player1') &&
                                fourthDiagonal5.includes('player1')
                            ) ||
                            firstDiagonal6.includes('player1') &&
                            secondDiagonal6.includes('player1') &&
                            thirdDiagonal6.includes('player1') &&
                            fourthDiagonal6.includes('player1')
                        ) {

                            allCircle.forEach((data) => {
                                data.removeEventListener('click', clickCircle)
                            })
                            alert(' Player 1 Wins Refresh the page ')
                        }


                        if ((firstDiagonal1.includes('player2') &&
                                secondDiagonal1.includes('player2') &&
                                thirdDiagonal1.includes('player2') &&
                                fourthDiagonal1.includes('player2')
                            ) || (
                                firstDiagonal2.includes('player2') &&
                                secondDiagonal2.includes('player2') &&
                                thirdDiagonal2.includes('player2') &&
                                fourthDiagonal2.includes('player2')
                            ) || (
                                firstDiagonal3.includes('player2') &&
                                secondDiagonal3.includes('player2') &&
                                thirdDiagonal3.includes('player2') &&
                                fourthDiagonal3.includes('player2')


                            ) || (
                                firstDiagonal4.includes('player2') &&
                                secondDiagonal4.includes('player2') &&
                                thirdDiagonal4.includes('player2') &&
                                fourthDiagonal4.includes('player2')
                            ) ||
                            (
                                firstDiagonal5.includes('player2') &&
                                secondDiagonal5.includes('player2') &&
                                thirdDiagonal5.includes('player2') &&
                                fourthDiagonal5.includes('player2')
                            ) ||
                            firstDiagonal6.includes('player2') &&
                            secondDiagonal6.includes('player2') &&
                            thirdDiagonal6.includes('player2') &&
                            fourthDiagonal6.includes('player2')
                        ) {

                            allCircle.forEach((data) => {
                                data.removeEventListener('click', clickCircle)
                            })
                            alert(' Player 2 Wins Refresh the page ')
                        }


                    }



                }

            }
        }   

    }


})