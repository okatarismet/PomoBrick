import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import Header from  './Header'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import IconButton from '@material-ui/core/IconButton';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timerType: 'Okul',
      timerName:'',
      name: "gecici",

      data: [{
        type: 'Okul',
        entries: [{
          name:"deneme",
          start: Date.now(),
          end: Date.now(),
          total: 5
        }]
      },{
        type: 'Silicon Valley',
        entries: [{
          name:"deneme",
          start: Date.now(),
          end: Date.now(),
          total: 5
        }]
      },{
        type: 'Projects',
        entries: [{
          name:"deneme",
          start: Date.now(),
          end: Date.now(),
          total: 5
        }]
      },{
        type: 'Is',
        entries: [{
          name:"deneme",
          start: Date.now(),
          end: Date.now(),
          total: 5
        }]
      }]
    }
  }
  timerTypeChanged = (e) => {
    this.setState({
      ...this.state,
      timerType: e.target.value
    })
    console.log('aa');
  }
  timerNameChanged = (e) => {
    this.setState({
      ...this.state,
      timerName: e.target.value
    })
    console.log('aba');
  }
  startTimer = (index) => {
    let yenisi = {
      name:this.state.name,
      start: Date.now(),
      end: 0,
      total: 0
    }
    let a = this.state
    a.data[index].entries.unshift(yenisi)
    this.setState({...a})
  }
  endTimer = () =>{

  }
  render(){
    let anaZamanlar = {
      marginLeft: '25%',
      marginRight: '25%',
      marginTop: '5%',
    }
    let allTypes = ['Okul','Silicon Valley',' Project','Work']
    let getFormatted = (date) => {
      date = new Date(date)
      return  (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    }
    let kalip = (data, index) => {
    return <div>
     
      <h1>{data.type}</h1>
  
      <form style={{margin:'15px'}} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <IconButton aria-label="start" onClick={() =>this.startTimer(index)}>
          <PlayCircleOutlineIcon />
        </IconButton>
      </form>
        <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableBody>
            {data.entries.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{getFormatted(row.start)}</TableCell>
                <TableCell align="right">{getFormatted(row.end)}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </TableContainer>
        {/* data.entries.map((elem,index)=>{
          <div>

          </div>
        }) */}
      </div>
    }
    return <div>
      <div style={anaZamanlar}>
       <Header types={allTypes} 
        timerType={this.state.timerType} 
        timerTypeChanged={this.timerTypeChanged}
        timerNameChanged={this.timerNameChanged}
       />

      {this.state.data.map((elem, index)=>kalip(elem, index))}
      </div>
    </div>
  }
}

export default App;
