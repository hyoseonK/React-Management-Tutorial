import React from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';//컴포넌트의 외부를 감싸기 위한 컴포넌트
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({ 
  //너비가 100프로, 너비 여백을 3의 가중치만큼, x쪽으로 오토를 넣어줌. 
  //테이블이 무조건1080 픽셀 이상 테이블 출력하도록 (가로 스크롤바가 생길 수 있음)
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers=[{
  'id':1,
  'image':'https://placeimg.com/64/64/1',//이미지를 랜덤으로 보여주는 웹사이트(이미지 사이즈:64*64)
  'name':'홍길동',
  'birthday':'950826',
  'gender':'남자',
  'job':'대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',//이미지를 랜덤으로 보여주는 웹사이트(이미지 사이즈:64*64)
  'name':'김효선',
  'birthday':'950825',
  'gender':'여자',
  'job':'대학생'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',//이미지를 랜덤으로 보여주는 웹사이트(이미지 사이즈:64*64)
  'name':'이순신',
  'birthday':'950808',
  'gender':'여자',
  'job':'회사원'
}]


class App extends React.Component{
  render(){
    const { classes } = this.props; //위의 style이 적용될 수 있도록
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customers.map(c => {
            return (<Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}/>)
          })
        }
          </TableBody>
        </Table>
      
      </Paper>
    )
  }
}

export default withStyles(styles)(App); //style을 적용할 수 있도록