import React from 'react';
import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import Paper from '@material-ui/core/Paper';//컴포넌트의 외부를 감싸기 위한 컴포넌트
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

/*

1) constructor()

2) componentWillMount()

3) render()

4) componentDidMount()

*/

/*
component의 props혹은 state가 변경되는 경우에는 => shouldComponentUpdate()함수 등이 사용
실질적으로 다시 render함수를 불러와서 자동갱신함
*/

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
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class App extends React.Component {
  //변경될 수 있는 변수를 처리하고자 할 때 state
  constructor(props){
    super(props);
    this.state = {
      customers: '',
      completed: 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    });
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }

  //모든 컴포넌트가 실제로 마운트가 완료 되었을 때 실행되는 부분
  //res라는 이름으로 변수가 바뀌고 customers라는 state 변수로 저장된다
  //api를 비동기적으로 호출함
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    //접속하고자하는 api의 주소
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 })
  }

  render() {
    const { classes } = this.props; //위의 style이 적용될 수 있도록
    return (
      <div>
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
              {this.state.customers ? this.state.customers.map(c => {
                return (<Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job} />)
              }) :
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                  </TableCell>
                </TableRow>
              }
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh}/>
      </div>
    );
  }
}

export default withStyles(styles)(App); //style을 적용할 수 있도록