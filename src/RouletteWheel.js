import React, {useState} from 'react'
import {Wheel} from 'react-custom-roulette'
import TableContainer from '@mui/material/TableContainer';
import {TableHead, TableRow, TableCell, TableBody, Tab, TextField, Box, Button} from "@mui/material";
import "./roulettewheel.css"

function RouletteWheel() {
    const data = [
        {option: '0', style: {backgroundColor: 'green', textColor: 'white'}},
        {option: '28', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '9', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '26', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '30', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '11', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '7', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '20', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '32', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '17', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '5', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '22', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '34', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '15', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '3', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '21', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '35', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '13', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '1', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '27', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '10', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '25', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '29', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '12', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '8', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '19', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '31', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '6', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '21', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '33', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '16', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '4', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '23', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '35', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '14', style: {backgroundColor: 'red', textColor: 'white'}},
        {option: '2', style: {backgroundColor: 'black', textColor: 'white'}},


    ]
    const [mustSpin, setMustSpin] = useState(false)
    const [budget, setBudget] = useState(0)
    const [wager, setWager] = useState(10)
    const [prizeNumber, setPrizeNumber] = useState(0)
    const [items, setItems] = useState([]);
    const [budgetList, setBudgetList] = useState([])
    const [wagerList, setWagerList] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [wins, setWins] = useState(0)
    const [loses, setLoses] = useState(0)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const handleSpinClick = () => {
        if(budget === 0) {
            setButtonDisabled(true)
        }
        const newPrizeNumber = Math.floor(Math.random() * data.length)
        setPrizeNumber(newPrizeNumber)
        setMustSpin(!mustSpin)
        const newItems = [...items, newPrizeNumber]
        setItems(newItems)
        setDisabled(true)

        if (prizeNumber >= 19) {
            setWins(wins + 1)
            setBudget(budget + 10)
            const newBudget = [...budgetList, budget]
            const newWager = [...wagerList, wager]
            setWagerList(newWager)

            setBudgetList(newBudget)
        } else {
            setLoses(loses + 1)
            setBudget(budget - 10)
            const newBudget = [...budgetList, budget]
            const newWager = [...wagerList, wager]

            setWagerList(newWager)
            setBudgetList(newBudget)
        }


    }
    //setWagerList(newWager)


    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-number" label="Bet" variant="standard" value={wager}
                           onChange={(event) => setWager(event.target.value)} disabled/>
                <TextField id="outlined-number" label="Budget" variant="standard" value={budget}
                           onChange={(event) => setBudget(event.target.value)} disabled={disabled}/>
            </Box>

            <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                backgroundColors={['#3e3e3e', '#df3428']}
                textColors={['#ffffff']}
            />
            <Button variant="contained" onClick={handleSpinClick} disabled={buttonDisabled}>SPIN</Button>
            <h1>Wins: {wins}</h1>
            <h1>Loses: {loses}</h1>
            <TableContainer>
                <TableHead>
                    <TableRow>
                        <TableCell>Number</TableCell>
                        <TableCell>Money</TableCell>
                        <TableCell>Bet insert</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <TableRow>
                        <TableCell>
                            <ul>{items.map(item => (<li style={{
                                color: "black"
                            }
                            }>{item}</li>))}</ul>
                        </TableCell>
                        <TableCell>
                            <ul>{budgetList.map(items => (<li style={{color: "black"}}>{items}</li>))}</ul>
                        </TableCell>
                        <TableCell>
                            <ul>{wagerList.map(items => (<li style={{color: "black"}}>{items}</li>))}</ul>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </TableContainer>
        </>
    )
}

export default RouletteWheel